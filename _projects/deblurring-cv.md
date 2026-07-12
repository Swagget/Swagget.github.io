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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QCEWON%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T204043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCOAB6UoSHKpRhmVbWlO3BSnBZzYQHCpvvQUx6qAeXR5QIgDx0lvRkPh9Cvjf2LdVnFn2pWs8s6uHFezd4eeAwTBNEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI14Iiso4l77CjK0XSrcA0NL4CP%2BSpwBWwsG6v7yQC6catpFjIdJ26hQaO3sUNPE7QhKqYYDJOiZ2AfdiuAYikfOVpbK7URNUtB9KsxLjaPIQg1eexM9IqWldzqysTHlYN59mVOSe5MIkpmH5j%2FIDXCzaZls6erKXDiGrDO8gNxH5iEraAdckBloDzf9ShES42FOJUppzNCDegWmJH7Zyq2aTYl6PHJOLUCz7cT9T8Q74nMz470oWgpekRxRYIg000YdV9Hb2%2BwVnPJOsIoAyzVTMrujawEAP%2BUtPAXu4aAXOWUHedOXv9KHzgxQReAz90bH6g9mAuXuvNmVBNZsQSlTDcbZtqUB26QH5BP0arVnnM8ZflIkJQ5%2BlLv90CnlQOSJuhHC69Eeiv10GmVsJBtMIjVxVOw%2FfN2VwGEKXTQwwkJK7WTcVOF0N9Cmm12R3LTcq3rWisphtnY0Osm0D5%2BzjwAWDO9Cgla4aWqwiD7RsOibdY2D3T74KCg%2B5QWurxWYGmVW1Ko%2B%2B5qUNz7FVJHT9Uy2AUoz2uHCTZlqDAGAH%2FdJRfdCau%2B%2BJRU80un72gGFjuBBWTba20IKf2RkWRFpewM8l9JHC4ArIop3Xex8Z6XgWt13Tn3CvG5WWcV5sXm%2FWOCZ%2BpNiYCMZMJH0z9IGOqUBDNKoxxMiKZ4gVdEuaVnzYtQK4ZHtPwWK8y6eT%2BqbWCWsLJtWqP6UCsqHq6CdD%2BawAD2NlbVuTN%2B%2Fo5gvpjM9ndBnWcB3Bqtc3yLCorl0twfH6nvBf6LEgjxiKHjeoLHmLJ7O0bZcSmABnCkSMrMZLWYIazdopELpoU2wGXLVqLCiOVw5TvQ5dS36lxUQ0fZoM9Um5IetqMYjjEw9cHDgGNFYRCqR&X-Amz-Signature=59a9addbfa4e633194677384c324cab7adb47069c973c5c56d65ba1ec93c06d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

