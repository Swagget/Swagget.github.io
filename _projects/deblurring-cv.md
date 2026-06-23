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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662B67ECQ%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T185942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCd0%2BSqO3kHxQB3lI8L4VnVDFMSbE%2FhRLfoXPWM8F2oJAIgbrRTEAuQtxN8gt4eQmWetx4UuieF0Ze%2FTa29a0Jc80kq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIIbGX8cYcr4QCcTZircA7H9FgxQDzq5xeGvXakmjVbNgrb8pv0pbg2Mh8jq%2FknjiD7p7lAgZOAYSpgZXrHABvXHtACYZb3hxnHKDU4F7fAKwTyNjJMD6lJmBlYFdtdWpusU4UqprPBTTDdLW%2FCFee4m3dtqH70d3rfBij77cBMvpVrnAFCcoxtKYHQBlnwNJya03s2l6cI0nSVEUaIEg7Ep7hySC3Phh4hIepeZfEsQgZIwLXFZDVFVdwHJ7IZtMToLx9mu8TOMmkmF9GAKrRb7KJJWYPYCx1BSzoaja1vQXlgo8VxGcQQGhEGz4vbQsYvKV8MRvwgXQUKG%2FgUw9y4pkCE%2BI5cZtImcuQRX17PjUEL24NxAWlTjmXMaXwyCOUOalPI9Z4au4twGE5zAURn4SevXjCXo58QHJxsgZN4pA%2FGJAeGQoIn9mmCfXc0O50YsUp6c92fSEFIFRktrcjNnqXujXFY%2FouIBbjn7VC%2BKVPOuZhXJOO93nYhER3D0JmBwjfoPR0F6tBaAJmNzsAl%2BcMIc0%2Fdcf%2FVk5O3mq%2F52%2BRfwbqoNGH5iCI4jWuiLrBIXSU9OOf%2BLVDGxDULpoIjTpnZ3WCU8xrpgjBBVZ95sXUMbk7%2Blr1Pbn1OYh2s8PzygdtirCC%2FKrmG5MMyd69EGOqUB9pdzRnvatRWmA43bgR7IKqqKw1mETEHO0KYFWs%2BH7z9ttuwE21b6sYC%2BHHUtbKiOc9BDKx3xmgYkJksMX3RzOvQKhZKID6yJKzYsccQnrhYol5zmWiQUFJnY52j3%2FvFQZT4Ob6l0zGlxkB14S44eFvu2AC2ouUlXJlsmd%2Fz6oeSx7sYRlQfp6IMDUtQM7DzWBOtDMSt9W2XzZMlpgBhzhgsl8jVJ&X-Amz-Signature=a83f38b0f5917272bb4b74a3ebcb6ee745c7b3d37af8100a6343f8a96572bcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

