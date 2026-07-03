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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYMCS5S%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T225135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC64H2EDcBcqwmWqWY2Qvjo%2B7ho6I%2FNWMV0WBTINnnFRAIhAO59UGAaAgcF6knzwhH2HkvY4A3ml%2Ffx1wlYW9VOEmflKv8DCBcQABoMNjM3NDIzMTgzODA1IgySvDuG1x0bfx7c0W4q3AOzaVRmMyP7A4Be0WU89OuhBovQvD7JfS8iARKaH9rkqRiesfABfuL725BS3MLZ9lsOvpECjZZcTxnR78Sy42KnEeOlW1n12pfR0gz3VY%2BnPmIGUbnYODUP7v2PjLpo3Ld6OvUIZwulz8917jH6hVvGbYosrD0yUvJxm51bDfC5PmeOPrEdC%2FY9H35Zgrudww3QH5F%2FwApGtVp8o1ZS%2BGSX8%2FWJAxRq0%2BPdzHpve%2FM%2B4N7VBYujqw558mMXSDrJNUoLRFnTQtAka55PaCZ3QMz0PPAg6d3OKVb%2FsYn1h3DhDphHYrklD669HHwvxn6HsYwdY98XoVS1YqgklsG4wauUsz%2FOLNWxqCvNR8fNkNn7ESeFW%2Bkqhq%2FLA3yoREV9dlHQi8Ezpg3pYedfIJC4Cj7%2Bbev9tGp2m1qz5ZJ5FV8ZuzDWHa8bESYqXtz4fP%2B8pPPQGcd%2Fo%2FZIRjgYCLfXtsIaEfUajAcNnRrBjAKXBKGqB5W8IYk0O3o%2Bq7Xryd2AyeOaqOGxlOEnYNPiFm3qqAvuAijv8k8XwEW2qCJg7VT123fuDpSv%2BH2s8e96hQkwMZsvI3c%2FfK4c9EvjYs%2F5RoWtXDlEu2fFBaLCF4OC2pogSF64DLERS%2BoPbBClCjCE4KDSBjqkAZeBc2FDz84VqP1%2Fr1zLJofDuV9YwpbXvQ1RLZrT92LxT9uHhhS5CUbf21RptX%2Fsl6kcyB%2F0iLV7y%2FXce2VdTFVmrK27eb8kw%2FxmDxDsvGPb6DQecOOXbxtd1sM4B4ht%2FAzQm6a1GcT5a75ELtdk0YU2L36Xj06cNBeLXB4xY6znyyB%2BoOzgUvsJbkxfrqZmJvROPudBhk4Z18MdBtd3fzb8ltoV&X-Amz-Signature=55ebf63c02515e02f115f2576827141630f3b5e2d3f08fb2554fd7456608f987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

