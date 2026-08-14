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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MRCE7%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T052202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHIug3gXUPzdT2%2Bq7J0EtwseJbzqYaK%2FumbPISgS6wqCAiBlylPbwiUvZ60flgdFb%2F9Eld13v3a7xXO5nESgcutR4SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0mdjdjQkyeLUlI2XKtwDTmaB2%2FHC4o0fS3vwQTeGpPNgH7tKI8%2BqRHAbfDTfbvRQ09gm7cWbT%2FxI8enmiOLQ6NYR%2F8TbPj3TN3fpAmEoFgyLvBq39NjLDmlPnemjFC2iq3EwAVlsPhgLB1wVi05qrKvdX%2F3XtQJiMEor1kXakYm6oJtBDmYCfHb%2FQATbPPVGs6FL2nYrsCZmXd28hD6Vnl72gvFAoaY4mutQXDIH7bqFSyI4NjyIHV0xI64f7E3UG%2B1MDVUlTC6pxQMaEVxJ5PdebMR40%2FIdM6HJE4x9cUtg25SGjGoVt2dh7B%2F00LYsgMea%2BtH57CIxEesbJ6H%2Bd1nmNxm9nTi0pZ5rzY3S9WnQ5p5UK9Jw%2Bp7zOmWKFSJxByDj9C7IeZC8z1hJmdjuzCMndyDFaLkGke%2Flt3CsY3Lj9C7d%2FXk3D9HraQ28B93ZxWhFC8Kzv0urW3wGxM9RKU7zz%2FZFnI%2FLWa4ZJHHA9OcfflG0%2FFlKIUIKquwTY18hUPoV7aA86pabQQaPt%2BBf%2B27FklMyQMSFp20IHSCfT6erT4bJBZ%2F5DXeSWu4bkG4qQb19F2Qr3FQ3cHzBd5pIGA7NPHmGBI774BpC25uptvJEUNfrQ6vZ7E5%2BHuk9rdL20h1fseqckOuaKdswwJ360wY6pgGxC9Nyk4CfwQvVa7piatyFCQoaNnx1GwECIsK8n50zPgBSyh6I1ClQ%2Bdz0lyFQ5iGshx8uRBpbh7e4LFLnqm%2BlXBvjHgqYBMCkaln5c%2BQP2yxfbvyvxIgQSRtmBMli8gpyKGWSpcdBOlkKSV1%2FOAksFjfoTuBdAvyyhkFG0UuzwvSjAqA2MyykpVxtUO79c4PEG2e3RQx6usnjpxwamtC5jhx1keKz&X-Amz-Signature=39b46faec6d789433c5da8ec911d4202a4d288d28c2d0905058e61735b258123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

