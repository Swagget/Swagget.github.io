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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AD6V3F%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T163718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHCzb9UM3ElcSlHfN5oXBQCv2mpEBpCK46GshlbAku6TAiBRzhZNqF1qRoDV7biH3FysW%2FfCbdVxvHBw5RjK5oV7jyr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMoSpL8JOIre0%2BZkm6KtwDr40Y5tXjVcMqPwJqTkL2WiO7pHYNOqneiVhHvSdgw3%2FJAjUfE5X%2F22jWz1rcogLl3UAf%2BMbuIbLxaSNPkXzqGYMEiAuq0uN%2FYQJ7E3LnO6ZlU549TuxXR8MVtIsydmUB8mgRW9qAeu%2Ff1plTKHGNCRM%2BIqHsGC%2BOxKKp20i2MPojkx%2BSOZaYlcY8ID5Ae7OMRkiJDdIkRDWTCuyjuxpa7j0XgzpyfXh8b9YPI9%2FCkwkLmaGCSOCwyLvocilhQaZX1FYMXiyY%2FoM5Bd6e4aGCc3Z9X9Gf2HmsEfo65dek%2BCBaQ7mubawD3AAlj3%2B3FHmZEoM2HXpcCEPmjnjCu3i44ImDYVZMhKzu9Sq4Lee%2BzqLTiEOCKzX9qbVbJDbPSNfAOacecU%2BZ2PmtCO4wMQtLa%2BdeXh%2F1%2Bs657yIIRk6ZOS7IaCcQYqUYKFtfrbTShc3LFhZ6cW6RDAVRdm0v2kU7eUmm%2Bar7FTtZL20EI3VYIxj6fX9pcfZriBBvGsM3WvY2GPFh%2Fq1M35iFw5jYsxBMuLP2GlUKZGyuYrLr23tRrAizZXcm4H0i%2BuhYXwV%2Fk9fdVi8sHEeAyVwTma2sdCEHwIVAuJUeGTcA1zwWpfPg9TsYIP5rbXtF6G0SuVsw6fj80wY6pgGlGFMNKc%2F7ChfyfCZKU5EedClr%2BcokYYKXCmx3%2FekE7uAVdgsGPL1ofwgFEFJ8VJFy7IHNYHjtl%2F7mGNtuto39huEPjsA6pp%2FCTQ%2FiaIP6Y0CXVEm6a%2BD0cuq%2FKdPpuAe%2Bzq4jRTkhlpWvFag4Zgt8uHZdRFpXG48UZoFkL8UH0Wk8Morv811e6nh1ckgxhempSV5Wdb3Z0HQ%2Bb61a0OI6yGQeJg9f&X-Amz-Signature=5ecdbd8c1a32b0b5537bbd6087a1487e8346878f2ddc28cd280b10697608b439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

