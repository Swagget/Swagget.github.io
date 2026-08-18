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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBZKRTO%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T161625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5SAgTlgHCLozT1vVHhw0ghBpKf4zfog9Tl4O0F7H7LAIgTS%2F%2BRgglkMzdgEarCVTdFW8a06%2Bus8v8be%2BXtSCyRRgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAHXmj0urE8u1AzRcyrcA7rAM2AlmRjH5SV26eHLfROopgOqcZU%2F5nxTfOxNO3UtFF00YpQjQwDMwYP3vhT%2Brh%2FLDg3wcAaRW674kGClzjm7M5QJqompbAoTnaTn6FLbyjAabAVHeJSyDUr9yjLt5mG%2FVeUtUHKwYemd93%2BSeGU6Nfig73vLPXsdy6M77%2FIGdfROfIR7fokA2%2FzOu2wA%2FhRNrYm8JBGnQjkgXRq5GtaFroE5Zvhh0lsvKNeECBPpM3SQ3yJp9L%2BqPOmRaXhMLK0bhBRXC5Ypa5x%2Fn4SHw68JSg8n6PwhKKgwGakq5FHX7mTC5UGjrzEbOESY9gGZKHKn0vnD4UxkvPatQ9wKtCMQ3f2dIXS8ZnUWEWgWQzdbKYp6J3%2B2o5V1SsL%2BLyzf7MB7dhgT4zHfL%2BTOfgYnVv4Z6ZysGCoYanxkRnRr4%2FxE5vOtRwvVwKjpNVlg69KIz8RV70T9Pw%2FAEfj6RKBj5p6Iyi2AthcWdhQHUaiC0uwt5huIci3Ec%2BO6JBSmeAA4boLF1%2FctxtoA9xAjeNFumbnsrCD6tP0fJIycGnfOE669ugx90SGtMQedKJRZOjB128yfCnY4ybIN4XVH47XTvmbdFbhaZ%2BORJ0OTBjraLv329JFUErMoTAe7TzJ4MI39kdQGOqUBVofMkwqJ9tEiv4QcMICNjOdbaeGZfmQroUHka28Wo3QDuzzQMsGB1zvT0UsE1MWRhknlOHH7KdsJOOERyrF%2FQO4mVrQtUCEjwp8aLHBNnPwAfnKYD1KuE0RctDKcQlqnBUEVIS35bCmmfmfxXqqeX%2BUebnNKvFSyC3qp4Eft%2Fe9Ja7zCEWhlWvhl2%2B3OM5rXV22w%2FEfvcXHmtlL%2FpC98wbpACj2I&X-Amz-Signature=5373e4507f6b67f8f520536b3e6bd827d5153d2b35a78843e3963f42082f16b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

