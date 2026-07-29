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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5IYWMSW%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T200532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLWj%2F1DvTs8hHl6WV3SmhkkIM2cb%2BNsxV2TNh6I3TajAiA1QCEHLTHzXXlKlT7g6upEwEMebzRAW8yzKfG55X%2Bx1yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlzFdlxK3U4jl0xgnKtwDeVoh6YcfHqxdds0D5UzSsuSGYjhLDUp5nJ2ChYyaVRY4j4wCoreHaaG0O%2FTRNrJHcqwUmX7rn7VTHK18WMcasQd1bDXf5B3u2YIp3aizAheHJmIbBpG04ZqGPi4krEpEk7cvFDbchBvIkGpZfIqFGDLLGqACOzFikwBJZRKAsOmgBymdmsCI4Q757bmiMvQHOA263SRqaXxRxkyJHor279U6nkIhSFCHIHi9%2Fl%2BVGGhobvuIH1ZUOPT7J4YKlaWJCIkrCuN9nziQVU5DVMe8g7wZZKpR5y6UwIlmd5QgTYR%2Fiw6QLpoFqvGDg91cqx9yvkU81ycuO1mHvePiEft%2B70zJdgFm9inAV0ODZufFylKo1cRFraZtIKY9wy%2BH3JPHhYm1iLzN%2B1Gsml4yrPUxTgu6%2F9PA4d2huK1ykDiqgmNO3eWfyAqA3IRKo3rYVn1JHGbog0qT68AjE3JBOkl9VzVWDivxXwgvlaH1ETsQCJHcXPm%2Fay7NXTkvp3hKccXyB45rqGbucCEmJW6iyh%2FRL81E2xFh7eT%2FT6%2Bu2%2FXnQDlyDWIIU%2BQF8ZpsefgdeOgfoGzpeSInzzYkrhWbDnT0Vh5WpRdtRdR%2F3e%2FQrigZeUk0pXF2qYYaCsQNkwgw0K2p0wY6pgH2dlTRe5pr9pMOHkvFVj%2BkgFOB3%2FWVSIuBEHtzGKmnLluCGWpZWOnchnq2Mcxs4AiWxySmCYY8RJ%2FkNp1%2BIIRF8pkp%2B0sM7%2BDNtQFUIlorY%2BhuHKyZNW2BCXKOvln3QtR63lXqtlZkdxY15m65iUCEJt%2FM161%2FBMjAGWkrMNzAvJc3U1VWdhUPSVJcKmZfDbbb9IuEPveSKDAZTddHzAi7MVmdlbY%2F&X-Amz-Signature=e3034fd71d4ad21fc832ac69ce4dfb31f2b4efe33787bd671581fae1e4868e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

