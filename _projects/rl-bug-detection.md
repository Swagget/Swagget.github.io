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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VHX2QV%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T125640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnlaHgp4P9bt7ktpd2BFTOBZrt9PBmzqTE%2F6S74PlefAiEA7WOKvOnTSE8NkRERdlH%2BTBFFOvhc0sDYnzql9HPMktwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMqnPgJN4aD%2FP54idSrcAxAoQowQzcKenLoFfwz8IJjR%2FEwj4jGAyJwLbCqcCccTTDPCs1BOZkDLleftb8a1DaDlnLbYyniSVWpcQBqKtKxb8GnJnd%2BdT2tsMOFd3OAagrSU12LwLnaRb0%2BUzAi07H8kDW9yi4yBUu4i%2Bwn233mxh%2FxEJs1ppNBVMdGnj49zTsC2J3btcdBr66UhHQ5%2Bu8v4M5x7E48l8dVIl3RCLDaQqG58wwhDpmkP4DXUXYQ%2FFs5rZa0OjUMIapJi0cCGh7U%2FO9PvlJYRf4%2FN0QpJC9R8357gfh6hVS%2BIZvpeiT3JN9Vvo7ZuWOL1yN9OccBmPsYrcqWE9s2pA9hokusI9%2FLI3TW5oj5wtas61o4TrYjeHAuO6qYRNEX6U56MEa72IZCwvZf27v3zRW40MuPt6DMiK8BqBJYRAzLUbalda7sLcwA24wjOBTHfKw5PbDBDl9ZWrmTWI7URecEEXL0oQKlqB8IK0yLMsgYLTf6O277UgMq3W2rITS3VVL4qXqcLyQE45qgMP7XDp%2FyEA9ElYIDB7rnqAv7pqSDKapDYUbAmZV02xcMhSBYN3VT0tQIvhHqahW676Clh2ceIAuORWsobQbSHpvaabnEDZNG4b0GkpTZoKOZTHXcU%2F1F7MPCP6NIGOqUBoRdMSfCzDjzaxpyaVh0chPasMTK3%2Bh%2BHUlgVtdRn%2FgOYFw7BBbeR2DYnUQ4PxDrEwsYjGX%2BBemOFFj1NC%2FANzvcJ5mSKTfP0jAHO1aDqcHFAzRuiY339MC56%2FG2DJcLYRn0hPSUW0R%2F0Att66u%2BIwllrSYgUHBZe7Bnuzdxv%2FcjIjRpvWLfjd8E6lK8jznNjWZM8UBRDZykZOPug98cGo1TKh6gU&X-Amz-Signature=ddcf728f282cbc8e5c5ff25c54532e9e64a083e699f42106e62ebacd3b70daf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

