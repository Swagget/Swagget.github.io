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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4Y354LI%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T125116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbWYvSDzYPlrjlikbJDL%2Fgrcfw0Rxj0TbB62wwRVIzngIgHQXFCYICpGP%2BIgIKFuh8HnRUd2wuJ5NI13Y6O3Q28nEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqySFSjcdh2xxgXbCrcA0WoRCSZN9CDmCP19bIm9t6jR3Oxg7zfe46FdQKTTBNNn2mb0bErvZiBqyYSMj8puL2g1ZpjGFtMBL43eLDab3T6tA2KLUoxCWO4fYeQBg4uttYtKVTKOmn98PT5VPBQB8JBHmOhAR40DRc1f57%2BqG07ysBAdLMaGgjRPpUP7geuRn5Fh77sBHfEZchsPelkbsSE%2FVGVIi234TJvYwU75456keqLMNP%2Fbwx3bmavNSLCwE%2FO%2Fd8hw%2FYg%2BU8qvZ3PWKK%2FHHY3%2BXm3v4UmXmQJiB0z7GomF07Y7i8VHkUOOprQC7Bd5JQXsdbuH9kBTwSE2BS10DrdClHfPXbLY%2B4YBHvd82guXxioPL6NZD9Xo5j6q5lYA2x3s%2F8a9DDVnBj68XkveSBYr2ppA91YtFUb7aWkHRjT6dxCBM%2BVQMonKL5KD8DG6mqv9tT53lMzIpNJFp%2BMux890UKebt1igu49UH6COxhtuJj6ruWU%2FWPQLE%2Bx4Sj%2BVzkCi2bup5vqc0atNTnUxgesVZSXv42PmVIEWFaP6wmv9%2B8NxFpqKtX7Joloxljzn4QLuTIJZ1pL2eLz1Ac8wPDMJwHrfodMRhoIU%2FkCWp4lxweSoPSwZeZdcMb7aQPJNFSb79kEx6HMMOXxu9MGOqUB15RqDmtfr64XQAkm066YrNjG5rrdlYE524qwJgnFHaO5sDXshaCfq%2FE2X6coOLiMG%2B%2F8K1RMZZ5XCN5MTXR8%2BcMfu2Xl0lNGSoSASu9VhfHyhKJZwGJFS4wJdgUv4Dqw2zZbp2rKFaL8pB%2BkHkp4DGgNIsKazE4ofhs1dXck%2BXiO8X4hry8Ib4qlcSAhFyoQ5VHBeAd%2F%2BFuGfloaV%2FOBrSD%2Fi3Z4&X-Amz-Signature=02a5d56e0fd2d46556c3cd9cfbb4b0c8509e034565e0ac733996050fbbc4594a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

