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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PTNIGN%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T175735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F86CTa1XCSYgg82Gh8DTT6%2FjiZZaXHOVFYM9rPVp78QIhAIfmERv%2F%2BT1Rsumqspvj9516f2HftU7FpmYdDOZv0x5FKv8DCGoQABoMNjM3NDIzMTgzODA1IgwmJbRVEVsEol3%2B4xMq3AOBFhNF2tosBPhiQBoUHLLPURqcNhrZydVfuAO2yBN%2Ft%2FPzgwK93yy9lqriybNpjCvFLEVSpcaOTivYXOal%2BpPOxB%2FaC0Kqge6iuPNE3Umwxix%2F5vq%2FR7S0R3fHd0q9CZ6brp1%2FxHCXB9ktyYtSz1MoXg3b0ZgUqKaZ5k13QtQ6RF7WZaMj0YIjg%2FI0aXP9MkrlY%2F9Zko88wq1PmIEyhvuZN0Mgy3f1Fb%2FETwEdSGe7XyHzwuMDwfYwgOewCabY0r1ByKfhvyWoukcGVOrdZRrhBLNR9lF3meLbcr7PzNt1EP0FqPfZaysO%2B6aZFVl886q93wPfo0Mv68nUeUh1Bb%2Bov9pLw0k8PVMEjzfrx7lbKBXrHhntZY7D2v%2BmFHQQ9u3PvKUq3KgLxRhXIU2RODnm%2BUUWux1u780%2BVz0ebkHTmWF%2F2j9%2FtHugMGxGnx%2FurtaKYwhBELHVzSeAQX450EsWYoyAAGxj61W%2F2nuLoB%2Fj59ttd95IoQku2qT8XdN5RgFZHO5ezdTVIMhrSEgwJ399kWwz6VaijtOaMhD1TdMJXN7l%2BLE3%2FNaNej8YxnrwC3LsE8pu6om6sm4xIvYvrTUkaMe4YVm54ZdixFsOMPO9OPbz27VB2wfQOxafDzDCkczUBjqkAURYJQSj9B6c7Mj%2B%2FLzxyu03ltz5BsClnbC1TTDgzzWaIsDdBmIYRQqi9rplsx8u%2B%2FFtMv%2B90s70f3P6zAMjLcfBNhEsCbpIYKEYdDqAi0WS5bpn29CCNndiqWaZ24mbPlEDNVO%2B4cPcg2mC9mvaEDl9PUdiM5Zz6hXZdUP4xsK0gwBZZOHUFOCF53ZaYfAe9XCeoVzu%2FbpopPcLHnRHPO5kUq8w&X-Amz-Signature=ef4d3d58256009d83ecc2fd51b3177776368975e404f71ebf570f61d8ab3408a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

