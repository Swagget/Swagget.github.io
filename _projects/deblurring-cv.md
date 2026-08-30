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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CW2UDXB%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T185241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7OEpYYR6Q5dwMe0FvExB9fD%2BSk0Czcx1oUDwpcdi9rAIgCJda2bHG%2FNRIdcSKuFWQyzIH5roxKbnquhhLXIQMPAkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4j%2BtSvQP6gAToIvircA%2F2ar7mAivTSf2rEa1DC6ueQyZmkCjvZbzoS8%2F%2BCTVYARmod2l89J%2BifAGIlfomf13JN4kjxtYQihBkpJcjYC54oqditG1MNH0Q2cR86kjytD6KIyKeFAhsDyum9Ux80khl54mJcGPx84P5pRX4kp6qfRSIBo%2F8EPpoY5i6sAp9MyQnZ5gQGt4QRkWN%2BJzr79%2BbOPyNIpX6NXOO5%2Bx4O4CBoq5BcNWIaP5%2FsRBqouwQkAUWUioyI8426gNDHIjSHKrq%2BE5RC2FAqzOWA03iqoN%2BIyWfrM4z4PbIP69FYZnJJtjm3syo9zbLvWilOcsYf3q2jwFM%2BS6hGFDT3sN0pdsRLw8nW7HjSlWwXY%2BLJ86aAu98kP8gPFRCXYENOoplPLbivG8zQoj0L5skOMS9bJ0eMehBvKG3n8OL9nNeohZP1tyJk5YSONf%2FMyS6RUi3grJ02du6WXOaoboRIMycun5ZGqVjiK5ocYzhUuqTLlzqIz6V1Et3RSPcvJNEMN0mYuwodEiYcv11sAhXQCs6gdjg%2B7KMbbdpFat7bK3lb3vyt1jQuILUU%2BE4ufTAF2W5u%2Fhr%2FUlFl2dsJETHe9zIzV%2BehJQ%2FwPR1VcJJw2wlHvwZYEkdYgad9IQtNyAVgMJDh0dQGOqUBfBHyYf3zBbItsf3Bts0inTg%2Fwj%2BPXCzYopNkgjKKIu4inbQCSOAw%2Bto4Fng02adymdGIaaupm2WwHO9Ron6hhwtmIEYXXQ5LoUjCf3rzTn2VgIso5ZHxDwS3FsFy%2BsAN4qNfM%2FkrbqqIlLg8hysPxlPvjV%2B2nKNsCr5Ii7t8UrmjSrkFaeDVY8QMvdKQhFhFzLiDb%2FjmOqHGUiX%2BsUKFmatP5iB0&X-Amz-Signature=f9a905d501273d402877279682405c24a96da59be6b1c5a10dc4087e5c80a163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

