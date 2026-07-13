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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBVJARD%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T135543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQClOlK6W3S4px3wuwqfmFKliOR1uOD9AeWn0TctpUazOAIgTwoGkz40acaFOgaDKYe3KuxJM3BRPXb3IjhZHQ9wHksqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRnekVzReA7nJb7uyrcA%2BXCUjpD9e5m8a1iE72LHmLqT5BMzGte20ngWTCySvK7oLq1ESpRwv6Nu7ClVNUAvQh0VeESPDLsLKW0TwM%2Fx1I4529ztyLFs1vnI1%2FT0XLK9gw%2F7sBbd9iWvJczTfCLQv%2FrTmo45jbyJpMRrDVxkzfN1%2B8qhJOcntEhzLkW0XHW96n606Y2Jp6e29kR7sf1jmxUYRVXlF%2FF%2Fuon2rcP7PsLVg1l6GH80r6TDXmXfUeK0%2Bl2fdAALTgoG3YAqTSzR562xSmUXxxyVZcc4ShsVPUC%2BMrSx23CRZpKKXwobQfbgEgwlGDKfWAYSKXORejdadsPGb%2FkQGl%2BEfcdsFsA%2BCL6ghfYfEdnGX2j7LbdgSBFYvkg%2FNr2As%2FmOCQs0Rq4EVpmYFQPemRQbChBdF0zGLmN5GL3qHmy0kLVCn5RPkTI3Bkjt0W5bsa%2FprYm66NCTroF8OHWTn4bH98htRG8xw0GWR0CkGPtfimgPSvsUpdc%2FJNms5%2B0363t1WqbY5W1%2F5RO7BZWFobaQF1hnFJkQli392uRaXMWsW%2BeHXBGjjVn0ifeBmnUHOMXz%2Bv1a39%2FKRIFSje0ZX2SJU%2BGXHQE%2BptkUV%2BHZgm9xSX21OaA3ynbBTYgPmAB0oqbiQU3MMqz09IGOqUB9TVfYM8zIEzW2fZXCGJca1YS7Ebqt4Tpn29wFgLSEoVjus4HNtFXPmqCR%2BB%2BzbyoNVt%2FF9crbH4HxFLbvrMfgg3KQl1PSsJoOvovx%2FfSX5t9FTFUZ35Jr4xsFmZ%2BB6mDrlNN5LeQSx38qmEVCqsIKPaS6HwYKRtoZRRdvx5ACpl6oMEDPeLe1zSJe4Wcy128YrNsKqHAD1rVdbDaTUDx7faEuh4%2B&X-Amz-Signature=4b75cd9586df7a6ff2a89cd87f5aa2991dcceaadf56d18a2992bfd7628d27ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

