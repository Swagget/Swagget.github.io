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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USG5OMJW%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T152846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVsu8rZ4%2Bd5fEdaA4HEZEHO7ndFk049GFHWTXoqPamCAiEA%2BFYg38SkYr%2B75Q0kLH2OHOkRhmYaFsiepb9lNJqCt%2Bkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIhIBgBfbgRjWc95XircA4BNm%2FBzVYSU%2FW4UsgvmcqwPEkVp9Rv5tC7oMHywxgdJP2oVlnGZvR676GFwYPS0HLxjuPZ1TnrceyfIlvTkPPU%2FCRl8XsCKL4Nwpfj0vGxAhkAtMTVwV7juebHsbG2wUOfyhexOfpoGai8O%2BHUc76MlMqC3ZSBF3QPqdXDBJvTnBDlYJnmWRyX5nNNCh6kKkCU%2BSIYYe51T4jO%2Bm2Kbxv2XwNdxTDQ5tVk9knSs%2FLS2A99qCPWfvIPYsT4nXnBzBqF5K8lDw0d9HIAD5GPUbyQCb93xdGUjJw%2Bo1jWUbIowOEVIXRJv5Mq5DDEWEkbKJ%2Bb2MYPsaiHo%2Fes54up38f5XzADY9iCGOtlu3D%2FBLUWhaNJbW3j%2BjKsTSQMOhSRjKdB%2BZ4UBHOdb2JkWszEJDsQCmiougT3ZNMKhAnxGY%2BoF6ZYTwLVSrN6sfORhr9IGDVVYPz%2FirbBY0XSc0LbxeBwFo1ibt9adrZjmVD2IG6AEMBj52g9gDT0JPbsd6yKzQxMFGaZOqv8GJoJGr1nmWvMjzgq3yBvg%2FkwCs60BOfZf0MMQG37TlF%2B4%2BJ2kRNlELkAkn%2BAxsYfbJF7R8Z9Qz5H8otnrkkId7MYzYK%2Bqv%2FvG9DOBg9RqINWMKjbvMJDHgNUGOqUBaISDQOB07bt6ywPsmYWStYmEqhR9TB2wfYIkR1b13KTH7Udu0Wra98RMHvTSf8Nnz5EWqIIIyriC5fl8qnFod8CHDbOfDkb2S6x6x3ChqSvDV0ssBX0oMbaWH8B49jRpOfS72NJFXe1dPm7EFuUDDxHT12M%2Bib3rVP%2By6W6S6scCNFFDPTdQwqaXf%2F%2BXlGlMI0h8q0dn4IVYaSG%2FL1oOy1Gh45a3&X-Amz-Signature=1a17a7adc17ec28067e903344681c9b679a72867b1fcf17919e2d4d59813602c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

