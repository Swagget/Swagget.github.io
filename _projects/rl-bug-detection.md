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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2F4OSB%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T045126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDpUINGiLmVltek%2FzNVM9TAgz457oyOea3%2BR0BvR46dLAiEAgZBZ1YDWKZ4oud0VPJM8tIy0p%2FDzzVvip40XGC6abagq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC96Q2iRWHGuseVBBircAzQXBC6B%2BktEn0Q6H7ibb89VX%2B7LCfVBYkIQkC%2FOWu2Qj7ZuRoQq786USPYfbvB4myP6hvM3nQRwsDuLiev6srgzIGuL0gT23SEpNrhHcZR8V6sYX2WANbgKkk%2B5%2BdQInzLmIsnNlEWgimO1nbJbGs6kPbpGxMLo8eATAINr3KOWdcWREjm89XZstFrI4%2FJO4SFPKLHqLPHOhfwFhlKgmwKm6pGS2uA6AWpMAfi1dOgEyFBfuFcQ6B6O%2F02xBZ735%2BGFwq2XxsesoCVXtrL2ex9Ph8wcGZbcmQiIYRGV90%2BZg%2FOYqC1vaIVr5TcJp1%2Bv7MM4CBULBMCZ6Pbc0FtyCtRrr3aBdmuzPu7KusfeVPfkl0AGXr9BCdc2D9XqHWDaoxk%2FfH1bIl2SCioOgvDUfvp%2BvdybVRx8slDvbMMMfwP9iPfoMmLMnQJEhptoJYHc12yyh9xr2Ethn3WBFXfvwsyEZ3F0kZASUuQQUsDZn3yVBWlKvdkWHGDd2tQ%2FBATnqjS6XHwRZfyI1NKeWpBhgGuL%2BBbDCP0TN%2BWWNJLkKstFRXFJOevNgWWp%2F6XtavMUW3CWfNd1Q7SV2CgCeiaa2kMD8UTRUOB%2Fv0pAMN%2Bs4IQ0m%2BPdqK5h11Aj1f3nMKnmxNMGOqUBBnXhI4tlszQUKhCmS8KsX1GBc0QdsKzUv98ur9kb59ZzFvPR5d3pAYjkAz6Lg92OLm8J5InC%2FGFNdkJLcR5eLSjoyvNzBh2qjfM4QirEcw6%2BlRDWVzK8Fq7ycHsjJmhnahL5U94%2BAv%2BtUXorx7uc5keOGAB5Fw3GZ90lyQWKWQpVqL0mYpJbZ4DVf26yv0ILeElEaXURX2aEysYbM9QJHdwp10A8&X-Amz-Signature=57ef49640d06d53e5548db737a35305e5584752fa99d80d51066d24158fe76b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

