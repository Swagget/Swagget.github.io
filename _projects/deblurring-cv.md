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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CY5ZWM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T052609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCgZBfPguDK2P1ZXdpEvNIeHsI1OYmDc%2BT2VIZshRKwMQIhAMWGEBl17RQCHlQ%2FLGnd2HXMu5YWn8ympRRjWIK9LglDKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJXwXYOimzj2xntP4q3AOHYZNd7XsRcXMI5Ll5LjfbtQB7RaOKvCx9FJ6JmOytcu5d0BGuBNDw2XUBMezPk2GvvEA5N4gvVyjROm9m%2FKuehbnjjxMdcjUf7ecSRpPAO%2Bd9pIE94EIwx77FkoXnSQPOqNiPMrV0GlNf1%2BnFK0hU3MOjMsRqiGhZRW2eLuuoyZr7OPnoLaX52yIREBXNvqtvEbvu8j%2B573Z2My1PJ76eg7GGhE8dmwuG6BWW7rTYz41AnuKSBfz3JCc2sU7fZm%2BzLEjjkWow7Mri3LMGJw82hrDo8LEuw0jjVdq%2B8IYjE%2FkjugIVXTVlLIfsZKWT1KkMSYgcEekheTVvd7CuF7lSU8yQr5mVBFrbTDywmMbPskZFvjaXHp3HVH9IiA3uAx%2BNk8DJtlUiN5AtSv%2BYj10QtB0vD40swWa2K8afFFRJ21YF2dgmSueGAYZ2a72edDOyVrwUcKEcfwPtasn7II9wTWvFHuSD47cdTQ11z%2BqIfJwfUsU2Um%2F4qi8%2FHSlPyBTIujeY2Iqz8LOEM4Z25RkCCA2aeGco3qDjD%2BgJ%2Fob6wMYUxw3FmASmuvzv4Ls1pFtb1Fqi0I2vaeVF2pHP1m3MgPiiBuCcpUWrDf4SOxzc%2BJZwZuupajvtU6AmbDDuvMDTBjqkARbb651FIBfoJ%2F0DHIB%2FvfVbRIQQZ3oSqN5djWlgSx8WUd4nrINRDmcyKme1shXeN%2BLEZToQbrxWssT9XBIwa6bhenjiiwlveOrN670MlBqiHj2Du%2Fi5jY4AXmazo7uFWcIGmSLhG1adRevUSBw9USgD9cyr2tmP7Ms9Z97vyPkrg7bJxMcpWTTUYUJevstkVdVWXTSzTqeXumOXIk1M%2Fhu%2FvACE&X-Amz-Signature=ee42646c508bbae5d7cf59b2f475a36438da9a0d3e752278f1af0c24f65667c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

