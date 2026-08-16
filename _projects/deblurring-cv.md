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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA45ABIP%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T003103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFu3iopOAQiHp%2F1I0XpU2O7jAqxqqF4kr0Cv91xTxB6wAiEAhUFW%2Fn4KZj7UXhIVB%2FrJ5Fvq6wZxlbN7r7uXSXr%2BR%2Bcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGXk05QOPU76QLBHiircA5%2FN%2F632%2BHZyOAybffsRv2WzR8GeES0WVMRwCuAoKeN9%2Bvq4MTBk7EG5mT0jv4E6BLuvvy0MrM0Ng5kaHK%2Fa28IVlnJCoPYsB417e3tH9gv5AyG0evrDUuxIu9E3b5SXeivR8cZPqPfUAnMplOBh0V1i2BPGrxE9apFz9z%2FHJ0Ghyfxo%2FWJeLmVc5plH%2BJkOVoKkYjfvNS0pJemFylzMSB%2B2zD2hm4F22PNs6XFh76ugO%2Fw5paTQD24CGMgdKkm6rlkDLvLr4N63Suey58bGdfMuzrTJ2SQ2Bb6sSS%2FgevYLyF9CMWkYLA4KSCdeMizsRb1Ve4JHDm8Cm4WNLlI6CKMBcArE27cAuQstdyB2MM8La%2BhBSWNnzBX%2BS1%2FgOdfxylX3zBK1uLmMkt%2FC1J0i%2BGHpEkOHTNSHM7zvofzxFBMUUZ8ltN9puKXNeK8edVkW%2FXmsoxEVzNIPXJ45LYfyvAwnCs7pKLLUt5JFqctTYvOAC6tRZMbeNHAMKuA2dpACoSMPtbhIk83Xm3qy854ZLf%2BrIhpucN9px36q9HUpmqc3ZYyszC240pVhC%2F%2B%2FVvsvfiKn%2FqA%2B0t%2FswrD%2FoYfTaqVEgQ%2FmuwJwXREdv%2BrcOqzapsc2QvlZTYxDgKUMMJrrg9QGOqUBcmiKs45ATzH%2B4q1%2FdSvR7bGk%2BqOsQSusM7WRBmrazc5%2BLa3REp78WjmNX0H7Y44a829SNeHOEt3bGQPxIKtnNAcnbFQz004Aj%2FExYkp742d9TpNy1aUv6UI7lJ2at90l%2FJqHqXsCpdLlB4htbstkesebInC3lj%2FvaITERk2u54kAG9%2FXedXe%2Fmoa4fOboToYrEp3jFTCuMZDS3rARtIg0%2B1SDKLr&X-Amz-Signature=08b1079b9a05879c8266cc2b53b1e8f77be4e5d84d3b25c3910f761b190e1812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

