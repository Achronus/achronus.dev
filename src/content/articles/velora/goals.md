---
title: '#1 Goals and Objectives'
slug: goals-and-objs
date: 30/01/2025
order: 2
---
Given our main questions:

1. Can we build small-scale powerful models?
2. Can we make models more explainable?

Let's firstly consider what we mean by explainable. We'll break it down into five pillars:

- **Causality** - how changes in parameters and elements (e.g., NN building blocks) of the agent alter the decision making process.
- **Fairness** - the decisions made by the agent are not biased and are independent of a selected group of sensitive features (e.g., gender, ethnicity, image backgrounds).
- **Robustness and Reliability** - the agent is effective under input or parameter perturbations (e.g., noise).
- **Usability** - the model is simple to use for accomplishing a task.
- **Trust** - the user has high confidence when applying the model in production.

That's a good start. Now how the heck do we reduce the size of models while maintaining performance? That's the million-dollar question. Current architectures centre around layers of perceptrons, which are densely connected nodes. The idea is that as you stack them together, they become more expressive and you can then build better patterns that fit the data it's trained on.

What you'll find is that they lack a sense of memory, this has changed somewhat with the attention mechanism in LLMs, but still requires scale to be adequate. What we really need is a new architecture, something with less parameters, perhaps even sparse connections.

Here's the target: a general model with ~100 neurons for locomotion control (perhaps even smaller). Maybe we could scale it up to incorporate smaller models into a larger system like a Mixture of Expert (MoE) style architecture 🤔.

Focusing on joint based locomotion, we could model a small network for each joint individually. We can say that every joint degree of freedom (dof) is made up of a continuous value between [-1, 1] and we can use those as individual neurons. This will then come in two flavours:

- 1 neuron per dof (models both positive and negative changes, more efficient)
- 2 neuron per dof (models positive and negative changes separately, less efficient more expressive and explainable)

It's an idea but needs more refinement. What I really need to do is dig deeper into previous research. One architecture that sounds like it could do the job is *Liquid Neural Networks* (LNNs; Hasani et al., 2020). We'll start there!

## References

Hasani, R., Lechner, M., Amini, A., Rus, D. and Radu Grosu (2020). Liquid Time-constant Networks. [online] arXiv.org. Available at: [https://arxiv.org/abs/2006.04439](https://arxiv.org/abs/2006.04439).
