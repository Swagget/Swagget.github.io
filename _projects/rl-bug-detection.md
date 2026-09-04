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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5ULLDF%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T114859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBazCd2X9CkPGXemjnzIci2WgDFNbrFAPR4%2F9Zl8FI7SAiAw6hAt1bLs2xaY%2B7f4C6Hhkn%2FufsLat22S6Hhwl7TOeCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1h%2BSq55gLTbEkOBNKtwDjsL45lHThvwuPUwr5NdlZHtWXkD%2FytRerHHx8%2Fued3wlo9OrhMyp2e7WtkDagGE4LOiYKqxYM3G%2BLo9WXTf27z9dNEzFE%2BTL%2BNekMrVRtfijkPWqGmuqB9OTJlwcD5SOyA%2BsoIX0Ds3tXGDH7YtmQ1Itp%2BrPIBxcU%2FF3tJPtS5OXr72nAFCAOJQxVoFm0%2Fwqj3c3v3l2NjVdPF4ODxw%2BampjyY0oiw6GDIxEd0dGLsZxFpTU6hA55LzJrARSN2z7RaP1rKMWPiVrSIQJbSLMtrrG5LFrrHvji0zQteLctbAZUXYxqFQ1JeOr3vsYyLc3h1K6qtM1A5ST3J%2F8c%2B%2FNVJWM0cxqVt1L7L68gJePnEnT4dHH79au1I2JrZGFnPcOjmOYl8ZogT751EpI9P49BGryDVrfddGkma7LPa8OLUKQasfjFok8IKq%2F0E%2FQUuZAjlFjFLxvYW6NUMFaD2Yx5OJIt4SDrrEtMIYHJp8MqYacQ01XOE1540hfG218%2F4cOuVCg%2FQ%2FPlKb3XzEeXeGvH7VQqyXroRuGwSX%2BprXquqrAUpYedn0bscI2ypJqg%2BoaKVoL%2Fw24H0GdIwF%2BpkGbN7aWUOkS9LSH9QmCfCFpGIpYs6ii6XcB4bJd88kwqsPq1AY6pgED8eq%2Bu8hska78bh1DA%2FS5SrglZHubyMQqnYwb3As%2FdNrf84jPxZRPy7ucaibCElQx9M0V3RGuG0XEYnSlByzi5%2FoKCagmWM4GaHfHhcaE44W5h0VRL2LAIMkcPC414PeqWFeHo8SJ5olq6MmUMukE5%2BnzV4WSs1trAR89PBDpRIpkAhsmwXei631v81rFED6Bo71ggjTtwWQRrHo%2FXwiaeaKaCcBE&X-Amz-Signature=ce54a206c4f773cef6741ef169f5f005ba7a162a2c96ffc07ab36246de11bdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

