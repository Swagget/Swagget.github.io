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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636UNILI%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDjydDMrmbS1ko7%2Fa8gE6KGaGKhwaU01psi6l8uqIM3RAIhAIZjQ0fuQZQUtdOILQ0g5YVl1OxYBSNp%2FgzTWBDQOZ7WKv8DCBgQABoMNjM3NDIzMTgzODA1IgzYYqdmSIXdgpfx8IQq3AMn7EBN%2BfjfqpF1sfXYGmtnVEWEo9wnO3rvFIH4ZV3OXNWm6tvOtKWSxui2d6kQfZC2I5K45Gsk48HZQsO%2B525Bkm5S32NeZeOxDCUFuh6suJc5UwT%2F67d59G1y8JKo%2FzChsIn4wWxBdHuHiGTatERwvlB6lBr1tXGSCvOLAByf5Rc9x1MWvdMd5K7tJ8WRS%2BxIKBS0q82%2Bga5EhsGNY2x6gb0spnpfDUNt2NLgLnMb2Jhi2Ba7DADuyHfLxfl9mNo3EisQX%2Bh96gM%2F%2BunbOb9E3K0srX0pplbiKGJ2tvAOL8rsJqH6kuxd%2B5bq1Md60BqUCbAovgQAgLWLuX7wkWWCGc8LP%2Fc%2Fe3IvBi%2Frb78vXzGZsqkIsA0jLZbAtQmkbEh1xhPtIeVFgaptNqAa%2B9pvlIXImSxITYHYbUWVHyKSGvhUWPnKEI7sAnERqInO5rhvFKwWtVOrdmLyrzyA97SZ2KiMkAZbI9DhLL4dyXxHrT6k8qWNMZ4zOqVRkvKT68RHkahlzOf%2F6jzQ2%2BXnqEkS7Xtz8s4Ich7Zqt%2BN6rKOg7Xrmsh3D6n%2BGTqmArFQhHLizUMCDl2XarnnjKzbZT2rEtUCS57pYbv7do27nxvFT6LDGD%2F2smW4Z0SDbTCGxLDRBjqkAfIKiGUYEeJtNPRTLHT5gTy5T6gCQO1QI6aw8XDBW392WMBD85C0cBT1W9K14ElvH0rIRL0rjzkpH1O37N1cTko0qxyIWNdUO%2B5wRi%2F3x6EWf7zK%2BbHOAUyhknXhDvAotCXVu8u1gnTt0smFCSBDuAz9so3%2BJlKmJ9mesk%2Fl3qV8SSIs3hU9g%2FPETrA%2B6NpIL%2F%2Fp4pKZiTpkKB%2FP4aJBgiHwOc%2FI&X-Amz-Signature=d794c190d4936ad8365ecc68acbcfa755e0e04e610766bf0ca225032b2153da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

