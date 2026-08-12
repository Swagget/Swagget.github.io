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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYCBETP%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T184313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCT7DJ4JhZMSZD%2B5fZVrEpubcpvjHNRZ1Ro75Al1icEGgIgJfCQWvZddVrr%2BxnL1DjsPsmfHVBR5cU9jGJw2Np8zukqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJUVIoJx%2Be8bs4KFCrcA1qCAgqQUHkinyIn%2BHHT%2BuY3zB0jU7m6RFOulhan7CH2cJNevsUV684neTGPGwFIRXmDL8PcI9IISNGvFKfXRxLm8w3EKfK5C9ogIY0gmqQF1l0rtqiURmG3zkuEuZWrmTvqF4fZfN037kkgCc9Ao6Z6982V7lUJOY79AKtWtMpVaYTzeAPM0R7%2BjYRabNd0mU2QFrVCGuHIoWwFcIwezLN78OCHnTAFgF%2Bg%2FOl%2Foz2tSCZskUfViLHMjyr5K5YN8rFzwJPibTXduZ4fAr66aMZ%2F5ssrDqF7dUW3y%2FoQOzoAzndM%2F%2F%2F5HIJV92YcYVuQ2Gazsn2jN8R0jWON123z0k0iEw3Z5BrXb6Qukv8iTT7pF197Wi1r0jnxqp67%2Bsj9ncFMGWxqO1gha7kmzhwqvyNla71D0%2Fq0JEcZnU5iwTmsrcB9mteT806kl1R5JI2jrSozIwDFprFWQDzb45Ws7qCeKPuOSfAtPWR3kwGQjVhv1a7%2BSiXozqxFHGHyR%2BisQprDsKCPOfcniJpbyKNp31rn9EATtIxSQ99bDY%2BeelrCJDQg%2FnUr2Thuo77FxwVFRnHpYeXx66Ho5Azx5Xo2ab9AKDT2gl4bgGPBdT8zoFO5I2DHsipheCpWw%2B5xMOi08tMGOqUBo%2Fla1pgBDFSo12JVg7dhQ%2BF67EHE23is8AiiI9BIpmFP8Zd%2Bjnm7qdrtURiMNugZSVoYzIJY7JtvGUsYnP7N5g5XdagI7ZpeQiKbcubvXAo4cR5vbaUKIF0K%2B6kJAIdlGKU1l%2Bj9Ni13zu88QCJRQjSYfuTU%2F0%2BycLZdy64s5kTExAIUCS9xCv%2B1B410WaK5u%2FqyUZc4TQtUF4zWf4HyGEWwp%2F%2BA&X-Amz-Signature=f3b4bb82a35559518c2fb395a2a64a30622ae569cd97b0b8852b8cc71bb1f0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

