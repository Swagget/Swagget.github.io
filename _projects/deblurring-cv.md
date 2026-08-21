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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQM4KRE%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T133529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5dbFF3AUjl1ahS9AqxD%2FlPTsjaqblmE7HwbzsGD1bygIgDZ3hsVfPsW5KpqwxPuHmBkgIzkWGfjAwSz5IZQKpyxcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEmFqm3OoOCUAmKqyrcA1ztRI6T1AuNdID72oRQR0XgJFsKYGUv8LFuHZTcy6xokoPW%2FaLbqOCipsPSFFvCdgHYCDuAiHH7hNNFVZkCLRH9ztPxt03sK64zIBnLVJT%2FtW0VljpVWcHT4Ap7uQotCxhcceythXUKSRAs8goycKux2U5d3WcEVn%2BsftXbyljIq7pMdSawGPnTev1ZyDpEZQHgIZ5fVOo0m7KCNlmJV%2BrNAH3WF4n3oM1oDHZO6SXRG980Wol7MPep7IJjAismIingg6Jxbw9FpAuQthuFkCNCye7BOli08Vi5gHxHmx%2B7ihn1rmcFhSJ0rzwpi6gx2zraAUW6CgFC4bLgxiO6JpwcTPSn8yZNM%2FdN7l3SYAimk1LoNTg0F55hJUdbZaWc7hoLaeqXr7V0eluWWWk3mYG9DkUQikU0AaoC3JqrpMVrWZCBc1cqqy8NdOzHQMGgRQpyOKPBmNBAaRYgfc1%2BI8Uz%2BxtruDILDTUotS5d%2FO1m7vuWwNpeOd8bmwSrZId4TU8Xv%2F6eQ9FTb%2Fu7rEcJXugzIZ6ECoFVNOv%2BhtR6yFhzHJGxVrnQtQpe23piijqaYWxfI8sFllYJva1miaosQo0jQGBGTpVH71PAoM2JJrF3oX6SYMi3jLtx%2BLfGMMKModQGOqUBX6jwlllloEQBZLOBMExjY%2BTKLTRTG4gsyPp4%2BjY3P%2FzIEZyC0Y99Dm7TMDODaXFi6X%2F8hsGZ4OOixbs8EiBMEbuZgppQDGuZ3gytCCBt%2BVZrLxQ3XjVHw8rGOCa%2BT6QWYIOjsDMWFYahhHOdFX5vl%2FxGEpa9SsrsGNZQcbgXYHKQ4R8qfDuMmIBhZUIOreUCF9XEc2fAb323FoLe%2BNXAO%2FjadDSJ&X-Amz-Signature=eb97b27762b43b87ae42ccce316ba23a880d8c98c19fc2d1ccfd0c7a3129fe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

