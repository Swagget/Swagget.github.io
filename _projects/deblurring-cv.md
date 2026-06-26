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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KFY6UJR%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T113627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrOgfwZfBW4iHDEvtK66m2iZQhBfafLV9agswgJ8lFMAiEA3gEk2IAiiSQEjbyz6J%2FFpXfI7YQwP2VFspdFvky5Evcq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDH889BVJSWWxPeFyRSrcAzlcVYXMXle203taBPMg5ycnT5wLaI%2BMvwJUwMcsctn%2FlL%2FTPxJAVZL359xK31fJe%2FL8SL3Pu9I9waIzZkOx%2BaaeNrGs1ywydjdXjpDGlyYVn9C6wJZ9lk5TOP%2FDPk5eQ6tTdsAQqV8u9n5dznWmhht99PTSmajDpoFi29L5dNQc4XuNbD%2B%2Bmz4q4dpBDOotGPsUJnaDjJ9GxT9ISlbBk8tpbnItF16Xs0HgkF%2Fxx9vTjqQXrnAOE73AedGHpSDl%2FH6%2B6V7o9pih8%2F8a19RodV1WQbe6A7Ua6sfDwwKvSLZx%2BQBzXkmO8F03bFmjrTDkId%2B4mjIl%2F35%2BxFibfnqd0N99L7ADyyrcDwM7UtFSD4O20zdL8wY9IjCIx3EAu3NezrOm3cQ3wXx%2BYSN0UQpgKjLHvaePBzMFeSzQO%2FEJ0XXsd0aQ3iWyu8L4Z6FxTNV%2Fvz9uAac5uPvw1z75TGPIzdOBwiRXZAuolYgy5eht4EJTYSbid3GTDRFfjMCmtOIPruBc446mh%2BMisVNN5t6uHC7VEoqjNYAM%2BI1QngLCn5p7o9cT%2Bm6Gg7Djx2BK6FdhSN2Sj4ovUtTn%2BTgop8C0%2F%2BdmGE80UiuTwg82Ch4W%2BzBJ5zMXhxnxC2jNMyRnMOCq%2BdEGOqUBfKjVGhxVKGehF8BsJOtaVhEXvJYS7nRUKlEKSzhVdAeTnBold7t7ZjcD9OIuNCVE66uHblWXp%2FX7euj62737bF1NVvv%2Fbs5ffRDQfFXoZdSzXjo70k9WIS%2BIZ8p3tHZHvkcBcN493UQk7rVc7Js5bcFUvOhXvIlOy0fJCpLtyIE2lld%2BUjgt9E7J9E8O%2B2ucLxffILVV3as651fo79DZrWjf6bwO&X-Amz-Signature=e500c206e3b10e13a9429e5f0b31f077d0398d2d4762d10d1a682ff610a0fc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

