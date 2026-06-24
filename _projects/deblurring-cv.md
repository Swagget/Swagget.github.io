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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2GQC2UB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T211505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHVDhHjZWWpdhWCKXeXY7YEzvICHW8pf4dSiZZ5mL87sAiEAsnIkrP9UplPaX%2BwCFeNMKnE7Eyl8qzRG%2FY6B8l6oVTAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDL6E28mt3Xn5CF%2FY7yrcAzSfrzuDQxiN8gwU9PLGlWwOz7s5aLXMbuxnHZ98ccC4jgmfkne98UWZcdX5W77WnSKx2AoUfwtXhyX%2Bgx9xwi63RH4Jjf1O8nS3FOPva%2Bk%2Faitm9l1wmtev2wPgjUphjiyTAnifoVH77Ej%2FgH%2BVBT%2BcnKaX6hbtqa8U0AAUmKgat6kvPXFI29xhyjlUS3QCjvWY3qxlPMUTE51lW41rR61GsgmCkpejceznRHzDInTt%2F20%2B4qkKpdRVFta7e0PK76KC3L1NzrJWl6TnQtm4xKKQ1AZbjdb%2Fqaqkt1knHe1PKGtIHGoJg8qpd5FmbW9k6ooLg21mPxhaUTP7DEUhf1okVTMkaIm7mh7fHnOxDAvIvNh%2FYlCnjMl9TBdyNpHSyhopgYawf5hFR99Z8KGGz5HORufc%2F8yYLAar%2FVwFnc8EPUu2A0NMDWbYs7%2F8pEUerh7LDqB8DwN87A%2FLDZO4%2BIds4U34C561k49KZ4ZQY6O4PEC4rduNXmn2gqn8Eg60buTDzLtBiSN3U7GbzsLyZmyOHiNSfY2WsA%2F4v%2Fh3ECn4WOtImQm%2F0%2BhfP1egNgzhvB2C08y9AyLzF%2BRpTazPoDEnBYZ1rzu5b8Q8T%2BChy2cMfy64lgMSuFwMIDPtMNX279EGOqUBVGd0386PmjUkDjNEvqoMkfHpBLQZ0k4GVZWhWrKS48e9kRKfZb2s3fHPEI4jNSfQT9QGsgEsArhP5iEzJzHZhmIqL9IXFTUlz5bgBop3f0a2V0%2FUPU75xrQ6HtTyZDx7hFfaOX8Wbhsnb8w%2B%2BM080TFO1hk7Pqmeh2f6o%2B9zyZ2crnYz3VRgmfAbVPvAVyK7rFyNrmNOqy98lcUpdfCs%2BcN2vXM9&X-Amz-Signature=60593d5e797e79b4497cc7e31f4dd6f57c0a11672659746645d0a9e79044be23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

