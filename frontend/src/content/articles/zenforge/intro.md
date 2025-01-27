---
title: Building Zenforge
slug: intro
date: 15/01/2025
order: 1
---
Over the past year I’ve found myself creating the same style Python projects over and over again.

Create a new folder, create a Python virtual environment, install Poetry, create the package files and install the right dependencies… It's exhausting! 🥱
This sparked a new idea -

> *"Why don't I just automate the process?"*

I’d already built a few CLI tools such as [Zentra](https://github.com/Achronus/Zentra) (I know, it needs an update!), so I was already familiar with some of the foundational concepts. Mulling it over, the whole creation process was extremely painful so I had to automate the process, and fast.

I didn't want to spend the next month working on it so it had to be quick and dirty, something I could build in a weekend. That would mean restrictions:

- No unit tests
- No fancy commands nor extremely fancy logic
- No data validation (R.I.P. [Pydantic](https://docs.pydantic.dev/latest/) 😭)
- No logging
- Limited documentation - install and running only

I'd still need a package manager, so [Poetry](https://python-poetry.org/) isn't going anywhere (`requirements.txt` just doesn't cut it for me!), version control (💕 GitHub), and some CI for publishing to PyPI. Recycling Zentra's GitHub workflows is good enough.
Now for the tool itself, one command would do the trick! A simple `create` command works.

Okay, let’s do this! 🚀
