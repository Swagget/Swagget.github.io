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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CDKS2UR%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T154220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNb51T%2BmRJ%2FvuO1LG2GYm9la6xZ8J260aNrR4Iqaxb3AiEA42pu%2F5gkuzgQ3z4Nwi2h1Gx%2FqeTmyb5%2FS2Encu2hyEgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJehqz%2F9ob71AQm1PSrcA0tAtO4KXBb4uBczAKHftMCBL2F0cm50Zzplm3Ga1Fpksldecz1Dk0CpGPJndHLVHZ2hAEVYv6Tp%2By3OiQMm8lUMZMoP8L2xPb6GW0A9%2BK3pXbuJCc%2FHjL%2BNjYHf4Faa8gkGIZlq%2Fu9eyqDdzUTzzPRXUqKdww2sEGWw2JDHZHCBx8S6LFN1LKAHqBGAQG%2BStxj3WGAjprELun886TFxCrvXilxPHi%2B%2FgzaUoqKDKlNMGMoanBh4%2FNdokG0K5Rlpg9pF%2Bon1kRdh%2F56F4aXxjYjXwHjANIkUERydhh%2FpA67SVne%2FW92Afm8sj1UgGOlef4JraTxS5VBMQ%2FztEIOSl5cgCnZ95xlTZZdu6YqU7rFRDUqZ%2BYoztM4AT3VgKiPFB64ZJtkTK8tyBIcwmrg%2B1VHoYh51gfqa6vi6pDC%2BBLV5SFUKn3BHcv5BX3JEA83v5kjJ%2FM4X0EVtqk3iM9G2VMuQaW38J5lB8h5oVf5F4aoL5ZgdvEkUxNYxotUTPuImVKUBITvZysZRzStsFtlW2EtqqBNy9Zt%2FQrZPUt3q1oQ3XfqJOKNgU3ad1KGA33QES%2BacVzF3nPB86e1Oigo8joxT2Wg74Sj3Joqh2EKbXIIJRCiq0tHyNCiTci4dMJ%2Fg%2BNIGOqUBWXIa1Qlp2NWTfk6oFveIJXM8P07jJ2Li9HQa1Mnn%2FnI41DFc4GXO1xk7u67H2NQk2ulR31JUzqMnxH727WZMm3UUJBhrGplmBSKljAX%2B65pd5PdzUJAx1Ryis5zxzDIIJWDjzR0QU4FATgF8eMDXca%2F7FoeItYYrNQu04OMLS8VldzFjj4U1hVLoLBg1ZFd6ZlbKNYONzkp6Zg%2BSigcASsnn%2BaFT&X-Amz-Signature=a9428e3cf4f69c77c9e78ff5903dcd5ec7e7082d30ada8f97378b4ed8ec5b188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

