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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVNWT6Q%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T154924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP38KrD8ilO0k3pvBZX1RAhLZGCrjN%2FEC5noxMR8TwwAIhAMk9%2FB6YKR2I5Pyy4sl%2B78a3a1EAl%2FlJvcN6dMH3BMGzKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKS1idbJC%2BshGGAxsq3AOtnXknS9OwHtCutZ7L1oUXUd6jJMGiRrimo4ysbRWfSEtCQFhQYRfK3bmbCmRahbZKx2pJeh3aBwZJX9MTXqPQHE5wKAPdHKytBfblu%2BAHvBl5ZDu59AhgDsKqhgGotlUqREP46cKuqcZUclUZijzpV7xImiH3DHWu2P3Q47Du5EjYbQLEmBfOzqGCLYSD7Ia%2BdE8lq2STzfuV8H6ZPwZaODF7Y%2BYh%2BFEq%2Ffc%2FqOR3S2t3fZYGJIhIUA5w1YX8RVvcx2LFXtbGvBeakOeLKAojfJhHZtBhMgBANmvjnXKSl%2BnhW9F8tylb3CCPgCXtB5UmqvgKmmrHwRG0XcMOG1LQeyb62P1Ta2io7oc%2Bgl9ta%2B3t4kbkmAZYUGzEe79wmg82YG7ise31F5DSeimU5gbxOYv4uq7Q8mH09wNTTw4dXymbbnMypTXjh6V35ggcU18HJV7SCpvpmMqVEhfzvAofwUdexdCOtcr%2Bw9Xs2vylCGDhkDzxoiCg9VGJWgPQ5fAjyuiiD06bXEVoaVXU3oCP75oiJOLf3h3bXOwH1MHi3GgM8C623vfkQrSHz2%2F0mfvdK%2Fsj8iP8E2pHfGKr%2FnjuyPVDtYFsoFrjPVIZHaDYvu8fAG1cy0gMf7GgljDTm7jTBjqkAWnaOODc%2Batn3yCCWHh%2FRsFR7LG9TO3%2FQKBsrMid98sWpxsx%2FdLNETWXszItKj7UD%2FnQSJRFwsMlmKe1AqQIy5gcABtnKE902qmQMN1gmpfs1j%2BS35Fu5MT17Zp261eEo9zFW6A0i8n98lbNzZv7W%2FgloT07dOkWFCofG0vgRexjc5SGJIoSwHB7pgUDobopKcy8pH2AeK1lAB9L8N948qnaBNb%2B&X-Amz-Signature=1fa3606d430ca79ad230ddc8cb842a19e280f19ab1e34856a452b426d2d8ecd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

