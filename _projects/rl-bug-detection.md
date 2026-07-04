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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIWFHR6%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T145601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGgeFJCADYEdTwaYTvAJYIiVG859HwCm3jK0imKIZCkwIhALnMqqd%2F1mZCgKu7PDc7zETc7luYS9HMR%2B2GYBrBa1oOKv8DCCIQABoMNjM3NDIzMTgzODA1IgxNwUlCTCTh3aKHga0q3AODI3WpE%2BL6aTOSGJFUX2J6FoESUSVoiCDEctr9c5lA0yWk1ngu8IX%2F5vvJ3WPiO9IieDHxkdpsndg7W%2BPBvN%2B%2F%2FQ8zQnNSdWstJtHOyMoEMdxxe85kE9cqpt6rMuiMteFzILZQG0%2BU87LQx%2FNiCBjZ1RfQxwkzH04U4zTxpWQSBooxu3VemFLrb0P3sWO%2B3B7iyBaBcue3fXlizi1YEIKY92U7neWYNY9P%2BZX2E7FR1m03B%2FN50bMPEj4CtXtSV820daodx2yTy7qUCE7dBuSBJ2LNyb8po1bpQSj5tbK7Azdkw8fcHa4Kv1yOH0kq3tww9aWu89dabV9JZacgvrhhNSCF2QSURSmDdc2IwMkJ12%2FAhQY586rLfjU4iIU0qH%2B0calpx0fba84q9%2FYfm1teqoyI%2FnIoRu4ijnVdk1aWMinq8pBOciHpcW0R391RUM3%2BYvrLVgb9eQHUv5HUy2yUsk3awmOfEc55msKdq8JOA9gzTFKcQ7UGsbrdYbJrAVketf87f%2BNdG7IsdxSD9%2FPHi8Gb5WItOY4MojXcrzvZcQl9XRy%2BeIw47m9k8VCtdUWQRdemur7BNXebDDAsyR6BZpXRcW8m60LKLUgQqFRraS1Q5772jKpCICttWjDvn6PSBjqkAdDLR%2BoTsbmlvDwJ447bt8d2d0cifiJnbs%2Fy%2Fksw3ePFzPaaV8n8Np%2BbexinYz9NGX8vL89EkopW9ElnLkE4k9Fsb0RvOQBlChj%2BXKkUVA2z32aVO5xiDVicmYfGEfM4L6Hi5PtSEyHm%2FjOkqUKBdeCsn8yM9GaLjlLxiILAxEQMqF6AJ5lbG7eXfB4dC4%2FPG43xkcf8RL2vP4iT1TYGUVyVZW8d&X-Amz-Signature=5dabc485711894f8612f9b5d1a63573115f0dedfaf87f48751e98916b926b5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

