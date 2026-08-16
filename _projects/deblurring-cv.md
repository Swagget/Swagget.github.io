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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SMO63X%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCID5C6FtG9HX99U8Xwl57W%2F%2BohWlH3%2BzfUXwRz4uIIwv7AiBKW%2BXrD5C3qBw1paW1pL19n3uOJvOm6yJOz2diV3rqgir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMHiBH02CJeJlC%2By95KtwDuWxe7U3nOkBkUy9A4XwOHGeHa8QQIZ%2BZ3%2BdemfJcs4cNpB5IcFM9BNBSjv88ctcg6mBLdK7jFU4eyqElDO4HMlN%2Fd9h9zQNhpCelJnYiaffxnBt%2F3olV9vhbB5STz9Lhvy6A5MVwDXEIfg4aQi%2FkUNBCvzZJtIsX9Yw3N7WR73CmCzjVWbg0XAWWcHtFmFXqMUueN1nERIRCTdZGZU6K0JaSLx6KsOcI2QkzjILOa815WrxH8XTOu2rJZCVvUwl1HFYV40Ls8THKKuIqyaAeKtyf6uUGS3om11i4Rhd9SLTzA64NPmRketaZT9d8SNCKeKd2mORbKvrYxJo5qhfBFphHWauWehD%2FrbSLVlrFcWg9iGkBKYEscH9Y%2BdyBwyI9w8j0gMmCLyiwSaJTgMGDuwJtRxf5E9QwVQVN6gJi%2Bb%2FMuS%2BWc6JV8LBQJE8Ip7h9ghd9WrYVOQgRbTun2pEdd0McLaOEj3nQjWDUneH1eg3Gu0acCeepUGD9UO49UnL%2BlRNTsUhQYj9Sc1VgBH%2FNNCNrMz0MlXRDYVKuOgX4kDHifBwKg2F%2B%2FtYKSR3pPyKSidl5zI7o9zsG3ypfxwpvwQhh1w%2Fbbosb8Iji4TLeS5TjVrS9z5zJsnZrkecwmYKF1AY6pgERIcPSyjX1O6DkQorCguTpBUHYUyD2CJ7DuQwcoriiSr0Rt430wNQejOgU5UKwe6LgaLWTYNB0lt7%2BjaHfuuGNZ27PezupBHrfqa1RsYVU35p8LbYQE%2F5TjUchYjkLTe545Ya1GGQaw8jTYm9F2wVFmJczyerQmgAa%2Fb6sQFog01y1X8n9ur%2F%2BZjh5wBUXb8731Irj5LuNrgYtJo8cyAMtn%2F9a9Dl4&X-Amz-Signature=5405b5c7a170910441d62b2f272cd6641685549415e3062052658509cbcc04e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

