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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YL53FZ%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGyx73IP4mf9ZomcgBxtlkojwUFroKYFH1mXc5EdaDIZAiEA5eTBD4EiZ9OcX3PffRNE2HifJPpQanKIQZajVplh4m8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3Lfi4x34taRvh0XircA3Ph4lVD7LagwtX29ihCD6m35gYAct4vy3QWmCMxB9aWB27fCpm7bWRqiEWEJ%2FlbqKh5AvqHk7vBfiuLwsCS4%2F41bCFC21pmi5IfyZiUj6NE7QQml6X1pu61eHIeKNDKeUBbXhjeoJzx9W3qvSLh%2B%2FD1xOjId5on53QHvUvUQfc9Yf%2BlZm1DVvd4rBu%2FTScXx8BZGCEIL1fOoWMqn22Tk6JMgTolY2UZKO0pKlDuPDPUmcQwWMuXm8puPB7418YR5bptSWrAuyfreqpjM1g9hcOz%2F%2FO2POUzJ%2BlHmhZHYSeZiGfZs0yxUGGHjAMr%2B1VUWY6ICa%2BEGbuoqczOZCdHh54RBNrWh%2BaFvYyGr08q1KBqBXhY7AmE%2BeZajnaNmof4JGl2R%2FpbaPeBQp1%2B9REyMbuknVYjwAiDbv9zaJxdbXT3WIpU7IfZNVT4wooCjoXNSuw6G2%2F%2F%2FiRsH8zzst%2BrSzEokoS%2BSmT9h5S1b05L%2FQ3JRu2tLsnHhqvUhs0bVhiTldzqXRKK8rlFdg%2FNwZ%2F5k4DW8SgrihphpMqFg1w9JtJ2KPE4UC%2FCv54ovkNYOLHQk%2BJj2I4A2cb6k%2Bn6wEiSZ9SFM4LREkf%2B6X7HgfswbJlbNtjDfDr9Fq1Ucuw0MPavlNIGOqUBpFxi3HWn9cg9t1qeEwHeJRGLUdEmyNff%2FdI%2FxNhrTUTXAQOMJBExZb7ZFc%2F79m3utAlQmeCZM2ifkEnj77seR7ZTDU%2F0jy4C8oeNpnXP%2BmDREe%2BcBkfOLjnpMlfXoi3sQY3C6cMKg3WuOs1vQEvpxEQfdQSel2mSx0x4pKKVOAmysPqcNxea3fjGh6wLvlraxD4%2FOzJVOxKLPtRKHkJaD1DBPW%2F3&X-Amz-Signature=f70fa393da9d10b060c26c0bd590d68f3dc0e11f29b5a922f276faf8c7989028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

