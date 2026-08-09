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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYEIXB6%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T102004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsiND6qq09m48cZ0xA6NHy0NwgizRyKbVEXWw13cTSKAiArF1ueF3o697eqrVrICJ4uDrQvwfIU9kq7VJW4vEDvcyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXZkdrA5ZFe%2Ft%2FjFOKtwDSEJSgyWcorAGwTZJNa44bHhnsZyGdyunOZQEP90zEt%2BG8V8Sphw8HxlhZ5zH%2BYiqM5rCFpzq3lHpmofKr1CWR9siaCp%2BxnDXzxu5cmMO%2FfhhXQDVBqcNxo4i3hVDzgMte%2BmWIxobRV4MfqgolaIGDsLn9JaNIu7GQYdhtIeK0MmJixAEgY9Y00%2F4BI8VULnBN2dNkTkz20vRh9%2BNSxmmkkkY5r1HVsEPUXxZHZz%2BJ4MBU%2BzI9kNABgPPE0Aa3jKE5fMhawT3hmQ8Q2caefim63RUPXYnvCW64n7GK9YGSv0aYcifUbiuFnMR54gj7ks%2FfLXHCadnS8rioV5Y%2B5YxG%2BTMBc7Ym%2Fcd9rpJvYSuvEkZCenS8Iv7vh6IG8rZi4EU7pU%2BtRHT%2Bbn2%2BsYdyjqaFre16J7nI9Q7YCvIVHD%2FVZaBqwWofDzAYqv0Tv6VNkbgI%2FdLBLn%2FBEBDGfpXBmc8vRDdMSpLdkhq5Bq%2FDR%2FxkFXVaAZUBSE%2FsfJUqLoZ1f7jCi0eceUiXC8jVuxJPxporDO7p8XIgWC7qgdmLwJ5qj9SWGjQ0%2BUZZ0atTkDNS7V5w02nhjhrlAWxtijm6ocJxaVeETVJsDnC%2BG%2FdFDoTy6BcmgGYgmFMmx9JQcYwsqPh0wY6pgHhifhcXgTJI77%2B6SP%2Fq7q45ZWhKkc1fNuwhA%2FttRgssy7aN9cKRg6s1eT58SWgQsW8z1ZXk9MHPrIexyiYAigD8vS0mJazGV%2Bp14g0F1HDgYm1dzVvr9OXg%2BB9g86O6aBh7sGwYrOnjQo00MpIsLSKaePWhv8eY8FzhBYd39rcQAELM6vibZm8OZMlzMhUrEChGZEp47B8Pm8Nj%2FJkZg7EZifOZ93j&X-Amz-Signature=2a1356d3d16d27390fe7586d6cd143b0aa0df5a2a1802405bef816cd398afba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

