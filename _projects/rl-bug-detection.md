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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO6XST3F%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T101859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BRmekwlWJcepFL1eWNjihhZ3kmS4ZPd6usFQ%2FT0kg5QIhAO5gxFPgKIppdIvRhgNI8xhZQLmSy%2Bab8WvdRbepU9UNKv8DCGMQABoMNjM3NDIzMTgzODA1IgwWe49mAZWrTYA%2Bu64q3AMuBWw4kD%2B1xwC6ETyJZJWQ4Dfkpv2bIepL5k6EIRskEEgCIPwaiNSyIjqP79Iz0mV10Nofty9Aw6NFqpY6Z7lBWzIBMH2gjV2aBrIUIO%2BpRU7WdfnfJ3vRwQf%2FeKVRONWDAwzFFe0OaD35SC7RZmlxiXo1IWUQaLYo39XTv7vmvJc5XnU%2BS8WR8odwt7OHeZiRhYm9cCR9O8OaArVcx0B%2BJG4n4BnTVPwtq%2BIzIeEdAB7CGzXwpUusj%2FZLcctzockBub%2BkRWEa61ugwtLm1WVpWAH62MD9YHyBvS%2FVGl6JD6RXPt2t3%2F4K1KXqdPHnY9YPY0EdUKqgwg5kSqQGiu5URk7nZIIkbVBat538jtTYjx1gtKT%2FlSC3FGVWpx6ujIL7uFCquyFWfZObZX7C5lhIolgxUqgyx03%2B1kdID5VSCVi%2BI0IjcWF4Hh1D5xXbY4JCQGVey7D38%2Fqsv1IdinUtxN1p6WCyo1PZjur3HBNYaJfsoZbfvpuUN2x3%2BNVsv0iRhfPF7InI9tKhB0g2wZaV7TvQ6cXHiuBRmwrKA5vJ1MUZkG%2FEkUiYytXWM8F5ilSCB9I2sGOg4R5OrD1KVP064%2BBmiGXDpC0v%2F%2FZevXEFR3hjZaPyaM716%2BpYejCr9KHTBjqkATZXhNRNLGHSQf8tTlDOryFZJGDqSNmPsokru0eVpVNEdWr4we25YudVFnJS%2Fzbl3e8eLCrLS3aC%2BiQ%2B5MXX0OjLGVGHAqiB8U7akVpn9nFv1BzRwiqMmhuX7%2B6N9K9pg4R6lkVSf8Vnn%2Fksh1w3zC%2BGKYFLHhRxYjG3JPFQ4CDULKydOxroHY9J7xptoEWsrvZkrhDAPq8O5gsWAjQelLY%2BgdXR&X-Amz-Signature=6a886f327ee78bf6405258c8a9fe0a091b300ee2274376118a0afa8618459493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

