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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKPRTKZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T173816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDIuFy%2FP4h83ePLPyJs9%2Bq5HGdXsVrLap2lzxXWB8PH5wIhAN0h9XkQMPvfoTq8qAnEG6VCoy4Ev2T7r0ycMh9gAdHXKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgAu7y%2BfE%2B0MLCSo0q3ANJz%2Fz7fvrl%2BgBcJnNGpGodnfHSur8s%2Fe3ei50l14Ad85DTp7NxFY03bfFC7Vf2Z0OcNFY2D4EuT07bzzZLj%2BE%2F60%2BzPiY%2B4QexBqtkQooVDH4YfXLQPsgrlCR7mBjNYRNIBDRDAlpvx%2FprHSDCZWnEVrRML%2BTMCwK4d9yE55xussZPwsxUpTDm5N9a1scXIUcJpIxV2lLQ41H5xkoeGFZP02XXBm5BKnQWPM01YuZAlmiz5o9RqHEtNwb6I3yWX320EEqnJ9OPQz4nLrO9rm8z2YkWCyLK9JVNWjqWOMsEa2MnKlITvlm9%2FJUXzrKAo%2BfuGRqBg1g0aU9ZOilzshh9oAw5T4gYQ7L%2B9vEjvHn0oZbEfONjd8R6t7Ns843FqKIcgFNi82LdBKfyiD64hrmf96jUnCZuy1KNOr7%2BIgH4GeKJUertr%2BfgXzbOD3EsY9fiNNqjATV%2FX7ai9T9f6yC1rk%2F%2FbDb3AWkaNZ813DFt%2FxJVxkXTV8OHFjPDzKrJCNfbeFfk3tRVHur%2BdAB31S0VSIEJWT2JaGYEcFwyZfvukOGSaUQuNzyNq%2F4VpOARqc0grm4smVqR%2BFAbC8FPxnGzZTwlUZd7UuysJmPS1KACmsWt%2ByiS6MNqX1AI0DD9osPTBjqkAYn4wq0vyBLR4SJwb8tAQmKuF%2B7GkOEXNcJWylAXqqHNZJ0Qhrhp6uabSSqCKZsHfnRPyVZ0991fW72AF3IFrKHV7nulcH9Ay0HuO4IiXnksDMv9TSBHvDlYAi5%2FqzFTGnuuyS4ma2ZpEj4pSudAqlyYI75YEu%2Bq0JADhhANIZ5mFfATGsO2UBI9flgEMPCq7dgR6%2B5lnwgmNshm4aiVwomUdUhL&X-Amz-Signature=4708f865281cce88495b45db73b96d26952b09fe8cff1e5cdf3c305cc52fb20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

