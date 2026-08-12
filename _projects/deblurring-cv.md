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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPETWF7%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T222722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCf4NvhTHFa6L3xGEB%2BWeaFO95fFJnIUVs%2BhIHwqFC0XQIgPRnu8JlHHM5zzmx0NopJvFGfJr%2F%2Bvw2alYy%2BYP6TK3EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJZC%2Bn2YCx7f3uErSrcA%2BlSrSYJKqbZ5giQPrDlawmZ7JyHmC4IVmUvZhhAi%2BUsR6eDMoHyJIK24wrSQU2VaAcNnrcBnyh8T73EWUw%2FCEyKmLvwibL%2ByngDEPGFeION09J7Gz8NDp4DZuxFV3V%2F8jnPaWat0OfqO59AENfaFS0rNqw6JWD%2B3QQ1mLcFH%2Fy6NEZfXMUrbVBQpm0Hrr8x7u3Oy%2BcXPNCNRnG5biN6i0X15J3nGXo0enq0YlhYgjC0PswjIYzaWPiSyRLVwL6xBxM%2F1Gd2dXvyIxEWcTARXkU9%2BF6CIsB8umk8bvV0ZNHT9OxwcVIEbUfhRrqAEu54WI75J1aT6CVY0Cj6fsVY%2FNEqev2I5NoGdB39FCG8PPFXHlk20AUAWSYB5Fwu9orfB7FD6pnDr0t1H5RwjmD2n67XGHcetKO7pE0MNOFrZdHolAYywXcefS6yebqviLkNSeJ22otww2%2Bpmx1URM2NEfO9NKWCfdtjiNYJwlUh4%2BXul%2BRZ2SLGyp8blxjNWIZ7Jcv1Ia91H1cbinssvnMFmdZu3zCVTf9V01jijZgYwsnFL8P4LIx1bcOJh9g%2B8ImKT60Mae0Zb0H4DA6oH96KwIjBAe8TfyRfKCVDeb1Jor7bVWHBSnbodKJWR7kYMKHO89MGOqUB3ucqg2DDcYryV29o%2B6YB2vAvrA10bc6SqiLqvmOhggJjtZPVOWGB9qPMP5XAhnpZDqr7wxoB3wsSXugXxn%2BaIcgZQrfiekTOIiFNzqOtoCukoBWvoaoszb6RQrVHhB3XIoygyTli3Mn2p9h3hBozgD7mayw05wNIJmLKuRI2StVjEb5rJSIjsGM3eefrcWDdhm74R33IdSlzowJqBrp3Fhkw25lp&X-Amz-Signature=870260f293ed3cc62ac954a1ef8a1249fe094be3186427e4311e8efac75474a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

