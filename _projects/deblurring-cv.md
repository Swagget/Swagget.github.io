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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53ZPLFY%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T192059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBYUwymEBO3Z7dGFkVqUd6sX6wb%2B08FNjw5JEAfG1CnKAiAzohbYfZx48f%2FxBZfp4GxYF%2FIMOun9JidH9yoJECz3vyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMqq2j7xrGZsj%2FFKgKKtwDW2wQFTaGr31LX2V21Gh5T36apOr%2FKqMnDlreW3f10DPCtCLI681sNOfUqTXA37l2bhgT7HDzkAFxiDdG%2Brpq4JwMAVeY%2FTYn5mHg%2FzGS7BlPj46V8CBixXUGlyyJglIo9ZxMLZ9Nxpv24whXFUxzRSuZz%2F8dxeXlnFOdhYiXAKZ7tUwtYT7fRtdFGljFCQ4KykBNa3pxk6E7USCWJZ6jOhzrgb%2FeJGvW3DJMML065SvLoxrJoyMWUmffTuiaEtuX9w%2F7fQEfj86EOxn4BNswLsTRDba%2Bz0mk%2FXLk4Ze2EkppJxKYyIWi3%2BiMJuObVPE4mGft6swFFlXlmkCoBp4Dm7WOie9TgcfqkKO5SHd6QwK9KAfqXGx%2BwTR4DkN1sTtJ0q67jp7A6vCVfphKvSFxNKcKF8QZLnUg0ndDPzlCtdU5iYFMXlc%2BYs0q8YtFylE1Cie4LGkZ9lfOWV%2FwdgLwRHakre2eUtrVbchy2oEnfAzYYyrTHhwvgvHYpgkoAg5BZvv68XCRmBWHnqMpSfCl1Ee4LOHRqfbFlpBY74St9Ewp%2F%2FC4i%2BGVehCRKZrCPiROYsLU%2FK3%2FREWR10TbMiffhiod9xd4S5BwbFyY7lGSJ19CBSKDeM2PVpSYi90wxZK31AY6pgGLBzZ6JIXwCscusHmpcLmfly%2BFo0yr3y%2Fd3h3f8oUCrhGMXJDN1RCc6Rdi2Zryeyo558Z6NlV27NSK%2BTujcZJeGmCWeAfQkCbaVKNHwD0A8BHnPNnvEItUnHTCCyArY6yfrV%2FsXo1sfsRYfRUGakUces2Fx%2FxXQnyIQxlv2dkWnYs1swn5yFdKiJ2mDOa%2Fy2Yw%2FclunSI6L6hIMrDa1hR%2BZQ0%2BM7ky&X-Amz-Signature=2643b3435329c512a6fcb5bfb90360b5299e47887b300df680aa8671de3b862a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

