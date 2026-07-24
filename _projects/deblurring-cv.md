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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2IXPC6%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T045649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHiIOnWIbj7sbytxo9XitD8uKtfgfWTf3nKZK3GzjW3pAiEAkYK9cqL9WTMHxPY5M%2BqhX4PqrqK%2FnDLDt%2B9glCjHPBMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETKIfntK75jzPR7fSrcAzOTMY0XxWpXiv8pv3je48M0I7LzKPhT6dnjKHBGZQuwNubKOR2VIYzPGXcKCPklQzo5uvF%2FujgBlJaUNwbwx1guAhFyelMtLTOWCUDmGkWxzLGVEq1Csej4G5rfho5uRbX008rzUobo3IFsQzLfI0Xwan7yQZGLqoz9pRbEJ4iDl2BFkYq8zr2UiRpL8QajHIWKrJjU0xxRRNENxcQZtf%2F24VQpy%2F1rysMc6N1YY765bc0SrH%2BDq49x0MHq1sWsO5ZmbPRQeXp69gslyzuCZHCeC4y8q%2BAxDoA9npy3LCt2AC6SSwbRQGVrqaLjjI4BBtuOk5%2Fy6wiH538t%2Fl8ESza8dlOYMehRiiuLWqOepeLM6llxwSTvrvj6JEFkewx8Moa4384kiE%2BzmoYf5wSfpcsIANx2SWlbnUeuYSSC0ML6eyrOg0Xo4UXhtyx2NiFrncbXHpQvXD9Ix9YsrmqS7w53rKwZONlTed6Ief6y4XXqW5G3KnFBRO90KzpE4Qr2IxVG2t%2FSIKEBVMYRiY3N4r%2ByNaeTnF4uFQ9VP43ZvZMWYJeAe6qQsdlxqnVIJHMCCrobjzBrWsfX6Y%2Fw9UAGkzlEjhlN47EoZQ5oVaFZ2ypMiwsWpUIJiH%2B7qpqhMInLi9MGOqUBSwBGOOc7U5djByU0ZbJfCWHYjNrQtJKPhwq1Y10yYOA%2Bp8lTfU3mgrbzIalSuiCTCy38FDikTAmxcYu0gyZRAbrh2Hhuu%2FeVEzkGgwevpxPovSCwLxPE26LsjgU1bJYu6HLbsirXs8Ba1tFPT39HA6F3va5%2Brf2%2F16Yjdatz0MTQZXq5MAqr0Y23JXQKp3uUv2vVTdmNU%2Fih1jeMF75kDuGfLGRe&X-Amz-Signature=a51b5b1828fdf3752221fe3af66cc66e36e2fd6bf6bc8644972e8dea896c5ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

