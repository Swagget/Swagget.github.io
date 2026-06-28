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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLX4ZGCU%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZ0nXIzGgkMC8IcOPeg4W0bm1dFNbzXe2EtJjDmPl8gIhAJrQRoCvNalRTAoIUq110SpdDMyf%2F7Rqt6hBM5rqqpI3KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI7blLbMxw8VyymJ8q3ANzGZKn1L6z9W35e873dC8uzsq9uWqdsOMxOeMKa1t38n7oHSkcgHTqLrMxPGxcT89Aiquzsn%2Bl9UCm0clz30rkPR4PEc87RbaLqd0MbZjyXtS4L3SdHnYyXYF2CiI7XWMwd53659kFWG9XkGW1YUoL2Vr3YzjAhzqZpxIB0pbKUbRf9IgaZ%2BFGNomWoOGsKMz6iQDwazQ68VE8so%2BTFc6EfY%2B62QmdpN5NeRBGytvkSOJzfE%2F8WiuQD8MsGUN4RK5yPgGTlkhvbtU4oNX%2FitIbYoQ9BfBtqAPqFTsL4LYrcKu6G6XpRvGTuboAa61SCGuwmvgais0qfEoVnLx2muWO8du3U7AUwP2Q4k8WNhXpIgRGnso1zhT%2BOC%2F5Fi3O6Z0rl46wPcp7KnuGwfl5Q6SYCgl3fYjTpL%2BpQSqtaLW2Ske2NmcN%2B4Ka7rFog%2Fdvpd6hDZGdA9BrHgD2EnP4Rp5DykWtGAjHRQMbCPjo9wn55LyVPgb1mq8RZB65kJ8LaaavGUtCbxEuRJMxRnbX6MKQW8XpeaENvabRm9jcFFSwZeSAesKEoInuFn3lDVRv%2Bic88EtrlCZ17S7lhJr4dW0JStd4TjtpFk8YCY9SjVJFE%2FZfgXIIGZD0wK%2B7bzDk4ITSBjqkAUliCsjcQlgQ4qnPqq%2BznGPAO4ckcHsb7xD3qK5JQSKMs%2BbiE4MQKqoQTWJelXvouaduTLWX9V4JiXmjDgxn2GLjiwX3zhVejXNst%2FP3Pzn182TI4MjwhKmlZbAIZ%2B0iuN%2FrTNNIyawVNImUXD1cwsdmX6h3%2FY%2FPRH69O2K6%2BfHDxF9KnPWCJcMvpAwwLjiKqAHMq5qSjGP3ZwSXx%2BvkdZMEeodE&X-Amz-Signature=450b7ad285a8826673ac25a6e8fc9dadba695d3831a1ccd30b6dc9831b1f62be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

