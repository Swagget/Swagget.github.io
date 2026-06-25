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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUTLTQZF%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T045553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH%2BpxohMQwCeVxbQu8SUkX%2Fk7YiBB%2FlKDCS62pr06%2FFEAiBxXB3G%2B6GFo40iILvF8cUXXM7QLzKxF9VGnI4BipytEyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMI5sxS6zXCGcCqGYdKtwD6pFIUyKkoUGu49CspUljqEc2RN4mEcvJyJvEuvotlMotQAXUMsAB3vGhr%2BK1jU8t%2Fic11D56r0fn7coQCWWfsbWEJAQEYcYY2MvxRMjN%2BdurhNu2bk%2FBSOE%2B4FGIekI6imIWETxEAQdwRyxlBiGZy0SGV6yNCzGFzVc55VtIWezg%2FIBXA9S6Iz9%2F9XvGbZGvSJt1Zbwocd5b2OCt2ixH1puiemUZmnQWQSJYTRurbMQMlipnmJXE%2BLOuT2un4TcLvX2C7zwAf02oS2quEz1COaOIVak80VX8%2BzqMJ2vCwzwH3PzglPvJ0046z8x3GiJZP1azJwWVB56eBFTQbYbg7UXiGXrIY8bh8LyYD%2B%2FsxqabQkKCXcs%2F%2BMB%2BldSqhrQS9%2Fi%2FV7z%2FWUVAkB1zwQWY0eoeNzKvEm2y1xRbyVO0Sd61mD%2FfTijF2PnBc1S20PNK0NNBr6ythUVa6TwyP28ksFGf3%2FADYbZiimAMRGfLcas3kMyzfYcLL1HJ3ICOn38ZCY%2FJCZHbMVPl6gCPlWOKXJ6SCNskYFwJw6KUfR%2FmisbMFcuQGXVaBiTNwvRpYwh%2FAy%2FyYYQCJCV92iajDa7gMbWdnlSB%2FrsSqHbI%2FCEyoJQobaxt16CNHV3Fjiwwvrzy0QY6pgEezFwNtajDNiw%2BzgVYdHfQpDzU9yZ%2BpTJ%2F9JRLymwXN8d%2F9qBDjpNlyvM7rcpEuzXIlRzvFwEB9G6gtLERExj7RmW9Ofnt4l9CVtcs3OutUICyZ9E12iBJ3jnOQwNsnOk5%2BGYmj7jUOa40m0fAuV3UfvD98BFJK2TpJqDxCCh%2FpPL14Yxywz48pLTDOBe0o8jEflqEyTgpNgiq0IMEKkEZ8vc8qNrN&X-Amz-Signature=489296b31ab0fd972ceaed63be78b780975155cedf2c1099336eb9e17344be71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

