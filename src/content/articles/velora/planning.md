---
title: '#3 Action Plan'
slug: velora-action-plan
date: 11/02/2025
order: 4
---
Phew! It took some time but I've finally got a working algorithm for _Liquid Time-Constants_ (LTC) combined with _Neural Circuit Policies_ (NCPs). Going forward, I'll refer to this as a _Liquid Neural Network_ (LNN).

You can view the Medium article for the [LNN here](https://medium.com/@achronus/ltcs-with-ncps-an-alternative-to-large-ai-models-6c71729bd3d6) if interested! 😊

Now that's out of the way, we can start planning Velora. There are a lot of good packages out there for traditional Reinforcement Learning (RL) algorithms, such as [RLlib](https://docs.ray.io/en/latest/rllib/index.html) and [Stable-Baselines3](https://stable-baselines3.readthedocs.io/en/master/), but they focus on the traditional NN approach. Our goal is different, instead of using traditional NNs we want to build LNNs and integrate it with RL - a new paradigm we'll call _Liquid RL._

For humanoid robots, [MetaMotivo](https://metamotivo.metademolab.com/) is a remarkable achievement and something we can work towards. Can Liquid RL achieve the same or better performance as this type of algorithm? Not a clue! It would certainly be interesting to find out though.

While I'm eager to jump straight into an experiment this big, we should really start small with one joint and work our way up. At least to confirm that the network is good enough.

## Core Libraries and Layout

With this in mind, the first thing we need to do is decide what framework/tools we will use. The LNN is a custom built model using [_PyTorch_](https://pytorch.org/) so we need an integration with that. As we are working with control tasks, [_MuJoCo_](https://mujoco.readthedocs.io/en/stable/overview.html) is a great option for the physics engine. It's relatively easy to customize and it integrates nicely into one of the simplest RL frameworks - [_Gymnasium_](https://gymnasium.farama.org/). It also has pre-built robot models like [Boston Dynamics Spot](https://mujoco.readthedocs.io/en/stable/models.html#quadrupeds). This will come in handy for locomotion tasks.

In summary, we'll create Velora around:

- PyTorch
- Gymnasium
- MuJoCo

It needs to be dynamic, easily customizable and open to a wide range of scenarios. In the alpha version (v0.0.1), I originally planned the framework to center around a `Controller` class. Everything would be passed into it for heavy abstraction (see Figure 1.1).

![Velora framework - Alpha diagram](/velora/velora_v1.png)

<p style="font-style: italic; text-align: center;">Figure 1.1. A high-level overview of the alpha version (v0.0.1) of the Velora framework.</p>

Revisiting it, I'd say this is the wrong approach. Heavy abstraction makes things very difficult for understanding how the framework operates. It has the advantage of less lines of code to write, but if you can't understand what those lines of code do, how the heck can you adapt it to customize your own experiments?

PyTorch has heavy abstractions but it also gives you the freedom to easily customize and understand the code you write. It's got a great balance between the two. That's what we'll aim to achieve - simple and customizable. That means less abstraction and more lines of code to write, but better customization.

Let's revisit the old framework and update it. Firstly, we'll remove the `Controller` class entirely. We'll also remove the `GymEnvHandler` and instead change it to a set of utility methods. A class is a bit overkill. Gymnasium environments are designed to be configured easily with a simple `make()` method, adding a separate class around the API is pretty redundant unless we want to use a combination of wrappers cleanly. However, we can just use a utility method for this. We'll mark these as `Gym Methods` in our new diagram.

Next, we have the `Config` class that takes in a YAML file and stores all the information as a [Pydantic](https://docs.pydantic.dev/latest/) settings model. It's a really easy way to tweak model hyperparameters without directly accessing your code, you just do it from a config file! We'll keep this and make it a standalone entity that can integrate into various parts of the framework. We'll also make it so that it's entirely optional. Making it mandatory can be pretty annoying.

The `Analytics` class stays. We need to understand how our models perform effectively and this is the way to do it. The semantics for implementing it into an agent elegantly though might be tricky, perhaps decorators or context managers can help. Originally, we would use the `Agent` class and have predefined methods used inside it from the `Analytics` class. The downside is heavy coupling. It might be the only option though.

We'll also make it optional inside the `Agent` class using a boolean flag. You might not always need analytics, especially during testing.

In terms of the analytics system, we'll use [Weights & Biases](https://wandb.ai/site/). [Tensorboard](https://www.tensorflow.org/tensorboard) is an alternative but I'm personally not a fan of it because of local storage. In my opinion, a cloud-based storage solution is better, especially when going from Sim2Real. Local storage isn't good enough.

`Storage` is an interesting one. It's typically coupled to specific algorithms (e.g., PPO relies on rollouts and DQN relies on a replay buffer). We'll keep the class separate but remove it from the diagram and use the traditional approach mentioned.

The last piece is the `Agent` class. We need a standardized way to `train`, `test` and `validate` agents, so an agent class will still be needed. The current approach looks good minus the `Storage`.

Okay, here's our new diagram:

![Velora framework - Current diagram](/velora/velora_v2.png)

<p style="font-style: italic; text-align: center;">Figure 1.2. Updated high-level overview of the Velora framework.</p>

The `Agent` class is our new `Controller` but far more manageable, customizable and understandable! Notice how we have a new item for `Graphs` too. This will be a set of utility methods - not a class - for visualising the data.

All the utilities are standalone entities that are strictly optionally. `Analytics` is similar but with a boolean flag parameter in the `Agent` class. The `Agent` class depends on PyTorch properties like the loss function, optimizer, and model and has two primary methods: train and predict.

Next, we'll discuss RL algorithms.

## RL Algorithms

For LNNs to work with RL, we need to use continuous algorithms. LNNs do not work with discrete settings. This is both a gift and a curse - removing simplicity but improving expressivity.

RL is pretty general and the algorithms that have been developed can theoretically be swapped out for other architectures without any major issues. We'll try this with the following models:

- PPO
- SAC
- TD3

From there, we can expand on the approaches using other RL techniques such as:

- Curiosity
- HER
- Forward Imagination
- Forward-Backward

Here's the structure:

![Liquid Model structure](/velora/liquid_models.png)

_Figure 2.1. Liquid model high-level component overview._

Every model will have a storage option and the same three methods. Extras will be used to create separate models, so we should have a minimum of 12 Liquid models. We can also combine some of the techniques so we could have more!

We'll use Stable-Baseline implementations as baselines to verify and compare model performances. If a swap out doesn't work, we'll have to get more creative with our own Actor-Critic approach. Overall, it's going to be an interesting learning journey!

Time to start building! See you in the next one! 👋
