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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYTIUJB%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T200121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIELABOcnDaGRmNXLRrwCgEe%2BCd5WLVAsNTTu%2FEDaRk0dAiEAxClth5oFLgk55%2BM0wRxcAbOrDR5Tk81pNARXMOrathwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPddX9cwCPw%2BIEH8yyrcA9jXp%2BFQU85dMkhLfeNNn5gfdA9vfciBb7kfshISNCSyGTD0ZvIMJCNYWI1d3%2BwVe9U3r6Cxrjx1kInBpKCnI7uoBTynLlwX%2BOvWm0%2F6Xtcmw66glVQkO%2FubnWYL9p4IFTgoQDHwC4TMt%2Bx2Uv9YIW4zNk0BTChb%2FZcu%2F%2B63x3ea0%2FHiiQAMMnxW5YJDVmm163Eg73ePx5x0PCidsIL2ehk2B707jPlIYgyGsALkBeVqP80yQ1Qf3YkLbT%2FQPRZnScJeOBZ4gjZo3rqHAOTTeMEzzEhTluMJ0AQzuCBZ3epevoNAYw1kTv7udEcxrYndnB8TTt3sm8v5OehrTRQ1KvwVYHnK6WHfMxpRzV7Th11b3obVE50qwPhLpelHZHNM4t%2BplTI44DKUIMtLNyF1%2BFrMXMndyn23eNWNifIKJNKdGRBSVRA4usonWBVNYj7PqtBtIZxMs488iF8C3kjIbGODcnr4%2F0wEc49cyqvGQ7M4pTYLMdC6FXU7cK37KrKAdH77imuq7cRCPDAvMDr6LqOknubSVonwPtHvfjVcbEvOoqhCqsGXotVwNa202BhXn3%2BW%2FlF1iZv%2FZCtJGAA4v%2B58OOjUnKJeIqenMi%2FYrWXd%2BKKeG4bgH1esPhMaMPfC7NAGOqUBdJRkwHxwQaFuiR%2BNKF8zTuEYSOUV1YgDvdKjb9IFvze%2F0%2BnGeUijmHICtuD3Z4PH1UfAazGbqp3UMIv%2B5BLeDDbCFPbcwZTgersYkEaSD5QCoR17cQAjVpKfDtXAvmIiLhbU2hftDMk7tzAGH10R%2F6qI6IHNJcmvTvrNBKObg93yOMrtt69BgThb5lOIo4EeTQxdLCHyjKIufGOSMb2qZynaoWcq&X-Amz-Signature=9e9bdb115ea45d74cb3c75fe7f8a4a6177a1933c880f2fc91c99f4f80e54738b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

