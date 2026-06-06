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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ASU2DW%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T150339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYmnQNNfkWQfg1VvrPy8NCSu%2BZliYOMtvRVTxtMPCzoAiEAg5%2FZGqqAnxfKDxbGkIDr8V2XLH1fiOU5SsFExFxOyOoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCK%2FkOsWiRMCZITsyyrcAwANFUxYcakd23ACZpUoOCsdQ%2FksPGuoCoe0PCwfsoWZHN0Qj28Yq2KPvn%2FfNLDhleSoWO82e6gkksXjTO5Sre87g4PibQ30t2OoTkrDxXWDbbwPE1NZ3poFlp9z5yrSYB1KB4BnTYAmxO5Je7mxwGtmUdxToi4LH%2Blhb0EVkX5BaRRykezQenxe%2F9%2BD6gv1SiVDWjbC5M7VK6fhopkPgrUvPjqLIHsFn8ZAc7pTLY%2FBzQ76hA39Ex815aYZSheQu4A51JabYaGQJ56%2B6mj0ee9IJPa5YELmXpnSz1rH2XuOCu0QXDR%2B3N%2F%2FVul%2Fmf%2BR5NWUzu7w5oaWrGfWYQge7gooK8YUe5gsUxyHitTtQiQMx%2BAm4i84hb6pdBjlUZ0g31eZ0sQKrJbBQR%2BGnDBFSfSehpZKeZkMBE5SUKvEScx9K2HS8rQLQs3lQBiCF7PXwkS4PU4T0h7%2Bay4OKm4JchxWy%2ByF13ODH%2FsJH3PyZQYKOfEls%2BIg%2F9IkAKEw9ux8krmj56O0FaBcM6m%2FF5YGNLmYbpx5qRljakHohy0y4S71rDaVKAQMJni0dfx2NEdjesrbSWJRAaAljggvzrg4xHWTK3iL%2FEYdJh%2B0%2FDxi9pr3jdCZRl0nFI7v3PkiMIOCkNEGOqUBoFKG4V3oioIoIxVkzXf8n8w0gsYzPMKQ2OR13l4HyV7ULT83XUxBub8fAQgGyt9voFaO1hpiq%2BruuUMzmVhg9zoHC6btQSnCjLabSO6O7NgAS7RnDP7z8p9gagHpqOV74X5kiEREnt1H9eDSQ0rOB5mAhaeQ57oEayRWS8uZNZfPtHXDfbb21cf0D66U5imJg4Wfjb2RuZfKoLo2kWv1UlLqcDq4&X-Amz-Signature=4276a4f0450191f3ea1c7c9f6dd62bb06e7d9fe3bfa34f943d7c3364c0969508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

