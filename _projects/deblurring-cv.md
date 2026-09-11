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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676N5Z7N7%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T233641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAldPzkI8OLNlbQKHDy1rLC6zhdIYvEWOtKR6jdpZQ6aAiEAwjEd6roUs48gQIXuw8r85B4AA8swz40VBbg8zhLOBDsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmDuntpWUFHC5TMYSrcA8%2FCqb0m0kZHnSuVrdFVB8Mu2Bf0rWY15uJoPkjRYS%2Bm3vCBqGvQ%2FkzFvtNmZup0VKprNbF%2BeyXtOYG%2B%2Brwq1DOVkTUmtWtGQCp56l684u%2FGfjZUcu%2FcOocQYDvlUhUbKHu7%2By4vBt7RjB8tf%2F%2F8m%2FosO%2BinRhWWD%2FK%2FNko3pTq6nSHbu1NqkIaUuHSzoMNEMMdHkvm5vFmLUiOhVBo1q%2FTJScBQmiV%2Bt2Bf2DEQPQHSUolbHa6wMq4dgRjdRILIOpPY9JmcgG62j8z4Ad3SyEuEFIGz7QmnEurKMKvsuIHAdyazTPOxfINCp7%2FhRRGR%2BoV2AhtOxKTf%2Fo%2BZN9jlCKu2tpLV1kHrrOn4PpwbKMJJsTYTzdcG0T7K6cgK6UpMhLkCaLuScZf%2BnbF60wBr4KyS46ztJEsNrsH0MO9QB1Y2GWOr%2BzcU%2F%2FnzUpoCzxotyK2%2FR5L3v2WAiU7apsqP7NAMIVbDoYin0PRwCiAUIk60fiZo6%2B49O7vOBH8L0smac6V2PvjWBulUKgc5oIjHMSYLiSydL8ZSKjYAPCI0NLitSUmPs4MrZ%2F%2F3zgR7vER5p0pdIOozD1W59H0zxw874wbL6b1fnaZsLP1LMs95ugcAXLKS975CbwvAhDeEMLuBktUGOqUBIYsAIePGzkonsMQjzfG8XsbLAf%2FhM6wXfacVBykNeOvP5seuUMsFkb%2F10h3O8nv8YBzl53QOIgNChfAFrqMbRXkjm3tUjNOp7kxic%2FftOQ2sIJmb%2FIRl3Obxev3DJjPOIl4win0t9b6JvdUYrkw1v%2FCuiuaPYbRgeB8yPgSGtiOxj2AsnkmET%2BvpIk1K%2BuJAr4TO9IkkZdmogQD1jLNPJrjjub3T&X-Amz-Signature=d2df052d8fc3164ca2be9398d2dc73c847290388218c6176f87f4385fde8c520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

