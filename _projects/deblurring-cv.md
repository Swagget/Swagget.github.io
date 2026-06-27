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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RIL47V%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T155718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy2IpENXoL9bP6DOhy%2F1lstDbLFu%2FKA5wFmmgemybhTQIgMEtivbylws6%2FDLfndPIksxgVZD2cbjORKi37HMtNk8EqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDosL7OrH9QbBS%2Bz4CrcA4PZcj3pq5HK6f0Vxdc4tWo0TNbFzfnaI7TWsOzkfHZUxIEF%2Ft0HGMDinq8YIB9CrN3TM52Tosdz0QSIZ0sJqwhZAiwYxEnpJpSH0VxNcavAWT6wCnJWCNIES0gAaekSswgwt%2BCbofh9xzqkE3BNkHJhfR%2B1ahw0GvxkoZpIQT%2BgKDuc8R%2BfUcBWX4fa9iGuKD%2BCIiv%2BLZxOgS89KLy0HPuDa%2Fx9xEWp2KcahuerY8SzqFabV45i6HB3jY2hlQBRSokoOtBE%2Bpat3WFhbuwmzu9qFjI0RH8h6a2qZQCVa2pJWMvpiDrE6RLVABvQ43sgfyKRpxq3rSWslnbuGmx%2FVVSjoxHMWo%2BXTUCJRHCyJo79H7%2FMEM3%2B%2F9YqBmmnDscoB3l%2FqPwnvev7cg3xlxfHUoll02xLWuwMKuinabxi%2B4lffbVWeJPrHq4YqcTRFCgObyk1Ygl7JsOmspfRRYAEtOvML8VGwD3SgIEydTpf%2FnD2O00yRfHpvzz6gPRKx47ivejplqPZm16NEWxphhihrtEsy6kGFW7AB51zYE%2B0Iaz1QG5AP56fJjF47zkRxQnSfKF6clENxxlr%2BIZvGBRylaVJfwygtjaQ8HBpO90%2B3eOhaX5j5lYxJddYk4RmMPHU%2F9EGOqUBHTwsrYlvX85yFZCH2sCywXvO40OTjc8bPp%2FE5RV0jKMAHlxOw61EsRpANyd0ViEUM8%2B%2FA6ViHD1nJIymtQ3f2nSLapE5g7ase8RfzZaAKXa49kj1OkTQKbp7Wsa5zFSlmjSqlZDryUWzE7SXyNMBvLliymP7M%2BPaa5tcv7GDTZG%2BZpQcy%2BZJcgOQfnx82rN%2BVxVJf4kupJDSFBqCyBdzgHG3EBzU&X-Amz-Signature=114a45bad485fcdbf348cf2021e900c7242774aecd0fbc16b6bfc8b70405fdcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

