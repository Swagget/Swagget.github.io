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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O62ONGV%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T184902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgfLOnkFhQ6LjfGubwFWGb9Qps7X5iQUA0ar5nYDRGUAiEAgpcKJGGONLgEn4PVD%2BG3KK3Ln48NgsH9dVmD2%2BM3%2BKEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPpDc7TR9n5pkOfFxircA%2BuNANpR%2FZo6xGq9TeqbYnvM7SB%2BU2XJh4Cy5DBSAGT%2BlWAB7YwnVe0xzAh%2Fb%2FexSPE6kwCH1Nbj4eaTs4UaerMdOmpBc%2FAM6pzytj9tf0BY0FmeUakkhpgPyvQCcOPLOOP%2BZjAGxYc8InMMUJEI71WGaMkjQYSIDYPxKSKDQEz%2F4tY37jfhbDNjdUzyFeBmmGR5rw0yBkiDZ94iJniDCs2ui%2FPnQjVBSSjwYyeYhy0C7rYCzqW3oxx9p1FZJD47qQ1FQ%2FX8fCuZPUiDq2B3VFXna9CImiloFaBvbzHhG7M3IL7uU2l9%2FfzoWZGA1OY4sk89%2BBsnljcL5cu3JnfwZYD4GKEtUXJjaIar0WiAbs9SedKYJAuqo%2BTDVykgV93JUEk%2BpEVy9OIVN7fSxhfPZcEyE%2BRrgvQe9XtmEOMh6N7%2Faeqx%2BOHS6Gqpmx6x9XgXnWSMqw1hUjAIWEDKnXNPLo3ahZW%2BafIBIvKrDDNIWCquCatRodV%2BF6m%2FM3XTOyJdh%2FFqWdRJVR%2Fxz2FOr2VmZkPt717AzT9VKycKm0Npn2TpLIOFugBKLGEyB5YD9HsEgCosReQ8lo6HKGY68tT5VAU3j2d4AdhQdpTZHbJQIpiQEQlZtGBIiX6QvgE5MNPM6dIGOqUBN8mXNy3QTfyGlGmUV%2F8lS7k8pFVHpWnioAI%2F%2FiiLEW6oWs4INIVFow898Y6RNPWXM23GvtlHA9QL1uZmvhzdnDbW2i%2FabvWGisuxf33E2322UPtstqV%2BOKL%2FBYZl0gBUZsrkPCGSXiihXA3KGf9eF8hAge6gKvSdnw%2B18r%2FR%2BgZXkL5s0SO%2FcaMzGc8fqiZrGuB1piQoSeKaUARakBlkLbR%2B%2FiP%2F&X-Amz-Signature=a9f8f0c8e99cce067f9ddffe5ab02da7250581e5c7426dd3b76efb9c92396e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

