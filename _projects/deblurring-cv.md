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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQ5EDN3%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T191204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJZArljoXGnUGqrLdIyJOobUlhHMJ1O%2BZY8Xn%2BuIfkuAiAZpuvAEr1xaS1WBTr3ekG1jMHY1QG3KXvGZoNKzYHdUyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBRXdBONOA4zqlfnHKtwDnC7yCj119qornOjesoGTGbNz%2BiXOULvk6ZBMduKPnRvGqmVk04pWhatdbHFEDgMFpyE4pFjF%2FOroYOAj2f60DFn%2Bq1xEX5cbEIPoPAsAW4KnnKH02LKeI4PTDC7vPjnB2Nswkh1VqwVxRm4pGDSO6YJkNDwtCdz7NsXQkdVH3gkQG3a8r551l19njimefrsK%2BzvjI40HFMXiexlSaDqnCmfLVV%2Bg9rybjXK6EiOvOL0kYOMaYinkQismxRmwUBMBcZ2mKnsm1hk%2BGJjCs5RDciMIqDkSf5IJFbqXPHNotzy4B1%2FcRl%2FFoQYfBcvHv0qPo%2FiNCxIAjKyDsI5mOZ%2FSKLK4qBGu%2F8ZgWDXmQGhIRzqEjJ4pg6g%2FyB6DTZhkax0FXhsIVfhG97hY%2BuoPSXZQti%2B%2BWz9Bcd2%2FivDmnjRbqvNOZqsUUphjjGdeOCmQOG%2B1v%2FYCNaHAo4dIceYAgbXFcnnNg9gNY8rBxz0rOQpNCNhfKXNqjyCktXAsLtU%2FGNg9bxS3cXlCWTtWn8T6xMVwbvdgppYGpGRQlkTAGHcXCwwPzXT4VdJb3T%2BS%2B%2F2LotoApmaPbMZk6gHRqSRY1%2F%2F35ME5uiegmWo6HR8sNXqpcr0NiNFqj%2BL4%2FVWileIwhvLE0gY6pgGkUQEoX%2FMdqNPUALDD597EX99v%2BK5MKogZTwJ93s%2F1b%2FS%2FUllJkNQGn2LdOm8hAt3ndFzMZarRWaSbyOSPOhhGjh2YNFgfn5t2pNQTgdNDesaE5ENcqu%2BBeM8lqB9e4htnx11xFDJn8J7KJsXpBOExBbXlxMoKT3mR0EwTHiaXo3S9EZ4JeV5ZvvOq5oh8dH3vzboOe28lSJiPE19hIIUblRI8i%2FN8&X-Amz-Signature=e0a4341fb8d193e9efe2044aaab10634478d4f9a7d3a5f890e3986b781c1d5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

