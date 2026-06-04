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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YT4C44%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T212110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4svI4Pp44LPU6UFAJLZNOyt3ndNQdQ2UpFfyvjOfRcAiA6GQ%2B7llddBvN%2BIVCD2wU46Iydrc9vWTrOvyLTtq8shyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2FXPRMeGtiiSAEJMPKtwDCPanl%2FybKSrC8i0P4jzPy%2Fmz9owENP6XRY0vC6mLyW4vNGsHffFawKQ9FH9dNnp2dLzB%2B8YzKCiiLHT3hJpQsjlbPbiVlYOpsV9gzIN6%2Fn%2FxGgHwWxlWjgWgDXFDguucWM7ugYltVm3GGBWikyLS8qEQLzBPy%2B%2FRSFlWw%2FK1drKrcIi0Bm%2BKZZdWWMlkaUzB%2Bot%2FqfV6Wr9eCiBAo1WqOoeWwE%2BJ137qL0k9omw09MhNIlJ3n5MywORle381kO6crsjq5sMWSoxTHsxHZ1NQ5gHTRSFUhM4%2F%2B3EfASVNkjHunB2xTxLAA61UtZolDHZY1kJei6mxOzgy3pyB1t8GnbQGMovWUcxRuns%2BI36kLilDrHDac5XopxRm9aJDU%2BKhBMtmqoNmLNI%2F8TKgn0NYBKMIUMAxzKZ8VU%2B9BpauIRtBIHhMXeWdAUEHnBNjCTY2KGr9Sgujc6r4DFezHjKisNoMm5F8UOxQrGrxbMSo2edqSHRFH%2FdrnFt1hftla4EIjaOTefHK3LBLtNEuaIX5%2BHudwwTOqlm1FOGoXZWHtKY1X7ynezrKuax6GF3505PCo5MIb67jMlc3drxplohbHCBEMBxzkY8yCSE1g29rTFOURAh2P0BoF4wMXu8w%2BMWH0QY6pgEh5EzyCeEg1Z1maRSomHN%2BqRIS6HpASCdPeMPP6e5i3dWCmbnBovKMFoh9hk%2FXAhxXWOnUiRpW%2B9YoUVXdHlaSzlI79Yg7nzJHREtdjmFjqZumEsJJGKWHMg0DO7JyUjC9M5l8s8m9AuGbqQalibkhpxqFrRJay4%2B7IFut6p8nDjZi%2Fy%2FtjuyBdiOQimgAsFZ29bioPAxvSASrsy9DQCWu0uNS2e9W&X-Amz-Signature=35dbfba20fbc2367a51789c42c4249ffcf50e19dd99564281eccb644e412fcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

