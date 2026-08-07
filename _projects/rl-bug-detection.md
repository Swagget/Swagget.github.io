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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADB53QA%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T194140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIR8zJNmt8LPapYH1fwz2%2FsaasWuCxnWUktBq%2Fk2ApuQIhAJtiIzPqRL9GQoLcL60LGLLgONhjWZ2s%2BiWTzrfbXTfKKv8DCFwQABoMNjM3NDIzMTgzODA1IgxisPwZSX1CLCAF%2Bxgq3AMqeW7ADIxyqbsnLCJ%2BGqThA2Ar3WzrAJrvLGbEXzrPB4Bg3E4THeoDw38xT4tAEuM78qO27gAPcAzcMfLpnbDYwy%2B2j3JDS8ULeJ6TxZE%2FcKbX9X1iOKzrP6j7A%2BBc1hZbJXOkQyeSVh4exbqVHILgGjIDPxGuJ70qAm5TEvnFMVAWrDq3drGIqsSgYTv6tWsAYBYKWTGEcIreeY5g1%2Fc8JB6FF0mrk76IxCNAd9Cba3owiuIGpu8r85FAUGoUtKRi0njN0vsmofCZGkCUwtsp%2B61RmoClddu8MK9WGqH9dQzrFlMigsDpjxtdf%2FVFVD%2BamEK%2FbA1lM5iog1xOrqiX6NXl%2BWRk2rtv%2BTtSw0NjEEuZ1wbynQZoZ7YKr0HKnnPBEnTC9yWbJqgzCRefV6vilTOcSuNbWmz0ZYZils6itW1o1Ir2mEz7pYWnctyYgdf%2FjH%2BPW6n35vtKYGovnCMdI%2B4W0QfOyTG%2BaznZ51vksA0xfbOCdOnpgX9SFt53dyW%2B%2FM8LMv7KdPshhP%2FC4cAQPRJ%2BEEMCBn437xEK1u5r1DfOM4DEBMzDuzA6DsfJNmeXuALEkNgPWyVTPHUjz024AXExdRZrS0XWQIT%2FMQQ2oALU9emaiB%2FRf9NRHzD30djTBjqkAQ39aJJ5ExtDLSA0KthNIMCsprFLJiniQ6KGTjT80CtlIEl7yoU95cAGFAyA6xe9KUXh42LQEqZeNHumT55CVY0n3gANapnqPwGrunqFyDSJVt2CFLtokqXKxYkRgpqkfoaXATSs0WBvxehyG263jfpPVAdYxz83mQalyRjRjg5kPcozrjdrgYu4sAMndVZuugv1vv3i0zWZR6OUIttmMyxepdf6&X-Amz-Signature=545602b2999f3e36355bfcdb2764c9a217028a8aafc5e72db2c398b8ab3223f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

