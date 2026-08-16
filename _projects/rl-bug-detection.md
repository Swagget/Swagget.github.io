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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQVZLK47%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCzaG3TnqEUTUIamBhcIzZiuk1CQgTn6hduqryyhuT9CQIhAP8A3wBmwfXUlzgeuQG0PRdQSSLLnV4JP3defnw8zaE2Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyWSUreLJ727BNv7pEq3AN0T4fgyo%2Fvn1aHlyLmsHLfe5olrRquHrlIRAcyHdR6%2FCQIRlMK70Oj7or4JuqrEQIsLQRQRWR%2F1cHV0vZjOiepMQo2TuSD%2FLdoNU0Qo7YNfOhmLyjulwEQfDv2sxhg8hhcVuUOBoj6f175hKWBSiK3y6t9h2UDvXm0sMYA4XmiDYLs%2BKY52af0thgM2lVj9uYPcbTqJc%2BGkRBQL4S0ctXQnlxA6b4tIFbIUbazJVOPt%2BGCmFQk5NYPZh%2BiN5%2Bg398oVFbqu8h9lVOs1LPHG4Ahe14hR%2BbbT5%2Fpoo8bbnV1ZO60YsK5kMy10IuG6fx4Y9GSfGVpU046gluTfImmCE2sNF6%2FM4kCLrVyBqWrPlzj%2FWazVu2Hbi9mnyv66Sh11M4KhMDOWBAEhZgthsNvyrM6DRqOJS0g%2F2X15m2UXnImt%2Bvf3YoNfklEdTbqQpRdi7u64Zni%2BCCGizcXX8hKyb7pawuED1E2qpig96bVKMyh%2Frq7gAws64wBqZPXi55DPLbH22B%2BSbqaH%2BA1PzSQuaH3SSUKfOdv1bXgkqTdYXzC1A6ymll3dThyPqcmOjiByTuN6L3R1%2BS3eucGiOHP2VtLmQGD5TMwqBBMoiz8aSv7RJBmMlLbceWC0jtVpjDTmobUBjqkAex603GVLTFNm%2FJYRldigfdRK76bHy7pU84ek3yENDYRtiaPG6O6hVI9vIBcS7G%2B0LS888B0IVMuAWwjgyVMnr3c5KsdbiBc8wpdM35W94HsnKY2BCxXCDjp31dPB3kbOzlk6XOrcZeJ95NV1B6vIVanoknADWlDqQ2h5Bpklo1GmKOUFO0SVZUmvUefrgPeUKjIxEkLmN4XxfQz%2FPagqy0IrQnq&X-Amz-Signature=b0436e3104823b4c153960e775af778e1f679a7b0fc6614ce625c92e29ab3fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

