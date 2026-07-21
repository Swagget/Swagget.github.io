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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJZY75O%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T011944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDidXXr90LuHxRC15H7hlE7ZqVUrzTJ69xBWW6%2F3VQXLgIhAJgjOGTvwmAwCj7zkq3iQZnd%2Bp7yZwyU50pkRSd98GWPKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCDriB3IIB04hCjp8q3ANVz7Qqv7gzD7oj3Kl9NVK3ReLSy6I1fZcKy9ZkxkZX3qQQt5k2X%2F1J6qNx5MAJzf0pyLOsfaGMgxi%2BdFAuBJnHuanESZmT0BuBwsTKiznSBrvNdZyXDedQ8ufow8qWfZKKSwLBE1Qi7fkLqocuwUeH4DaOE1YuU0s8b%2BKVR3x%2BgnyYsyY8QLbmKKgILyV1CT%2BECmmyp7lXIj15jrG4HMt9c%2BP28nlaxLjtQy3JfIB4BXdySzKXY500MRhZnjwZCOjsjy7KQ0cnqDFP1VHn6Z0w9vFTXadZyH0ojVn4yrPTVTJF1722tRzZ6NXyrm2cB5dwplbEKMkYPm1im4g%2Bxdq8W4IXEeiqOBKJCFIhkKcriYTaYeyHdnwxaWaFgaadMr1KwIuEQA5wJo5bnH%2FZHYINh%2FS9jDIS3mBb1lYWi9XeKkQEvzXGzGwinm1T0OOIAMmrSitkAMlz6MEkjeGfsflOJy3WYBfXRzAIRvCi5VRwkm6aDIDRebgBZWMwpnuJGzSfdbNFBXUa5%2BZFtkxqZjwbrdaaSQYMCoCeZ8BvaGFOHFRgx7hEb0TSdZTaF8TOgjQPJ7ofVXKpwATvvhxbiYRU%2FGfgJ3fo8KmHUNNa2%2F6wzhWhFAcPRgYtDvdSVTCmv%2FrSBjqkAS6CfidkI0aNbMl5itsSaIZSqqJpzJEv7o4CliFiKhtCavPBD5EZ9Q6ZxuV7V8V29bZrfc2rC2myPWOqeaNMjwtLSQ4evMukjiHTqOwnUIjOfckW3RQkZeHV9VADSWJpYfvK6b0dyYvYbfLvdSrQYg2nofhzr6CkeNSKhrsLTfP1iKls6WdPki6v1hF1MqRmVJQPSctI7hKdnbIqNyoZczx8dptG&X-Amz-Signature=9b756716dc77474748c0fec85869bd3e7b96db7e43cc4b39f8bcadf610d7055b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

