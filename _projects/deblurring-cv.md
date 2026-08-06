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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGSNBYNA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T102228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGSPIh1U3lN2a%2FEygBpES9bWLw0SbcJR4ZZhm7ap6DghAiAMdKVMpSM5EJHeogl1s%2B7DFSTE%2BcaswE3RNp7knFzmGyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMElX0yJ0n%2Bf8aQwhUKtwDAX0XlVe7%2BBQcumwkZyQwUE122AoGNqBBwBFJGvj1HDqO0O1ecAzadtagcSiKDZgGvo9d0bjheBF2Y1QzS%2FhsuLlppILV9CVUY4RqS718%2Boh0%2B7XYYPYG%2BRgRosWTUSB%2BUfx8jnuSsHr9ME2PhhgGOxf2i059qUIKKRNC%2Fg4%2B%2FxYNxuJ7TTfGDfBIKIAchObwrIRqkDCaCcsou7ADmzlK7cqqhlnkomhRxMmT%2Bbti4JxoOjSQn8swb7Cm9ZLAgZWzh4N2MFgfQEgoggAbyCKipFMptUlKLnT13ew8gW9DFKsgMWOseb0Vf%2FGPmwiI2O%2FpAP3yWUS9m6sVE5yRwSwokGoDgJbsjACvAMp6TCURnbWpOYZkR2a6TrC9FmQat90sB0OXYjy7nwsKWYqtXrmLnaop1quhT536bImZeDpPb1cgzMS80IYLuMevpy04Ufb94QD%2B60MTB2Kj9qGQSDu%2BmnZok46Ps4s%2F1J7fQ9c7DGZsV7%2B5KzX4Q2ELqAtXGJcf940tVJcAKBpONSjecSUL%2BYuUDyzJIb9A8WB4XyoBbQG1108DQ3eIcwYpii0TX5T3YXr%2B7kingyHi82mG5lk78daIxrHBUhvTWw0llY4T2l%2F5H7xh2uzDEwEh2x4wtaHR0wY6pgENng0igFWIkh%2FieWDDgjbUUMKgCqqlZ0V4vgrEXPUsFfUMoNDT8cmOzCb6ZeB7vBvSj9f8xGB6opVnFEsfrMffOxhvF5UEWg0%2B7BX5XSZHhojq%2FQXSK1Ua4zWLpAA%2FWFdcnhbraCD0Y1FSv8%2FAn%2BZjO7XOZgWKqhmjPfVmaEM4T50YUXsPCqUmFjSbcOIA9B2tr8710%2FBr%2BjoPc0DNJ%2Bk3Vf3V6Idf&X-Amz-Signature=342339bc189d52b5ecde7d0c80bb87e29eee0b878da28d97d016508a455adaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

