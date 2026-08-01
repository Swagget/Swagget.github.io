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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IG6LRW%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T164405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe5RnKo%2FaBstQITumt%2BlqcOuT6OS30MIZ1GSnQx6zZYAiEA4qYk4ZOytOl%2BEWMAzo5Jsz13ymTFLFuJIJ9ZazJD%2BJwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIRG%2BOKuJP%2F2lhT3SrcA1RGRlc9R9%2Ba6pLcpM3LzI3l8GXzkmqkBXobNozXYykJ71q3uNcOVftj6FILgocZvVwneF1MxUGIZyZb9r2cxebBz7Arro%2B8IL%2B8wyEqncN0F%2Fd9OENQNfmKTq%2BqyfG80SB9eSPiAr649nOx4tZxM8xbgExTif%2BvkWOb6X8%2B%2BtHysu%2BrpUR6%2BqCa0w3WMcQLCViPQ0brt9rUeWE1pCyHsmPtBzKKwtvlJVG5LmNHlcB1TjunemsKbBxc5opopzph5ZwJ0wkvd4dTlReV1xeGySlUIqSv8L8CghuBMigLvyQWpqse1IBgB0Fq8%2FP%2BpJK8rBjUtbir%2BrPLcoFC%2FY4gMcs%2B94jW3haTXNEWknm8ZzEV06l%2F3ppOw9rvv6amT3vSPNoQ2FXv4oBIxtf19I6hYEdmqlrFdqWfbT96c58l0G%2BVg7TbgDeKEnQIg%2BaWmQ77RZiS9rDAzVnRiOmWsPwNN6uAFc%2B%2Bv%2FsdprcFSY7z71Mt25pd9dbN5icbD%2FbbPb4HBAwetyy9v5p%2BHHL0UgSd%2FWZsYhulTZDKiOcdEQnpYgexBkFeFiJ8rKQTQ3YDRgptvtRuz%2FVRkb%2FuayQKefzQlCBVX4BCigKx8TB6FTSzZfk0TRguow8wW%2BZtKogaMISWuNMGOqUBG%2FuxoxhFRJbsK9X6kRGVvx%2BqAYkaqA%2BkOOexysimm0yvIsk8RpxkwMSzLjmP2V9c2R4zdTmGYEFcJaCtUt%2FbYe32JybdMBQ6b0aX1uCaL%2F4XGPBMsoDDmo1FGQa874pi9ZrlQjORbnarimkpZFUMn71GPanTP4SSj%2BfRnjYUSZc%2B%2BNR4NTXfroi0aLMPC1KHStefGN7J%2FuhMxxEPvx%2FdCd%2F4ksJZ&X-Amz-Signature=455c69db20224f52baf95e3808c937799edd7e2d79bd3731b7a2eaa3bdcfb2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

