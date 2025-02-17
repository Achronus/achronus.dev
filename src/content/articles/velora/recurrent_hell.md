---
title: Recurrent Hell
slug: velora-recurrent-hell
date: 15/02/2025
order: 5
---
This is frustrating. Before starting on the algorithms I've discussed, I decided to go simpler and have been experimenting with DDPG. My LNN refuses to learn anything. Using fully-connected Networks with the same implementation works like a dream, but my LNN doesn't.

I've boiled it down to a problem with the hidden states and the RNN nature of the algorithm. I've even tried official LNN implementations from a separate library `ncps` and that doesn't help either - exact same problem.

It's very frustrating but also quite interesting. RNNs should be able to plug and play with the RL framework but perhaps they don't. Looking at an example of an LNN from the official library, they don't even use Gymnasium. They use a Supervised Learning approach - pulling samples out of the environment that are labelled as training or validation. It makes me wonder, are RNNs even feasible with the Gymnasium real-time approach?

Assuming they are not, how do we get the same benefits without a hidden state? That's what I'm exploring next.

To do that, we'll work from the ground up and break the implementation into smaller validation steps like so:

1. Simple sparse linear network - a traditional linear layer but with sparse connections for each layer (already done, works great but slow to learn).
2. NCP cell - taking the LTC cell using sparse linear layers without the hidden state.
3. Expanding the linear neurons with more expressivity - using the hidden state expressivity somehow but using linear neurons.

#3 is going to be the most interesting and require some research. Things we need to consider are:

- For each type of NCP neuron, do they have their own form of mathematical expressions or are they just normal neurons?
- How can we use the LTC expressivity, without a hidden state?
