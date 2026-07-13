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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP2QL6%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T224205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHajUwotlTBQzF5InXsxOEKOVVHt7kH1MyE%2F4N9EQ7gTAiEAqHxyhiTWkPAaAum%2FGYjcCDVdpT1KOpa%2FytUTge6rOtIq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDP2R%2Fx9jwuT4Uv%2FwcircA3g2HgsfJdSDyeGaaKZZdDjDcThGW%2FTHi4mD6NEfSgddLj9PhxTyMIZ8QqeWpz9ccIvztF3ZpYxTCfLgrGQCHlTtBW9KmZpVxy6uLuKXxyg1Ab%2BpMcc3kd%2F6aDjFJvoxQlmvDpEuT7BbcLT%2F4hC2VP5e75HgkdGsn3RLXuAsGUTTlOG8dV0kkHFpi2MTg4DzxYywtdaOHr7Xg59hgFbuIgyeRe4h3Bx7G65amma02%2FRLPaJjhcM4zbrCpMNfzhPgOyPUeyrwjKNfgmPFXkfgYEc8O7AuHXRdQb%2BSBKDRBB%2B2VfqUwzgLnwJUhMNsmHFmBg6T8ouX4eSmT6VcxBW8n%2BsUjxkoIMO%2FGmb3fUwd88oJdF7LjsvPCgSqedNe9Ih9QuQh9eioTaxnYEMnohzb2iCtI5F5C9CiLoYYDx4dS1s24miV7HWgrkMAMpyNOcUqJOK1%2Bz6QH7LVWgSGMWheCOTMVRxBNDCOanDLcivm1xQJNKTkLmq%2FhIzikJOuOGUZKjFADa2d%2B%2Fz8dHojH6SMBfT2maQRwfq4iegy%2BqsCjrpI1MVIaforWRcX4STHgSaLl9Qxn9BvXuySO6X86NpkKFGFpccYLykWdINtHBX0hfRMVYeltF4xhtL5kAwrMJq41dIGOqUBXvkD17t4Q6Bl%2FwX1LrRJi8efY6%2FcTX4bZrNEKzHt6azSYxoR4O%2BKZ5exNw5XW6CVtPdnUcNwuC5kU5rhdE8OpPe6qFKnJn33P2tXv6DzhLfoh%2BbUuPEW8deMFHPjdXPjjS3s%2FEKagONZqcmOv7xyEsmVNwRNwuKaU%2FbGZjWw0r%2FQ6qkdn4o35LgyS90hGGr14vBkjhr9aaW3jjzy6tKAv8e%2FJ8ip&X-Amz-Signature=b5031366aeaa1ba43b5ace076cada49271fef561f8af13dbb8f87637ce89ce13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

