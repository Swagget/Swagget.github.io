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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLS5WKM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh7I3WP%2BlMkG8RQBUQpQSYqBTUKpig7EeCpz%2BRwlqQFAIgKLUW1SbUGPZBziMIoCuXIiSeIQ%2BLaEXj1BSJ0inOG7MqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtwO1B74ztPVa6JXSrcA8IJNaE%2Bz96JA%2BlzORgF1zWbxNKG6GY%2FAv0zhn8XJOq7vUf4jxcrj17Wcrw5nURzb0ytIJTxG0Mm2gZbwR0IvYkzDiETp%2BGTRSRHwrpb8CsSejShXhq7%2FHApWi8EkEsbhZRFauAWfb0Map7DsQUDmrNnmOb1bHSseGMtJH1EOnT%2BLCFaqG8wBtZvHny%2FKfbTZz%2FRsxMgOYEJgt505CWD10MQxckJWFme55F5Ae1OWH7MgMq4nlHCDosmx6EZM6V8h%2FPjhx6oc8l2PjKuMRlY5xZvmKoZd20qPi2aI8BpzOvSRZr%2BMuNKSdXMmqtCILImoxaSoGGlHae%2BXegntGlseNhdXh6AnjrXqlX2yUCE4rE4L5USSHBJ3vc4nK16bQjQsmghzErba58wPdp7macfKKD%2BRBTX6dsm6N5iphEUT4%2Fcj0o7yR%2BclQP%2BjM4x7U1IEHm1AXBIWDGL3HjaY4aFQuac51OiQuTy1n75%2BxOUde0jgralpMJSdb%2FSTn%2B%2Brs4CrpCNploCBtIRfd737MLpXZbkA3Tpn7TIGr4NQgQ8ZFnlsp1%2BduAVvn%2FVTtPvClVG0rt6hrN%2FyyTXjV6nc9N1BuoQEDbNpTyy%2F7SRw8eHOQ5YkiBZDbKJ3DJz9N6UMLPtp9QGOqUBzLEYkELYSCPT20ii%2F6b8xacbMP0xUFKJZeMH2wSPjpYAITz6At8l%2Bi9wpizVnL2ZXvONLxSih%2BN18ggMlWqiAwuWCzT4uila8%2F%2FfLPomz%2F2ARjNDcTeI9SoFGU0iazJHWszNqvI029yYH1X1uo82JpNmP6y5hQdjAN0OmzKZhIMPnk2%2BU4yE4LDD%2FrX8zd6PQXFgweqJ7Uhj8uxgPgVtMI57dWgv&X-Amz-Signature=72882eaed807f7e11fe3b887a8752e1f8fe01aeb3c76906df869650d582381c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

