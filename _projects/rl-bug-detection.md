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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNYIPC4%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDxJ2wVPLYNJhxPYBY9qPpMw1tmEu8nm7B5pYLKVpBGfAiBVtU84lHDSUdRQEtgV%2Bb9KUTkeapZspDlSY0shEMBxnCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMXYfdrl26S8ky7ncTKtwDRIm3o54D%2Bnfp%2BrE1yZXjVHE69gd74CfUrPIVzu0oTJUSBq5tMBzVvyZgJbqWiG6wiRJ0jHIKxaZJ6GsVKXl7OUTIaW15%2Bj%2B4ee%2F8qHAw7LcYr95LiHCdNfdAjbAs3aCumiSTpresjlH5GvVlL2hFiC6KW9LdyDQaY%2FUXf1fRXOyJfxBOEGfdRZ7E%2BouGBQ4J1BwjLwUctalKhzrPfqURX%2BA6D%2F6rAiDsbXTSJeeg99bUg%2F60JAtdTx5jVlo4QhkwWRNy4csZA8lKSBSMTIlVhNw67ygETN%2BIYtp%2BD5F7PUWih8rgLDlSGjWu0Kh94TyFrRcrnOZoUknS22Yj31BwKaUT76KSog%2BWqsAZD3%2BVXSh1q0UzXONeOtQiZoWsHte%2BUmBrqIPTVCOGW%2FODZd1DuM6Rpv%2Bdafq9EuweRtBRhK%2BtKH1U8eSqiGW0fxjzSb32tnsHq9drIMrqKUGzO%2B0TE7E3ywmmS8UyBQJOqSkpeju3HymgWM%2FzEacX8THjh5BV2lVFq7o5SXNmLRTcYCLi0w290dqvZ6wJ%2B5KXwveefdETT7FuyJJM0jNfMLv3C8Ws%2FmlGNUzUtTLEEG9nzVM6DSVhGz%2F85IeAs6yi%2BFarwXNdHIqFezaFF5rXZR4wxsWw0QY6pgF7pk%2Bv4xHSyYCbHePdx0q5%2FzUPgzlrd71ZQ6%2BzCp4gVVPa%2B7H8RgarXV9R3oSSPgaY6FAsdTFB6fb1ErlDGFmij6ohSTHR%2Fi1AVcia1PRkisLeFPqM61EzvJo7r4WNjij6rjBr%2FjKjmY4VPsc7YeKvBApuWWIpGMbfYvJ5PbHS4KxvqlAiFt8tH6UthXyd3aSHrS1VDXfBhX4rtNaF%2F0MMl8DJc%2BiX&X-Amz-Signature=ddc02307326791ea10c857b3d685c05a024fcc25ca3deccce5ead789fcbb7023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

