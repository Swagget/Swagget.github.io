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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFXC6TX%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T050729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzviN2xNd%2Bsmd0E3iPXJVUAlk98IzS5z90A0xrNSO4LAiEAyk5vy09EBANRT3PWqaUamifkH5D99deoZRO0IHtirYMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG1jkmcSmCn9CjyeOCrcA5ARZlRUj32QbWQ6v9Kobc8DXFu0p0PlRwqW71XSzEDV46w6cAeZiQcn6eRPM2jxjoQH4nscaVIWuqwznGa%2FnnQk3ru7oV2J0ZzRvLCzM2uyQENus8L%2FmSa00aR4uWcajxGd6bivgp6pQJ6ULII4log75Qtcw2uoAp7Z8BSmd1Yq2eh%2Fzpd9lJBLik5VmIsFNa4USskAUU%2B97ZcVXQ7PkkL6sV5W%2BvBsW7frBTLPNIKAzy%2FUfIKOUKS1XmAefqU5GzS5MdCb4IEsg0ZqAzsR%2FAPk6INR1lV2TEpD57JQ7NoAryzBHA1S2BDUXzBTknjerTurgYOXDOVIwiw756eEC3%2Btuid6myEpvGTIuC%2Ba8WI7sbuJnPo03WxvQBhgOuZPm5jpNhxUTSr0NpshJ85GQ2%2Bx50UgIqXjaN0EHIlNvyhWArqdOL78yFCjnnLPiqMkfEheqTm16nlli3Ji2sHuVlBe5MhILoitQf2d1SaPyfVcO2JHsciM%2BHaOtGAymayeUw1E9uC4Fczp1VK5ypDHYChJRWC3t1J9WMZjQ2NrvcvoYXoJBLkp9O87aNOQHhdi01Ny5BHfqzYbvYQqtM1K8r5sLM67LZ%2BpHex0f7E2Wog1qFrKVU3sZVLnNVs2ML2qidEGOqUBcTZEUmvLd2brw7D%2FkYigSr%2BhJftFuZp6%2BhMKBWMzVauuinGYIOAMaRb6TVwEzLp1kdd%2FC3E2pIwW3qToEYQ2BNt9XcsaSjg5diKx0nCmCgYKM%2FGCCgtZ1w2Wcy5%2F%2FQxixLKYfCcLiBOktppcm8xHWxecxwkuW86sQXCxv%2Fz%2FuJ24SAkYVtqWGUZpoLyh9QOcSCYvY5Y%2F7APXof9orEB8Dq4GTXVv&X-Amz-Signature=bbb9fa1cbb1342389a78f7845a5f02d2437d97da9caa3c2785500a066ec38b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

