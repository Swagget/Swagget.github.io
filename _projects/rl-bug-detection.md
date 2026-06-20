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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RXBIMDC%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T210100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIEWC7A57hNIsc94Qva15ISABYizM3ZJhjtFWnwDP9iNZAiBmsG5BnmYesPmb23WLfDk12748imG6A%2FmjI%2BEzVAAb1iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1cU5Eg0bMPtxqvNKtwD71fz1pJOjgghYabKEn1fpvFxYTZsa%2BoHwwe%2FI85T7dXIhSUvjbt3XHdM%2F67g2w20R0b3ZV3GsdnI2iKPrlYXi%2FoaSiyKij0d7uzu9xc9QmZkTI1Q2L2D%2BLVCyByvFuraPJ7dcsdtXUynP%2Bwe%2B3wfUvoQAWfuOdAN3oar5Ye72LB0b4Mc%2FXjWhjJigOd8QMFjG8S%2FMZRFKN3WtGxcGdQl%2Bly56YRr8Ef%2BPCBEI6%2Bb6t%2F8KKoic%2Fgry0s%2FXn3Cu0Eo2uVhkYonkxZtwv07%2FCWl1188DMlLuKTQMdEoOpuRQ%2FCh%2FYjVzxCDic6%2FwAYSjBX%2FjCdEKUOCpyl4mHEXrYVPNtnK25LKM8NTdgPGYtIL855oLatxuKEjQwrIMETAyHLFLD0FcLe6Q4FHA4SF5ZwTpscdmqYUDjxyfcmOwn2LqUH6lL1RvM6fgj889Ng5nkoN6doigMnBzxxWxpKoI45o4vWC8oq4pFRokIGaVO%2BIFOjmjZFyaiuNMc6MYBTxVYgpHOEbNq%2BgnptgjaamkmTkLt3J2lFZyLn%2FDD7JdSuwcQ4Uvjcg2JlkYtxCSTKy2luhkuZtVEeIl7BXbydD3XEoBFqAozPwmyMNi8mGJVzBRRqgbwXzq14ojtKPzfcwmufb0QY6pgEuSQR4w0CboeQUc4bUXZPL6qEL7uV%2Bx7H4qm7w%2BeRlEhOOGXyVSIEQ399GddODwUK%2BRmeZIvu1MtCRJ1KIrzuPeWFKGvqcaZRhTtOXWpadCg5K3wTzUNNJwQi8REogO2hYPUP17Oo1i6pY5x0N3A%2BV8A8TN1AY2txPv61Te%2BTWQpX2RcXrmvBxnbJW4AB1ejF6dw7CImu%2FAa16Bndy%2BDjUXCx%2F4YA%2B&X-Amz-Signature=8576eab6106a791987be070aa26e4aa365ab927fb26b2fa80c878561cbe46057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

