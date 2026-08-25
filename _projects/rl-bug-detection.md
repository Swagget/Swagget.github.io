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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7MTVFZ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T042616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDkYQ%2BwElVpmSE16iMsiR3ONKKe7xBtQuAjHmMz9muz9AIgMgDd6xVljNwz6UExZHCSArr37s3nbWXU5WSsJTKTef0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRLOQrtH%2FNSGabMdyrcAw5IaS3c4gKOonopm70Rt6Z928a4DG5stpF2wgrpCXH8DTS3dfo%2FfURV%2Fn1JMOstQ8bILmb0WSD3qgEgswWXTWIzmK1sLj9r9nAbBTKBy70hX56OOhfRkfQZ1oBgpoqNDFj4yQoRK3NK4gRNLD%2BTxt675yQII4Uv89zF9%2FajsjY326AeDITxmJcZA%2B5633ENFIOsoRnk%2BR3tzbdx2fnFAAtYELtcM3btqVuOEDeIL5VScs4x04o1zTG9kwJKfqgoJzPZ75opSFo77mM5Qtohk3WCmKbcPUCbz7gAqTu7QBSIzk4FUW3WqDGskwcK32QBvB3qOuL%2BYC%2Fv4ijdsSw9gDbv9SC%2FXInY7LyY87Th5kFC9SzVDAAdyUSiRubqEo4gVk7uUJjSXneQ99juKzhEaDmxfdJ8CRbwXvBcE3gKe%2BZ4fbe2bPF0Gku%2FoDP7%2FoigHVe2Vz3pnFKfndo8ax0oOWhFxqXViCS34ADsBgkMe2%2BjdzxJ5Nv%2BDh%2F7v8HVny%2FN8qm1l1ZZg%2Bx3hH5jAHEXqEGqr9X8JRp8B0K34Id63%2F2HAlJR5YvEGxXfBLq77MfI7pFJGewFytuqiL%2FOPaD7RQB%2BGydv8pjvPdGyyM41I7funu%2B79PLiAZl46QykMN%2FTs9QGOqUBOmlvtFFp8wtI6O8THd%2FsTwWVNpmgQ5dkm9ZX1rMOEkgv4Vj4mbbP6vVSS3bWGssNAV6HV%2B5xLnQ%2BUCHikZ6rh%2BdCO0SLh4TNIFLTT0IC%2Fr2hCfj3ZaI6lOq7trLdrcflkOvb4H9v%2FQrVNkctHE8Ho81ZhR8YvKPqh3ONeWNwcgG%2BriMmbuEGxS9u%2F9jqCpIZ5iMTEY%2B7%2B9qRzjLj9clQ1AxpNxC5&X-Amz-Signature=1020c8d07e453fe1bece5e7cdc21a8cb570234261f22e7879b220eb215a6d609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

