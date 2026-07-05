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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVONQS2%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T235316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDAxcEPYQ8ZZQZNiVdLAu8NtzGphIH4rYloVIqqb248GAIgCmLNNjY%2BNkom%2FJ2PKfmzr0mWsWm3vUsEopu45l9zzacq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDYx9mkqEFA7lzy9uCrcA2MrYv2tYe%2FhY1ZKAA3ayxTn6rLIbJ3dk8qg64R%2Fviob36dCCXr4WBZSwg5G5Obh0FI%2FioFgSGNvxHeBHxgiKFKUDihE%2FkSQRcLVfX1pfaCvXBB7ICoVCkgrbtlC7OIonccrcB%2FV%2BH06O98QxSHjBugPwBT50QWk%2BT5vvcWzpdu5%2FWSfUlnqla3ySR%2BBxyq6j2%2BUNOxENmY2e2ND67vW56M%2FOuNaXcTq%2BYRmLAbGCaAjMmWu1vHZH5UYI%2FvJpO34s51mqEWyo1%2BVbMvoOGzAZxJdxwM0f1RIS5Jyc5QlUMaNQd%2BoIt8SYfPj057r4iftfUDcTe4jjeEZr0HWSpSKE7vvEA6CehCr2I%2F1%2B%2BpzLFTiWX5aCog6ZXkiCz%2FF0ij4jInhKPnQERVtc0%2FinqgGlI7XJnwXY4HJaXK5R4tF%2B0rQQwFbXZ1EK5dH%2Bb6PSxpsauXk%2FLift9NyJm%2F4hCNydZ4jE9iLdezHVWERpQIoEGG%2FyHIkNKzAaUenVe%2Bv3LwcNH1TQXuf7nC7sIQs239KqmBJl3Q0BBPOp7ypbRkiA0fn6InNB5Gu%2FL5gUUjUomXsvs5C1ekxmKg0lXWVz0DcskMvBKOzgd13HB8BTs0aGAqB6dK0YUT1rptRVzGWMM%2Bvq9IGOqUBRza3ptkvXaUhyGE9mMs5AqDCpVJE0EfZGQLeuD89WXi1xQjLxRpw%2BmeMVRqBmJGXZPZQJznnkjLE50SF0gL1RFOiilch%2Bryi1XYHZtSMd49XYC1BL2%2BOtwZHJvXtuhRZo0ieqEAAGwwsCFIe9m%2F9ODNzS4n%2BoSurckUElEvhOcrfmzBQMZrq7Rk6mWEG7w4geEQAO2XdYs4bhN8PJl1qP7o%2FLtSm&X-Amz-Signature=f8d4f58f9646ffbb07131210123f767ae08b443a073fde8179f57da30a35f3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

