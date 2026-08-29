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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOLNA6S%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T023105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeN5SfNQRcVoorMv%2FNloT53RML6GJV7oe0Bm0Z5G911wIhAIE7DgpKlZaT%2BnwYHXJQ3vgqln5vr5icBxpek%2BA%2FfLscKv8DCFoQABoMNjM3NDIzMTgzODA1Igy%2Fbj%2FFB4BrCbGZ1HYq3AOtMT1jHeKShVhhRXBCSZMIWg%2FsW32zfSm5%2Fv2TgDK9LC8R9xtfgKA6xAa3UcoHDzuyzOUKZsOv2%2FMJmMb22loFkABM0H5saSXh51EdtyKU3aYeGkVDbRPjnC%2Bb6A%2BHCKUPElJUHONN0w4OD%2FvF7F9RknX7uWDeYMQ8tyiZtPp9DkrrlroFxjCoYxh5Eh6fewfK9P573g8TinwN4eiJuSv9GTBEhCXgYked%2B8kAx%2FhXx00mPauGcLJv02RyqiEUNGRj1BBlgRFIrfs5oIzJVsJ5pOt1RR6etjrVnyCEnVv9Gefxl6y6KfjLu8Z0ElKRUmh7hM977oYUmHOu1hMeGEJ8gp8vwmSLfeG1B2fRmKn4be5xbFh%2FCLi8xKTMntD9LdPt6K%2BE%2B3YDQ4F2zLIdoydSbhwzCwc7VX0Tsqs3qusFZ3%2FgaCiocc%2FPI9DFoYQQg9hZtUmbWSh7YsS0YL8diDZNB1SistyEUGBfWd90NuGdVG5cGvdOrl53zfs%2BoDMhhjLCHJIyAaYfkgw8f6c1XMp3k2geZ6gKpe3qNOKI81dl1bdhA9oU8DonsXBBoyE3M9%2FY%2Fw3hb1By8RuZpF2bfoZkfxJfDFIbSooJ42ihTc8S2qcglcXLdqPy52cU1zDU28jUBjqkAeFFI6PSlkoVlvt4O8kp2F7G2rdlYZlsX4y4EpF9QZvVciGNiGmVcsg1vVkdBxF7STDSWph4oDL0AVUWFKGcqt%2BeougdsQAkykzLh5bKStD4wyulV7R4JEnQDx6hdS561fCaQUVobNa1Zftr5Oh8yD7viaqHF7g6XMy2ZJingMEjLg6UcFoCBZ2giYozTtRmAboP%2BVLb9cMlvgtirnbL9jwJwDFn&X-Amz-Signature=d96f10cef838f304a866613660d19c2217dc806f9f175baeb9c3ad759a0e6ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

