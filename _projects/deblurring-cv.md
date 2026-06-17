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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMIRPPUH%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T055625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn0wkh1FDA98MoVAYwal3PLOCzWLFEQRCMk0qnYR%2BDSAiEA2mjT5646bKP6I7hpHUrz9zCGJ%2BsYB0OgGVgrUK%2FtXiEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlYTaoDgcjCP65SlSrcA7QZzQ75zimbVecwZzCb4uA%2FTXIegwcuOX1SiwRaWhmHoip7MwtT3bTfEGMfGiRskOyJlQzWyUp4je%2FP51PDdayOjimtXMALr%2BKnmDTQCel0ZpBG%2FWVEuE2cDIdQ8qzycohXzIYkNHrbDzfNhfHTIcGFWtFT9z0lOou%2Bx5tJWgPBSDp1gBPrp%2FrS6H%2BtH93PU5uOg1MgPocQfbcZnUt1WPizmOczTrLLV3qDrUaYJe6ruQlNxhcM%2FEQpB2dU4%2FG0QtVfhww6JnC2ifWnMiteYs7CZdlP67iBvCKjgVf5O4Tcrp5DmuJ9DA2r%2B3DeC4GXvZc6%2FvoMkLlKkDJwCP3lA5xVTx9RoS%2FOJMzQU%2BbKygegG22QZNyMq%2FywDeH8TUGbwUXCBEeU4brxyVzUxNuckwL4TzWwoOj61sKdWikpwU0prp9L8ANByO71y%2FDwZM4X0hHbVvV4cyoaJoccTERK1Tq2OVjJsj0a4pnmvHI%2FdIrS6YDNvofT%2FLC%2Fi12XG2b7rnv2XozoVY2Hu8qw2wMjj%2BmA12ABPQcXSp2ZTLfxi8dF50LNMO%2FjqzGbW6uSlbrwO7Kag7KQRk%2FRKIhbHf6xd%2B%2FeiPO%2Fl8dxccjWdarr2riyScBU%2BxjL56X%2FkWz1MK27yNEGOqUB0d1jtdgOw3UYQXomf6FZrcyazbRj9uunFtrtmtMHsSdC8KLSZvsssca0W1DFicfBNsLgbBGz0mOlD406LkpPIKLW%2BgVMf1uYL9vVWiEX7ilPZHkk4uICQg%2F2pZJKGd6puILf4aycnkNsBCbyiD2WyMExfule9X%2FUkjpvwchd%2BLJjIDFLo1v%2FkCRfDsnFvvSeDQ%2BlrIvRH99NBD9KFSP%2BqyhP%2Bt%2B7&X-Amz-Signature=247201a4985a36790797e08ef5a0223a1f8c7c07fc29be96e6809ea9d49aead9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

