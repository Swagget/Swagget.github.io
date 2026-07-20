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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7HTIR2%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T205745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExlHVSqolD%2Fox3TxszKCvMwHDiL6OyzX7VFkSmPMaD9AiBfIgMO3R%2B7A4jEglJzvzW3V93NiWzMTqjzfN12Glj06iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK3qdi%2FIsNr5C9CQaKtwDt4uiuPzCZk9j94a10I6c1b2DSaFp2VRjS1rnw%2Fv6ZqXma73tNuiFkInv0CMBMLfH5sffcXHQZlxoQoPpWst1EGPLYNqKhiLJCtbR49MuNZ3CZMKBRUkbrKmN5lkeaJBZrJiNPeo6pmWFJp3105%2BrC6rcdxEBurtyXcCcQIHe7%2Bp7bB9E9MISVvyPoycwfaxH9fU5VSwvfvZCL4cQpHA7I9ZLZ2dcyZEruk1zg1YKw6WLIyT%2FGUzlfu9QMEKNKHDpQzSWH6UTh0khL6kpoMRDTRd%2F%2FO2dxLSzNJPmcwtE2L5GDCpYIQ8vMyj7TlbWqzsshsPP9i1BObYlS41VB2%2FfVzqTNO9ZPgNNn0fHN%2ByI2zzedGxMujOFMsl2AxlTkwWvNdQPyjdmtaEw4JsQuqVnlj53tYSuTLMHhC%2BIMF0tKCXK1jfUblzyYcz09ixsWYjhXYN5Iz2CQ7kV1YF5fLRlQ%2BJKnjHgVG1ccviFuic66AWYvumtVJlPWcdCx7wtLF8KUhHp0u9SbAr65QeOvJ23FAmlIJWqoPMwlfG30lH%2BDWsI%2B3j7jh8Ctl09xNs2Hc9PefwTY5%2B5uiINWUDM7LTFSo7sb7QmbALh8OBiCAWqN5DfkudqkdDFsD9H6HMw%2BIj60gY6pgGA225QeL33mtxcPZu0%2FnJocP2DkNayMp9%2BZdKrJ5J4PYXvK%2Fhe5M7Z3xCoxbMoWXIIKtQ6NsUnmE2C3Y00%2BjUmNUz6d2xoKqfc4VUizC1rS%2FQ%2BFevKhg5wLK%2BmCCo%2Fw4DmrIwzcv2yBnMwePS2n07zXi0HDahubrHyqeyYW7qp%2FPAqLOAwRRbYA%2FC9fAlLNVDz5IzvMPMrSstLMxcflCfhFnOBMMSv&X-Amz-Signature=355bac2582212201c76f416923bed073f7c78f9e20cf58de8d002d2bf593a1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

