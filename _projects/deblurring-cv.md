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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYLR4RI%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T113518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPU1ZaM%2Fccum3sz5hVRDvUCiyxJawHRreWwdOFCo9NOAiEA7zTrCGlGP7db9UvCwD3bhnmwHFGkKOYsWBXMNusJL6MqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq9jv8xCd1GSZLyqyrcAzZk0mjA3B%2FFvD5h%2BdTtnGPfBvDxwgXfmZilfjCUYVN5EXXDf9f22Ab%2F%2F9l2dOmIH2eDEQ35sd6Qw7TQ%2BtHJpXLKWYnKjdmGoGTiZyj%2Ffs%2B0XM1rFWGk2hp9r%2BkqHuzUFKolBReFFNNf30p%2FaUWS1ZFyVnxE%2FSYTcbF8tiYIbkkULpIrj%2BT5S8OXm0%2F5LdO9nhXH%2FbP0GRzVOBk4B5SfU51JVs7eUKdKd%2Fb2%2FAfR2nE7mHYEU24%2Fh%2BWnAbQPBMK1ns2j6SXftRqf%2BcNPk9tfL9U43PJ45j3CgsBJEuU9i1b61m%2F%2B6l8J7skrwr%2BtLwdaj6JEH0IwEHXwvQ1jM273%2BTB2WvehXnCpxvdUmvCkQ3LFM9q0M6ehPegg5r6Ft1IsOq4cxJCWbinTvr2v2XmXwvKFuVuxQY3k6Sj1XA5Me5AtPiFZO%2FPPakIcUI5qWDbs2Rz7yqVTQh0IFMql935fJieLqJsecn0nB0hpZj5O%2FzKJhnWtBwXX6AlWnwX0rMH7tscD%2B6sbrbYBAoOPNfOwymq%2B2FD3tTcg5dHnRTbU4LYeqZT2AdVGiCnZu2GrYP0SILp9qNd48HrCOOiMUnm%2Bj4JXFy%2BbyQ%2FLhDjI2kjnUX4om%2Fujse2qc4TJGuDuMNXK69MGOqUBYO8mSJBowvPnLP%2FS%2FzJkmZo5%2Bh9JSZrKLsPKS%2FGe8eTi4QkrbI72qEzLDr9mrTtGBT4k766kef2Mddp%2BpvJuogQgwATCD1ecUPf00TojaFj11HrArWWKm0L8AdRweSawvjABWm7CvJTP%2FGIDjqHiMWHkSex9Xh1nlxOepEaapcdx%2FRoNhpQNo%2Fm8msG9BVt0waSfekkPsZhmeJJC7Xv7IkpHUHOz&X-Amz-Signature=cf6bfb4cf768527ac289e13ebedcb5fc61672d6ee09731e37b1cad681bc8946a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

