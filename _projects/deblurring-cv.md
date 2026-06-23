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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GWSTQX%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T024617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIENUtQyTfC8MvTrEXRQnSMGm8%2Fed60eC%2FNQfN2iHU%2F4WAiA50PoCaqOjP16IZL3fpvMgQUI0a3CqEmsu6UVNF9LXFir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMVYtWvLh7r8f7g8siKtwDyW%2BnXaeHpxVSJSQ6BxdSsToLD4dXQWXtvNGCiywfUkwJZns%2FYtxSh6%2FSu3WHDuUY%2FqKH3lXXHrn%2BFWsGR5e0TO%2FERFy23tMnRYhfUZPj0zFN1TDxMmLmgBmXv%2FgSJuR8XL8fk9HFfjZ55POrtdlajY3LxROz%2Bc78fvAAqsV2HVaGidXAyQckyDS9jHQkYb%2FM2VK5Kl43yEi5ab6wcZ8mUzl3zkQm2cX%2BcWtq%2FDU7lbjGx95wxMqKyO9haoIzo3Lo%2BMP3As0SizWA9d8nR4vEqLddohZ0ADtVDUfy66Ah6UomyQ%2BWp8PEeoX%2FvpytbWXRZtZdc7HCpW%2FZKK13q1AwNh1vkXpgUptm2kOKM0r%2BYQNEa4AYaND6h2VSRG9pIMsHAY8YBzMvG2Ou0wOmdKYis%2FX30b5eM4%2BjGCP3p0COPIbyASQuMMolTf8O7Q7IxnxjeH%2BYnZt6Kt2Sv1SOas2AchoyaFMMpkhUKmY4gvCtSNux0P4T2MnUPAwnh%2Bier4dL%2FJ6ahwkWyH60LRWfyToNvhWgNJkLtHA8GQzddczzEKmVxKduefsRq5gxr3XkaCfD2Mtpv3skzWwTPX8Dyp%2Bw8RdSzhtHY6r%2Fa6Ek21psTfNyjcchdcJSm5XLNDEwuuHn0QY6pgHZ7PHb9ak7DhRzfbd4KKBSqNg1IaDDWk5mhTX99JUvJ0OYtDGTgTCztjYfXLjPUcwpYcinFhgti%2Bxbc1VuvnUB%2BsUNNYBfrm943zhQ9x1%2BEJsR9Blo1S8H0cRkRLzgztri7VhE%2BJG4ghBmu3or9UCZy08tMXLNzp0uKrhba4t5SKuLWBQL8lGFNM%2BI8K7g8enZjOp1Z0NgBL2SAhV34K9JQi76dzZH&X-Amz-Signature=950c9520f2978559c11676385e09665079d41f573d20e0390e90e193ba5d7d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

