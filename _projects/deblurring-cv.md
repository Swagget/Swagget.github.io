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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7VHSKH%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T072603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBLkNfEDXvMkgTuzuIPu%2BtXRcUjExwBGNCidp6dDm46kAiAS0RHgxsvIwmfzRy5uPw6s80mmTSvbwJACLUH%2BDqhZCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFEkvoJydi9fNO5k%2BKtwDG6bbozfKhPD3ghBLjK6umiIDVW7MSd5j0CD6zkAZVnygUnSxlA9UcQ1QNTkw%2F3CPw5FxlDXiAaxRWyOEhQkPM91vuCiaTQpVL5opH4JSphLBnLykwfG2NSCM2Rq13TM7X08VzZmN0fCtbzv8nhp6JMFFSarJnrxrYdiiUfpm2WpbUAmLMAwEKsl1JYswBU9%2BjlggHZ8BStbsd%2FhGlt4SJNs5VUftxwH8CGINZsfRbCs2wBJOIz61bpwabrOXMUdhSDGwTe%2FiINroI8V2psBPrxJ5Fx7DQLrmcjkk4XjJktQ9Q3Wo%2BboP6V7hEExg2CBefjVhoSJWbfIAHz1TPMYBXv%2FP5QECWHaqy5WGqa3n%2F8xJlpIG3Y9tKAC60XHgGCLBfumiUpl7M3ygUrzrLEW4O9D3m%2FRoeyF7%2BOO%2FQym1V6rIsIAV2N0lw4WxYgmyMyh59Us6fVHUQ7GzSSbhXN2ggnWVnX7Hxc1eQFBIhVFBR0r9tz8eTyZ7O1N6ygE657RVUb3emeknvftpm1pdhONaun8O08fYl%2BCmRzKQVpT3YjvJ9Qdu37WMuUWlQwsPG9uYjEqTcxEdgSHeV2V4d7MnrvQewD2g3VuZ92Gztiip%2F41hwfj%2FNWBe8nnjXoMwy%2FyL0wY6pgF3EoT7v%2BV0MKVV9Tt%2BZMpg8qY9mV%2Fb%2F%2B79SwXAuFn%2BjV4rxlwN1EiZB1KdW%2FNEcaHxlKQZeut%2Bl1Fc5rHVGFDwxsaRh3wgpAXJz9uQn9fukUZLUMbFLlS74%2FdWRJ6QJOePsvyhdvJvQidDCOyLE95ar%2B4Qt%2ByzRdyh%2FfMZwpnneZ66m%2FaDFOJtNZNJb2rqLFcXfUzoEoVUzwulpbPWcIYMr%2FojRcJt&X-Amz-Signature=83f348fa1ea40c1991d7945e3f3bacb22548c242fe083980fd919357d771f127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

