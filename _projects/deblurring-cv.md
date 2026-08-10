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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6ONZUL%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T222332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3idP5Mw7KH21VujWerO0l%2Fnmuyo0CV4J8Kd4JS4JZUAiBdgilwF%2F1XEinyPn3HUNcioyBaBUkPH5geUc2ewxkqCiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjRymNz0wUDwAZwsKtwDd877Kinbn32db5urNPT%2FCE1Yk7J5ArtYV%2Bv4MOQNaDifkWHA2b5MtOQlxYDKRqSjrRF3io3deLKvGAIaYeGuNbS13u1pcR9w0iP52dVvh7qJyHjbuR3U2U6DPZgYIlGbaiPEHrtpqvZMNNCDgl8UmpmM4A4Y5hfNfvM%2BrIacYgDqEeKr1%2ByR0PjkHzaywEfU1Vn0QWNjmC6tCQoTaMcG%2F8iZuOqxMliD6jGNTxTstouZfpQff%2FzNOsAx41uzlOSBD2ovRn28%2Bf109DySHIYzQEXwtMOjEzu5Cr%2BaDlu%2FKRSQw9MC1axzM%2FuMh3mFAI3X6ibZOTh%2BaMqlcgu9rZarHYIHbPHFR5nzBAmIHbZlaZB9gVsBpRrnusLLOmt0TMSayTnWgIUPiRFhYa078qIlww%2B1gxI4JLes07ia026cFhHh2O8s%2FPaPdpV1Nepxr33OYF5QayfGG97NuddNnvRC4Z9Uk9HMu9TRzWmyM4Vn3uPTAsjrZMrJbIiKBLq1Hh0Iirld2qteEd2q1%2FsAqWa%2Fv686Q%2Fa3G0jKBUa8YRk5W2VObMB9bQ%2Bq70nwUChkuUWMG566n7vBESaYXmNeFQoZEF1RMyfjB5csvvkuXSzO9UtOm3HBPWFh%2Bo%2FU36ow7%2FPo0wY6pgHmBqBQgfhK8oz7y5P2%2F%2B5IlMJeKPgeZCHsLTGFmCF%2BlAaSPtSOwoOlwvnIEY88D%2BAr1tqJ29BMfQC7t9tWZjhV4OqNLjwoZiH3hYFzyl704eGaJgkGQcGLQzISmjGC21ILRk0V4CuNLp024WzDQCFU0Vr20Ga7iOSJam4srCQfmiigTjEjcVweiF2qNRGTdhk5w9iY5KZa1p14BeSBUw96u4pUJ47G&X-Amz-Signature=252b718ac5049bce690aa04e6657c23f0faa2c6f976cdc9fddd3455b1b5763fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

