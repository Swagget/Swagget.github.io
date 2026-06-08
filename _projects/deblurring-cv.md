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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZALVCU5%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T023628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYzXFoe5s4ZGEV4q%2Fo7oEx1cD025orQmjRPs0paHHpbAiEA%2BIs1zBZttcyH%2FTsLvWnUiZi5A2OXbwAIcstljHj7MVAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuWP6tVQIfJVyFWHSrcA5HKFciNmEluV12EFpNEzfKKeh751w6BgrfAHMDRhOMrTuGSrKVJRIAPK5h6H6frn9WNXAtY%2BFxpYy94u8rcbxS4F6SsRCYVL1NZGihJESpr1B%2B%2FpqkqRRVKkckRzgCoHmD%2B%2Bc7cPq3lYJXE7pP7V1%2B3NV5nBeORNXPXC1yfg0R026IOupcsURWbx1bxwDudVfeMnJbmFIf6GsRsvskyBTK%2BtX3cb5Ri0WhhVbLP7ukzF1FVZ%2Fmyr8IWzjmIFFhmiM61SnrfiSzfZPPbnpuOl8Q%2B4GzstlRTEhLgIxplTch3cyh2soMbGHDsPPmOlR%2FLgU5AdfKKNDbEpzlUcR%2Fo1n9JsIPfD0rTkfELQbWPXg4Pm4yDDo8Y325KylR8We%2B%2FcF5pwtz6MKItmrosYhzZ6YCbF1yz%2FfLx7%2BXW1ZiP3AurRmPz5zgdT48zv06GxN%2BJuP7K6Tb%2F0717gyZOhacrneJ61WJvkXF2tIUJpjMNnMjBk7F%2BkMk9HTJsl454%2B%2BARTBqfHdcZEjyzZThAZN%2FXIwKmmBeluRmqaYEijn86vsOYDX9OAmIxH4Y%2FLcZUNyKGO6hywANz0yGFz8cusChr2NPsrciP7tj3aVvbGDDCRJz9eNvXo%2FyNYEfjWYGnMJ6kmNEGOqUBAsjmYItgxzm1J1x%2BjwHLLh%2BAS7gXeC%2BPte9KLnNZzx57CbNbPOc8xRQ2tEA1R0ilQZsnH5qs8ZPb44sG4sONyfgcg2MGlICQ90f%2FWJYMqUZ0nVMC8y%2Bfg4Z4%2FtJQfd%2BQ7wfhuL5j2RzNKryzbgV6ZrF2AAth%2F3HZFSLv784cRBJOsnETAuA6XYungCrfnVlExxhN1dMXhJdwVy%2B2Yqk%2BknnN2gxh&X-Amz-Signature=511ecc8b17edc43c01daac7ef691e44d5bd56b874c5322226e98fb409aed7c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

