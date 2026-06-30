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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBRDCU7%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T235537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCN%2B4g2kH6T7jvjtYLSz%2BHJQgghNJKtt5Lt%2Fv7mGexeQwIgLFrR4OETUtMHGDyj29j5BaD%2FZtOzlXJ8BoN5RtPcNowqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfH8BUA3ow3rPAlUSrcA5Vyeolq0myQS4ux1IGZF3f9rQnReA9a7mCzOBUx9%2BbxewaZ0vrNVa%2FrROQH2TciAOhzJ9JuuLrLqJRaqNOASqsDNpclbi5l8Cr9vtjG9YpnT7e1VRvuWB%2FsniZFNrE0As2Pryl1udNJRldXImStOwvXOIcD2Kqjvz467ml9UxKFHJGfrpslrg0EBkrwtZT1dhjc8KdmQX6JELvxXC7kw4W1yRkqCfkMTknSHFDRIV9V7O7g4SzxJPff8SUAiDRkC%2BtALI3I22de12nK3gBg7%2Bd3Y%2F3xFIy2fXNgZcXyW9JwghZmFQx59nFDGC2%2FYCIiD44YXEweIQPDE9r6YtZs8IzkMGQZITObTE84EJm6N9PEJxpk5jhkMZ0OJiMS4ho7S0JmTPz6Xuy4aGYhSYLpNEERgzqJxQjlkNfe4dWVDpkVCiB5pl9fMFBnWKqK5S5lCFqc5Kcr26ClfW%2FuYJvCh2oPggr7HUkPc8Y%2BQhk79zTe1%2BnQExT0DprhHCpwToPpuh7L8wAu7sXyYp5V6d6JBUU79CJYntv6%2F41zMGYt3vZo9xTt996ZcAKuhwQIbqR%2BoxIiVaURPqU%2BwpU%2F7wz9uOctUkuIT%2BazzNA91dVs2GTVSBOodud6mZSa%2B9kzMMzmkNIGOqUBtg3p3yMlTKjo7rh5%2Fo29%2F9qoIMCOwkN2k39R6HAqTi45%2BP7NuTyhW%2FexerJSznV5OH490l9frgjuliaBPsBOTjiAX4uh7IhMmMyw36ZWRCogOlwcAH1pvnusrY2bTRiez7F1Mu%2BZjDyIT0o4VvrHbtz8UDE47TaKSyzlcKijKmm5%2F%2FtzEtmujNA7lx06H3B%2FI0It0y%2Bve%2BtMwJNHX32WxIyWU%2BFh&X-Amz-Signature=7b92de5e46b58e42bfcd3e559d0a4c9a3711e9225fc18cd33dd0c197f36b9c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

