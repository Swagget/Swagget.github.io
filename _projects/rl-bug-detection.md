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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2VYVDV%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T154221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3qzo2Z%2FQKYlb3SZPQl4jZ09O93v%2FDk4HtzaiN7ZasQIgfjaGIxjZFh2ApahNgGbX66%2FoDQZguw%2FV71vpx4G38gsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMI6qRPnzT4PrXLZ%2BircA6goFlS6IWswnZyLUpaWKCb1iVZ7RbIRnwBGmcC8rO6I5YYTpB255QPMeJwLwo1IGgY90z3twsnsfc55x5%2Bw0Obpg8l7ML9lYiyTYannpsFUWVVNBv0SlAMmCPjyt32z99m6Wwye7f0lBRW%2BCCqwPTBcU04TIeNhj69UGHcgs1BWEANDjEizYTPj8ufPhIg%2B46utxU6UIgL3e6WSDTfCgt6hiTjgzFnFTwwTnUtHQf73qCOAKZouIxwD0TGlegHwzo13tVdcJbgrE1CfDY5P4mdAe47%2FF6y8JqWOF05sn4h9%2FA5BC%2Fcy%2Biz12mKp%2B%2BrUqKGK5HiABSm%2BA9Q6JqyYiXrywO9O5umH84Citels3oZGZ%2BjTGXiYRh4Ul8GNQ6wjc%2BJbszeHvqGebHFSDO5Ls%2FdOP28rc%2F85Bo5NkrXOXNxTaGGDIwBgmI3%2BRSOlA0AWZcasAOON6wT7N86%2Fdt7bo2dY%2B%2BGeNOc1gq4pV5FY8ANEZqiQX8x5thJCaONVthDk3Tbz9NOjYXVVEwNDOB9NucqG%2BW5qqr6vn7ayE6d1SQf4zLOjtduZ1l3TwkKyo2EamL4gMM1%2FlM7x%2BwO%2FZ6YukBvYhbNht4skRLDP2zKDAjKSj8knT%2Bmw192I9E80MJ3g%2BNIGOqUBPCpbeGYKgn3O%2FvbZl786t46N39tbrJ6Sg3y4n3CFAzcWKpo0CyAya9zRcUfPYRD7DbgH7Mjea1vJRuevNnvnE%2BbdHP8S%2FI3TLhYfpMv91yIWmbpNabqAzQLFEpQHlNf9ZotK7%2Bdbyw%2B%2FaMX49rAEm2qv0wNbBYAVvDankKVbdQNaLhs%2FhGBJV6shtFtJQ268LlH%2F7mDdI7MAiAnmfPEM3vI4vA7m&X-Amz-Signature=97b897fefcb4dc59737545933664375602e962e7d67cf5e0b20f99f297ec8db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

