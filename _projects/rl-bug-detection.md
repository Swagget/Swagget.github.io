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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TW4ZYB%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T192723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIngtpsIdFRxVHFEvSsD6E%2FAz5KMimkKwpwpzkr6nJoQIgVYt42spiu34U3gpUod0BN%2Bj5tHO5uZmiMUs8dA8Rnt0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFfF%2BuYFbEbUXfH3OCrcA8UbRcWM%2BHYTHK%2B3l%2B%2BfCMX%2BptSr9sJ0lZOZhN%2FSaI4ipPmObWUNCA%2BNTcpZtgDWkFswQ0cxRaRBXouuJl71uzkh1EcaRB%2BTqw3xi%2FV23PUHzacW9sFJqsEtE6aiIOM62h1rxMxPQzce5OWRhWPLbArZ0oOAAN6S9IHypiZws0cYjgIqER4uFTcPgutX%2Bg%2Fr9J%2BnspQaV3KPvdeRVZ4%2Bc5ffRHJMBL3nJxkXbQ4CngAywqcdy8EHroQy4lrL4l0zhIYBqNj7gA8gmv1kKU7odzie9ZvoPpVXF%2F40JkrWC1jv93MkNtcKUjFZjl4hu6h3SfPTTkxGcxDP9EDvYDAPOHvfswAUVWl9pI3lkg%2BcpL6we4CQgj1tQPGFy50mGic8E2lJ%2BAV7Jd4mq0LSjWngIM%2BYmJqpKokkSKLuLwn4GaH%2BCPEzWVWr58mL2ccXgnhbZFR%2FV21eAlEzS6Dp%2FfXIvjHOB1p%2FWs2XbIfvondsfTcQ8F435I5R3XyJeZewEx8FOoMy9tHwyk%2FlGyJjKBB%2BL7FAMZHsgXXUdBCctkwNi4OKUBzxuNwoNI2yE0OZrQ4Y3rTondJnHkl%2FGRfBqiJSyVC1oJ5R%2BzJyg62MZyBvtySUQVIryl8UIIp4mGFZML2xjNEGOqUBSGaUYTdQuxrsNqIY9ZYPg9XaKxJoh4LiQq9jJmLV8Nt8cPpnvW1WPaWqwyW6XLCkRVrlSsnZW96o%2Fx7M8%2Bx4%2FGNaDBcBlDZJyEcTJ185yzEIepQzs%2BMgdNM19EcefHros9KvmAroPRD3AfP8QBsuiFX%2BijhzEEraghIZxHnLzCWA9s4lMfF%2BWZ9KYaIwbB70m1mLuDYkY%2F825V33%2Ffcvj1zigJBH&X-Amz-Signature=322b4c1a393e34acee61c36eaa5f7412fa6cd56efa7f29bc2537e10e16b01650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

