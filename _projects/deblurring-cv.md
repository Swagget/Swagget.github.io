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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMNUFAH%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T092234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6w%2BPwtmqEf1uUHFkKec%2FwOy3Lzri9Ft%2F5p6cMHdQv4gIhANgG8v%2FbPwfBn25enMGWnKdD5XU0mlOJE%2FnfbeRvWJS3KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX8N2POy%2FJOMPrwLcq3AOHMww%2F49fwAn%2FmYb899pahTbpZQnz%2F1QCpFtr%2FN2YBKyUm2fatXaQNFPWpBSMqbyIwzmJCW3ed8Z59JS%2BgKoIx%2Bj5VoBBUCVLGgWQQNc7SQ4nEyRufoFzkpliuekomZuhdQcL3f4Co5qTJ5TKIaC17Rb6%2B%2Fj18g6SvMr8ZVG3yvIC6SwrUyzoxsx4Cuz%2BvvLqFE9uXvjCtdaNiO1q9uESsKpawMLHqQwqaU1mlL6dPGFgJjqC0F0aI0ypd172bD61P0eyOSnC7zNVbvI4BM0Q8nmW0eJdc%2B8nXSRpPXjgv6SO%2B6zVc97iS19EyNfTo%2Fmuobb9OMyDfTtnuJI%2BTRIVKOV2chVwO9utnlOKBoVqc4kfRKyvEDH8yrAwmz0QLUoHSeB61xncIKvBwZ0Rg1A2EVmeiFi%2FuapSXD%2FRskuB1l%2BFU%2B3JIIxXdu%2FRgWZ1U5oGMvvCxmhrQkx4jJpSG8U62KudfZtiEBoA9ln7V0T68braG4J205qskOfl%2F%2FoYM5eEpkdNW3aXz6w3S44W5%2BL325z3sm2TNewbGNoEIH%2B1EDNEFZVlx34tLqeX6pvK%2FLyS94WnuV5RbC2wP8V76mRKV0Pd3Rd3CiXHrpqbbNjKnqjfzM7ByseWrPPwwuTDjw8LSBjqkAbuMhm9mKEiVW1BzGajVrHeZ0HpKVWRSu%2FtZkdTfzJhV1j4EhV0XuHXHLpDn2qzFLs0rZyHqlT81K6n9I5SXMSkR%2FPCV%2FhywiNgDoq0YJgjY%2FWDDd%2BrnYSkyVvjU5xO0tr9SzieVwu2EE3v6cE5dGcZy2mX0OjBZg4IR%2FYmk%2FST2EqfgM3k6ZHY1G2e93NbRa9Bb0hkcswwE77FocfjVCiFfn9nc&X-Amz-Signature=64a43529e2eaf9ed8f056b3e7197c223eb34c5092c69c03dde8c7e9b4501b6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

