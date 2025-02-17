---
title: Sanity Restored
slug: velora-sanity-restored
date: 16/02/2025
order: 6
---
I FIXED IT! 🎉 Oh, what a feeling! 😍

I followed my game plan from the last entry and found out that the problem was the hidden states, it was the cell implementation altogether. It was only returning the hidden state and not a prediction. So, how did I fix it?

I used a projection layer on the inputs to go from its current size to the layer output size and then merged the hidden state like a residual connection. Here's the lines of code:

```python
# Projection layer
self.proj = nn.Linear(self.head_size, n_hidden, device=device)

#...

new_hidden = self._new_hidden(x, g_out, h_out)  # Old return
y_pred = self._sparse_head(x, self.proj) + new_hidden  # New line
return y_pred, new_hidden
```

I now have a working Liquid DDPG and it feels amazing! I've only experimented with a simple task (Inverted Pendulum) but this was the first step towards making Liquid RL a reality. Sparsely connected, small-scale, powerful, explainable RL algorithms are now a possibility and it's right at my fingertips!

Time to try this with some other environments, sort out proper result plotting and gathering. I also want to write an article about DDPG to make sure I fully understand it. The important thing here is to build the intuition that goes from DDPG to the next algorithm and so on. I will need to do something similar for DQN (without the implementation) just to highlight its important introductions such as target networks and replay buffers.

The journey continues! 🚀
