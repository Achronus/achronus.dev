---
title: '#4 Publishing the Tool'
slug: publish
date: 16/01/2025
order: 5
---
This was actually more challenging than I thought, mainly because I've tried to automate the changelog creation but failed miserably 😅.

Game plan for this is to extract information from a `CHANGELOG.md` file created by `git-cliff` using one its commands and placing the relevant section (version difference) into the version release notes. Fortunately, I've already done this in the Zentra project so I can just copy the files over and update them. Here's how it works:

On tag push, our GitHub action does some magic. First, it creates its own changelog file using `git-cliff`. Next, it gets the current tag and extracts the changelog content for that current tag using a Python script stored in the `ci` directory called `changelog.py`.

The script opens the created changelog, extracts the information between the last tag and the current one and dumps it into a `RELEASE_NOTES.md` file. At the bottom of the file, it also adds a link to the full changelog and the commit history for that version (so the repository commits between version A and B). It's actually really neat and quite incredible how a simple script can do so much!

The GitHub action then uses those notes in the newly pushed tag. If that whole process succeeds, it moves onto the next step in the chain - publishing the package to PyPI. Using the `poetry build` command with only the `main` dependencies group, we build the package wheel and publish it to PyPI seamlessly.

And that's it! Assuming there are no build errors, project complete! I now only have to write a single `zenforge create` command whenever I want to start a new project. It's bloody glorious 😍!

Overall, this project took around ~16 hours to make. I did run into a few problems with installing the dependencies through `subprocess` and trying to automate the changelog process (you can see this in the commit history 😅).

`subprocess` wasn't actually the problem, it ended up being the command path for the `python` and `poetry` commands. The dependencies needed to be installed in the newly created projects virtual environment which proved to be a bit finicky to get into.

As a future note to myself (if I ever encounter this problem again), use this code:

```python
import sys
from pathlib import Path

def exc_path(env_name: str, package_name: str) -> Path:
    """Creates an executable path for virtual environment scripts."""
    if sys.platform == "win32":
        return Path(f"{env_name}/Scripts/{package_name}.exe")
    
    return Path(f"{env_name}/bin/{package_name}")
```

Thanks for reading! See you guys in the next one! 🚀
