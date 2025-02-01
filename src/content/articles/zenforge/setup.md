---
title: '#1 Setting Up the Project'
slug: setting-up-the-project
date: 15/01/2025
order: 2
---
Remember that long winded process I mentioned earlier? Yeah… I had to do it again 🤮. To think, this will be the last time I do that process - can't wait!

Like with all good projects, we need a memorable name. *Forgepy* is pretty good - simple, elegant, hits the relevance of the tool - we'll roll with that for now.

Here's the commands run:

```bash
# Create directory and enter
mkdir forgepy
cd forgepy

# Install the venv and activate it
python -m venv venv
.\venv\Scripts\activate

# Install poetry and update pip
pip install poetry
python -m pip install --upgrade pip

# Create poetry
poetry new forgepy 
# ... Move some files around with GUI
```

At least 7 commands just to build a new project - I haven't even added the dependencies yet! Absolute nightmare!

Speaking of dependencies, what are we going to use? Well, we need a good changelog tool. `git-cliff` has been a game changer for me. It's immediately compatible with the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) messaging format. I use this style heavily for my version control messages, so that's a must.
As we are keeping things simple, let's start with `typer` as the sole dependency for now. Okay, so far so good! Here's the project structure:

```bash
.
├─ forgepy
│   └─ __init__.py
├─ .gitignore
├─ LICENSE
├─ README.md
├─ cliff.toml
├─ poetry.lock
└─ pyproject.toml
```

Now let's start planning it out! 📜
