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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCJC3WH%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T052544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3FNkvgdnnFeF%2BBHgRLLcx8kcM15Z5hSYR9wElXJqWzAiBquXg3y6HljQSn3XicrZRIaKMeVdGVaq9XfqOZPqFicCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzXhJ8pdGPD3exN%2FKtwDzHuG8pWC3MtC2FTDk3ZbQkAZ8MOwZApFlSI1Hn%2FJUO%2B7nj%2F8RS%2FOeu84yugPN3GImkuYVQkAao1a78jY7RgsZOZxiu61RHhyHB1%2BPBA4Faz%2Byv%2FJUoziXOduazAfi6XGta6zw%2Fc9UJunjOK1VqIFaMvSsTir5DWWvx7e0R327C8fd%2FxrJ4Z7UiYn0W7f47TWQuixD0g5ecLrYrZzww2f8jA6yL6kWzri20V53DmH9F0%2FZ1gXxspzQwLHMl7pph67t1KiqaSpX3MWf8MIV%2B75tLvy3zgufUPmkLeI8cmpvlx3dG2PQ%2FeByJEh7bjdzEfQot%2Fkpdzl%2BT%2BRKyyjRwBBNHEtBHf59%2Fe%2F8D6Px%2FIUuX6a2ujmjN3RU9CsB6JDlpAcBOQPf%2FT391BvfsJES%2FFdxzZtXk8D%2FitXxWqhEdpCFHPggAITICOp%2BbVLLRCBXQUDjKgvjly9thuYibM78abTzLR4P5CN2MnOBgXMbQqHuNmFXkvD%2BeZLjUbDU5kjKyV5m%2BtrihtCwuBN69gV6xba4eXb5ImJs8DCwfXrJhNnWAvp23gScF9c7%2BCB7Xl96NGVu9POI10TchOUWftQ9qG0VN3UJGi9tJCZfF7%2BGAqm5z0kYE8RZCyUBDWsroAw0rH20gY6pgHaf4X%2BmKJ9TLdUvgip94lvtXkuUOpNEoImJIqc0urijyY4CwrNQf2ReRPgfSIABClQHJrSAAJPbFbs9uLmVFW3KMB%2F7NQ1ZJg%2BUDctSz2xkoSgRW8LdMA7UabIctXhA5qqtdyZH2i%2FtJz4EgYlhyg1HihUR10pCwfMRMryYIdgUfR0mzxiE07LZRiQ%2FDedQC8BiduhC0BRkhC37ByYsYMZrEzVI43B&X-Amz-Signature=c04bc1b4066f0506ace531adaac4d01d9e3bd9b2706f095b1a86f564bb6dbe25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

