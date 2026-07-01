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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDGVNOY%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T204359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFVJWcsEBEsq%2F34DQCg%2ByfAtM7PEqeyWC%2FsDVsfcMUJ3AiB8mPnjKFGxqasjFs8Nh54Y8Xh3d6%2BFLcTfp1hDM3wgaCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5dhtf3QVdg5GZZQ6KtwDNfHnDWN8YHrzXP6eyBfx37vdxaNxGNRZHoXqAMdRPizehPiSi1w387wI%2FpH3y%2Flr%2BtFF2kW4XNyr69r0RAOSRRaVARDUgUj0X10z4kWLO5fX1XyCDVGR82%2FqvvK%2BI7oOjx6TZpt5bhaKSXV7BMD3im2lEkOg5WC%2BAfGdbTQYzD%2B0oh7gzd8dViHVw1TTSZhn7vgTqcWwTstRV1kPzRtJMjAmpa2lOgcCnePq5rjVJrb%2FRPFR7DpQj%2Fu%2BUeA8yuak4Ps5kCimjEcAdlyBbxkdR2zox%2BHcIAMSV2f5J0xv%2BgRdkXBQ7MpRMZJCG3UmVhr1V7L60zSvohhp1sRounkyLUHPwakw7N0NLPboY2sKi9lrN9nTx7kqsu52qFKADRnroizn%2BtcfMSBEdvbWwyYlnSoNPdDTiqcrohoW0lMHJ%2BuCzjchJTo5NFXfdFt1qiXbm10QRqOzdthgzAzU32bOGvUyfUI0qJ8ge1N2SZniHfQhNk%2Fbd%2FvS6adG5BBcCyvGL4h1Jf6GfuKoK6Y1RvwTzwPoTC2OtaJcsvhZgRCbbRjUmZeGfxnC10AFWpiOfD%2Ff%2BU7dHt3OOaphcS4nNaZVOEKowc8Kj%2B4jlhP25pjCSa%2BpjQvUM%2FOlu9MjtM0wwcyV0gY6pgFvYC6vZnm0H3dErONGOX3hyh4PjsvHnRbVMTJgKwf8rh%2B60jDWn1yOMM7U4105ScaPq9x1teRBOO8FYzxOC0RzWIjA9xQgBXOlaTmmiGMyhZxh0yBsW3axyZH7IPaInTmo%2FojF0qa0%2BS6fW68NgbCos7meHjFGWgGcmtWlgaAI7rcjJaVmbKLjCG1cD2Whp1R5rEk6OTjF4IwtwzrO7MGqjItoEOzv&X-Amz-Signature=b7e330ff39a9273a3622856ebb2987335a761a81c18544caaa63d7644cedcc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

