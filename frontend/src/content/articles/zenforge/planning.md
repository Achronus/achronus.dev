---
title: '#2 Planning the CLI'
slug: planning
date: 15/01/2025
order: 3
---
First things first, we need to set up the `create` command. Once that's done, I can figure out how I want to structure the tool. We'll do this in a `main.py` file within the project directory. This will then be our entry point for the application. It's really simple, configure the application and wrap it with a `command` decorator like so:

```python
import typer

app = typer.Typer(rich_markup_mode="rich", pretty_exceptions_enable=True)


@app.command()
def create(
    project_name: Annotated[str, typer.Argument(..., help="The name of the project.")],
) -> None:
    pass

if __name__ == "__main__":
    app()
```

We'll also add a `project_name` argument initially as we know that's a requirement.

What's cool about [Typer](https://typer.tiangolo.com/) is that we can also configure a quick script to run the tool using our own custom commands such as `forgepy create`, we'll do that too in the `pyproject.toml` file!

```toml
# ...
[tool.poetry.scripts]
forgepy = "forgepy.main:app"
# ...
```

Perfect! Now onto the hard part - deciding how to structure the tool. I'm a big fan of modular, reusable code so we'll use OOP.

Firstly though, we need to figure out what types of projects to make. I typically juggle between Deep Learning ([PyTorch](https://pytorch.org/)), API ([FastAPI](https://fastapi.tiangolo.com/)), and more recently AI Agents ([PydanticAI](https://ai.pydantic.dev/)), plus different combinations of them, so we're looking at ~6 project variants. We'll add a basic setup too that only has [Pydantic](https://docs.pydantic.dev/latest/) libraries - its data validation is too powerful not to!

Here's the list we'll go with:

- **Basic** - Pydantic Settings + Pydantic
- **Agents** - PydanticAI + Logfire
- **API** - FastAPI + Logfire
- **Deep Learning** - PyTorch + Torchvision + PyYaml (for config settings) + Basic
- **API Agents** - API + Agents
- **API Deep Learning** - API + Deep Learning
- **All** - API + Deep Learning + Basic

We can use an `Enum` for these in our command and assign them to separate dependency constant lists in our application - quick and dirty.

We should also include `test` dependencies in a separate group in `pyproject.toml`: `pytest`, `pytest-cov`, `black`, `flake8`, `isort`, and `mypy`.

Why these ones specifically? They all have different use cases that have a lot of value. Hmm... maybe I'll make a tool that combines them all into one in the future too, now that's an idea! 🤔

We use `pytest` for unit testing, `pytest-cov` for unit test code coverage, `black` for code formatting, `flake8` for code style, `isort` for import sorting, and `mypy` for checking static types. A lot of them are industry standard and really help tidy up your code.

We also cannot forget about `ci` dependencies! `git-cliff` is only the CI related package I use, but I don't use it for all projects. Not everything needs to be open-sourced or published to PyPI! We'll add these dependencies as `optional`.

That's the dependencies sorted! Next, we need to consider configuration settings for some of these packages. PyTorch has a cuda extension and some of the test dependencies have ideal configuration settings (for my preferences).

These settings won't be tweaked often, if at all, so having them hard coded is disgusting but good enough for our use case. How, though? Having the latest package versions is a must with every new project, so we'll have to extend newly created `pyproject.toml` files.

From earlier projects, I know that you can turn dictionaries into `toml` settings pretty easily, we'll have to look into a modular way of doing that. Perhaps a base class with separate instances of the settings? We'll have to toy with that.

Okay, there are three more things we need:

1. Ability to return messages and track bugs/errors - we can recycle the `MessageHandler` system from the Zentra project.
2. Progress tracker for creating the project - this is really easy to do with `rich`.
3. Adding the `create` command logic.

For our last point, we'll use a modular system. It will focus around one `CreateCommand` class that takes all the required information and has a single method called `build`. That will be called when running the `create` command. We'll store all the individual steps to build the project in a separate `CreateTask` class. This will have a `get_tasks` method that returns a list of all the tasks that can then be iterated over in the `build` method.

It's quick, easy and a clean approach to handling the problem! Here's the file structure we'll run with:

```bash
.
├─ forgepy
│   ├─ cli
│   │   ├─ __init__.py
│   │   ├─ codes.py   # Enum message codes for the MessageHandler
│   │   ├─ display.py  # CMD display settings - tracker, panels, etc.
│   │   └─ message.py  # MessageHandler and hard coded messages
│   ├─ config
│   │   ├─ __init__.py
│   │   ├─ deps.py  # Dependency constants
│   │   └─ toml.py  # Toml option settings logic from 'dict -> toml'
│   ├─ create
│   │   ├─ __init__.py
│   │   └─ method.py  # 'CreateCommand' and 'CreateTasks' logic
│   ├─ __init__.py
│   └─ main.py  # main project entry point, 'app + command' logic
├─ .gitignore
├─ LICENSE
├─ README.md
├─ cliff.toml
├─ poetry.lock
└─ pyproject.toml
```

That looks like everything, time to start building! 🚀
