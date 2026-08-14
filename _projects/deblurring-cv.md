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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3UGM5J%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T031803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC%2BPHyS1S9GqfLHPDPpeW0az2UlOKn1AKLopTicG93XsQIhAK4DbiCS18T1PzdTv0%2B6%2FrGumn4VgKHta%2B7Du6NnhMYNKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRI83i91LndWabOtcq3AO4I5Cf80mqyAd%2FTJp4z9BMFuAKMzaaUQkQhGmXzTlt2gcIHODgc41Dm9QtfoTWPMqZv8UYvVQUg7zcZjijXnv%2Fa%2BuCsx9GR5tevfSipz9dAv%2Fv9I%2B5CDYWU0TPQmhxdnxGU3BmL2ySk4VoqxaaSM8YjWaXdl886sRAtP9gqE1NuwkSBgfYMBBI4ci466CuhKtbjx2kIBl2%2Ft6a2nz%2FdvMci9U5jnHndupzaztaIK8BGiwX7y0fsk5hBurEH%2BYxTlrcE8fLoPjJUVcN846fYV614TK7nIPax8jFZZANMKFJ8JTU2bSv73%2BEIh7cI4X7aWJ6It9JOf8668r8dIwgM3rd7NYGwg35gsfEUrwn0relrFvaj5WadyUtw9IeMZJWpXspIpmHZHBwyrQ%2Bb0oUD%2Fh955pzpmqSdbiT0cYiX2%2FghVi7kopTQ7dT0C5b9GxgQwVHi7YHNDpmHPtUObrfHpz3KRL0EytRGRazJ3DmjGB8nAQ8wmaPKPzyQXHcsTAvN3NQkgd1yaS6OW68t%2BXmJXd3illV0GSttuxv3%2Fkok%2Fzt7%2BejeePfTqq%2FMDPzCL3j8MLxpsko%2BFXt%2B2N6ltoMGLqKaDQGzpGncNJny%2F8ce7L7YT9Dp1Mw9OCNgnXq4DD3sfnTBjqkAUuePtrcdRHLXna8%2FqG1nfXCwhRW%2BJshaul4MkTMmgMoFKRMSsqsmuILpslnDKsK0s%2FPOAarnHfG84yHkJxoQDyKPZLzDul8eJKDJEIV0TVuu4%2BVUQJ6y9AYGK6srKWMLV1qmeVJzVUeCq169R6yZwjlw%2BWMkD0wVAumhceRYDue1OD%2BGDS1p7zKDIIRP2Vdq6VjlecdVZKw2tkEZFk2hEv3TTn5&X-Amz-Signature=394482209c8dc6e198f9992a2884eca1a1185aace5b67faad4608c4eb40664bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

