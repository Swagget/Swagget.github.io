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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YBUHIML%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHa4XZAYObv5tAER9Nz7726jV5LhOxovzYaWIm%2F%2BVJZQAiEAnAvdJDbE4w9Ps59XBRuL1NNVeug0jBsoS5RLJN4%2FvtkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP3R%2FOW1vT%2FNRVJpircA5zwdDff268WEKaaJ%2Bu7RqEFsyyn84yYWFrdwzxNZcapmkerG%2BvDS%2BIqk2X48V9379tKv0PjBRb4nJbrp86dokIaEqusRXWr76L9ZXQeoWchmEV04%2BzSjUFwym7Tbactv8rH39ktJ%2FZxv9Z%2BEfb6GyHVbOitoztEk5gYdui%2BaUPKdEOVsqJjYzjjDMR4stU%2FQe1WhXKD2EC6vip5U82pjYeZJaod41L37xixIFXJmO0yrWpQV7hUqBE1WcM%2FYUCJT17Va49cJ1MmDS9VrwwawpKwgZm6E2vnPOo9GF4J2B19h%2FREgLIsDf3JD35Kiay1ZAH6bJOVoSzG5fMyYLadykVu1P5xjZezhMR5NAJaKv5BpEGAncaBybGMVJZwZH7ZpkYdyaTm3d7hz9wzo%2FXnLL1JQ%2BBj2leb%2BDBo6eU4BQUwsebEmF2kJM1ycVjS6MSGEMyM%2BfVJUK22k80BEqoVOqrNBGZBunmlcBNw7nDMeRWy81g76SdUwHLog%2FtfganBJIVZp114%2BeOfVuumHo%2FI4rAzjEJO8mlA%2FMRbj4FOhr0lVtTb6D%2FQ4fYUUwoS1%2Bz4Ho5yrW5sbAheBYBaNXP8G12VjQDBhR4SvZviHom1yHDT68ZD41l7VYEvTnyqMK2GzdIGOqUBUdWuonS64AB1kyPUb9djoad461JWXbkmOPLkt4iDtnTjvnL%2Fn7gbVt36E0a94xd3CcLQgvTQUx6jo5MPIFLti4tfUiAxM6H18Py7CfLBWxgUc1pfbi%2BDY7okUBpZ3I1cXJ2Gv1FtsZgKLHTeCAQTg8SUuVBFFXwdQ98HKHB1r1AGLiJqNcxTQMRFNBBo1xD3%2Fzbr0NurScEbdezjzdjKjE0pu3k9&X-Amz-Signature=b3cb449caf42972e5ea34ac77c2f2f417e94d8cf4171bec2c123369e3ebc50ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

