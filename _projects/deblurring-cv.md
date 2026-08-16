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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBD5C6Y%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD6d1EiiTSQfWmjwHA24AWF7YVgsXUMANjpktBFAbWW0QIhALLNK1ShGq5fGUXrXvDmpG%2FfrKZieduenAQ9WXvhFW3oKv8DCCwQABoMNjM3NDIzMTgzODA1IgxfEScBJrGI9eTCbM0q3AMK3Ade7TSLxaZTxUxpoam1PbXVMXDmyxA2je0yRIZDfQwb8MT9jDgIXrwINcCbmzqYcPI%2B%2BonH%2FstrBuPCSkzUr89RXGwkv2a%2BpcEO%2FpwpRKjC4jkzHUIlCSzgSDvvxIZE2klAfC0qscar%2BAiXAM6vemc2Fx4cOwwG%2ByWRtiNlRnvVaS9jiyE39r84jcjXESSfmCOvlx0LHES5FL6ML2WqWlLQbePehqo9f85SstQfRQYrSYfqBVE8S9NA92woAJExee%2F%2BoYpilnc0m6774GUqc6rltuajhzWrLFHqhe%2Bmer%2FlUl3wSgLJs2yIO6aNiSR800llir%2B8rvALt%2FBJWPBEKnnTeph1Xg7Sol%2FihUnHfo4g9fLab2L0aMEEmOkbWOE06v9CAV%2FhHSEVhg7VgeksSK0rKr%2FqxkWz5lNalfrK4vZw7QGcKsv5Cjlbyd6%2FRSxwMikGVYE2xfecG1oM6H9LJzH0M6JDW18D99l1YF%2BlVBintf60KE%2FeADLOq0eTwmAxXVOQvaP0rK7MODZuMFWF4nBsA%2BPuNgrPyok%2BAx%2BKaNF9WBcyEsIbGf7TClghgl8l8qZYu%2BivLqbp6%2BopZt5VYetRHKgrzpXKPL6yvX8D57iZPT%2F5P6y4kqCgqTDlpYbUBjqkAf9bBDzRJyeOia3zwndDPfAB7AT1o0GKCEM6Y%2B2J1rM1pEXkKnPrhyzOPU5%2B%2BWB01osQhENEt%2FaEKy5aKD5IsUHklDlhlotEU%2FHizcWX417nYMeEzBT6oQrXqH3Wd42TpBXZszJ2hLfQ5uASM5NQ33foDfg8VpqxF9XsqzlN2VX3HhJl7J9bx0QImdOV8TeNkCPK35xIxpepGVEvLOtW7db9c5Cw&X-Amz-Signature=3a375643b1602efb163831c2adf6ea2e76f682d4f3b84194aa436afb72eaa6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

