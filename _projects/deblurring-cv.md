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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F6AUWUD%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T171531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCahgWL4r8ziEL5zNefYxMVFbxRerRA9WPIIBWhVJ7dvwIgH57oNFaE2lFyIXJ%2FEJHtYor0%2F9flC9OmzZPLlPu1hsUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF8hzx1U7Y97%2FlvkDCrcA2X1EpYAQin5aAjp8EJ3kPEbk8bJIJlhCXxM7bqqiSL54dVgkGPIaWdkmWdMsLsJAGDcVbBdDmMslMAjbTOJyVccfp4iduVRluigRHHNiA5KkwTVbL3pA7gn%2Bp6hvNOUCboLWQJVB1LEDG8%2BkCNvfGEpMd%2FGDToDJQDjQxiMvJ7gx5mnmzNAg4trRcBPIEJk9Tl5mjWHfRrqlzcdDL6ScAGZZG1p5yU%2BM4zf6Lemy%2BGyokB780L5YAYgZ2UlpaTFQRsS%2B96QnC%2BiqvnzfzBM8vU1plYi8t60RIjsw0DrLaSJPBVb134kbfukk26banKtlLpx7K8S8dB6x8TPr7OqIkraTeJU%2FetLUqatGsbP5sHNsETN8IPRKKR%2BsMdQFkpHE%2Fas9QUFHjF6s2%2BhL6IlmKT24%2B16bRdNmijKSYZedRj1YAyjqSPxzG3q406OKwntQ7xe3GtbfrjewQVwU2uFqkOOJoXeb5ZlFT0tqZfEcJTC%2F%2Fx7fvhx%2BPGtRsLgz%2By67l618VxV6be9EZkhZEUIrXwyQih6wJMxf2UQHecYbDfqKLGUn30E3KEbu6Bm%2FD4kZob%2F4a0Zxeqa6tL8dUbWGfmpv3Q8nsV8vBV3Hiv%2BevBaTrZ%2BHrIL3%2F6r9%2Fc8MJCyo9MGOqUBEAOgW2YF0JDQb0lit0kBKomdq%2F%2BFRVWSCHCqFZPlabgwsLN0TZbCqmZ6R%2F2DEdB%2F19EieP%2BNxJjPHJ9632kXpgjr6nfnmU20ye38GNQFVg%2B0oilvZP2B4iQokwbJgnSc3jF0Kic9YSMuCPJyXTbYNZWYOidtGiAZu%2FgWqdAnup8FGzYqBkK%2BmPVkNepAaRq0dAHTsDV2zAjUHHF5arRgYC0uLPCS&X-Amz-Signature=b916630967ba07c28ec4d225e548cc17e3c7c0f73c7ed8236f50d743e12a53db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

