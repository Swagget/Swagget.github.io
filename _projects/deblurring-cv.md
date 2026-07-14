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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSAJF55%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T145149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD7t9GBli3%2FgnR0yRq5sor2PM5H2qy%2F%2Ba9SRncAUtrVsAIhAJGeziH6uU42v%2BHJyyPdJRZDe2c1isOGaQ46ayybt1%2BMKv8DCBcQABoMNjM3NDIzMTgzODA1IgzwVwa2Xj3O3IOcRFIq3APXYHUO17vYJ4NGxBrKMVRFiCOlOwOtH11z%2FVzA3vTurZcmLj%2F9lu2vF%2Bxs9Wt99CkNrExVDsL37%2FhfukhDY3CokAQ3v4ej4ugY%2FDdEL7mdihJSc%2Fsj%2Bs3OS38oV8IuUB3Lbrk9RlT%2Bo%2FS4THb4M%2F%2BZbaZ0a1cjoTSHeeVxO0fYKgoW9C6ILIiY235ApW0ZthYJAMWLaNF7vbP6kQQk9KgM1rwWitqNXP7YhOuHRha%2BbzWB11Ew%2FxmuPPa7oJsrnHsbs4P6wZ6N6JEJajbC7voVUsB6zqF%2F7eSoyqnMqyaB9y%2Fk5%2BgX67XPSTYyGjpQYGrUU8y2LXbX0IXTgVU%2FChCpwC6gKuijC0n25PIltg%2Bf%2FNqh8C4FWnM4%2B%2FMOlIZO7fadHN3Y4tzcHxqibGtF2ToRDtGmr1GsNo8HykbiigKwivuT80uW%2BMKB0D%2BRgTj2qBGIX0YztJP8S9ij2cVpIxOcfzfB3zIn2%2B2Ee8Iep0fUtmxqP%2FgbtFHhlRL0%2Ff5EHQ3ONTt9xGLYn7cuyBBKlvs%2FDwopK0JIGzwkTF7rsdEgyPqSp7d1AcsXO0jTJEj8hUa0m77TsoKwS4u08HxrpkAoeGqeyStVEIhIZ43GWG6HlXMf4KttGQ7XEwGHpTDcgNnSBjqkAdtIJiIVH4E5DpwGrCcvkJqczsr%2BOTsFFsBkBBCVfL2TrLxjMyRfLa%2FQWbdrQmD9N39eR8BU%2Fy8cNe86JKBnq%2BYckSeAGVUqN%2BOnVwjCgEm4LqGUDomopp%2FBySWUGSc%2B%2FCUk1tI%2BkmivyB9uxHst0OyDhomc8R79r1QaGMZu%2BxhBVSA6r6qSL6R4cqMXCR4vCqe%2FRhJGHCs5fAar1nKt1MezPkIe&X-Amz-Signature=c32723294a5605a2534d83a947b6f62fd249a9beabfa3d27ee05214fb5084082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

