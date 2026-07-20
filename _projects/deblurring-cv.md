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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKG3WM5T%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T113237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoRioubfICbwr9geBllzBA0DjcS0uAzpDKDLVikRSfwgIgG6hO9WSu1fQvUzga4xfyav2QfH9sD%2B8GRH1U4cTJDo4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzKXQPKqEH8G6SskyrcAwH%2FZEHJKJZrKPhjw%2FbmDF3cMpyDfPg1X46rkot0WxZ0d3SpHlL5wbZgJbWevPt7YrHbD9kk1yLX4AlIYp7krJDKg6iqOgk5x9uv%2FlwISE11VPBMRYcICuXQcit%2FDEBLXLpt4QX6MQcpHYTap6SxgJqB%2BJ80N8DuuB4HWnED%2FZHL3nJSj4N1m1Yf8dOBeFdwBfbPJpoYNlQDLdXVgHbFTmA16qsHo%2FscJDQ008MVv9QnJsPvKUrq3KG6Tml26OZ53tk15TQrpWTdIz8QQHf%2FHLXGIno7dmrkmTVtlcd%2FNEgR6au9oleXRvOw%2B9PlNpIQCPV5H7%2BOMV6DPVIPD2eMwSggxWK7nZekNzEcnh%2FaiAYcpKuqC3uKaPv2XLR9w53rPsU3hu3B1eyA3XNce77GVME5L%2Bv9aK5k%2BgWuTnSS91ewKfvc8eH%2FW71wKaWgPqAolOFJx4c3%2B8yI9PSRSzRxtglGRE%2FVmKa6xixfVc%2BEB3QOQiEReXbjQi5TKE%2F06plqZI4bMszTCCfTe8j7IgRG%2FPE9ux%2FNSSTmOuTxS%2BS4M2FFMIaJXFYbqBar7mpeXkkDL9jZx7uHkliwVqmMEfNpEVzfh3TjTTszCocZA2CK8%2BdoBFWZXDoqcf7KmM07MJv999IGOqUBWXUz7FYUoQMHFGCxPHvM7xOCdEdE98io%2FdNYqGHPOXXf%2ByVbo65UBdA1O1wEMYfGdRObQto20dz5t2ZXUOxz9hNrZ%2B1gDQci051hoDJzqPDGhDk%2BxQ%2FeR6771spBi2LkQrmF9O82wp5tGdCCLaMqySDB28NwXBMNLfJtRGdY3Er%2F2VQrrrViiUFZFfol5lNRXb3xbV%2BDjl90Jw1dSMv9PvV9v%2BkD&X-Amz-Signature=3658bff614a1101c673aa1baf8a798cb07741c9197e1c4aec97ff6213bc8a62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

