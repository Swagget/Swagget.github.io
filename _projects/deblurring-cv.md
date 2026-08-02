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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRYHM4Z%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T200323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAzJSHMtNvbfrGrFrglw7pIY421d%2BRjXfhFtZX%2BgEROWAiEArYIVVv%2F4KkFTUbtuduetROB4q2SX%2BNMcqXWO4UmmayMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM9iMCaCprGSIqImyrcA8R03t85TwmfTFZUxfvzza%2BfoujRA0wgw3kwCqA8Fccl9PWlAw2sFAipwePGy%2Bw844vSsxi7qVluYCA2U0bX8kAzWKpbV1%2B8zDE5l6oGKIt2kaD97UlcGC%2FhWUKAQ2qH%2FRg1GaVT0%2BB1lCBs2lHD0gQR70KvNUEFPzWA6BoMWnHmLGCCf0cmRm%2Bh4gP3eYnDNe5Mu%2BJrWwNHjIcTaffohpDzmNHyw8ijgouJ28lSX365utRbAsUd4OVjjDchLT%2FhR%2BhKzjYB5YzVM7cf%2Fk19aS4vss9r2YcMLiqhpUamust1YsNKSf1Mq1FmWy1pn7LCogVfheM85jdsKPM589HNPVRtXL0H5H2s1W794sLu5SyKb3Z1Ph9p%2FCtiqvf7thHuaWhZLGD1wUdcYkauJ2g07%2FaBF%2FqRLsKQoou%2B0N7sHBvTDgR768aV25h%2FwTyUSrgPlEEuf3oH7oEo2%2B%2BZBtJvLVYOVTAFZyLKBJTTVQrHXnvwcdM9iJ%2FF3BvAmO4vjqIawO%2BpNP7Cs9DV4oEW1lFRqdHtVtyb%2BMr99KIAYGXZsMrtXyNHp4fQyndHga5iveTa7ahvvj%2Fc%2B1oofDfMRlFaIDwhz2dxR%2FdMSAPGxvr5dmIiKZGJYy0WjthC%2F8WeMPSwvtMGOqUBe9infceNXyzrIPyzWirsnDbG9300ypMC%2FdB5VmdoaC7cdSQxob3RGhWTzfcWWV8sXrUMep%2BkpQJ4qhNs0wnxIqBvwFtCjV1oDWMaLlz%2BPuovNwRgewyY6n61y0qGjV7voxLGTKVnbM6xeljusFIYKelmxRcGuaud3z72q5QCimm94%2BfW15ePM3u58Wh8LleqfUKlVAx9IkCIySN8hlCwL7x0O51R&X-Amz-Signature=c4945022dae5d6b737188d749e6fcb60dfd164de8ce34e6960c02300feeeec05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

