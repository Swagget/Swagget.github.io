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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCZAQML%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T214732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDwWLMbgTiP0DaH41BReciF7CTUvwYfsq%2FHGGh3kcO0IAiEAqufsiTzp3pjovMdssa82JhcxcpCzw0Bnk0ihsuv6KtAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIE0a1flqTHKPspSrcAw%2BCUOGtonC8rBQq1rIQfc9Dmm2P7BkUxt0wS9gc0VyLN7CKTfqJb5BR8U%2Bt%2BJ8iZmTM7NDh3bviWOOLuM9TmQ2qrDNkuP8UP0fpXjwcq%2FHBmLKWKu%2BVV8A25VhdJP3mLeGVEPCE8f4wIOUL%2BB3V6T6YAzBm74GX8g6gCG%2FyxQyObpBky6qRS0jcoVRzfYcNw9svZB8emZND4xXna1A%2FHoeshqJf9UY72gA4PrGWL%2B0ZeOw%2BvL%2Fg2IWZ2rDyVBMrQRksoupMStFthySlNk3GQuWNkbtxNQ6bTYHoD2pkHnNa%2BNPTkgFMqx8yXjhUEtkduEUZB6Oovt%2FhbfksFvC9H9pWI5eXaXI%2FiIy3phN621iJ%2BPynEvnKTbAhelSHQhnO8siEFxyQhBu%2BpHaFMftwV%2FsDU2FyAqZy99x6906aTI3iJm%2BHCHcu11LPTf%2FqYZEcNZY7E0Sac2sLPFYss9FIHJSWqcTaAj9mH%2Bq2qFUn3DqxlMP81DcF9kfvqx2RJiP2lT%2BwmxRNAuOkCRx93YzggQTULf4Bm6x3ywvRozuBzCiCbKhQWXpsTLcHBlFAEr7UEJEEbvL1I%2F7lDtAVMuT56lKKWhZ7POjh4LKXxbkEAeLyl%2FPDPlJ1NdBdlwSyMJ2v7dAGOqUBSxMsI8UCOTJScIRGnmnQROSXJLCedshHhMvIpCCuoyVTG0bjGxEIqQMOXMRkZd2TrJbChGM7ftk6gbPqFUAkR0Vsj0PfvLMj57UVaWR%2B6%2B0aPA%2FdScIXfTK3C7M5xxg7FVQzmQ1QRnBladAFQ%2F5yLOPQYoMiQLnMdiKHAYeoXozrGKwGhYIVMXb4SDObPZHVzHCOY%2BbWBP41Z9IO6VQJEs%2BQJaDg&X-Amz-Signature=a59670a806c31ae6d7b392e10580b35030eeff031ee2cdf7884a42348d32e70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

