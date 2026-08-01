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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYLYEOU%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T174838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGCgibjoA0vF6LDer%2FCrliqU14A36k3N%2BVaRIMbNY9j0AiAh3FlxEf1H7gXKHsjqQqPjVxTP1XDqfbgNOc%2F%2BOTlbHiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbdOOCp7%2BPx53Zc28KtwD6v5VLvN5pR0tWW4QeB0dBbz%2BGL%2BERDUJ94Rzdprzhk9GZy8rp%2FxyL3OkS7HuAEord3j7Y3HU1XRrSHnBT1syyqKab0IHixEOkrqDQBokUT01fQkhiByzoUuouLh2wiNof%2B5QxMOqCpLV3YOT9OVFX4ZsO0tLjg8qOv9C1n%2F0vZpp9KF0MTKNGOSFcn%2B0FzFRkYzCuwjE4hCVe9bGob%2F%2BvwjvHXdi4po%2BilcDqOBzzbfrsdDgR%2BalvqWleBmfuALzwqoJi2Lu8jhgZ6LMJqJ%2Bp6QX3C%2Bu%2Fd2%2BxWbDaPmtznIPXByXbxvvEBuVmcV%2FE1rBmz7RScwUR1GbLN03z86BKq%2Fv7jEpYVLWHgfd%2BcLyW%2BPMTDGwqc%2F6uIu%2ByGkpyYlGFTXJD5w0yj%2FghceCQl7XGnZwwhnfUMnRl6EdZ7wDzcdVxHxOYeLCGRNIBSwN4OLM1uuKHNmMIYG%2F6JKkKzkIgpMpWekMAmJXQiyxAAATkiqTPigsbAyhQMy6Veu%2FQCPYMG0t6lgPLvogKS9MZle8xvhnnxLjlWFPYmiecvfBd39SRRIpe650QGP1TtesEJoURzQCnFSpNc9sLjbZm3q0VPqwW0DiB5tm3UJSJNn64EGWq%2Bs6qf%2F9dgUF9lAwgNK40wY6pgFPLQfi37jF6xllzc2wxVr9AiKjBi7hMYXySy%2Frs3WS7i5P2hRsrOSCVu%2BBJmL%2FLhQqgDz9uzekvcXJyc%2FmzuYjkJS1mtc40cTlWxCeElrs4LPvtzJVpJ61NLcHcROtZJ3Wr%2B6WSZYRggLTjx%2BPhgMuRq2zXw4lGYF5%2BQ91UYRWLzLrH3lk9578SNn45xiuXme3jBp2AduJ82zPw5YXYgtRw%2BN0nyX8&X-Amz-Signature=a2249c108d53b34613ce0346f75a791ddd86b3f50af2b97b5703d6c756a70f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

