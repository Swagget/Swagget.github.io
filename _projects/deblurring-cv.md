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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPX7JJ4%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T133924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoLnqjewwqURbmfUSpY%2BjKSB7sPwL3O9OMBK7iQDN5CAiEAhx%2FImU9O13ByGZsEYiaqBlARqcy9Q1Kb8gn%2BmuhW%2BfEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdXV6MoY11d4LmyVSrcAyHO6P8Ivb0c7QWBD%2FYfWMXWlUtTXEtUJ37XtggNh4v5x8S%2FeYKBgL2GVoKvcm0ezNmDr7jmbfgBQRjnoEKI16WFCO65JQvoto1BNeJpdd8Z4P%2FcVN3II3RFd0gCciBhURnYh8Y5s7l5xEbJGZMuwNRgOpWP7gkUsLiMKzAStsuQZwgJlPwpIjW7RnnTcOg2ABVGdiNB%2Fa5u3rEXsshsE1VW7ahLIc6GCOfg1YX%2FCMCrA9WdAaqghOISWZ65gjdipTpeam73EbFF%2BaIA936c1ERhvSAF53NC8Y4zYs3t%2FuHUjKgeFiKUSABJE6DZ8NUWs56okhXhjuZNQ1n9FEvLM9XY%2FKeaWzSPj48LbyXrWILALWg6mhcft%2BvWJdmfMZU%2B56AC2iIQ4eO7e7fb8rSgIeKoxtBbg1Xn%2F%2BjHVfzLw0rmijTZL2Ps5a1pUutT4XKmsgzVA0YhXoPvaTlg5BF5RiAFd1ijvelWxdoOBp5zy3hzcKOARdiQQu3DYKGvUfnMenXITZgJCwPixjCNiJ1G3kgi6GZnNmGDyoMSiEt8owl8hxSlk3ISiUYEjzJxiiw8bJNHTDE5ysrvBIq42YJAkhvA89TTkTonQFHIv4kkDdhijuDhtFRgY6VEmR%2FKMOui4dMGOqUBl3Jfhi72n8T5ynVUe2r2TbF2Ago8GC57Ah1frlOhaq7%2FDF%2BnKgf9YfkPEceHr9EqLJ7IOOqtCm0OFL58yTrHcXAVn0x4TfPgOsGmzbuQwwSrFe2TWMtcpz41msKcnd0bORKXYucV%2BMHfY95ilDfYs%2BpoLBx8fTg%2FxwnIF6dmXEowDuW4lklbn5H2yxIt%2BycIDBMcI%2BZwN8NMqyC1AbDPhdYwFlEh&X-Amz-Signature=7e34340623f305a731bd911a490709e79be0753325bdb784d04b1fc957bb319a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

