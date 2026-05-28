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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FGHSRM%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T173023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtfpatVggYdmgauP7eyVJS9PsmlvOKURFmTPVc8BL%2FzQIgfi1SOUcctq3sbPJRcwsudaM0l1yTww6RYgmV%2BHlnwMMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2ByecXxVx5uG9jJTSrcA2Leck7XwLrAPADTtwWZWMonOKiHVJ9pA5gLdZrqZUlplh9k%2B1KS%2BNI7iU6o4rx7i25Bt89DmJKNrOpT2uyGtDsitlmLOgvkrQEngm406l4pcmElylea06zh94CdIMvgKyWa1xWp5fKpqVRD1K1bq79EheMTN9GuN52B%2BkR%2BfT4tSkCAXJ0C86lNK261acW4IrmydHokUyTkjvjEaZA4KJDuzbb0RZcMfJH%2BukXgaL7YkoXfsI0Cx%2BhNXQjJGejJc1o6QbbHEWYXbEEEFC4IIdYVPfpH3lu4NqK3rbExpZclqXMw9hiBEjX0jcgKuNmFB3w17FUfPcaP1U7D7nuhwSZUyFiDjJo1c5rw062hjRLquiZe5bqzJDR4WqVmvW086snRxdfaLtMquMvKxI3jJMYj%2FEPqJWKWOvnoDMg37NQ%2FiinBOjLxqBJRxEOxx%2B2PrVd1ZQm%2FI2HXROYyYYHqxDg66xrrphB%2FsRc1Ey7%2FwLrfqeDa%2FGWvVtne%2BkqrN5JawYq8mutuNLuEefc5cFOrAqnGBgCiMKGNfdaeaBiSWmRu6YGII34qx3VWlU5XfMmD9ub7%2FCB03un7akDm58fw4JdJOWRA4V2DrK4TYSN1UHC%2FvcnWs1R6OezEyzmuMIji4dAGOqUBTMp7OuJiMvtHoYHv64hyAlLJbb9sFL5%2FYnRmIsUya2gY83FJCWHiNFC2SR9a%2FpPvzFLN1FEmjF9LgJjz9a%2Fqs4zUf6hShNjsqONE9cFs7201IGQ2OafpBoEj5QPrKLWLMXeP3gy9XoBnB8b4n3yfpJOQQygK8Au%2FE%2BdTV%2BzVdlhOj2zehdUz4BqcTRCW9SSJwXrEw%2B3QOdfrEMXfs2taiWOHxqiF&X-Amz-Signature=35a0397854204473058d591431556e55380e9a15f78e59e5a3c793e0c60f1eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

