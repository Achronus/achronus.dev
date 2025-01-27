---
title: '#3 Building the Tool'
slug: build
date: 16/01/2025
order: 4
---
Okay, we'll start with the config settings. Dependencies are just a set of lists that we can group into a mapping like so:

```python
# ...
AGENTS = [
    "pydantic-ai-slim[logfire]",
]

API = [
    "fastapi",
    "logfire",
]

#...

DEPENDENCY_MAP = {
    "basic": BASIC,
    "agents": CORE + AGENTS,
    "api": CORE + API,
    "dl": BASIC + DEEP_LEARNING,
    "api-agents": CORE + API_AGENTS,
    "api-dl": CORE + API + DEEP_LEARNING,
    "all": CORE + API_AGENTS + DEEP_LEARNING,
}
"""Assigns dependencies based on the `ProjectType` Enum."""
```

Nothing scary yet! Onto something a little harder - the toml options.

Each unique set of toml options has two main components: a name (e.g., `[toml.poetry.dependencies]`) and a set of key-value pairs (e.g., `line-length = 88`). Dictionaries are the easiest way to store key-value pairs so using them is the best option. This took a little bit of experimenting but I figured out a clean modular solution! 😄

For each set of custom toml options, we have our own class. They all inherit from a `TomlOptions` class that has a global variable `toml_name` and a method called `as_dict` that maps the name to the attribute dictionary. Like so:

```python
from typing import Any, Dict, Set, override

TomlSettingsType = Dict[str, Dict[str, Any]]


class TomlOptions:
    """A parent class for `pyproject.toml` settings."""

    toml_name = None

    def as_dict(self) -> TomlSettingsType:
        return {f"[{self.toml_name}]": self.__dict__}


class PyTorchSource(TomlOptions):
    """
    Stores the PyTorch Poetry source details for the `pyproject.toml` file.

    These are essential for adding CUDA capabilities to `torch` and `torchvision`.
    """

    toml_name = "tool.poetry.source"

    def __init__(self) -> None:
        self.name = "pytorch"
        self.url = "https://download.pytorch.org/whl/cu121"
        self.priority = "explicit"

    @override
    def as_dict(self) -> TomlSettingsType:
        return {f"[[{self.toml_name}]]": self.__dict__}
```

Looking at `PyTorchSource` as an example, we have each separate key-value pair as an attribute in the `init` method and can override the `as_dict` method if needed. Some need more TLC than others! Using `as_dict` we can convert the values into a string format and then append them to the end of the `pyproject.toml` file.

Next, let's port over the messaging system from Zentra and customize it to our needs. You may be wondering, why use this method? It's an extremely easy way to handle exceptions using `typer.Exit` with custom error codes. We can just map messages using dictionaries to each of the error codes and then raise a new exception within the logic of our CLI tool using `Enums`. As long as the logic is run within a `try-except` block and the `except` uses the `MessageHandler`, the rest is trivial.

I won't go into the details, but if you are interested in the code you can check out the [cli directory](https://github.com/Achronus/zenforge/tree/main/zenforge/cli) in the Zenforge GitHub repository. I almost forgot! The project name has changed from *forgepy* to *Zenforge* due to PyPI naming conflicts. Well, that and *Zenforge* sounds a lot better for the tool - making life easy with one install command 😎.

Let's go back to our `main.py` file and take a look at our entry point:

```python
# ...
@app.command()
def create(
    project_name: Annotated[str, typer.Argument(..., help="The name of the project.")],
    project_type: Annotated[
        ProjectType,
        typer.Argument(..., help="The type of project to create."),
    ] = "basic",
    ci_deps: Annotated[
        bool,
        typer.Option(
            ...,
            help="A flag to include CI dependencies, such as 'git-cliff'.",
            is_flag=True,
        ),
    ] = False,
) -> None:
    # docstring ...
    try:
        path = Path(Path.cwd(), project_name)
        if path.exists():
            raise typer.Exit(code=CommonErrorCodes.PROJECT_EXISTS)

        method = CreateCommand(
            project_name,
            project_type,
            path,
            ci_deps,
        )
        method.build()

    except typer.Exit as e:
        msg_handler.msg(e)
# ...
```

Look at how simple it is! We check the project name path, create it if it doesn't exist, otherwise we throw a `project exists` error. The `msg_handler.msg(e)` in the except does the rest!

Now to address the last piece of the puzzle - `CreateCommand` and `CreateTasks`. As I mentioned earlier, `CreateCommand` holds all the appropriate attributes that make the `create` command work and has a single method `build`. We'll focus on the `CreateTasks` as it's more comprehensive.

As we saw at the start of this project, we had to run at least 7 commands to create a single project. How do we compress that down into a single one? Let's consider what elements we need:

- A way to run the commands through Python - we can use the `subprocess` library for this.
- Updating the `pyproject.toml` file with additional settings - this means using our toml extras we created earlier.
- We also need to create our virtual environment and install dependencies.

We can break these up into their own separate private methods and return them as a list in the `get_tasks` method. The logic itself is relatively simple, it primarily consists of running a lot of `subprocess.check_call` instances, but there's a little bit more abstraction to help keep things modular and reusable.

For example, we have a single helper method that runs `python` commands and another one dedicated to running `poetry add` commands. These are used repeatedly throughout with slight variants. Here's the `_install_deps` method that installs the Poetry dependencies into different groups:

```python
# ...
    def _install_deps(self) -> None:
        """Installs the required dependencies into the virtual environment."""
        try:
            self.__poetry_add_cmd(self.deps.core)
            self.__poetry_add_cmd(self.deps.test, group="testing")
            self.__poetry_add_cmd(self.deps.dev, group="dev")

            if self.deps.ci is not None:
                self.__poetry_add_cmd(self.deps.ci, group="ci")

        except subprocess.CalledProcessError as e:
            console.print(f"Error installing dependencies: {e}")
            raise typer.Exit(code=CommonErrorCodes.UNKNOWN_ERROR)
# ...
```

Notice how we have a `self.deps` object that contains each list of dependencies based on the project requirements. This is actually a dataclass which is much easier to work with than using the likes of a dictionary. For 1), you can add methods to the class; and 2) it's a more structured approach.

Again, I won't go into the full details of the logic. You can view the code in the GitHub repositories [create folder](https://github.com/Achronus/zenforge/tree/main/zenforge/create) if interested.

There is one addition I added that I didn't mention in the planning - a couple of template files. It was easier to copy over a set of files into a new project instead of writing duplicate lines of code. That and the files can actually contain information without manually hard coding them!

These are: a `flake8 config` file, a `gitignore` file, and a blank `README` file. The gitignore being the most important there, I don't want to accidentally send `.env` files using version control and leak all of my API and secret keys. Now that would be bad!

That wraps up the build portion, now onto the CI! 🤖
