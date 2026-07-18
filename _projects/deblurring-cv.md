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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRJ5EMV%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T154212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwQ2mhYY4ZlmgtquMOCoj1hCDACU%2FRZ2FRzcUWDXRe%2FwIgdWc%2FVFn%2B%2B8THuZax6ui%2F0X8A0VO3VcnXLMU8SAqNi94q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEvnhB0Pk5CgjxCIsircAwac990BVJC9RB0v5ev5AhUr3xL%2BqHDB2cD%2F4KrXttBid76ajcGoZspUYXZkmY%2Ftm6%2FV7Z26SGpiJpIuIJStchsFAPf6UL2nNlIhcGfGbSc7kC7neW9SqHR5eVjnXoj6NnFXPBRcIQjLwi0uM1L4nT1j0Ktb5SM1k8SZJ%2BqNcCy%2BL1zJK9IWTcwwYOrJdz9si09oL0QHkWYSwVY6L5ca3nKg5CNJFwbaNYyxOpZ7P26wJwSBXW33eptx75ZWFxdDBwPGPa23MhHlfYUKAm%2B0MCPJDLycqd5VdT%2BaYICRTg2WGo7rTq9L6DQvJDxgSR6LYhXc5quPue3TgAA8maPJQ6ny6we7NK8b6ymQZeK94pX9E5VveXhgA%2B4cyPyAZdXeHSs53p%2BuNxNFxMJKsgV2XnZVmUzpx9OFdE8A3aZzI%2F%2BRm8taSqpZBDMNKYKqj6Bx5uhi6ogcGyAdXJ2JA9oZbTSuMgMhioL53TXcXQc37nj%2B2uL13ZU6gV8o5y3t73G%2F3YUmeXze5jWW3UZeeCXn4B54a97sxduo204ZPyPreqnz5lpEmtS4x9EObm6w0YYirpomVulOrNr%2FjdCdQa6zU6c0MYxeAw7vUYgiXBUxyLklWZgZOKasaFgr2sMFMNis7tIGOqUBhmhhyFk2VQEfN1h2KB6hpsDhzfPY0VFV%2BvB4LHUB5IJ2dpa%2BKaNaqAjPvd5Yhnp754aZQU9ayQ%2BZd6hvT1NFEMka6eUFjlrCXOPfPCxXBsYIY9YcwRn7eOWfB3wCEXlakQFLYHepDP1gaho3Ak7GjL3muTdgRe118ZIpJgPDE22tOhRRSu%2Fo0yu1WltAXtndR3i5TdSykyXHSpM5%2F6ch%2Bet6J2ji&X-Amz-Signature=e997c7c341f92b2dbdb01d13ed5399301d701643af1ebe06b8daefd6040219d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

