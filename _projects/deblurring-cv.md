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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6BLBZE%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T012157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA9F0c81gWoJ888l0%2F7fcSAetgnGPjh918DTGs6w4MBWAiBVOn63ybDbm%2Bwl%2FFyY75sxpl2BLIwJf69ONaV1V40HyCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VJz58oOTEohvxr6KtwDu2vBdknrWnqyK4Q2txRciGz4uS%2B5nNgeq%2F%2F6R4rNDSjRi2N%2F49IvsFas12G4f%2FqOVOgvL3jTyFPiP66%2Bz8nSbj%2BDIVBrSQde7bfBoAKQeLxCsFNKAHv0n050pEvDJCT7RIuM6vZ5RbLSiFHtoUGvuYDObwUu6OIaZYi8jUi%2FFsHZE9rIeKzk8pTU0i7VR6vmoIeajgzG%2FmSGqv0A3pYSrGB1V27wwNGaJTTGRfKhAoNzGy0bzoiMMnY9ipB3TNSnhclHU3ynGPY4kZfiwtj1WWSPQP8A%2FJE00gmaYfzY4bnND97YbgFRt1GqIWqKX%2FWOmbYF9nTmp2hpopi4jbkd1isp41gSneCExYLWfatSieqtLbyBU4%2BJpWmNy6byQ9kKtTvsnADb%2FmpM8UHdd9tPpaX6ZLoe1w4O4y5HT4gIO%2Bz84DZreOnM0PRGRXHJjj5zwNGmu%2FkqH0c8QNPfZBgW%2B43uvX%2F8TgmHIm8QTe%2FKzeaBRME%2F8HMfz%2Bq73dIH3lPtJecPF9fwViU2dpeLynbPf9twe1GNLgx68rR1%2BmGw%2B%2BB36hQgYiWvB6GUF0wuG%2BtV7TF3ulUiwRJgYp28MpgZJ%2BWAAKuyazK%2Fcy2OdGvJLkDzx39CWI2G0MnttqAwyLPL0gY6pgEnnNzzqGad4c9cb6P4OO0R0qZUeHXMY7NaH9FbXa0KGusHPl84VM3ceIn3YqKtI1rNfH9uWhJSx4EWDuTGbQ4E%2BR4grhIizV6rnofnMkDpgavoURW9lUDeSyadKOSI42AlhcXnPjPad9ZPve6S3Sn%2BGzhzBZ6GnT4r2LeWipxcCWVO1rbfNv%2BF3NHNgrq%2BPKAyIPw%2FbodJdioeu56QVajUVasgPgs6&X-Amz-Signature=cf2514d6e077044020169419c64550e1e458b31cb31b54ecc8f3aa6a61fa13be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

