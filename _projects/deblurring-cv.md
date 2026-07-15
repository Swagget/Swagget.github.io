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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGIPC2V%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T205837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQD86dus6%2BahdSuzSPQfwkVdC%2BefChEOt3LqkRVLNNf4yAIhAOEumYtqoKCLd8PE6oVOH6zY66gKGZ87xEMDZhoQtw0zKv8DCDUQABoMNjM3NDIzMTgzODA1IgwO3ByN60yQ2KNVQ80q3APVAAtvHgXoP13%2BHBo2p61tJxaU91gVuOqETu2%2B0dxAS7zS18cISZjoFkleRPnyS%2BkIrDigVzx80w7MrJ%2B9YljdjUrvtzWSL8%2FZswGf90xxOdRzcarJVXzX%2F47GULOHTku%2FXJNmarhV1%2BQhUDt6VmHUgEFcyggia2IwN1L068C0gnzIVAPiugU5GacJIWIwVqUWIhlsN2AI5jsuCL%2B%2F9HmLrVOGPATO2gVBbGZ3rvYKFIJvtUeWSmWDydhCN10VnFAenIj16tb%2FFD6WgA6TZmeErj2qH3K%2BTS5vEb0NY%2BSTuZnAAYFfuJlcBsMtC%2FS8AErp99zRTaZYTaFRCVQydJtWz4JOq%2BAgcuAbCQbVKOjDmfl%2BEGVvliqEFiQ5YOryDm8uryshV77H6ttU63OP5RNUcCUFXgXiPatH%2F7NNY2oQWXNsalfsNxWEX7ZF%2Fa0T%2FnmpwIVdCnytH1ujnPrg7KFT873OEiuEKra0oFxdGpZ7ttWH39Ym%2FWofmcmkb7nvPiQWhboz5oc9TfB%2FgaOT%2FkNLnIvc8h4Bvi9InX2shKzYUH7jpJtTjWMyJN%2BCW35G0y%2B%2BHtANrPQF1bUg%2Bp3KWtaNqp4F8OdT7760DdlSk56ijnqRnBINqzRwj%2FenvTDz09%2FSBjqkAQ%2BMUMgeTVW5DtGTVoIMjj2jfExTkjTYFjo2KP1ZYTWHDCgKdbZLILZlbFeYBNcMnUhjptEdHZSjDv21s%2Bhk%2FBXnzAckf0fsxaQT7%2FICOoNGDvvO8%2BFosbf8SoOqOUQyij%2FvoY3TPhith9rtskMcNAgUuYiCImoddCG9bfu%2BJ3wFgEPIjCRV98WaVZr3hW7RpSAWo8gqsjUNfvqBoVSFgHuuYBrh&X-Amz-Signature=47eac5b57ddf508ac550b025b8906a23c27635488fb4934a95f1b89e36286104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

