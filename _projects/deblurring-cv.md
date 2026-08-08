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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJ2MO6%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T101828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmZzOaJTEMzzXbVgH5ZF9dvzi891O6IKEKHt%2FgxM6%2FnAiEAjUmM%2BcTo10mfdmDlET07IQesPJ1XI7XcgDVyAtB0Yf4q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHT8j6HyIWlu1b8EZCrcAxqHYZSBFBtFcErkDO8WJO37tIS0Gw2D4lLSw0%2FC%2BkEhY7ruTsQJOp%2BgQ4B7IXminIF%2FXAI8U1ofrlZ279HwE7OJXYcdG%2F6TgqxpNhd2276gejFQVdIyH1t9%2B8VpflIxrPsfufGz8QcyBXDksZmFPHzmbDHb0l5sF2xljCdDTE%2FWX9wFmLII94jO1%2Fzg5Ta7PBNCgl09c7%2BuKzghBNvqp2u5kOwRQ8UNNX2ieuIiZ7S%2BWwx%2F8%2BU9ubyTWh10xO23GTR46jXM23HE%2BfZ1vncAO%2BsGIVuEUkCJwqKzcgjtqYRYQXoRw%2FSgHNsKrp%2BuG9y3qgg967hIf%2FKLZqiZqDQfjPnBka4FSHSlIp1LKnaMA04Xy2sBgIV%2BMJjneb8CFSMGwOHQsjGSObGF3DZd5kFHiIWz0Mx6kRVtc4pEDGaGv2FTN1N8FjgzO88qdzPc5f85gofPkOk6F5EpNu8xSh1bZtW9x%2F93IEkuypwVfw3fcazji5rfWmRJezXjA%2Fe8FQFrQj3vlp8Zb2KyfdZKhGaJu88QTGUqtKJRrQ8jJor1VQnPOd8gjqWS%2FOtVwJwocamjojYo2mMBqNiVnZ%2FXPVORYAh36BKAh8PR4MicOGQxQn5jh0dz0pzmgeYiS2roMO%2FU29MGOqUBPWFyz4aIpb29xjbk%2BYs0Vv95Y1EFbbQKS7HEKcFqpdBP42aQwv3Lln7HdJ5CePeqCXXIJbXs0vYJpNk9MdE3p%2F5JRRtKEfpV1p2BmHWPUyVTQtDl5xH1Hq%2B5mms5drDS2ycObK1YRvlDtaMyXmu1zdLbdEpVmDlw8KKTrmS10pjzfHweLOn%2FI0zHn6MclsHBAWahBgADOZbvaJcOkPuk1nDaupXz&X-Amz-Signature=09d5e648ba131fe7d17ede9ed80d2111241f76e7466716dad890575b89316f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

