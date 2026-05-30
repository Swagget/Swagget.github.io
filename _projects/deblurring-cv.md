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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UR23PIE%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T094824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDVw5pLF%2Foa4FbrKUnwDqmPR9KofKC7iLTYKGB6nqEKkQIgBd2fWxjkz7SNePZNcWcJbddwQX%2FVwSLbp41WC9N67D0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKlwOI5DvkIyPTuvircA%2B1Eu0A0xn8irj2uBwinK42%2FS3mD3FaIwfbYB5ihzyNTJvhn3vDzJkIamcr6spCgYkNk5JsX%2Bo6eHA2g6%2FwxO94605kNqbXSEoAfyD1LeBnvvJ4nVu4IiAXKssHjytZBuRsvSxYI8sAUl7fMT15Js4uoeECgHidKT61HX0VI%2FNjOZFP2i7xk7EecLhANepUBUwaXT%2BbnGDEPv3tb8lN9cRrcdwra8ZCzFvrJUMP9JAKhCgRw3czz70l3aAE22fgP%2Boy1uWU0q4AWV9FRVemG%2BJ3q8YyzfpplPknODZUYV3QNw2NaaGYmiCrlOYzztO%2BMbUpgfF1L52BpbigYb3S3IKvgLjISLYBEYW%2BspptnmM%2FzLeWkAUqqehF%2F9Pvv0ZgCRL534GU1sTkafVSxlBaixK69NoaLY1CBpcStPIPtcwTEmwhajBFiDNR5qCUeFNFORvZTDs6lbx2ovnuC3kFmvmJLpvd%2BpPsYE%2FEUsnBJq3YX8CrQbzDzv0quLXBDyEBwItgyA2ASsiiOSrwmFn%2BTrRwQXB8j3CJHcxT%2FRrIgEHTHbM6gEmMtuUTds%2FDi%2F75KZsrQxR4Ab%2F%2BRdtEDoS8VsETO1vLlLm%2BQ2g7%2FPkOJr5BVvCM95zR9MyWQVWxOMJPh6tAGOqUBH9CodDHG%2B5dL9QvAsbazsnax%2B4c2oh8paL1HhizY692JYu5G5VyxXOEWDy6j0vY1HC3RpEjwBARv1s64OIXj6OdHJ5iVkj%2B%2BKZBe1VlrKD8Hpf2AoqQ9JIhOPnSWe0cnOCUrowoIfMcMhiVZMB0GD%2BBHNr3YeWhq6p0Q6WN9aLgPXDJRtxfsNhbQVmSEQfnyUsbxIR6OcMscog6hvQos1UWBxgRk&X-Amz-Signature=de56a93ccfb04fbe5efa61277a3524d19145063938dab4326bdbd2ea1eba1d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

