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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZCTEPO%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T124704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO8AvkTow2PCmKQn4NImTj0%2FxXwJqYAvG8zOu1VzkBUAIgVafm6rSpZKhfb0IYAMq1weiQI29WvZBalnsxLiZ2K%2Fcq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMjbSNpL7yzcdXWfayrcA3H8XVIUBQhEsg%2FvJDmZmcirPWwCgEx99SjNd1AZKoQfyiWaPQWDE1LB6WUJPgufK2MjAfEqu8fLVlvL%2F45dRYA6Axl9juik%2BtN56jxBu76Va0Qbl2JExiavVHzSDbHSsLV93P0ds8UVh4%2BcwDATAjJrDq9E4JAfFYGEfbNvyHKpxrGx6AqfExzIfD9caF1xT5aTX9g%2FRvS9KxlgNjLdK87nC5eC5u7Ec7KF7Qc4ImUhKzvEdGZhyiNytSf1z6vvXRvPNBLLKyJrJdQpp9bcDlYHf13QOl01pEr%2F4kUoJod5j4roXp7%2ByDqWCArbT7C%2B0cfPSQGArQ7FxFeV7BRQFbzcaazg%2FzFLThx9eyeoDjeguqPcqFnLJvHS6pJSz%2FAkIcsaT11nPF18mkIu9fRQRTbWzD1sHJakgI5jFIWG7q7uRWb0LOPdhaef092ifNH0JCFU6ttcCkQx%2B%2FivVJAMhfm1htSYkYI%2BjSw9120MKfTYPpcGSsHU3O9npP3nN92pE4r11QlpSouWld8UpLunaiN3M2UpRe34Tc0ENSNnF05fw1x1pmPpXDVzDPpS7gGwpCyJ83yeuvMC9uM8gbHRZGrJv9JEt86kONIiJpyY8cS49wiq9UlaRZopSuxPMI%2BandMGOqUBZyf9Nk2pdtNvZftaAyjLWigzl%2B5fHoYbyq3QBmf4pFU%2BKQq3%2BIZfuA1qpL0O1UfQXNNE7HcgQTdI7o0842fcjZxyDorp8g5cCMWKV6v2Wg8C0OhyV6qP1a3QLmgFHztjkiph3hz53dI%2BArHp5p9i7ULzkTXSDsk6EuvZCXkYYWJKnwS0k5VaiJQfwKjl7nDB27hjsKJCa1nbDTNOY%2Bi07RQVZgHk&X-Amz-Signature=00bcbbf16b09e8ba21baab7833393852be55f4deed686f572df0adff1347d4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

