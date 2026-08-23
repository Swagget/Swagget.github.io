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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVOQLQP2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T033913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDlmEZAhqVpRIwwpjHy67Dx6p0AGmOY8gQ%2F6xoWY1xllAIhALUFwyUX2VvsG06EQczhApW4W3N8CXSgYhEAYRisr8t8KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY0qV2vY9q9Xzt6RAq3AM8BDIVmzfgOxB52IlaHIS0T1I5fVJu1EEeK1ed%2FfIpUAItug9cLQUK3aDV3ZcTx%2BAZRtJ3BwjJdWBZPtvPZ0mhak2bmMnDb49D1zBcF8vAhSxlEMRX6WUjEM1vIROYDe5es4lFsobyG%2BiMuczXoMO74mkgCN608gzvTu2CSKKBzByOTlg%2F5idxeIIF2ywtD99293deCRonSLYLdQMac8dUtwTuUqiYJcsYCO8gCwZmduP3w4ztPqjkxnR08RrMODGZNxgI3tzhuR7eZIX3tAQXpltWlAHGjrXQcawJXoTXWhw1hOgX53fsoNVU7xHFRpgq2WZJJ6KzawRdnBj4pYEqOtHenW7f6e2Mb3ImlRSSf4FlkbtXZ4NdzAaaBPNo3aZxhhH2pJbChhLbcfKdRFaen2DMaDqWuBsSdONdXjbGbbHXmgAK8%2BTxFE2dzxX%2BcnITowPPrahYI6TgbeuaOz%2Fsza0xP5g%2FD%2FXuDXIwKt7T3N6Fi3Smxb8QMXQg0B0WpVC%2FMuc%2BC1k%2BQMosEKM8ZueMGK2lxBiUBjNokPQM0mPFDE0kDowYXn6BFy%2Fj57KOovYhqJIbBbHbUqbShpLWqSsUKswKaHs3UwTUsZd%2FJ%2B%2BIg43uOW1G4S023xf%2BgTC7tKnUBjqkAdDOK%2BDsP0GlQyt2DCXpJzOJgf4bGFOpMUhlXb5QLmvQ%2BKsl2v8sY9SkB7lAyMmiYk3jDpWdR%2FurcYDxLfMRHaqLaeDvANEc8Kbbv%2FepUagqS2dy9LfO7pZsttQTHHg7Xh884I4ReKn98TpPRqB6yZ%2B1Gs%2FPkFNW6180PDGAH3%2FcY85EnQfeiqOhPjY6iLNI%2F9D2Y82JUKvlD%2F4ZVeDGbY4nYnDr&X-Amz-Signature=685978932b8037071e382ee97029c22c0b78c93a79642781490f016a043c03b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

