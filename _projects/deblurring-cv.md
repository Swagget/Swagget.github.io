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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHXDDSN%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T122910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtP5Vyf28FXnicOigj58TqZ3sfRefcZO1i%2FURao9NcRAiEA4Ng%2B85%2FfRgdQjhcufPpb%2Fjqq6V%2FoAAbUobp3BSK9anMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCUJ8%2Fefn6bDjn5aNircA0Z7%2BzArfiy3NEBnJVTheAIv8DoajB6V31WP3MtmGDkjP9dZpRKfVz3QcI23qYK%2BLvJoYECW%2BhpqKOInDBDhJN%2BQu3I%2FCm2nTszFWlN73evulsV19r5ibEknJwttgj8SJnEAlXhrNEuyGucYixoF3F%2BG%2FAcsQfBCD3wV6fwzxh1%2FvAXDDbYHrtd1LJ3eLD4sqVohVO96usRZLxsR1CVVgGhprGVGF%2B8umRCiZkfAG1TiM0DE5gqdLoGmUUUwJxb0S%2ByfwUxUjG%2BYmK0zmSDWw0DaU7IxCV5qOeNzp0hJMdUjsiKebDOQfsm4MHyDG%2BVjmghX6c7rWdQIDI8ZdwqfyeKJE8kFmOXI2WGura0p%2B1dNmtk55uV8h58a9%2Bn9DlTCIQkj4k86ikzUNadpWYvhzgR8cD80ywEU3a8ZHYz6LjJoq9yLX9SB%2BnndRLR3Aop2fzdD6%2FVCpKi6xHJJ36FiqqoVbla1p8qcqWaOr6ASB5UjHDQWgj%2Fl1vFqUJlOaWzVjbJEwn4t3C7RaYRXIlHvHasrq5Wd8mAW4vzlO%2B483CC1%2BFi9Q%2BucEjDHAOn63CYL9E%2FfpYVZx%2F4omec8yzhKzE2MCAkW4LNTrkRuxJGVQmrWQak%2FulQjsBWeN8HGMI71itEGOqUBRSsYlAo7fJN4h7YBCPunAIlrwl%2FXv7urX831xSFciVFXQD9e64sSzW%2BlgKJXDl5ITHBxTt5CRRrAuyXq2M4MAYuWr43vODILuSWM7vlpVKcokFnq0wVvsB%2BWRXv5%2Bd%2FwxdLT9Zg33Q9yH5pmI9GiYnVa3fBffqtCPuo4Ax5fi00eVvZYZth6lomYgbFjiO3hu89IVFt91NcN9aVGhOBo40YGyPYi&X-Amz-Signature=3c3c525380c4f8e90b5431ee109dc05c73a63b313dc97ae439490253baf23018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

