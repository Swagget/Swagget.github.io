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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVAD3MO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T164110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6ohrrwJ7gYjxFru2BYAzYC4hFLdqwq7bq3mY1WGRsqAiEAmtOHJcNO9vDhJ5K9BEIr65WWWetL9fP3U15npGAK39UqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEWgXnGc%2B0awn4L8yrcA3iIugBPqcIc6e%2Bj5%2BAj93Sg7Yw8ujWBIZEL7z3DGSn5AMNZAdW4v%2FnIbeCe40rwReCJdJdzjX8e96RUQHqCtaOQwd42ExfE%2BoLFloOe6Ey0Xdduua%2FJLXrJgh2LoN1m5%2B%2FHVNy%2B4v%2B8oFOtbPW5GtZzYTvKTkYtkKTRueJZAFbbqHLs4K5kLLqNrwsz2pHSSyrGDQUp6xVT8KCw8k6P5QimDpZZUzHRzj0xQ3XHUzY%2BDIAjNgm3z8YBXG%2BD3jkce4adWo2ZJslXiV08txt1WSOKSUhPdrBrWhovcqWSStCoHk9o9JAKXVV7yBPSlZUByn%2BWwwHLoXFc7jZi2ct%2BxMneKV3sKxpPNmNyc5OBAY8P4BhSJ%2Bjqv6x%2FjFkEFp6Tkl2CQg5syYbVF0YpgSk2BiV1AHjJIyp1L53h1mOVWlCIeC4Xuo9Nh9RGAZY4a647DB4Ntv1nY7QQVXrc53cyOvUrt6%2Bz3fJmmK%2BbHAS6CL00qSWZGawhUwn9az4T5ji%2FOcGjpHW7Q42dB7Kjr0ttbBMLtIcrV5QvzpFJeRQI%2B%2FkatVdxiWpk0CPnfy7U7beNMpu273pegIA1RkVNem8mIcdhnbzCfZ9V%2BZ61q%2FgTpQfgBkuviFJJPSH0cyMqMOKh89IGOqUBFKthVwcGOpW8pkt%2BLUV4lpIxRJpQwK7TB8HtTRnCloxcB9lyQNifMOZPJyHNtFroDveKIf8Nzc%2BFmim6V%2F6VAxIRG%2FBadKSAdCd3vvZoPMHMydJHXtBIUZkqS6wXZzxnmweJOfGpSDdm5NhT8qcwCY3KvFbusw%2F8QBdGotCtOdDZg6w0%2FxIRw7gv2oXaoRUu79%2BTp%2BrI2Fv3nbhF9%2BZXJ8IVxpnj&X-Amz-Signature=0eefd39347c23f0be80da28aef5626641e15c4202f8d1672530e8e7b757bd29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

