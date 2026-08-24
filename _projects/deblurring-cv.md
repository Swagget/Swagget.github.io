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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RSH4OWE%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T074708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCKxUK1zcTdACh0mjblR2BVIkMczUV3%2FoOEp3ow643ApwIgfmSaOxUbx0%2FClf365f3t30lJAKX7riRWi3PPmXbcjmcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGnAOk0CDbX63OWzCrcA6xT1cCxGAhYtTuu3NjCLi9BbkVvvm9YZt2sE5KyXMTeZGMmnoBMbl2EAIcWhIjbRyHe4F1vRNjLQvaKIehuZcGdNNc3qpTwNzhow3Sj5uXyi%2BqeKUnTxlSsCv58mH8qzOi2iwDLjHqjXz2r%2Fm7YfwNexKfTZFtQ2j6JaffMwi%2BY3pA5yCrWoZHIHMM6bR42BegCfTpamuhkBm0XvHNfcjT2w9zMOTdrQj2r%2F%2F6pZuGlJxV8Mnt5OZs2a0DXa9iEydSB3nUETu4S6arLqfi3i6VG1CoRkB5jMwAcnGvTWibzU4KXtdAybrEdYAoqS%2FKsy0K9SiKYjQR06Zk9qASP7y8mHYLk3nbyEAFA3tjZy65WenBIu9Br2LSpg1mAjBrKkCzP%2Bz%2BIS97rS2g2OM68%2FbI4a57H2X5M7r%2BBAiKsUoG751%2BSAjHn5Zo6N1LobdwTboqGeAaLpTJsZJ%2F3Ow59fHvoncyFJVJ4%2BKoTUvwY1OAfomSbuuhIaVgyeDqdsOtROLswI5igMlpU7R%2BlEIcPCgOtxA8dF142Hxb5cNLL54o2a4mY%2FJh89WCy7HWyfUSNHxLFNxneyM9uMNX3oTMZ1S%2BEMKW9ELoxYjdzY2RPAcKSUE%2FMZpaenEJykaZFMI3lr9QGOqUBxTQGdFBgCPUqHxbKrMxG3qwWE9d62tJNndeDLw8vbncva6dBB51i8y3BlBz%2FOh2y%2FxoiAvMlyJn9wVVHO69ElujdqWpkU81JHNBghV%2B%2BsCkc9NFkAZ%2BGfxLk3P5u3CPcy0ED5e%2F52QFzfovGTCd1L%2BVBWJoT4sAQH2RDks1W2csMBZ%2FjQtwoHmU3162%2BgaprrtqLceOStH35C5ysJ%2BxpwJSKvBII&X-Amz-Signature=9c7cdd8cd330c407de657364a8dec13ffed03d9f6d9c758a4c4be74eb6fe976f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

