---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTRG53Q%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T092709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIClYwAVB1QoA5%2FXE2BcTIr5boSI%2BVCPNEByQ74lIkSu0AiAEnG8U9cyp2IGyuQe1Ew76DnbNYLMCJv61UTBuqHA9oyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMi5Z3dr2BkU1Z%2Fj0TKtwDLD6x5Kct6M%2B0FIAqhdMsn2zkCkuHIHq%2FfG%2B5xZstkz4j5SB6k5fo3ZcjBuigzYUG4PekfBHm5yFGPT9LUpLQUMWsvPASaBre1l7UMlnKNpKtTrYOYkar%2FVb5iLBLaVPqsBPdDWqLV%2FNDd9wrRaXSWnvMnLJ96ICLBTWbOob4dyoslWZ4edrsuW5uAq8kZNE2Kf05bMEdszNXFv%2B9ZSkOhF1a7YDiC%2B9PU2bwmvuRtVNvVRxt9dqDIN5c6jcb%2FjRCHgTTH7z2GvfgRnE2zMTRM21rHhoaIhg95UhHKC1ZrAsZqsKgtzJ8vPDFeUBLPyzyFtAezzJYWWqo8gAXByVvBN977wZHmLsjs8LYt9GW%2BFB6TjzqGD4S56YmmKJgPqaCUJFEgs7MUy6937HWVYuF2X20Zc5iGFCsNDZPx8KGY1JpKCzuWtJRc2%2BfNG9sv8Dv5w9UqxtCsmz481pppx78Z95qg9AszJLmXRTlJsL%2BUTsIZWml3U%2F4TN7LcPlHpV74w0uzRycQsHXa2T9A%2Fe%2BbBBevOw8qZiUwpkokbjQkfFnOt66u%2BGIovtkfUOinFXkIIOc0YBpoYv3Pt8N3cp8oeUuPYMTGcJs3Uz4jIXJs5a9w3ghWG%2BPPwQRoJqEwmoeL1AY6pgGJp%2FNSzsJpZ5QNTjQy8cVDAS7nuXT9HLNhlSDVoQuL7OAyzzVyGjZJM6sY9pcJVhyS9hEmwVd25BN52wwlJ%2B7sQagV0MQV6UaO8Nr1wDJMYRVz6Y119SucQvhWoQLzzFvfY3gjK76A2jyVfG99qByFEhdLMpmSi3S6bM039EcR9QxZ4jmklRiJovLknN9bu4aGL%2FQfC3NpPoWWe5vphqB8%2Bp41tlvx&X-Amz-Signature=16ea0b97ddd9e2cbbb8d12f3611f6125869d8e25211fcfb20c345ee88f1b9e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

