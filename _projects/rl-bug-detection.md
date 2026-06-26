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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLEUJBY%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T113628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAp5Jg%2BUE6bCP2HapJzeOkitlr7yvyfDiBJ1KT40LevgIgQ6SfvacFty5jFxbgyOB0TVMN7k%2BWMDwRWcO84KEUf%2B0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKubJeBOG302NqKK%2ByrcAx5LWzgJx9yJLE7myTh1Po46lHjReyh4nG9q0ehRtT7a40Eb4tHBdm%2FdZrgtkdt%2F%2FCxfxtr%2BQ0DjiYGMfonuWFh7%2BxaFasZdKqWMP7bFXJlM4Lj%2BdJ1ExIYGXUcMZ4diNuSb8DYq0Fpow7fHf91akg2lHwlJgxQsCd12iD5sbLedpmIvRTABod1Em4dTl7PDmSKZP2fQh2JMRqKDDUPJd%2B%2FlZtilmhpNh3FkEVQBmx3tIIvsPq7UdmwMp4HiL1d2hJrJReQDLgUaU7%2Fw2XT299idnM448%2BtxpKm4twnIlSA4%2B%2Bs3hPFX6FN6n%2FzgB4SlR62TB4eRlOAnHbun9u9rgoEdNLsRM1BehICKcEYzLW22UZ3q%2Brx1ibbnw5WtiLV8g2jGLaAjxFuIgrg19bXuyI410M9Mh%2BlPWvXTmUgz9etob5XJLXizU5B3G9bvbJ%2BB5amXJLl914%2BQgu2yrveTVAzPUtITC3KAx%2Fq5R2cbNIgXUQGWz%2BWjgY6xFZbmUWwaSh%2BAFdtzufHvz4fWOtkPDrS6jhiB5KIl46OWtLpubIYxmX4XgoP7V8o6%2Bq7cJPTR7YY5Miu2WEWuMa3Y94Yb3Ndyctbhp8Te4q1ZIfbv%2FuiopmzA7vkMRSS1%2FBRDMI6r%2BdEGOqUByGTEXBODXVpyKJiHYnSjZdpvKg1G6UYprWw65pQNA3ynpAbWPJrfFSEQ%2B0eFZ2jIrRCsrMGcEPifgjg%2FeaP%2FMl%2FWz1IV0CmDcW4O1ZAcea6j6FfdODVnXDdWcY48Fvx5YRyjDI2Ri6YXaIG1hVxEeknyUy%2BCl%2F5eWjCQBelZ2AX7fGjz2zkE9zHOOLtdm3pArTzGEJhjV8cBIY6UM6UQ2LRD%2FibH&X-Amz-Signature=76290adc70f11b5d8d62c891c1bcd3df9c1e7530c910adce163f762d543ac0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

