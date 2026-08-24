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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOG3DK5C%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T172013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEv8uugrwxBhCVXwl2nph939KLw67%2BTL1f%2FWb5yVTSPAAiEApRn%2BhAQWe9opumAksX3cZJGOIhI9BnaBNfYsn0xf1Z0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BMRy7rDeYxMB4iVircA46sO%2BvZIRlCVQwxZ%2BXeL2whbJuuHIYrG5tpIylReIPSa8C0FmaT%2FQ%2FiJNfwAziWKiYbL47zE4V4CSeYwYO0%2BrcYeQGvTUoDh1uNHr88I0vjDzJLdRbnxW8luxO1VSJnDaGUcrhoSk4ZipyM7PBCYTbNJI8hAt7qDnHgB1VFeKYO51DDXPZ5lRyWRuM79NuTfJcBhJYOyF28OjvQvpsY0TLHFkchpyZX2OPVt8%2B14IhssQWfxOFlS5vjrti6E0YDtvVBI8qXW6aN60yiWvY7XJ66XiSpLASCLWU8dviwkH1ix1g6Ir3PcVU2P621owr%2FwmS9mYjRIoLSkhkNm0XF8h6A8QMrCeoW1vH5AOdJKIrarO5r2d8nbT0yNKQ7ACrVQGchHQEDl%2BQUIcXnfgsJqiVELL5wy8P1JvklPjPA5AkqcZvrYV9KajcdepifOIHgWLdofmI9p9B7LkVhsNmiGBm1AV8FM5wruw%2BTqUeR3TdmaAbyW9AuceMHn13mhxmmN4CxQIo6ix4jUviot5NGh2fQ0CKUeYQN9XV%2BeN8q2KOosIVLHVHL44fGbBt%2FoxyFksPRj6CZQyVRIURtprADqgK9UgQ06MVjBfvobjnyx18WF4Ljrc1TDp0e7SasMJujsdQGOqUBVHmYBdRREQeFa3VjJ7mVe0DWhaGsE65lm2Dtxob5twZb6l%2BFk9ef5TXnGf9AAI%2BtolpUScWFP%2FaBdO2gwmmgOckAtYqmb0XyGfI4RZY89pEvtAm3UdU%2Brvp2UhbIV62ghtQg4LQD6kRh6czZUC1jB74vG0ERfb6vKELZjPC30oT8UN2SWXkL4Pusa%2BWLigJM7h4BHRmaJQ5jYko1fcWq358OWkcF&X-Amz-Signature=5e732ade2a103d1ebc1fd6ac4edec8b5fdec1ad1556c41b829303b563404afe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

