---
title: "#4 Dev Updates: Design Changes"
slug: velora-design-changes
date: 28/02/2025
order: 7
---
It's been a couple of weeks since my last update and there have been big changes to Velora’s design.

My initial plans went out of the window as soon as I started building the framework. The more code I wrote, the more I wanted to refine the developer experience and make it easy to work with.

Honestly, I've never had so much fun programming in my life! Working on a project I'm truly passionate about and figuring out creative ways to add flexibility and usability - it's awesome! 😊 Even documentation writing has been a blast!

So, what changes have been made? Well for starters, we've removed the optional config YAML files. So far, it hasn't played into any part of the development and only gives an extra layer of complexity that isn't needed. That could change in the future but as it stands, YAML configs are no more.

Next, we've changed how the analytics system works. The one downside to RL models is the copious amounts of hyperparameters and I hate lots of function parameters. Unfortunately, it can't be helped with a lot of them but we can try and reduce it where possible.

Analytics is a prime example for this. Originally, I planned to have a boolean flag that would enable or disable them. Now, we always return the metrics from training but can also pass in a callback to the training method for cloud-based tracking. Developers are no longer forced to use a cloud-based provider if they don't want to! 😎
This new system led to other forms of customization, such as early stopping and model checkpoint saving as separate callbacks too. It removes bloat from the main training method and adds an extra level of customization!

However, there is a downside to this approach. We use callbacks 3 separate times in the train method, once in the step loop, once in the episode loop, and once at the end of training. Again, more code bloat in the training method (repetitive too!). Solution? Context managers! We turn the for loops into separate context managers for streamlined logic behind the scenes. On enter and exit, we can abstract specific logic away that is used for all algorithms during their training process.

It's these little things that have evolved over the development cycle and have been integral for improving the framework!

Additionally, we've redesigned the agent implementations to inherit from a base class. Their logic will differ but they have to have set methods to fulfil the agent requirement.
Here's the new core design layout:

![New Design](/velora/velora_v3.jpeg)

<p style="font-style: italic; text-align: center;">Figure 1.1. Depiction of agent high-level component overview (top) and agent training process (bottom)</p>

Every agent has a set of parameters and a PyTorch optimizer type passed into it. These help create the agent's internal state, which then initializes the agent that can be interacted with through four core methods: save, train, predict, and load.

For the training process, we pass in a Gymnasium environment, a set of training parameters, and an optional set of callbacks that enhance the training process. Once training is complete, we get a set of metrics detailing the full process that can be used to visualise it.

We still have utility methods that can be used outside of the Agent instance but they don’t directly impact it.

Furthermore, we've also added documentation for customization. We believe that every part of Velora should be usable by developers, even outside our own pre-built agents. What if you want to make your own ones using parts of our codebase? Well, you can!

We cannot build better AI systems without exploring new ideas outside of research papers. So, we've deliberately designed Velora to empower developers to do just that! It is made up of different code blocks (classes and methods) and other developers should be able to use them too without needing to dig through the code!
