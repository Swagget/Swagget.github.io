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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MOYFR5%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T115954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaitPQBbxKXLVnbTfeqzIHG%2Byz1wCS5TKbvXaICabkTAiBNNF%2FXvOqAzMe8u7u8ZVsGJWuAKWvGcTBzZ2KYNSE5%2BCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMifrsGs51k97RUe%2B0KtwDcBV8jFAQXlXP%2FNioLMoCt0r7sf9o%2BlsfVl0r6zDrHUabYcmCoLYsxRq%2ByThFrjwHYRjvQw68nw2yMkkgD55agStsfynXjbRy35VLqMyYrWjelKBa%2BQhkQAUmQiSYy6%2BJ63gg0LkbUO4iMv9oycjZb1ZcIpDj57NgNsx20LcJjWZtWh7HSkxKEEMVmF2aotE5p0%2BhL%2BGR432U3jlMGGLX2SbGQKycaBbpyIliI2NpWE0QO8KwXCyVj3fqKSd1Us%2FtkL5V8GU9LtjI4gSRgAfWj%2BW1U5zAt91%2FQGD9EGucjY81c6ipxeeNbYEic0e7yvH3j%2FApje1IsGBrWSddypp8%2BUWMApgkDWZRbylr8SI0DQMfepH7hjBGXrQwZuNTmBkX3%2FmW4DnjfSODRB9PKHM0lT04yGk6eUL64%2BbgO0EnIF3c5duB3ogMrdNBu4d82wBHiqgBcEUO%2B5LhSAOHub9NMxPrY0wB0y8A94NhxLP3lUDZ3B2oB4PAdwlNCGmSrIvrF5kMpXnBjpi%2F5K4JEdUPHJg2qRxv9Dw2tG5PWeIL%2FG4bqmhIJEEjUGX2JCuUkzNVG%2B8AEXX33CjKlxCFc%2FpLJQauOKrk1bjoxJjN2kH00Y%2FZDiKwfJXffGn%2BnhUw2%2FTE0QY6pgFOSROt5JBofrpTtWKZYW7khwHFuO83qTql1hVf%2Bgo3pfSizQFXVyyYRpR793y29PWMJRfDhX7D3cHQGbFopAqaChnasewzzZaaTm%2BX15ob1YrTJ2Rc4%2BiaqggyZ21pSKCGRvj4%2Bf06xcP%2FQxT51D8NlDprDj3KUYlIC%2BbWgergHZtQKHXmhZh79QLx4BElpzI86Oo5dcuA3wBcRLlpIcdpJpVPxTEK&X-Amz-Signature=abd31cc8826099b3539d7bdf3b1017a3f754ada27ddcfe48c9fae0da2e0bdcd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

