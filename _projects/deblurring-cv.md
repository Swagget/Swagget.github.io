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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IPP2ZZ%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T232919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuweTDGzA451bH60A%2FB2MXnleLSexMmLJGqeSp9NqiAIgfq%2FhDhUpFkKQtPbtTpQbZWaREPC2xtf1vDnRp%2BmdnHMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBv0ixIQSKOMMAr3yrcA5Az0PcU%2BjXHmmFFCgmqZde3XeBu6DXAdTaF4OG8hbkdFsk%2BQgRpO1pZfsG6S1r2VESrSGy%2FYp81Glsqt1FC%2BFLNoatwuFhozO1tRaIWRd78NMe0T2DebmafAmIDTCYnVkQuCATRjmW6hFDtDDU8zwRQvXtaV4YLG75%2FOB%2BNAmrhMoMpYCUHNGJjscnIWtx5PRqrhdoTPahNNTnXkPEiulBaZqa1Wt2B2PaUp2FAVw%2ByHS0f3LjEdv8ZyzmZJ%2BbIH86gjJehJRuPo5G%2FSOlariP1l6ZnYB7XuHRPbWAf2SZijJ1jkN6bE6giTUcL0qZD9h%2BXEsHObk54EucIeoHdIbVLbIroXnp0zRixhxl26oTKcMhSerPyPic0G9EWs1%2Fqjrvgava6t%2B3F%2F6kGorO34ee0bW1amnbUFj%2Ftj%2FCnXpVoRZM6pq3EXcoCzswH7MWKD6CC9wDnzVOLbGg7%2B7OtX4ytGmafREmDYT8ZcVKBsdfJNB1XNrm3X3p9fNXyBDnhSXlPpI4TmFKT9uW7FGMeAdhqlLPPJVhv75klGCj7m8q6h0Lm2JO15BIhDl9nrKpic3mb3cdfMLnwXUp1lVWJI3QSejv6J96E09xZ83pBuXuM%2BUdfAP14HRWD2tloMN7ujNUGOqUBtdzE4wvQNETC62q5ig9AvPN%2FlHO5UVY2th0O9A%2BnzDgztGcmGZqgdRu5Pl%2BD8ASxOjdV81XC5wbVlT%2B9FRArepWJnk1WR15sq5PW1pWwKRr90zl64i5UytSZibmJPd2rE6xMp1OG8AkwKVNyp3sxK2fYO3nYpiy2YXNWP5i4lRyZa4ALyz9BficIzJu0Cm3AsEoHze%2FG%2FG7LE6Sd3WyubLTjQ2OE&X-Amz-Signature=c7a0f965938a2f65d7f757c678aca6dea5010cf6f8f4871674ccd3e350b5a231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

