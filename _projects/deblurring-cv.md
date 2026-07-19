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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FCHOCB%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T234343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgsYTUAxtASbd2ntanMFwy9uF5kOkmOvet5mtlJ9E1AiEAu4cgRAdNBKXFpKEiA4GWm6tmWTT0Ip2GnFCq3zdtaWwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8M0YiP7uVAcMMuQCrcA6peuhvIq%2FwByGfwuu90DWxxI4UTjE1RxyF7cve2AC%2FaiPaaeSieRHC06wpppwoQ8%2B71dwUQyUAhKSqSTw6IK2PWe%2FQmGWDbLF4OgcjeIDvK3q%2FNxFrvaPZ0JCCUINGjC%2BHCOJJ7qwPgXwVZJy%2FLm6U9ykHcy%2BpueD57RPoAgtFVAYfFV1v98tLZ9Q78NGW53vQhlXTzwrUkNFsRE9BbeGqh14iwAV%2FhU92b7Dxg%2BNgDiw6gzcL%2Bql56XTkea%2B1CHABx947GnR%2F8IbvFdmVOQhC6yQSh8df%2Bdv7V2gZvOiG5y%2BxlRkJ4k%2BwcrRGhrL1T37zf0q3%2BQ4LHAShduRuWvWcY%2B1%2F2uZJP8q10SFS8U5w4DxEB%2F0PHID1k7D0FXyNIGIY%2FmBBPPE1U5ZRZk2PIXB%2F03ydblGfQKNQXlSKx30mj2HleDPb2MjbXqoCWL9Qq6bOf0CheDf%2FBxqhOAjLVpu%2FuVx3%2FJWgDwhwBRK%2BlqgUlBqTa7fBBdBRdskvVMGUSx%2FAmAhJVPHz1zT%2Fp8FR78lksd9mfBhTs4MgkzwUJzUU%2Fjjy%2FwwrRIN57rGJ9wo40bkXaB%2FLo9lCTUm1KAC1eHfio6fTDxb8%2BXNUXhaiqUlvwqvgoFb0DY4TiZ6ukMK6v9dIGOqUBPoxdIQr40zii9IlUO3lSREu0HfjtrsthqvJ4Lec3okzVIe1PwyuDQwjtt4aWHcFy%2Fuz8Lss3oMsN7totBzfDyk51fNLr9XrAs9YypV9C8fRSyrHsegi5DHNWGqIwx%2F2zb%2BGviiR4RZrhA%2BPKsh8OuhhZc93nTKMhVElxG5HGtiYxcRymF8uN6ZfP5INlacia60jTqIL0E65EpQcURBRqVzWnv4zR&X-Amz-Signature=0ac7ca7fead9a7462d55b49be6bf64002c928a8e3c39f86429b8cf3fa242dd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

