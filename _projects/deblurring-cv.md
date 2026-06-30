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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ONZJOM%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T064248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClHGLXOoOIEvQQywJ6mjRN6aozMprdrQ%2BsZUdjU6nQ5AIgXNHXhhphcLMX%2BSGVTE%2Fyt%2FS2lLAGYYJgFjjz18qvWxIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvZiHmMG5YiV382%2FSrcA6aP0Ibj7NzLPtJhgk32P%2BQGzhVl3JS99OctAYlvXwAzxdS1xeV8Hm3JMKj5gPzb1CZkR1yPQ1mXSuJANMkUYlfsIkxT1qMVdOwhsGTn9s5jlXF8OP44wMO%2BGZtZhx8W1%2BOGr9iaHkvROa4aB%2BiJeudydvfD64bQ7wdm1bAKqu%2BgupBGG5cNpegcZbA%2FLyuNDvy6DLpx1Q04VpfRD1KpcbOEftxUplZkaDEA3OCUPyuSeGBfFrHchcFs2lVesyDYFmCnWTDl08ztXzZYkzQ25LWTTJav%2Fpg07lBeEkZF0fq41stlVvQkNI1cxIfP%2BqZAqtaJQXGVnlJRh8bA3amjvgv%2FeiK1YJe3VJ5PaUFlkSKIy919w80IW4ItiRXnqVU2vdhtjYB51iSnTkr3UzCn2n0NSleEoIRzmcwC4ilUor9%2FBcuynNjBz28rvi9srlCE1bxMamt2vmC2T0d639zq0cvI5AOF8uAb0TF8LqmbyXLXauF0jCdTdnF%2FEtQkvt9tj8BlGYO%2BelJBjPYfC04rSmfcEjVSVY4ZlAY6HIu%2BGbF1yMDEO6N7G3IDcxJI70MtTQww05KZFvCxwr4C2i4MAyOAURyioJUSz58KloebeRZnIgsxgJ6Sbt8%2Bd5piMJzIjdIGOqUBuGez9BfU4y4UcfaMoZguRkDNUDKGUtdHFtvBu1JEH4hlT%2FAmqVcIXHQd0qKql%2BpQp8Is9m1%2BPdckvKQ6s%2F2ZazqZFriNenRs%2Bnjo9H5cVv6JKhX6iI18kcYBr2Lw%2FcCTyZLEwOEXeX7E4XwzFxoMsRtmt0Lj8KquXOd4Jn6pMc17bdE%2F%2BjvuUFtCL5I7kQ%2BPzMq2ZYUP38%2BovClzAptl8u6MvexI&X-Amz-Signature=0fba0e6d25eef89312b83214fcae8c4f0e96311bc515b7ef63e2fe809dc2a7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

