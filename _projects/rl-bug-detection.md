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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YMTP6V%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T224848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHDZQIr32CVg7zzDY2TNYRvFxEY6B8SaujY%2BOs%2BHVk0%2BAiABu5vK8fxelOeVQHEExyrNfBofICXszuHhkC2%2FkyNhIiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzMbr9PzRM15R1ZtIKtwD03DXTkTZ3ri%2FnCsQFxyF%2BE2yRSgqaZNH7gEr2AQjk1fuxA4pJ1eMXT23eVzp2iU9pyS%2FfwEmnjzzUgSXCgzkwZtt3P4m39EfapEGiXQQik9gekvUDlPq7ew36LRmGeHfWnMPOxe2fGciFQVKwVteMXflMITewm4E7f4cq%2Ba5bkn%2Bv%2B3VvIl9xxLn0M98UwVCoPJBUeMcKblXImAhhew8Zlchin54N47olg8Z9pJho%2FwmDarR3BisbWhiE%2B2NyEWkGcXyJsaCzaBXb4Zxon%2Frp09NqvnFbVAZ1dOYFYBbhoF%2FkS%2FGE%2F59A2zN3fUNxaRJXmV46uxASQc%2BBgVDWfcMW46s6C1IXjNZCc2T5DVbEcTTJYROTEOOx8UNR83lvR%2FyzM9lbIEnXW9A%2FK013zgOJZvH2O%2FqBwbxrZF1aLc6%2FXfs%2FQMRw7WMvrWjLPKOjolr0v9oAHyswaAWXCrxzhJ7QYSmViIgK6%2BT48k%2BY6czPaJACiuEcpva6uItDbi0bwDtRjVMAnMIET6%2F%2B%2BS26ioDK9EqHvjP%2Bbl5rJSocAwTvLow4RL5yC9UBVQsxGuQ6lkKmT5rmFOzdq%2B12Hjx9x%2B4oC44DwZBFudenmzLidJG51HWLvDuqVeA1%2BvFyxswi6eh1QY6pgGRDT1qeS28scselBCAEUs8q3%2BhaeEdvgjgmC3S4zyAPoRqMsRZ9thh3DvaLscV7UnVIZYn8VqNi67kIgVjTf5cf77ov9nh7IcJalk54omqQRUV0B0PP5MIaSzb0ia9gOT8isBoToc%2FzE2J19mMy50%2BMVyybOYU2zQ1bNOdDTavLkz9jxHMwL%2Bl2xI%2BmrheIubLkyEX%2Fs8HXQIX4wc02G5HOkt7FCqE&X-Amz-Signature=0d2e44141ebcc5acc6261f22b21246583b7901960cd672fd11270e8998e63e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

