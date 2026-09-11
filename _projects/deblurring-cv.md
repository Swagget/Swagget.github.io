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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDFV3GY%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T064310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXo%2FNSYuBKDJAAwWD8UzyH3vgUDdrU41I1cl7J5kGqgAiB9BOynicQpKBbWw%2B0y%2BZSp620l8%2BtsRtnGli8SsyCYZSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBl%2FZ1yb7CtJmylZKtwDzWtn94MhyBFkJNDrpeUl2veAZYpWRKYzkoFRpnh%2FXQ%2BBpyL%2FDcaBuVmcqCdSSHg6ohwXd4enTH0eQtQ8By4cxP1sZ%2BXPc2PK%2B3Hj0ekePUyznXlLvntIoV4zfI1reko8xJ5OusElTgRmL0hLg5yQJhlYHDAVSdj72iIeZ3T0NkEM1cXnW2EsEj0isXczJbkvKYooEpjrmM%2Bp9xhxw%2FOelgVccgs9xUx32B%2B%2BZXSBS343n4ZdSYycYf4APejka%2Fn5T2LXBBrv7oq2cO%2F2gxRyKtOBKFPqrvQ8JUI5uZeM6eIgoiaxkgk7M8QRRZqfZSpTUsq10EXEVWl6MQNmCw08HpldKr81a%2F%2B%2BYq8FqgoMVoS4hnT5XyymB08SNufH9qns0SKn8%2FINU2Qf4BJ0BYOhlfLqsHWKQoxu3vvDepx%2Fd3nMQPcCIKThWB1XFeXiZTTMkxeyyfSQO9SXlZkJiMum1E1m3u5hRVe1Yp5XzWcC5c7sKKg8rrhALTFdDJ5CjGjcT8DrLkh%2B%2Bis%2B%2B8n8Jwb7bdHIp4gci3lGUSjYaXnUPDMt%2FL1%2BWa4PbYYQvF1g%2BJyBWhx5vq4PuzFbZpLwAzyN%2FYb6rh61JS7eRZirWlegwBzFJR%2BKymYH5puobBowrJeO1QY6pgEkYwfSuEUYZvQtB3I%2Fwiyo2AzsfPFiRiLYUoSaM2HsF5jh9M0AgxXiHzb5xvyJIGrq9XYgAVNkSp6w1BTlw%2FJ6P04o0lKcU%2FBroaiNOyzXNRH8D%2BPr6wAPVHXYBks1ZczfbXtp7aUBuymvhePEhATvaBVp7WVMlyXvYOAztCEDNP1OXvBMVJQy3ShBPvM5fDrOiqbePbhqU6ZixVsjhHHm15ZSoORz&X-Amz-Signature=7de047e7f64c9b8b25fc40be2f3a2e46c4b60420d713846dd3a70b1c030e354d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

