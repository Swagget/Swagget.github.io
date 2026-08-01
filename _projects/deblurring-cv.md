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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJIXVUX%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T141909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJDGbBHJjhVPabKyHezi3L%2BKYMRG2Q5oDyjBFyXG6nfAIgG5NVQBqckcWuzxllIExbueRv13GJqD7t%2FZg6fEuVpI0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgVekpdSknNQ4jw1ircA4OUInQS2JlXHi4DvwH47EKvMsnWCoqvLbv4Q3gU16ujfYLgQ0XVEy8uUZC6oeGitDmaSTbtcG6O4irX%2BIr5UbF7eGifOPiks79HaMUWUQyW3wFVdTkc6muwTxKl%2F%2BLXh4uxABYUaTuJsEvn%2B2PK9ep8gYXieoQi4AZEaBQsreLRi2ZqIyZ%2BrjGaTm6erwycsux4uLkQ9rPS1R7OgQqLZIHjJxhPB6sU4pNYtk3REl5s9ddi93Axy%2FfKpag79PD6HojFSlipX6u6sckRg7SOZIwsDXJKnosNjh85eY9milisfLk68oju%2B8chghjF%2Fq%2Bzqe7vhOBQ6068tylWzxKHCLXdANQXhRQq0MgwZnkKgatfhT1aYs2FItr88qElvKC8lu2yhwppD9Z6RvfTMQfM0JaMmWLwWn1Ta7F2XHc7lAhLTlBNifuxfTHISz4zENv7o5%2BySfQO03IM6JTSa3aFzo8vxFHLz%2FQUVpl0sjdE%2BdDYZYl56DoPCJHRtQ05scy9XRZdq7L0iTX4MEWbp8R1WFkbvlvov6iDiQxXJqL76FHYJexBlo8cmicM4UiVzV38UQCApCtLXcm3Zd1qVtZSR7zpK5Rf112xcMsVG1p4IHrP3cb9acNS%2BIdZ2ZzvMLf4ttMGOqUBEdiW4QGs5bKhMvCopYwFOsjTSDS4LmltohMgOL60EnYSu66cOXDn9JDObNKYk2klBwDdb6q6Xe5znahi41JhsgmvaJ6izk1l%2BC5VdNWvFOV9AQysGftDK4W2MGesF%2BYVWkXQFRjD24lUklIU7sGrtDbx3OHA6mn6PVbEXXYTWPJzbHE8YDTHSmx2gkmlKIFgMM%2FibIw1X4%2FJRgfO2jB%2BS63ds7SI&X-Amz-Signature=c5b5339fffebe8db397d223d24728eb6fb9715067eac030e092b12c4d778460f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

