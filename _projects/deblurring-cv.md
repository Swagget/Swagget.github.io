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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RMKL3U%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T094634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGVGHJ%2Fsq1qGEibiFAARwRemZyXK2UJsgTNkB2aSf%2FAwIhAK%2BM2DL1YmtS0oIlw8Niv%2FvF0g05znJMYhJAecPDEq0BKv8DCCAQABoMNjM3NDIzMTgzODA1IgzJoV0i3YR%2Bb2R2x2sq3ANqdpV%2BXU7p6TkBd71TzOyw%2B4aCpvEq8xpHCEOmhj3G6x4McH7Jz%2BkgSAHYK741lYehsr6iQrUo8UKipSpIYOFFnqBKc7p35LFG5TexBVK2KrvTbu7Pk8dNSB6rFtb%2B4sZwe1p4gU9BZipX6TmCHVq5sPmmcD10S%2FKvGRabt3SJJTFYns5WRh93XpwyHdR2hqJ%2FlbPtQz3u8JvFIXLKKJGD6UyRUixWA1LqAGtwp%2BiAX6lkiWclgpwEAH7RGIfCuZCGSDcQUvj2%2BUPSF4zlL4qgisz3dMTVkQTBxswx2utIEX7PZMnYfUu2NABGWDvllhHMQM1tIk3mMxy7BV8k1s0XLKZwrkEkbfuNmgaPEVKYuxogZ47Ubi7jKkS3wJSZX9vNFUt6nCTWSoS7D5Y8qi1YmqXglF7S37EX6W1ZrEGlKsCsDDlEwR9w9QwROl2CdYrZ1LhsXU7HIyIjPK3%2B6pt48pufcmQkMSK0BzbLkYUOcSa%2FmnVbWJyg%2F%2B2uuhLug4AzAdIYIAq4lenu3z4SSdJukLgJ%2FmeUzw%2BD7qldLKJ5TeGwTz3%2F%2BSW4lezEElR5Pux4XaUjc0zK%2BIJK%2B%2BT8PIqZ1%2BUalL9EgiBzmkmLyESyZKoZ2DjTYYHFRdoTWDD0ofTUBjqkAfSK8JjInbtFGOrIcNQ9Ad7Pv4kuyNO%2BobStkVbdj%2BrM0w7Pbclpw1prBQua5vBzLkvEo45sZhIBB%2B7CSf4mkf3SLR%2Fht%2Bh7c5iX2cOKiu0en0WgVUyhEESDFPW2hlckc9d0KTOLoqfgxO1gqXOFfqWtM4%2FpXcBkd6kLT3xZim53xfw6HIk3711dl4WMnXNGCZg1ylTtcdlEEaIpSP9YdejBt1ek&X-Amz-Signature=2106444e4eea785a59f34b5f2df386bf9d7a157f1756ff7c98695b59762c08f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

