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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HXE5MY%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T235514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDsHUHThHma%2BBXVm72o5wvpvKdKUdBT%2Fe86lf8%2BM6ILeAiEA8o3AVEUPIYnGgDe7MmDevavtVDD%2FUdvM9U6bc0CT3vQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLL%2FM2nLi1mv5yMBrircA5SftyZpQOy51EmiYpPR5Sq9Wq%2Bgb3Ru0LBKGikYXpjoIKK5denMNs6RKliytLod7B0UvsldS7gWW01%2BOAF2si7VPR1vqqEVWH2XQhPXOS1SarN9hoKZ2UivFmqTktZuxisDwXlsy2zGZwmICRmYkKYzs33157JLQa6iDOleW2Ywh5J8X0QVdU1zjOWuwLxA6Ul6mIro2b5sBR2lmT1%2BrpSr%2FkzjaWiyc%2Bivo3umuGb2%2BeJjnGl0wXgjkGMpZkmnBszsvcsuGFNYoHQupoU2FYvq%2F9g3A3d3jRneTSr6JEKEVHVKXly2q%2Ba4shKnj6TuE86J9uHMly78u546IqlPFqjsef2gCUuesk05PrK%2BOGPPZ8eW1r7ea%2FKeT5znAbSVDBlFl3cbeEkXUpbFx0Y6qg6GA%2FIUo5FapNYx4w7SSw6dZuG%2Boj3uBAANkVIfY7WYs2voNgjMV6O6VS9P5aQBw%2BMxF17rfrLZpKAFfL%2F31LGSx8QM7VUv%2BNZsFYyaUyJBDF4%2BUMQCHb6RMn8hgczreUepJRL4%2ByTvQwn%2FuPY%2FWBmdjzwGUxAeeNqJ8upNlsh5dr%2FWyKfr3R5k5bsAggxaqfxoSre3H%2FKghKbglktzX888KtjGLWLPJNrRMziFMLa3t9EGOqUBwx%2BR7EphyUfQD8Iz2WcnuX5cpXGh8nUQI2apgM98zUo8KP3rSBIHUs%2FnsmxFa0a8goUKO%2F7UX9ygMOeilYS3Wd%2BmVcxCWrbPCiGQFyHtvRKzmVcG1ggvvdYHAMBUBx0apupzHm1ZHAp92t8mXT1crNaypIBiNU2RUBjSJpFA342GVqfPFEuMS8sMbbJSI%2FvIk2Jy5AaC5t%2FcGQcVXFhuDdjvXgVi&X-Amz-Signature=6985122f26ad88661030f96217d36c21b8bbb0582ad678520a1e74193660b04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

