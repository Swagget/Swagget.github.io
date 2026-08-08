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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV25J24%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T221437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSTQ15UWmns21YMcvE4nOiLmI5dp8W0omiG09WAjHVrAiEApR8L%2FMFkNPVsvEkzLsYH9CONq0%2FIGg58cRQPFvxN78kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAbGXmc%2BUAH%2BwxAtSircA7D0aC6Y%2BADnTDLGrtrFNRP1QXt%2BWf8lirvljs0IiTSddIEcmQpSDQqweodIckVj%2BTtcizlnGEL4Z27J6FW3fcqReZ%2F8WzKh8b6EtBXfgaTD8QIC%2BxGmg%2BfPcNIvkG%2FTS6pelpEnGImEhUZePtgbhmFG0ym971QtGJBggm4cRRWJg%2F%2BmePX66REca9PLJnvFQYOP%2FjgwaaCnBS85agLBDrl9jIHuQ4zagPrkUyUuqSmToVea9IZyaGL5vAPaYK%2FU9KECmr%2FkbbrsrPw3dQLEEb2rh73DXb2obAakGa%2FeyhxdDtcxgRBFn8oQU1r%2FEspJJW3%2BS7MMmhK8yCBBaQHlWXCYppZhE%2Bzba2StT%2FoNkJE5F7SKiK6n%2F6rsGi3k7t1b17QjkeriAHtKhP2plZLKZrvDyAa2%2BA16oMLE80PXwSMfwFyBfs5zKFElaxAHq9pw8RB4gcreueHz2Bh2rIWWZrSW1sBboos%2F91SqnEmXCXZlgphojvf82e1VpFIie75x5vxFt0gSvEBF6hl1DRBjonHLEnmtHyJsNyfFw60n0w8GP%2Fny0MLrqzt59X2ciLWF1Fl9Pf9DpgCPrcRFs1EQ37eNKB4OA6UwMEg5YI47VzSMMT%2FFJp0iE8IT8D1vMILT3tMGOqUBRMdquzL2U9CEYAQo7K8qdDJ07eZauH0smR8cs6TjbMMtaOnf1hkkCMKFWoAG2nII%2FgAcMPPtbaekAVWl4%2FVOboye4fzb3MdDeLT%2F4OJfHoG%2FKbgKz0gLgx%2FNT%2FJSWVpiUFSqGmIlef1trnegKJ0FaCEs3WIziBSsuBXrbtblWzfKRkfyNzduFSkDufreIZ72%2BYcvE1KzO%2FTOXwIKEAFaKvuQ0iUq&X-Amz-Signature=42d374dcea7386df3aea8d9d3c3576436bc26b32e03a3073e815a1c6448a1522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

