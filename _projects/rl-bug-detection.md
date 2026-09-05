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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7VWQFI%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T222431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIF866VKggqXy5ErwiCHMCLFShMomsfAMeyuNJwhTkallAiAUm3C3KZpUfLQJmPBUCcECUG5vHzComahtzmwqkT7kfSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMFPnxw1vfLKDSvX1ZKtwD4xBk58F96dJyVZhrB7%2BbYHfzpSJlMozkCjcqawmqHJpi0bHpvczaGu8D6%2FCUBBSTdYazKh9uncFnFUb2hjWTXkhVJ2szM8kQOdbA0HWoyZvucSTaXcwyv3kZNdIwlsuaUpn9Qj6%2BWThfVh8Jp2u7LFnTKDbG99nailNkMZUBbzj9qWEF16K0NAMCZbJu3sj7s36qobRHcynYrXdb2C1yYaZromG1as7eeouopWUOrcVcPdoSvq6MFoRmyfeiRBlzAxE9PxRg4hBCb9WeSfsGYS%2FgclqDv61%2Few3WpSuXO2Rf3ulWIAiKy%2B8PodrvGsUTp6cZb8TWdDJUzafTAj0b8CRmAkMlSWxZqVbehPYlUPh1KmksDssOTRnIjWmO26Qi%2BJPhOlPwVHtUSHAFh8bVCZWOOulUhVhhUEC9EDjcq5xEzmsnZnSFiiJdXg0WY2CJ9lKin9rnLwSfkHYuwN1RnvzfNpoZLtZCfqNkINce8xFPDDLyk6WPV9bBzOFRm9ouKEhRQuI9Jil1WaXhcjI4x5B9D3buAQZ8jite0JeTBKDJH9cq1yICSboFioWVRSC9OjQSIvjlaINAZ8YuRMlljfKeRJTrX49nTG1ktlEbQhOV2b8ZhNIaDwujsIIwpJzy1AY6pgF2kGyRta4rH%2BQJvn5JyXyXtjrg4hojXEXhHClnKsjxoLJ2bhAq2pfORq86SjTshWU1pb1ghEmWA6ryWTUXp1wRU0rya8S6h3b8PVNsJAzDUGvsMUX58sOnceGnBRf3NG7SRg6y2RcEndPXj3cEW9JVdd4eeA1fLh44aQMq%2F%2FORcRoq0TOtPpX0EtVbPEhVwOjGH6L%2BTaPgnxg8Re1ZxrS%2B3UDVlkcQ&X-Amz-Signature=3cc1126019d99c5c8e735031869ccd82f024ea9d7ffd62973c2bccab81b4e90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

