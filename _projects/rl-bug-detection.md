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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKPGANG3%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T211405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeZ6u5mDWNaDrZEPl5DCiIla7HaumQnWri6Ah2nxY2XAiBNE55MPGxwadIrQ3fsZSMBP08jTMEjzx6w3AR0jba%2FUir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCaayUnOezEqc64BkKtwDQ9EQBT5RbKNGYu0iN5%2BkRXHMIYlmq3%2FG4EPEMlJdJUf8V9QRPIKtwxXSVd%2B8y1CB1MeXDkEc2fs6Z1E1TL59G7cxoh1NwUMYtOvIA2x2%2BbAXhM4zOvX25jjjdC6VBYe%2Bwxjq2VSl5%2B5Yd7ua3TeNMKXZJObj1sNS1O7%2FtE%2Fq8x57Wy%2FsB8B1KgWYjx3FogmKEopnfJLtOpu0HZgduIFSjvSnqnjkVM1qOvvYJkpWL5IJcqZA3o%2FjCw1QkCTdiCx7Oubq%2B86s9tqp7tEldvN%2FnbqLll1nlReizrG2WL2yRWGDtj8w88pjInydzNTV11nS8JGs8WLF3AFU6CYf%2FJacr8BD7hIbpEFptw6un108U3tvEASB2uL6UF0Izrh%2B4ZC8dr1Z84RzNYstr7IuF48Z%2FwdH94rQ4fq%2FERvba%2BRrVNvk7J0eyfK0eoGklg88T97MN63WEKU4Fm9lq2onYlqRKPb8fVIQgITPXHY9%2FTUVt2PSBNEqvJererYt5gZhsiBNPxcQLJrTDjrSQOZTEKgs5iVlD41hQKbYMcDzxkadKk5nN6iTa74gm%2BcmbRA0mcducELWSqD5W12UAZFfAb2uOfGOaKqnykTgFRQTH5CMVcamXO9iXTd612Bx4EAwr7KY1AY6pgGDce26BcR4mNReaO6sVJfsrU1q4%2F5Y3hahVjTEE19BauoiVTDBH5WnWFP28ih0lzaly3A2twzEdx%2FExmKniaxx%2FqFmd4XQyD6vSp9Nlwq50ZCSwYDhiaOQ5%2BJOOnfGJqFCA7ChtxSXg4mZAISnBedT3T2VdXDbBK8%2BhtV7lVW3fV1nlDew8Iqyo05%2BzJoxEhBOxOR5%2FVbf4DXChXVBhpzGETizAfmm&X-Amz-Signature=2b636c0c4d63250f7fb23d2460cb280ae42f3f826bf258205a9513cc4ff95bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

