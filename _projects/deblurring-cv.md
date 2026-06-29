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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZID5L5%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T122101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVFI73LOVOt0pZxxlZkdOYu7gM1t35I%2FQRyTn1KUZjQIgNpopDUsqVICoikRgWeB8JiJEiKqtJFZeqKN95vw3CJkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxQ5aJHkFAjdpDFXyrcA1ze4vZVeIEQh0IRf85zc%2BgP6pwKu9CVzdRVK3%2BjccL6Jx9M0nsdwnswRr4OEhfiWP36KcRN8kT1PnLRGcyaum09%2Fc7L08qeEKwUc4yjyXI0AT58kQdyonQvEYBb%2FAuHTw1muGw9p3seeJS%2FyAbZnLr9d%2B7PyHKx2n%2FYt9my2M6u%2FrXECoUPzxxmSKkZwkAUooMWK7eDcXgnkMXuzSye1Df3n4%2FxbBLgBBn%2FnpvhNQZbVDZssBbU6sin%2FLDx1dAH7csbHpTklvMNbDpEMcbsJ%2BbyYq9Hajn5%2BVhqlB5TvKa%2Bry78vY%2B79nr770k5e2cvU1SOhImThMDR3qr1HNu2tHXk2LXRQ2t8K1GhoKCDXZF6MT1HQP6PySak5gfzxc%2FeAalLh00ojATikRAdi45bES0dKLBGCDDfXbQDRoc5ma1cRONfmiZTlLFbkGOts6G193sfaap7zfCOsCPpaG7tEKZMgGqslg7k%2FivNpBh1QeiRkLgqU0sYB8C9ZNat6BOGe%2FnH4PJc9qycoXKOz5osp1eFarktTtTWd%2FJs7MI1AyNK0kaejimx3W%2FTzbluLX1CiP16FWafetVAM6QMpVFRnyR8uhPnjICPSF%2Bt248%2FKYWwYMKfBads5T92fHKFMKzEidIGOqUBXiZ%2FdLGVFVep6kBnZIIJ%2FcM12qnBROue6icX9qy2mSX2iONRGR1XFqJqEFz9UYdZyCiD5crbCvfo%2BxZPLkrODxa%2FilgzPutIUZ0QnymlHMbEsi6bWzfQ9SVrL5XAsM4P2MvgO73YGJR5hNMGS79o6nGZQ96vgMcLGj9C2GgI2OMzgAuXUih6pqUiPuTv7ivORD0YRJmJ2KlWzq0e5zudiVyc29Et&X-Amz-Signature=0ba5ebfdf53cc475b359828bed2d04a7d843c4fcb608d3f61e9d829b8d4006f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

