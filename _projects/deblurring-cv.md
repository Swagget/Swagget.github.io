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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYAGKSNW%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T203033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByq2rfdgAouCuGfp4VWu%2BMYe3sk7HauvuhhnRViiCPgAiBF5%2BJbkESwcz%2F9%2FMGSlXn7mv1KsMfweYWhcPjsyLdXBSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgM9XG%2F0DZlYyaP3KtwDqTMi7Wxas53kDgMkX8u%2FPkV7Ay2SRsXxtOSGFFPokjaKU2DZOIkEJIqA93j5oWk%2Bxw78CDoi7EuWajsrCi6afr1N7Z%2BCTXeY16vX5FxgOpEyfhshzfju3MQfpcoTPRTzJvwEq7O4s5vqfvciHFexVv%2FuoHCQ2EiufYEll1BG6dYocTTyDSpIEtNzk2wnFckKmUweseC1hdVSLx4Y94B31OxFoVPYmRA0GkI86sZ%2B5o826yEI7A%2FY0%2FiPUU1noZLP%2FKLXngEG9QohB5X6nfXhZzjx5z3J7mEmuTznaoBia4%2FXQvhfdtuvw6MWDO5%2B7zu%2FkCQfqnq4zL6%2BQ6%2Fg7lcrrlJ73SmTBwubK92OpMLkTk5MYj88Uesngxc%2FJk4gsWkq4mIxGXTJCxvjIC0rA8vIzSzrZHjU%2FxJMk%2FWf4HLCgQx4huhf5JTJjo2sEPU7hvnXx7kIz1j4x3JX0ah1fztv52Fpy9XlypJAmeqSGLsjpThfW2MEC9N1l91EGA1k3U9iE%2BNLlrjC8Xq3AO7GR68AS9I%2B%2FXjzASrcuBn8OS0TeYggaEHoUuBdd3d07k5mVOXzv15mnzugh7E%2FgL72f3JIrZ6OMTau6d6TmnZYmQQov490ehPcGm6xUvS5MW4wtYjA0gY6pgGVl%2Bp40yjTun%2FI%2BJ7%2FOFE1qDBcNmeGR92ffCnPC3Z3%2BbQe8gSRgSgCcAd1rP0vsy4OlNsVqOYDBm68v8YuNnDLc27yZxrdM%2BvyAEPQc6q3TS0e0cZLm0cgeaeTI0n7%2BsJb7pz1Bb%2Fdhz58g72SgF7RSIEDY6Hleom77S2rUjtOEFW2lCo4jH6fjpVXhmnpoGWi%2FZxA%2FeBJ0pi0dBvhRiExFe4B4d0j&X-Amz-Signature=c5a5de1ebcd4706581df7efe3f7400615661ec52580ce27ac278567488a7ff06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

