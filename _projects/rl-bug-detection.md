---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MBR6NT%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T111501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewIbKehJPt%2FlQcyhsWb7iC477BHrtmOqnR%2FzMtJij%2BgIhAPMS8aAL2KckBmxvB9CJ37Vby%2BHNKWla18azqOEK7usUKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4U%2Bdo9WgD%2BiO1d18q3AP%2Bu%2BBYPmL1WXAXBnbfhx%2Bh6NXOW6e7%2B3And4dmrMkJwEmHTFPR6ajR%2BoZc%2FIizc%2B8ic4FCjsHK8ZMVvWMK6orIbGXgIawK9rSwGI5%2FVaoX%2F3hD%2BQl1BnuKh44NFxELzyyWOwoOZMVcn3%2BRqDxyrtgUJr6W6%2F06MzYomRC6UvrSNVkKstmN5BK4FFrTH5vExwIi4XRMr%2F%2Bco%2FUyW%2F14ZpU7lcQFHluVqlIu2ZTEZMIzQtNlI1fgltq7jAyT1zbanTyH%2FvnxMM9q6O61c4354xH3iQRN8JSZldP56E%2Fye%2FvUx%2BWlxjzZzMlLJZh3oOuXpe7twnZhkRzeYC68mfJGSmNbZO8Vv1qgfo39fVd1mJnaUSkiq3OvXPzhB074VXS%2Bu3lXQOhnlOVreWp4EBHa1JynRO%2B6DKtZnb8gEBC5BynmO0KAjX7ibYW2nJqe%2B2K2OVKI9x79gBLH4JZtag5eAYCh0KmO7jvCi79Sj28BbTL27NjL9KOYgOwuItvXQ0pstyFmLwf6NukuvvmqFXC93EI3G7sTglYrF2h%2FU6prX4e17yBagddYa1XKSG1Jbm5CphuguzS9GyrFDLnTv3hJOb4girZDm1H96hRZX1Ph3EDAq9q30G7uvto4zlbu%2FzCVgrLTBjqkARHtBwVj%2FzbNMlpxZP%2BSxIz7XeD2GcRhEwObTY7Km377ONUC8Dodn5%2FQkW%2Fy%2F7v8wmeDzIsy%2BalZhmrPT1srG45g4UIi18rcxqsvBUexrtGlWrxFOr%2F%2BnD%2FaGLuHH4esYzoJavwuaIyu9Pe%2BHB6XkGd0CcCTU8dwZu%2FO6MGaHsBoyPB6YGCuzM%2FcnrSsyjuXr%2B8QEi4J05Bo%2Fzr%2FjpOMZAdEnBAk&X-Amz-Signature=da50d26d06970ab11bae2fe2cc602f794bafbb7baf375ead4e1e6a396292d9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

