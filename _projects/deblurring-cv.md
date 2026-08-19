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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VTFUCD%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T072754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYvx6SloNiRloVKkDjM2R1On8HdvSkH%2BQGi9%2BcKS93cQIhAObFXGmk6cV2Cvx%2BvJV%2BjwTNvCDqila13xx%2FTQOUc27mKv8DCHAQABoMNjM3NDIzMTgzODA1Igwm1h0gQ%2FQ5SAuU%2Btkq3AMn1eyvMw5CjzB%2BxJzDb9T0HzHMFIJJ%2F%2B%2BSfYDxydjmwN1MLvZIOLIxFj5VOPokEHg0neV1q70I%2Ft2G9CrLGxPH1xXOB7QRgwLlFiNb8uNb5ZJ52NWCBegf%2Fvua2G7GqI0BecW%2FKoo48ivqd6uQsIHn2FYkgijO%2Bxhi8P36eviPu3iImf5UBATjn55mcgBhIIybMIK%2Fy386E%2Bi%2BBgAJxExBdOIY1S%2Fs9yLwkHIWiUaSz9CLGnV6s00Fl7ACaawkE%2BtBI3U%2B1w%2BGRFP6XoBd5LVdahuFNshVQZcN0FYOSs%2BIlYB6xkvv5%2B8h0lDD20GA7u6C%2BLsXduUiHNzXAoAtH%2FUab96nHQ5CZnxdZUWN5rEUeYAvX4WfmGyLHGfbpHOCHfjx0lfDGnLb%2FO2MkJnD2xcEXmN8ZQNWrfSsgM86nWyr08r6%2BPRpeR6aJ1GbFIj9IHKFAVfGnZR%2FXo9r7YB41NzZ8Qx353RO9lT3IXLw8tRRQM680GeA2hac4KzI9xwP6hkRVddAGAHu34WHobncTDcecBm%2FixOr2l64M0xRxuVHpWU07H01rbLYI00NogkIMnlWVO3nPmz0DfWGU7eDdBUb26jFIuFseHhhDnwjRAtr7dcqMpzvFsNaLM8byDCnnpXUBjqkAcLKUVW3ZFWi7roEsb9XiXYh7IF1UgIr3N%2BJCrZDlHnmOqVbVwgr7qCse1Fo4Jpm16yqqAb51DUaKJbVOT7h%2F4Kj6qax33FubdhQyWsLQb2H10L55sMlSIgOy2K7UUQvHJqLEWYBFhXEZFX0fX1rLbGxt%2FAzaoUOkp%2BYlMS8C%2BZ3oQ6kn%2FBGHQZkfMGomtztwn312oUCqys9DAeg%2FNYFfFjb%2FRa1&X-Amz-Signature=133933f59c407ddd231684287c29ca93d670bf60bb87f431b1db3ade23480fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

