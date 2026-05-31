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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4QW436%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T175205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEjSVL84G%2BxNMGdKIJuCCisj2ss%2FcUSzMCa6Pdaxs7KHAiEAsDc%2B%2Bte13hgVpJQD2txST%2BNuXyxUfsiDx7I8Xoyrme4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLF%2FD9wLu2jwH7gr0CrcAxONfckpaNECS8ymqMFKOpEzIDrDacMwDMhmpDqUNuAly0VENfUeKWE%2FgFsiuiLxuqz%2Fvj1MyoVK8mDrdOLNPydouzzb9LtA5CVG6%2Fq0IqkvRFzKxvo2xw5gT%2Fmxe8zJk%2BiB8jJW2DdD6%2BkGZEcuH3CNWbREFq1AgtFVUpY4GGwsrNHBuvSGRLZucLhL3QqLTXEh7cYLqe0flmigeFhOHegyN9EoP%2FtC6SdLzV6uYtCCTITC4tjMaFW6ucLh4D%2Bt42YQHOwxZx5bJpc4YNbnPD%2FSZc6bsssP5lFuHGsU6JfGteSsB5O6RnXxOcbdsy%2BDkwuCH3HVFkvsqm8piap%2FHtGZseaidFD6jpWzGd0xxuiUyjJDexSUYOBfPfH8LKpImzNysuNP927bWpr1iHJo%2BrquZPe2SmwcX4Ovp0DsMCzHIeBJ14z0nc%2FpGTvq67ulv3EIBw83ImfxGZJOwtjuIa2KUUMVxhWOlpRvAD4VHIxaRLXPTpgs8mX8VH1DRGKg54Eboo4VlZ%2BpU7dYD%2BPL3ajH0HODB5R3c4UCIXwEmFaG3K7ZP%2Fs70A7umGCeQwVbe4zNoEbqoIubcmjnyFe%2BKEX%2FWp5VViZhjgNqwYpoGmrxpjlDxZshO7JbmWifMMi18dAGOqUBWXUAAE3ukE4pEFG3jRCqTobMRp3X6oJfVZtjd1m0BDhPLJq8mZapvjN9ihSW43p2vUQ3RWAAYpvw90ydmub0dend7ZQUTyMVcVNUgrtlaC4cEc%2FBFWBcgu0jw39HBUEixMikOnZ6ZWgSZyYPyD28Yrh5RqPVzLIHAQPJBEU3fLE2ZVQo9KQeuZpd99lhnpeCsKs7HZK198sumempa%2BzVdBl3ZjID&X-Amz-Signature=22be0d2cc7dbc0529d5f0fc067fc1b69c1a5f3b2a6356098ef3a19f56ee05e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

