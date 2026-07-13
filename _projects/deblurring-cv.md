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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV46EG4S%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T161930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwep0MC87hbvgMEQglk6d6d53NAMS4ZU23kQ3AGFWaogIgcB3f75wBL1PkvBUQZkVKuQJE5g3HUjBgg54XpShrzpIq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDBXxffgmZIT9zmWv%2BCrcA9HvUy79C05U71x%2Fl1QnsNp%2FHT%2FlaSnznjLp3nkNbR1OUSPB4NfFOssQT9flfq8QFOCOn%2BgBbtAlwsFxYWXVC2voGpB4eiSwtQiCQvqCELXFlvi6Onv2ad4n2GaPecH%2F6uXuvuG695G38VCb784CLsNiCyBRbet0EPh7OAyhz2LXZBoNXflQx1wHF6flsA9Pr5OE2mirJA53y2SKV8NDHVNT%2F1vk%2FNRLq%2FGWPoPAXJsfybRngp43aIBLHjp%2ByqcUAb%2F1M07e65ghRQdzc2jIwNnorEX41dKLRWDi1B3XX1xstsVsZBcKrGgVIy7vNk9yE%2Fir1Ar2lNR%2FVVWxz5OUdeNUH4VO16uiJ6jPZR489Er3HvGfFDiiU2ajMc95%2FTasu7WHxkJOLwPqjdno7k8wQ7ZsiCxcdcecnj8ybpviCZKet2tShnWiQJ6PLg77l4vQvtvvWAd9BNV62Fji4Z0T2q3%2BGKYBXQ9Jdpudlh9qsxaInyxHUE3RwlENsKQtn3nDLFh45IqDHPlPKj3dEFxZgdfc5Vk2LNVX0PZxM7xWX6lcuWVvkEIWhTPTZ8VhFhN5jCxEdp0GYbDNg3rra86itTRY0rhIxat80ICQjaR1%2BHiZstkZcZ1VM9MNaLklMPqY1NIGOqUBlpcfCSp6%2FR25Cb5RQXCAIywThWf18bnzcwCbVsy9ELg2Axy6W%2BkoY5pY2T4fhSHMf5kHCgi0BAunb%2B2ThDos7xTXyQ0FNqjOqwRhbZxZQVDPCc0FmxvS%2Bh9bB8B%2BodwkhEohQ8kEON6pq7Eb1xWW%2F81b5aTtVy8JNLM%2BFWCvUm9AzSG%2BboKcfuxSy6CsmN%2FzG0eXKgI3%2FWQAIOeruM7X5dm20TIn&X-Amz-Signature=d7a2a9eff4163c30f74ad025a73227b0866825628e89985892c402e87496440e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

