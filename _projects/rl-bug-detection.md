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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERN5H42%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T225608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDh1KOsnzTgRHLMqN%2Fwda0BCMXejmO4DGYDhCjI%2BsL2yAIhAJO4PIw7sW5E5ps4AfWUNof6nIr3x5nt%2BHAdKCDSmG4wKv8DCAAQABoMNjM3NDIzMTgzODA1IgzeLr2V42s6tcZC%2F%2BIq3APwfzkaVc0OaNcISJDF6jH3SPFq%2FShI1OgETeSp2HZNG%2FrrzO2Al%2B3HaYxJm8IuiirZl1fsDl6iBqTQqBpy3SE39b1ccekaUL9jsCqc%2BjhZUVNG2ElnTyQsaryi6XTASQ8cAcJdB%2BnJquzRZ7%2BjExl0U7%2FL7WbAogk1ipIu8qIVhWDS%2BKQhkvQgShKL5KKAgVC6XRCLsBDpc9h8jUphNXw2cSgdMQ4YDMrVv6L0jNEuhPRV8nom5ynShsh05AIE4pUqQKNLWjnKaVGV4T6ZCckF8j8KZiKUb8X1iu9Sj5j25LK%2FkUNd9OpmbmcbL8WyRlsbnhUVn%2F6cfmLm4H4NG0KDkCSf%2FpcBT4q73L0Uqpfb0VtnTH2UR%2BBAxf0%2B2aPEUXX2LshcOP7uahoh8qRDTTqByZFzl%2F8nzrg7nhhYPc2ASQGiXKjvWHmIqOEiwIRcA82YYQTmFb5yhr73Hb1nBHFlpav8iVfFKz24o%2BvbKdNHCd4%2BPt6%2FehL1f2o%2F%2B2Dsfn2rWFLK4zSc9ZwzEtP%2FaRBHhYPf38VEUhQO7De5nD37F2gbpwBs3P9CQqVF4oY24YYeAXVxaOUpDFR6%2FQn5ZjzDnRMEHv0dcoqhSxlGSSFP0GDy1M6Xj5OIm4SsgDCG05vSBjqkAXO75N8oZ8p2okybXnaccPVdyYGO6vDQmu4P0iYGpo8A7DAbCObXnAMWv4ZpukSyE1xGparoxsCUnwcBtqdW%2B5GMye6OVsDH%2BQZ0ntWJS1O9vhonVRJkxf%2FLs1FOAlI9xCwp2Q2u7Vb11rAshpdDXgEDlhEGoGm791wBxH2DYb2Z7r0MAa065udBuBVELU4JG7HpXYfubLwUAWfbjcDJqYMtNxfo&X-Amz-Signature=7e52f4010d5834c627749bc3d048df76525525c41bb8b5a94682ff334781d6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

