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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTGY2OG%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T151839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqt7MrLpK40nfAfVeZ2HDtaxmSJm%2F%2BOMI6MLvkvqGw7AiBRj%2Bk%2FZjjCcbDgJHi9NkjhUi7NNHd7nmCxl5fZDeWWByr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMOAuKDd3r97Z%2BIfH8KtwDbDaw8XsjrEJnuUi%2FSQjhjPU7bamZ%2FFmk8vKSyd%2FaI8%2Bqr%2B73zWkyUtC6HiIRF%2BlNFkZC8vRT0z2NFTVnQjj1AQbNIDdqv8xuq3yHKQMM4V4seKLb5Jv%2BTYNkKSvcXsFDinZoJxcZLPe2a5%2BOl3lqP5D8eaxRBOuCe9vuT%2BteaVZWfVOoHdlvp28BQEFUFEqOP%2BFK6wsZcj1FDNisB7WmMjl%2BqPGkSBe7y3e8edTo9y%2BwukBgunqA6LSfjcagOBHhuqvmYgKMmr91QdG%2BtXD39pYo5LeGrfxLuRPj2aBK7AcU1cfLcwipWW8dKoHUEcNDTrvcEYFQ%2FFuYkvdmLx0YGTum%2BxNAC0PJSIC34iw1WMqLJu9kxUCdUpZk3nWp%2FozJ0hNOiU2ISh2HDaD4PRdv7uJ%2FEe9AYVt20jb%2B%2FEyai9QTviFxK8WG356utz%2FrhugC4GmiW79lt5rd5Sv0UYtZkvWZ6i0Jb%2B1wgQ9G1bUB4%2F403oB1WliucJ6qx7dnBHcN%2B8t5r%2FdLyup7hrL8F9%2FXDo5aTi0d%2Bi9PryhYd8oF3TRCo2nN2g7TR3GjShKiVHqIpCV4a0BOMkuXWGu2NRgZzbAJxnunwgcsNoNhBSwGsmyimpgopZNALlmcpJMw2riR1AY6pgFOZKs1DIQESQOaljzy1Wc9Wb6QWLBAmwZ51ckKlQq0RzIcP2iNTqEJu1EPiErmrOsbJ%2FYVHJ8R4vXBzpnp3g8glRt7aXnpIls%2Fn9fxAxStMstSa4%2F50TWTxdAZTYfs7i9LI5VRUnGivRjFWqfcr8SZcxxJAh6%2F7Cn9tT3lb1DV3pQ1U%2BKtwvj46Mmh8%2FSrDkWzei4njdO%2BqeUspbWn3EWDIIBWtf81&X-Amz-Signature=d6a449b9e2e7793ba01a256aeb9edea66d8d60817f9084be9d017c3a136d31de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

