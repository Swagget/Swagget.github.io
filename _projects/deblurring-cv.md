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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM3RCUL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T084309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCohpZ1N9Guq15%2BOs69chbFhlyrQmH9WhpavXk2sVTAgAIgXTZwFAzVf9eW0QQmxHs6SU7Qwv8f5i6lLynFqD9KV9cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIVuMLXuGFXtJX6x8SrcAwk5E2Ohh1GHrZQHmfarKjDW%2BxjtmIMerQ4b0ek40nFeKdxD8fVAo%2FNGT1qYuRYDpNHcUjyfHeWsuoO5lwvzbmKSI6eX%2FAjjPYQmi8wWDP5uSi8t%2FOavueedRxeA9umakPLiCSU223PcQGGGggyfyhzGZBuy8vnGW2rDAv3OG7Nei6pl3I%2FEK4olhNEuYp083Ne8z6twD9%2FxFRHPsJVcOosO4T7MBJViwgFVtnVhhTE%2Fir1y0LdZ7Ixv2e%2BHJiEwjPHtgo8%2BQzyZsRFlmEwmo7QHV0iYMiLRJFmbWeV%2Bhh8xdQQJUUwX3u298chAJRZ3O%2B3J91s%2FLb1lOFUDlUxiNNMZl%2BYkCQqlrembRVeS7FgoeUvmw7UQTjLQY79Qtl4J1uZuqs0B6n%2Brf0kW6ICHKOGQUcQMJLzoefnTwIVKUlQ8kNF2tAAR2I0G160Oj9VSK1VNZGN3Z%2Bjx9OG3ik6E%2FOvnkCJ4kl704Ybldsv3ny6cLvW4SFVeJwOFSc3TEMFiyiBDBy5ux%2BBkfHhnVwisDK%2FUuf8KgY8oyFbwYz8qmTJ6bfiPjUbb46TwCGrIbbAbIgziMxuN8aeiIkS0LfP%2BKjKyYbYyrwGfGFC5%2FszWUmSj7Qyk2%2FaiiriyQ6vYMPeutNEGOqUBRaM0By1nuBUO69532tQEH%2FK7falwjGQlqybSs%2FReW7y%2Fd0DNqinZeYwlpdNoxQ%2F7M7YiHfEvEcwEIaPVD34IKDTcwxX4ZGOZrCsz5tnkeQ8zbbyI2vaBCkFh0dbwr6A8v1Mtkq1rRmC16lYbd4V18mKGAR%2FVpfDIhsrckoT4HrLYI0BTmzYSCRJg%2BODNxXjq2uHqRgT5MdkqnfOzmyJ57NT6kmaq&X-Amz-Signature=bdddd2114f6924b3d68345d149e3c7a21b1b0bc8a9ee8a25e841e7f9657f3e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

