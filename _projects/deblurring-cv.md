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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRW2GZF7%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T201441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGr6eAJ%2B7JgTa4N7L6VSRzSaKln0VwvbL29nDORJ4OaAiEA8C5lSJ%2F%2F2kI%2FEPbmgbxug0rmw%2B0anF8kIVw%2Bry%2BNO04qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIehbCoHRxkGXZR4ircAyKy6OEWm3micCNLbx6kLfBIzbMLG2xrgyjX5D5VHW3WiqqHVO7gDCWueIfqGfGVGvYNFJffpicMZVZGdX7CFOwhgz%2BHZL0yN9YlM8aD5tvwdJtGLEjKzDUdisnWtjnxadEQHTeoWkPWmVaZ6OfuHubsBELsU6o85CDR%2BFBVG8HjCE4YdW%2FStyuod6VP7HsbJLScjyxegh2qtIVb6HNJ4byJ3390mJbd9wACFu6%2BI1Q14y6%2FdDGo6SLcMmZnz%2BPx2BhDl0BOLu8ch1y0VrbTVxVys26qEb9uur%2BKtcSX5Vc9jTHdjkoqOCaorWHPhryLc8vNoPGx1HGesbatSoBONL5GT8BKqX6h5dDDlNPPR0spALAMhZ%2B6cn8ucjfRFcgtpTOgLOaSluqvTLYutmBa%2FWwuMZyHJLwrATW0MtpH4xVGjVa9W6eGxvFlOfx37I8MCOqtzRv2xBKphED8mrwbpWp3%2FK65123dO9%2FgarViGmEefbeEwr5Znh%2FPmzDzNqwR7wLl9VR5WIgdmZPXhL9TAC8yf1rVVnU5JDz%2F15M8YVt9oMtKg8Z4GVjqpQuEpqG9vGjB9dnc%2FpWasrVI7xkkz9sTAZ7EXCwGE%2BFUxGDfPywoAsp3WjMe7w%2FjBA%2FUMPSmndQGOqUB9s90lPjcFwDtnuElK%2BHwySjH4ToMQsYC05PV9YIEqgnx1Z7y9sp7WxlNtJpnFuzuHNiVnzYGmXnzPWc0D7VtgGcjDptlZj%2B8U6zFRUW0ri0uxRYq3SKGeOogmiMddvIMUQsP1Gr8qW7E93aYXKzId3mjJe%2B5mrbmVbhRlYXVxqZRf9VoX%2FVR5avo4rzEo3m1Vauoh%2FXvEkdVMOk3PLw12PNZSKvk&X-Amz-Signature=42762af6ddb8612d1894c02030910377e7a1b92139d109ea641755100cab53f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

