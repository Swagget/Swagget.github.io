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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKAJXFH%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T120554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDnQAMRjx%2FqOk9euXFuYQv2HuGwGkJR%2BKIRlvp0OKw3nAIgAZLBZtMWZrCGA8iuCE2ZVl2w5kX63AjglljobzCMQVwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkOywtp9ZYnt3hQJCrcA35kLCczQiytXuiEL7PhmS3tLoAz25nRgqZXDrJ0JGHzk6BUuKIiO4F%2FCZZG6j7YMpMeJuKSLkUouRuMRGxXN6opfKiuR11T3zMiZZDHzXJqaaa%2FLeYMimRGaaS3rOADhu9PDWZWvhIPjfEk9JlhkwJlOU5xVTF7RbgpWAAWP5%2Fo0%2FH6GyYDPme%2FX8kymRbFqGxmncwzU8r4z%2BP0VZxY4foq6VowDC01mbO2I%2FUGIVh23RLZLkldnVqQGZpdkgt6HW%2BkR6QmZGDVlGSZKXM0J2oZzGfPEJXiE%2FrQ5mjMNrdszSRoB0r%2BAt22q9LfGz3vBWnyQeb6Cg63uYLh6R54FMiKHURU5SD3q2bbOpTX77B9HDv8I8SPqPFC4%2BXjKuByO0WbXKnzO2%2F7W75TO5jHopg6cIGmqL%2BqIm5kls5dxXKyEf44suGUS7OO29aJ%2BAhePnC%2Fiik7KA%2BX922IPpSZzysYFxAKkLbhoSY3usMsQByWgTDL2UaiNK8qda6AVv9ocRl2H0DeAXaxco7a4XQaRmP50tS6cTLToDdGuAehRD2mPr5HYYNkQn8DUPhnoTaHH%2BCCXzAbb%2BKKmW2mQfxRC05CKM30p6JD9RGrB9k9caDEw8N4NKf3IO0xlxtxMNPOmNIGOqUB3yVDtFLkUzrvgNO70wuTjjQsjODkGekmf10ps1gqqpv6e1OxwnBPK2Qn2VyWbMjidvBsGjqihSpRZM3XDM7AGipcfEcd3U0IAt5isF%2FL3oRW9Y2SCfkB35%2FiGlQ5Tglv7xl%2FhX%2F%2F9HzzgGrnCRANGEQZOzQxVD24jDWAoEwq2jkl8xtJ0DwnnTCuZo2Tt8ZKN%2FmQ5913iVI3FGGZM5Q97tIuIHpf&X-Amz-Signature=6c13cce3437f973671b02440595669f8534d8fecfb188d4cd109cf3c1479d775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

