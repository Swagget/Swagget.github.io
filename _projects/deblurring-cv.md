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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FD6GUMF%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T045259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDGrCMLS%2FW6FBBbIAdGzghXJnmYtEdP%2FKC62CIeZ7NRMAIgKrrWJRSjlU%2Fxk7P%2BW3ZmH3CDsMFaJ7geZzaxf7x4vVIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMCHqmnwdfQd%2FJY%2FtircAy2qRjjzYdhc1%2Fz51sXRjfBthemEASOTV4IaiZwAsGQ7F5PpAzH1xW%2BRj6WSE2uVaXdA1baiKewI1P%2Ba7X8f65p0hfGNwpHHaVeQYBs1%2FtKAQtiaTh%2BPLc0w%2BU0GEpDPmeNmkLTJiDj8Hm9GwUdA0Tec1sK642E450H0M2yVIxc31LGPVCu5P1HBdo5IO77vOoaXxwKd9SSriiGkIwhiIkuxq6FiVKDekTcHo0yUeoWCUEqXJf%2FxFEEY1NJfOhaEZlCadJyzPdGy0lghFCKmwl6cr7HE4zUA5B1RfBuBkgyVVHyGNLqSiyfHLyn7YuREHLDChbJlpjIjL6S1cyk7eAmRlSEywpwQisRXmHFJIaJMv3ev6%2BdBMnMAHNae4PGepvWzbxhOBXj3dDWtKUDABqqT2AuPkIYCd2ANGCSr8VoPtpu3JHsfWShx4seI%2BcVKPleFmvjxpP5Z8t4u6jF7B%2BiMjwlTp2AII%2BTxi%2Bu1U9e9cgCXGVDm1RY0R%2BxrMcxCSAdsC0ewwXEcXiwcMHGbJk%2BxjIzbcnARBtWhGlfgm%2BTUIn0EY7k7KmRR3J7iYY6eLPk1AKKgX1C9qYzKmVz2cXbbkJOzXTH0akoQo1SmszDd7%2FsA2NIAl6c3eWP7MMf2kNMGOqUB3EHHK29V0gDSrvDpEVRcAu%2FOPC3i2nS9uzaPM6Q1Fzt9Iq1EezGeugv3%2FYtqUyXB%2BQ30O9lC5hhFvRJBXa%2F%2BXBiUe%2F5LfBJpXCyRRJUUlb5Nhr9V0BTAEWDqQWAk1J0C3rF7A982ar4RWb2jdxk%2Bc0EhpvPuIoYpUj137xu3LeoBPM%2FLPnrTC1IRIN%2BoDu0%2BYXiZlr6uVL38REgzP1wUaSb5wqM8&X-Amz-Signature=b61a72af5054057644ab9b73010fcd47d20cf8245cf8701692df5943ee196145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

