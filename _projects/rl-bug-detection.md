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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW2WQWOT%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T205348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEGWJTCpPBJSM7CMHPU1%2FOCBkiQiYaSIcVmZrDeLZnvsAiEAhDJuHqP%2BudZvT0DbO2AgCQ93y9Sh2ERSA7K0ZjVmiRwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDF1cysEp6%2BI7LRKAVircA1WAUM5yquo%2B7nI6iy3%2Bi3eUuSrbkLhdn6vxxsATx7GVsl9p7q4Oe3cRTK7UUZ9Sl%2FNY07%2F1k2tck7PW%2FncUseFwu1lAdRrF92yPWqLFuUbOJ2roNDbMyTi0Y1Hvm8E1d4MIsxdnBJzOyDEMH4wChQeqftDRFUvozRCRUFoewMnti6WJNxj8tDirkdaBHuMQaxRbLRX88ZqcoshHIoIpOjBy5TM0dYAYpeG9COyespMFfCZs9GKErSrSQl7rd%2FggvqQGeATDp5n0ItuukN08d21jT9S8dL4R5IApiztlBRMpFn3sgcbUyvaE37UCe76rHkamEe2cQykAB2TBawjjK%2F38aCFKYNGhlcMy9dvXMTapNgFcHf%2FyOPDkpzwraMxjd%2Fx9wTY6NtDtkd3hYfCfWF8J1exwlsRlEC4Rzf0gIN%2BBWodUGZSsWIT3rI9W5b7EbzOiuURIq6qw9d1YeJreCFNE9NvFiFGIzY6Pl1HdULjsuQfrscAJKABtUoSxcVlQbFxHA2VxTcSLd85U%2FiyFLUsdA1ic0F3IBbVTfhK2GPh3Zh8wmvEaeKwNTCgalDenEjIKLb%2FYXtGAxSbsEpD7t2%2BaWYjigPkPKkItwWTRFLHPwcPBOvj0LYZgaHQPMO6h99QGOqUB7m7sxqOznebRWVwyIPzY9EDCHbyMnqBjoVEe1VNR3pgx4EVKPRaYl9afi47gqdqv1Xz4I2tURuyr%2ByIh3MBsgX%2FQE%2BkQnTvKE%2B9HgY7yFnG5bAI7Gt10zfXeiJielwGdqbnu3U8ZjiwXGck0LnAwkNJqpKlweSafj%2BC0%2FkvqQnnRI%2FmGAUjz%2BF914VrRRzG3t59ejfe%2Fv2DsRgGYkW4oz6i0AwJy&X-Amz-Signature=50fb73766f2850f753445f932d538ef5764de0ba9660f4160a62ac1ba2ae1886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

