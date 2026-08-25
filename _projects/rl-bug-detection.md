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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZORECK%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T182027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcKuWPKeOxYgxEaqSLDCYOVvEkU7kdr%2B8JRpMFj3EJzwIgW0fkI42JiofYSr6NXDNsMuA%2Bk2ZiL8KSNCR4OFYlhKkq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCMUM8eGn5NpbJx7ZyrcAw6D0sF3JpvYB63Y1sukhvL5s%2B%2BoiUUcxldJKIccbZz1qK162iwHEXsUSrrRCg3ACZffOKaojRy4ps1FO4su0HJBdK2SlHEgF6P3XrZP5HYXkgwDQjTSF5pVXzNZ%2Fn8XItqFeDX5ZXiyKoKY8pisUuCQ%2FLnIOHIYsYYzfF%2FlchltMKOyC5erSDzaHN3wZV3l%2FAdXrT0mKeop2mnhfQ0d3adR4f6k%2Bj9d1Nn%2F%2FCtaRPsBgD1netqb930RxYbz1RFF%2BSseiUy%2BCXRobrNVeoWchoQH7df7abop2Yy3yFYXZ8s2udrbO6sOGkUka6f0O5SdMStDCHexlhYwqr4iKU8EKpyDjxV5kIFycxagkvb%2FtrQh0VUw4Ee%2FhEx4D3cFNgTRhHaWi8nsgA1sDgf9edKOT0ZYZAkyJdHaY1%2BSLCpYRVjNBvi%2BU9fXn1q5ffahAjAECwwhTp8vEHqQmbSO3h8bDKF2axPlsgYpSQuHZ4HqzMVKODCnpWEk8OtOjs0pNKbxXzx3LP9GIqaeiR60vWlHLtziTn9G0i4YfrF7ezPPBNItGXsJJf9rTvKsZwhrTMlMgYZfmf559sJ7AqeFHz9rK1Igy3J9lSQwo2MmqeVYW2l9TGGYJjO3JRPOtU3tMOWSt9QGOqUBU%2B%2Fh2qSrA6q5vASku6l7c7tf%2FQWomkJ%2BoQrE5%2BwFaCLH0ooLvvhT7cpClxs21pskDwZogDOj8gqaOp5MbSgLURzNxlJe7MDizUtr7PqppA7vtXEJzg3623%2FUP3METlBJEXVK5C%2B9RyCHI9WAUlljjwqcVByxNr9m%2FkWMXJbrqPEKIS%2BBmDR4hLkuFDdxC6RH1FbYcBhU42FNAnN6gStfbw0zM9Vl&X-Amz-Signature=d60613b0eab4c964a5f767b5207d3ba0d97a657a38d5b6ceb0d399435c26deb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

