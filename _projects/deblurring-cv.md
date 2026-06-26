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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL73E5PL%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T202440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8WrGTvXZFC0qoIWGF1v2HfQsKLkqLw%2B4tFb1pFlcu2AiEA1K4T62Q2wt%2BdEVs9AMb9Jo7wvqfL1zPOyArXu8o6zowq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBLGVJRcoH39%2BgarECrcA%2FLljdjy%2FYPtz7LSML2QltZ4rg3bhSwGYqGOv8qQDvg47mI99iJKG9uqE19N%2FisJ3Zcr13IZ97oGsQmt%2BTHIQ9S7oguhI0yiBegPn8aRxnj%2Bj4IOJPDST1aQT2KhNcYLqUPC2f8zjRaOKmjgka2nTZ4%2FCDlIXD3YGrlbdGazMdqjAO5%2BMjazuj4%2BTXCZlEKh%2B2qbB8Oat0E%2BUYABvU2SR1ubxfm3jqaZz6JCEzumqiDBgEkrI6uZbqMvVxSpftDSL%2FFtCEYp%2FBoEf0ixvtEpuhnmXHFM0anxndfpNgTXbjZ5I8nTwYyrV5u%2FHko7ZtzFf6p5QkDdMHgg%2FAqyEVjuOBMNXiw3LdUS62O7njIG2Axzwew8KnWV2FuQ%2Fr6qfbrrGhTYvjSIJYXRj8gft9Tx%2FfAswZ%2FxI1i8nURNdeu7Hel3KytONt2AY%2B2sJw3b%2FtNquGk5O%2BGIqDUhpIluUkRAReXZb7snkm3NQM30ulE%2BSFaZJpCXU9tJ%2Bk9lPvqWPVaVq3vaO65M0oIM%2FOjmbgAZN5Uy4xB2nkf0Dd27irsmu7yXd3yn0Vd5XfUFLrPG2HkxK%2F7hF1o%2FQdYNaHSgR%2BQPjvMtq2qTVPhOZsj2v00ZrXQEF6276Z2IHjl0a1KBMPSl%2B9EGOqUBHOZxuynQI5oMG363SOjl7weF4EjqzduVyr6uSE5uK5fjiHobLKxK%2FWmDHUotmTIfySY73zY3CEo2ZP2oby4Xn7UJBRF2Hv8IaDEcHyN3k9oIOjPnW1O0Rrfm9VqtMdDV7U4yXyAzXKBV3XKYPcph1T8kv4UAMN8Gfmc5HfP%2BENUUxCHbryZvf8qp3VXk9MB56IRVkXZyXGcJgfqBtAN3A0Ty9XLF&X-Amz-Signature=af89ed61c569b8926b5989ce37132a17f909595b5604e56f9f566583a94308e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

