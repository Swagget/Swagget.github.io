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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VAEHQ4%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T160524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUz0xVZipMn57IhwLZ9h8wk0mq5FZIuuHTBz%2BctSBO7QIgLclVW834nnyVx8uov1b2U8jmbgNRTjFZPNQoTfPraYIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFOeihS67v58N3RQwSrcAxdPeAc8%2BkfziS%2FuzmU3DHt3nhZUdUbPPhx7WH0PSiTnvBIODYD8T5xsTvzYMQPoaV09dWhuM9sH9ootLcr5VNY29JFxEpprJ8Ct9PF5hvN5R6%2B6U4GoiS7g%2BYdz%2FbVwVgdoy2vCtfRrWVTpJNXO2wCBm4UC8VVcNMmhIDztJXCV%2BYyG5Iq6%2FFnzeJ8rP7%2BbO2l2fgXcu9ReG9WigWXkFHlh5GZ2mjzX%2BN8jdq8m63MvpKWikcLyEC8dkWHdn%2F7JdBU1UfDcxk3hFRSsUDO1otryI7NbbnZenAogCtM8lQBeDP8palVWabRN0bONG2iOwJflIwZi7S0YjrSgK8cmWvus9zU0sJFuNxvHaLMXRadOjc%2FXQmcJJhnWmL%2FQwFgPjMEQu3KXt2Aqwn6LO5QrLw%2B641TUgdfEauSZ2wYayJO6AabAuHD6CisgvnO2DsRVOIE2Z%2BFeFQmk5TBEwdVKdY2FCugrIrYYIDXClF8RSxM%2FpxTtGadiIRdE6pNhD%2F4DFXjnFGW%2BUrYBaw9UC94VDDyl80eHuQFxLGyB08Jq8QKiuqv6%2Bbk0qXmTsf5cMFBO7w5mHiYygdAGkmgTnY%2Ff6MhkBeICA2%2BcHDmLuQTBtHLUMN9TgRi5tIE%2FQ67YMMXB%2BtEGOqUBUBoFxGpd4BLyiNXfW3FzHrv9lN2%2FVRQRvQSacH1tgulHqAmg%2BC6P2O6sC8h4amk4yJG8w6p%2FvsNwCPHTiys6yeCkRl%2Bs2ilXZpihGBFCs2utVQ%2Fr6TWf2nnOEFtSNi6zyhsjN16BjNsnqAeTKAJVLpwgw%2FH07XcXJWIf0vP4RgXt%2FDI2a%2BqDJHiN%2BBG6IYIeC5FBCP7msIhge7xNho1alx9796T2&X-Amz-Signature=8c8e0de3314c6dc7279a3667bac35b0c1721a5245906cf4d80cb220026dc1087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

