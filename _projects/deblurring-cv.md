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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5YFIYK%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T095740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGYdl43P8pyBrwope%2Fhcn2XfzQ%2FwOMoDIGIiRHOw26qsAiBhTjl4fzRBXz0qQiJR1VtyfCktgE4c22asggBV7mds9yr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMm6uMthJDm8VnQXV9KtwD31cTCFj07dAH5DxEs5roUOhD46s%2B4d7HyOqIqaivRqsdfvokF3CcLur%2Fi4WZ64w9pjqdme8rbKbFT%2FrKpyV8kr6Mn62WABk1dKAp26INXz1f6LX%2BoZIURQXIO1%2BsabjKjRLoxJs%2Br2vtfSMliG4M7sP%2FvDAYgmm4ti24gGBadr9st1FG4BZPvhWYodm%2FVeMPnvsxT9XbU3N0bMDRb5Gh9yfTLiHsp8d%2FdeLSLuMAX%2Bv5mZO006rLzRzvmIfEV4VJfkU4ts%2F8HVTfPCl6BzwJodLm2JM6pgJo4sFpeg1W8eRK81R0y0N1TmjdwtC1abGwrSpzW5D0l4bysnMd7%2Bz8Wpu6uR5tEPqQWsSCE6%2BpyLcprNQ9lGp4%2FGmdLcWjtUXC46Z3Uq8CEKuqv44C6y1e%2BPsvNciVjTformGZ%2FptmZsrCZlx7CihTF00DhyqbJnKPZGN%2FZEOTRguxsgfxBEv%2B%2Bembv4mBSqRWS51GJazAWzq2dJaFsgbp62xg7nOgoTQprM3KvDSKCibOI6HrFF2x5a2%2FTEP%2F97%2FhOZTOpujgu3pmSQljFZRTkhSE1Zw9WTH4A8mbgwbyH9m8DwAef43%2BMAhHaXHrK9hsm2xvvwbI5wsrYkvBcMD8WVlEclAw48L60AY6pgGLq5SChCrmlznzr%2FDZo7xdTu4akDjI52e4OkFOgocLvKLitHSSMlAJqyEBRX%2FTSN0Mi74GR5QlwEuhn6GJAGV8FTeBUQCXB72hNrBveEpo%2F7bVF%2FpbeSzrkgSSBmoab5cb2PZDPlW45KFk0zoVeeB5ciElxKv9FDYd2EaV6PPGXdCDvKZNmXPAWB9a1b46CADB8k48xq7CniTktZBLIxoJSPhIINrs&X-Amz-Signature=0d8fa0e668b5592039bfe67e8646067602f3b94c5aea96a107449c5684f5bcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

