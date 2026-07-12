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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQDQ7KN%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T234006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAiVAAOX8rhWU8DWlhUJGMJCA2SIXG6wespKMF%2FhPvqYAiEAh6zRPbZhSdvsmczI%2BUYW8EgxexJ%2BxyOLeV5usoBcNhcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVhR65Sphlx%2FzX33SrcA92r7Atf%2BQwAf1rSts%2F%2FBUVnOC%2BbMH87sSHhNoyg6XGKZ0E1L%2BSKpzoZOTi61gZx6nNHA8wj%2FbSdzRS1A9hLvGluM5MAW0HOM2CgNekas6%2BJNkyjn0FsrJ4G1SmoeJVl7uZoB94iPLJprBY0nDZlJDtvBXgz0mqNW7pBtWH9qO4Je4Mlt52R3mKKCDH9eVx7UZFXIzbR37P4RQsXGWc%2FY69OfLgBgHH7SQcRpPBPOZTDye3%2B79tyiZ2%2Fnfynu8B88%2B4yo0MD15L1y5eH7Od8%2FLleW5nQ8oSxOPjGD4W%2F2TTCsvKVxFdrR3ngs%2F%2F1mrzlAGXhf0Oo9bPAcbOZJV%2Fc7fMIw1oW84psjhQsU4c%2BZJfScaT1pDbNCTMq6RefUD1SR%2Bz8lRbSwvJXyo4gm4XlpvXmfT2xOCzSU3LI7Co7PvcumEwlYHw90LUA4xADd5c5VsDMLo6iuRlHkSlZExBgmAbtTA8eVjW8AqPDQzIAg8Sett1p0Ifcexad%2B26B9mWgJ9Qr8pOyMAiH10%2B69whxbmyY7GkZYXV4lk0YuGMkvZBM22AYrdeAMe1wK1xbfWoX51exP6H282%2FWhhpbZFKmwFPr9nE%2FaBSb%2FUEWfRoy%2BxavSMRqvDOgtKlKL9DdMMi40NIGOqUBNGSVaRmM2UbuUv2V%2FL8nAWpM%2BnrCgWZOrqOo7MlWuDJoOwDL1gCnOG7SYYhFiOHxRa2Dc7LCXUOvkXFrAMWCJge3Qel85LEQVriZqWTDoCAAUkQPcYIxNLBL30IR1rgOLjaCWcfppXSUDK%2FiwqRzgrpNBPPDy3MSwpSYj%2BJ5s55ahLelvc55slZEJiDQoaSzJg50R2t%2Fd2ODzwwjVuuvRNm4DCgD&X-Amz-Signature=9f0f104a2c0193b4624aeedc8fc9e3ecbb6ab9abd6af102a2bc7e80b70397824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

