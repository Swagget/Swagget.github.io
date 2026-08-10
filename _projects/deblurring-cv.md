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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQTMFMA%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T113927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIxJzrFQ43lQ6KrwipJ1Pbs5Vu5m94pBq1IqyBEm9EmAIgZ5o4mnl72PULnXwoKeQSwuZ3pzTu1LYkGPE5sGQ%2FPOMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII6N4XWEpIEvD%2FNoyrcA13svR5uziRm%2BsponxgkB1mbZKbXxct6hEJ6dxzX60IMyNoWFXFlIX64gvOQoK2FZr%2FV%2Fyd%2BA5Ys7w4MHNVDiJmG3na1KtnpmfA9q5KtlYnP3CPP1ioAQNjgLzHqvQp4fQTKbS6Oll0tpqWgYZTvkWeDvErGWLHs8vi75n2vvfwPfOAUJ7obBvxZYqU1NJuZEphr3g5oZzk1CYEmIkRgC3wqzFoEDSvHPIN3z8LMWJ8DmUbrLErtZ4U6PNoJ1lA%2BBGbCmmNvPPPehptkeWSG9MeiJeUIoqyw%2FdvSTrs4YznokMYtW18vyXy2lx3q1b%2BCTM5G9QuRPIKxU1c%2FtHs7fsyUE8ov4IO%2B6okRDOqbAuz8u%2FJhm9RWw2pICQHim6nPTMirHWycXzETFZ7oA6Poyb8%2BLO4N0HvliVBI1ptEY%2B8nHsgnk9nirp1PAFzcdhazBj6fAapP%2Fd%2Fr2%2B21pYd3i4b99iBCf%2Fy2kJ77Q9KKOE2VWfWsxz0cp3Ovh94lIUWChL8rBT8GK1fHVNJcPsDUHQJYPFS7jv0DSLEAOhdzqxDEO6uXScaquLO3ToDUkX8X4WZq0dsdGud%2B9%2BoXQgBfChjD7Porh5tjLdhznv4gCEjdLTKARhMRRAaliUgNMIvu5tMGOqUBHK%2FoYK4rgCKXFF8JvZnGkigqItbY7dnjXdbDbVLZ4hfC3p8BiyNHE7PDcFJQHuVa7q97IWu8%2BKUOvZJ6GsVDQPvOvZfNKQKNTNxpU6yLu1OUZ7FiRQMr75HjuUzLAvA5aW0ZVsRpinUOVfsgbhnrg25njoNwn2FwIjzgHFFoJW6Mi59s7tjtuEMAT3wsnAwiOPLCydBY0kvSV%2FQtD%2B9KYlVQBEPD&X-Amz-Signature=75d829cd90e859b83200f9407063558567752fadd29b0bea91ff7d5f1f9a9b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

