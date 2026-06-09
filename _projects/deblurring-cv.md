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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMQIZVB%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T154841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDCBqLIuJwGw1%2BXo%2BobufLwy9rbNjS1zDsjnLngpkbhQwIgSw7VkOm%2FF58qSbV293vqoXVva2yyuiP%2F0TnvDG71ZNAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhR9QWKMNRsnNJBzCrcA9PH5YOUZoNFxdQ%2FEHd45Peh0vZQjpilj%2FMdMVGXpREPZMnmcr8TMSM9o5soBqznfJn7AvJWv1hJQ2MuGl9Uoyq2Ae9qoCY97XGkxT2AjNyZQeRrkYIJ2zte4awKk9oiaiI236vm85EEhu%2BgN3JW6AmBOnPtNdosIdUEES%2BPsAN%2BqjDiM2MkuFRzasOM1ohzq%2FbsxfPRdDzIfHa2Zi8wC53PqTMBhB9Ha3Oy5TYY%2FQDdZTyZn3abc5GJXF%2FYfpG428jffvcH3ZkaUwW5vWn56EennLA%2FDeG0E1Kk3SaaC6jl%2FGwboDgrZGGu%2FiKvSbwAN506%2F%2Bu0Io8ZioqJ2Krw2P5uz5UgLOjb9nj8crZfVhV5MB2UUacB2LmsG96EJQI6DpAkfOcxLYrQVBWBpiuZbbHpAaUzhBkYayPPaWKisz4DLJfG4pU0MIKGcBwogvLpQsPg8fWZRrQ%2B6sJb5TkeHk2tnlX71g5EuvEsm12YBbM%2FcOlscssi9wIHKEU5xuV7aL4qPCgHt6S7WH7t%2Fs1YL68eJboZ2BiSadJ6CwznqR4Z3XUIwRQY7k3SI6gLEpdXYxzig3sWZXBTLw81DJqWb3PzCmrpqpkx9bCa7SOi4thP5DurWYbp2Mlci9udMKHHoNEGOqUBU7GNI1V9Ch1xL5gCwDvi%2BEVmhxX58AvX60X33FtDpwbReBL0NZADDfCQ6sy18Mg1JjGNe2a69ILHmJp3Z1lTOt5qkWXGfFVVzQXyxbJWzXbxMl9dRUBWkqLVuVYQJ0D8rLaJEbYXtW4IqlEOEbn1rhF6bqR394uoD%2F%2B9Eb9tvGVaS8CPUhKFw9mDVkDUBHDDP5GKFfzx%2BPfu0BecJBWW1zhpMS15&X-Amz-Signature=7aef584348401304fd2b6d8ec504cef092ee93edf7cdf10abcd44881383a8974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

