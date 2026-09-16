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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZH5EIU4%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T203111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICMnLbpAImlm29kGmM4dzJRhWewLEI2w7PXHNhoXEqFzAiAgpFROCGAdKsNMHJ3Ql9oCN3rO1i9WQKZ9n3RLX5jAICr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM3QKk35HXBm%2B1dDdOKtwDevzHyuG5phLGdNRA07xdnY57%2BH1svBYAjF6fazp6TnsXVhIhkjzNZnZ7OcEGaf1zl34uG%2FKuV72ADyDVCTaC4yqZ9OuE6Phd7Z2RA5JkY8BqRX53j732Q3DsmY9zPkI11bGsTcg1ZEfx443ue6GI%2B1h%2B2ykG3UWHuX0%2BkI4%2BDC1yJqHhoKSn7gLG567vVVOP2bdmoyd4050vp%2BqUvLvzp3gtwrrUATCeAKzr%2BhRqIRK4NtblbqNq6NJKU0KGJafu3ZuTYTUpoMaPYqQuZ73kOASWoi8pBWoMsnQnKZ%2FmxaNq1zNpO9yB8ASAmPlj71MJ%2F%2BO%2FebK%2F0vCmy%2FxtIK3pIIGZiCzSaOT4g%2FQAM32rdmcczzrewjNXNaBB%2B3CeAaHrMSBOp13ImAVK3w46dPa59E3UeMXQpx9UzB6H%2Fm%2FmvGYlWJBDwig00dUxPEFtEeRvZoXYSzjYpR%2FlwMV4nSEDyUo%2Fa630QqrzT86FA1kSh%2BixNFAZLcwWSgPM6pXqUtyp5m7VQi3Arh4Rsl4iJrZGJ3pyZcWB9NAmkfPLkvo24W5A1xr3LuNFKU1DfXTV2O0%2FMIWdalR9wy82AB2D8hJHJn78wJgJYCjH9k1h9jo9upSvwjEsa%2Fuwi%2Fv%2FFVIwq9yr1QY6pgFe2DrmaDGjFsanzozpxHhGEpIAiuZWnwzae8dsjv3dHPQdXD1xcFvyROmu2uiBp7pY0esmQrwUz5FFmKfoijpGhv0AB4ENaSYNtRgKmW0%2F894YwtdtzPyarMdKsDbkjCNoAW9%2BT75EP8YOGCtfnvLIPK3g3%2BiYksqnMzj2JUmmg2LCZpquPXvK11208R2gT5YO%2FFD%2Fbupjg13ALjPrX0FjwF%2F9O6jH&X-Amz-Signature=d2ff4294b11ab59147742002b25dd068eb77cdf8f21f71bec5339f677bcf21f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

