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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXA2AKEJ%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T222430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC%2F9%2BFd7mJjqILcIy%2F1%2FnPRRq3VRxTt1%2BMqz4ysJrR6KwIhAIY01bP3kcRMZx2AGJ8EQhRt%2FdwaMFRPYOxuU4TbQcu7Kv8DCBcQABoMNjM3NDIzMTgzODA1IgyButxN6HqwpKAqAgMq3AP3MwZGxU%2Ft9UD6YArDaWHz%2BvehHVlNCTMKVRgTWHcMR0psuN6qGVNWF%2BHzznDtZZF2bzIqDCUY8HeP6v74ZNYJWIB0WpEh83IFhzNXbnftJYlNCrVeZHZhI1Zs%2FR2ngBtmw7ZHKy2tzCi5GuQLwllIXeG0h%2FICL%2FrZH8geY3Xcccd3JGyC3PDJo0raRN1trIWgjlR8lpJAzpyUIpQxbHU7bq%2BjgnU7plyD4Ap0nDJXuCcWb%2Fvu4CR8YlPaLQQK05X8siI1mbiHzE5NdZ4QPKdT8VeRX%2FXzMFOm7r3g7jlUcjlhP10iucLgoqxwgCBfIVZwgduwm1SuHLEIqUE6z8hB7lKWKnDgiZ4ZCjlHk0GS74qKn4RgoRkyMK1SaamsXjprUAgP8d4n000H2EjQCQ%2Bmyl5%2FfT20WtI2X8p9eiAs6iWtiHREwX7HQA3m9cvpf9ezwoX%2BwM9IdcUmbPDIECuv8dAafW4A8Mx7dXzlbdp1G7gZN16CioD8MXRibV9pbe2a7wy0tEVxkz%2FA9tC6Gmmln8zm0Wj8IBaNyYYGqZxyTTVDAcx0VzkeU5bTfNBPa%2Ff6myPjqfr7ly2MgN4Q4tGc8moocikx8cQ%2BaESt5dF96Tuy8eJAYXqpZSbaszCvnfLUBjqkAf1zGcGJ0VFnEiWWnsAOou5BTpvVnlr5yCVpfMKnvpwNUDv%2BAb0D%2FboT9uFzRVmBkmSJ%2BVesOU3O3t5VYwBnoRGCxUxqbxoPeyo96L5EZ0kUsZc56ytk3eiKEujKfI5DgBN8NXp%2Bjul99VekkBoQ%2FHPtjuNh3eduO3uvvwF5S%2FjlBYM1rK4sCRFn1VSQ7TVimC61suoXNnpXGDyfy9o5ApXJhE3x&X-Amz-Signature=7c2fc8087194d8dfdb6a4c39877e6d563ddd2a714a8d5b6f4a0dea38060a9b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

