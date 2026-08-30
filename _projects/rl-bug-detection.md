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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJ6LGAI%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T111941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8llEn0jNgaNqlG91ISB19Iu1W4BNHVPppeWdPxl5YKAiBsssTA0shY2r2YDdfgCEMqTU%2Fto19bbJ%2FgPnmIJdhigir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMdhNqUWDV9UzvUlpYKtwDXlrnQT501k7exXwemlF%2FYrAd6y0kg5LNAFS1goBBBeR5tGpW5OG9SDScUuY41jTRYOV4HfuGgzaiGlVluzRTkgifwYur3Vryq4yqJZ12GhQTpaYF1iWPAcHs4mvjp%2FtXBwrdfshr%2BWZniD7QMfiSArOOT62pFRKFcgedXBXi71NoX8UV0GlHHNO%2BeyVjt8DpRoKLCKHqYH11qay9YmOH277U%2BJz%2FG9cZ%2BKpVcVr3O384CvnJ5jpd2SXZKC1vbtEAOhzl8edd1XwZulyAO7fEL%2FJjjSYeshAz6HOQ9q2uvtZ2ZwPkLd5%2BDRYW%2BjBa1YpcHCYHQl5utORkWK0w%2Bburit%2FRSjDgtK%2FO8sj5iSlTXOR2x47%2BuD1AxYmK2IPtG6kRizo5zKNGMxy9XBe2jOtgJ1C5XbjWxZL2M9TRv0pVePBr%2BnHwrKR5V25rZM0SfzVGsFosdyvPxZ9PxXTb1q4Ee%2BIH5O%2F6%2FOEHKs9oh7mGCDPO4uHEU5k4d3oelV7yJZG%2B1p2VQhxZo5LS2%2BV1D05YstfVPLJn1PG8143S%2BPU31QAKRT33%2FnH%2FidQWUTx%2BZV%2FYRnXXfRzkL2%2FLhjM0wqTWZiHPch%2FAp5K6ePjohNVgXOjaSwrtlXRMPF%2B5Fd0wjLHP1AY6pgGQZkz7Y%2FGeEQypnuc7AO8XYEnzsAcXsycd4i0oBWBWdd1q2rxlAgMOaZ%2FpNZ7A66TWNcr8grSQsfJHElR90YikAaq%2Bv6km%2FDKw9b9Z5FDWHFcCwQC7gUrgj3tjW9Jf3V6lKuV2hFRBmIU4e0aR46cx0E9gNNFoRUR82p2ILCB5PpmOb223xkC0yL%2Bh%2FLA5%2BvhoOgsSQi8EAsFh3umaVOzP1mxAND1d&X-Amz-Signature=3559734a22a28b84fb94d24c6d2c6aeb5415ac40a176fc7cfba2a3c9a5c04772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

