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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJRSDB6%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T021552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwxE4TPlkG6mYiHIZXQgj5XPtBour4mES5uS%2BTIV8vFQIgSVvmGbO0Cn2vMO2Swlq1AZmU9KTOLFrLdbKe%2BRkw6iUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhxTXXhF2YrQt4t8SrcA5B3j43pHn2gw5fyO9cX5Ssc8SXZ3rFH24YTkMQCR%2Bf9HqQN7bzi4ZM7g5HoK11cW%2BIroIFttF9Y0ZFpD2ToG9DgyqoraD5FDpZ2qttH7RiXMvc8hzoeaUW1IFdTC4LkuRs%2F%2BeReogZFsSR5tpvStl3DN8dM7tNTFpr52CuyxrjV80S%2Bd4zAWF5kMf0oMjRovlaxJoXfn5MvBUFL6ati%2Bgq8x6CwGlZDfL9kXjcFClO7DFbtcX0gvlU0u%2FSuKCOuyNXnrsngV07Eput1m6MUtwxvI0Ell2GNVVnV2yWhZWwqth%2Bmm%2BEwTSOvaT95lHsXr64G9upTm93aJfi9pLmmIZmg2l948h68H0PPwp%2FfGbe1qEI%2FgkWOl7TlotVljnVUxXi8LIg50uI9fiI56f%2F%2Bdtpi%2BSay9X5SMyKkc7b9nlpSOnpoKdEpoE7Ob5%2FkzBR7IBIErxCupkQQJn1tjj6JGywAK403cW1sHKcnNuE49qE%2Fc%2B%2Fv8lR7R1uaBMmsN1yBQ8SXlFy2%2BndGxhMBaEKObL13cXSJgl%2FHPRoqP0g3j2GEYRiSSr04P%2FbLTgqnUidV2nGkBnJAfsj47asjpIGWPECooOQJp0hcngykTXX9rTPJ%2BQkUzk8DWdR3Q1QYMLaFqdQGOqUB8VmZ9rOOWpIaubcwpsKjacdSSyuUK1LmXIPAJpBq%2B9GsgbgBHgaTYAS%2Bykt%2F4kxyuJQNbhh36srEtKnycABAsZwFvW6wwrsBupaGNevGTjlIkj1TcN7n59nO2fXwz54YbfFT2Mim9fXW3dzOjP%2Fub%2FGQiwVe9GpxHl4JsIIv3zkTmGSOFBmMy1dk76ecBeCcmGQ6TEE6%2Bx2SFvaG3nAOYNCJK%2F48&X-Amz-Signature=8480bd42789860824e94d8b209d648fc6b945c2b5ffba2adee1ca7f09b944a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

