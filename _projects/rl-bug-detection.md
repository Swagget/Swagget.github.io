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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZ7PUSE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCc41VuFrXfdVd%2BU8v2smaP99AkElaBjEgdF0ErbkDa9wIgNqnjlBUjn%2FMmaNX4qWJfkYS4Za%2BH9f5CKtPBsdz%2BsJcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgySADu8347KUM8eCrcA27IV2%2FFrrf9Ocefx4ji%2FtsaeP0Zq%2BJ0f8lRiaUhvctb9rIknsipcL98Lg48sKqJN7laBxrY2rUhwcyqp3Bb29jpGgnnDt3sB5MEuR9JHklnMx6KpDLs6cAC%2FBxJ1yRkYjtv9xn6fspll6iQpC4YSY2CLe2gJsU7JgmEpgT0WPH1WJ5H9IEtg715RDY8VBJ0j3YUJemc1tw1wWM%2BgZ3jz2d%2FhIJ%2FzJKpFUwZ8tz98yEdWfPVe0wKDVfHJFF%2FSyr7qQRJpee1cpUuCO68X3hL5s0bDk%2F%2B8CNEhyY%2Bz97%2B6Wpg4ufsUcNSKkdqYHhrlTizRQKcV1mIgZhmy7jLU%2B6t6WSZ0g52Boaru88hVoYVUEZ7iZGI7COVMVHb28BOxkwk4IkkpxDb5vEQupmkj296GO3nk2lajNspJLKpckhxNXGeLa3c1O4Az1%2FjnbU3bF2tqHsYCE1TRXM%2BYafVa9K9xPnIeSg1nuGeRcvzRpbQl6okdN0QlbRms%2B%2B4dX3n5enLyYN858qOacHhT2zubMMpSsGMGEMYjykM8%2FIEokApMAv3rZdH6VlnGggDC3v2oAweyYGwoSsrHltjdEjfO6n%2FIwMkEZ1%2BVQIqA4W2xcPCTFVKQ9Sxcsgl3vQCCm6VMJ%2BAhdQGOqUBWLOs%2BM%2F8fEj%2F8A0oyU%2BGq439eNWQHpSJi5nwUCw3k37MIehLaE4ha9vmEUUSSUwW2cWw8ka6l6CG5Zbo1t9t1y9U66ynVfusrsk1ZeXPdKGDQS6dOfoFGuBCDZqcd4YfzkqANAy6gQIBht4%2Bwc2yI43BKkOEIQEFLk57Y5MfUQhoUxl%2B5dvCyijnmrlsDlGvZ9AFANZAY%2B3Qrh8RAvYzE9IRCRU%2B&X-Amz-Signature=6d6095102108b10fcee37af5bf6fa3523c18492908b24b168ca0c8f30ed15467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

