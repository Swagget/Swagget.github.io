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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQGM7KP%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T235021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FSQJGNcXp1Wzz8wUgjZ%2FoZYyB7c6aP%2B6eN1U4JP%2B%2BAIhAKZiBWeMWQ8Y2EB04%2B8qcFiVDh67CkF9zSbsqpBD4vVjKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo2siLN7lAUNNeZtQq3AMYe8C6RBGk3TfhXfG%2BjKcnjPKq%2BibyiPyvNBh9lpauXcFIvZn08eh3HayXmiAl44BkE74QRiIqhQGuTqwaLkKWOL5HC3dRlfAB%2Fjat6c1tesRRw%2BTkpTl1DslB1%2FMpRNV2EEP68I0AdudvtM7JL2aM%2BnrULbviwwbAZxvmXrEvBifMXBl8YKhAlb1l2JmFZ2MKJpBv6VYaytcRrAI3XGNofuX6e3dW5xlF89Aeu1073SHmMS6yvYdDFZDtAlXQmrdLiPx4Yli0d4kwUmI7nbSx4P7lZDegNVBcOTNta6G292u8uTyLLIxvkPQbHk7hooQS0KID0pBrhR6QKMiBjVnpuAlRAuL8XKBa4j5PzT2DlPeSNBNJN2yff9tbDRSuABvcWfonInwuF27%2B4MTKtIFhg5FAc9NtFeJIfMfCoV4Va1TjKeXtNV0jCn2Xn9KzVsF4CCdDxHWeE1cFZs7wkJRGN7NDcaMvvjbk2D4FzAgh%2FHbxqVSfGuaaetyf4IiZ4aki9QlwKngbWwyv%2Bt9C7RMPgcbSbpCjXwz7rCec8lYMcGEFVNNRsNix9BqHyN5xEXwg7Zw4ec8jbsugtwBfld6QkUjPpYFqEGV7HKAzsyk7aVhqxGzhOW6z2H%2BL8jDx4rTTBjqkAdl%2F6KkAklyxc7ECDbLeNyR9ueBDrBfeXhYE28Tc3%2FVlpfcgPMzKXXS0a9PxVb7vm63EYkJDUgWoA7Kt2RW9feic6DBu5hROx0Dn9T3XlREMDzCPALITNKw8rQsIJ2DxNmX%2BL8FHZYQ7BaeVRYIlFD%2BuIgj9YLcZztkOIvXJBzWh3E%2F89mN75i3QbKI8gKqOKcLcPRoehH14QEGdgkpSugh6VjKK&X-Amz-Signature=966e76c2ece63b72cc55cdd01718fc242ee78499200071fffbe0ac1ae7c4bc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

