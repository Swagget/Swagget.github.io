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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVDUYLT%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T215557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQChTgGqnEj4S9Zj%2FwYBV51DWdifDyA72biu3du2i1GL5wIhAPpWjfNcWH%2F1k6bs3isqkY%2FaAar3DL5%2F1WmHSUgYOAf1KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwldninBm1oaR60%2F4cq3ANlSJX8yBYUenGo2xovFGKDwLhSUNkx8bfU01ZZJQ%2BTu1WFU6BGi%2BWw8Y%2B4PE%2BEH30j17G8Ho46iHigePd16SEwPUPk%2F3meJQVGoiQgkXbXQDY5MZW2BPRMhIxOTPyEXH5fJAAkO4nYeaSS379slfC%2FJisBxC4RhoZWZ9WFMt2Ecq7h35PmbxnQ1OTbBfhJBNVM0IIkyPman5OXOlVbReRwzlr%2BYzcSDqclxF3wQHgJfhzjKObLD1x%2BAi7CUwrvCDM4of%2FrDDZ9GMybDzx%2BAjt8JgMfHn45uoYytFY%2BRIW7PzFX87ZoR1VwFNI%2FuCPiOskZNYbrRTs943NbkJBWuTfJV4tPnfoHdIsxeBM7vS%2BTeeTXgUERBiYHXglmmVFpeVF1bcRVyiQM6IGyEAbTxGyCgIs5GEKNXRs7wwqwtcZF3xWg0XziY1neaF23KFeUQL6V2QiTYTmi3ECxcMPj25gUCcxdT7jjbs88rXz%2Bbj2y8tE6l5yEGvUc%2BQasNVtrOFOHciI6W2NDRGViagAwEgmHe80Qwy3zk5ytq7kldu%2BvKVMG%2BW9JyI2klfkUqIYw2ui2wxjCc56RJtk0lPtTpN43hMtxnmlXMKCzy5LSHH1T83rcxncyCse%2FXGuWMzDToJvSBjqkAcFTHjur0hvyiY%2FrCqOmWHSV7GRcerp4XCdpW%2BcTFEIrn557H8fkdWqkOcZ2GnH1Wh3TEhnO9skoYqurerRSFFAChi4aDVgSdtYFkQCry2Pjz%2Fiwypf4BzuaHfRwjL5koZYGka38BH79kfMeJw%2BGNB12y%2FgxMKRETobg%2BY41c2r6LU%2FVcGx%2B1XWUMU7HWXcE7Gx5lXaONbSEqaP1GPFNDQgUi7A9&X-Amz-Signature=d0a0fd605ae6473ab30a1d44ad63ecca8bd518036080a496a65b419e743a9d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

