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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDUAAPB%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T143318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9s2p1QUoQ%2BatYqkDpDvI8dlKaP8h6MBUyj%2BI493amfAIga5T8bW%2F8pDWOY2b5CN5EZyB26tn863ugAyQ2XN%2BqD0EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKHTeS7%2Bnsd8urG4CrcAyDPHL17%2FpZxg51zls2qRJayQj0vSZr9NgR7UxD46sprfeGXmASfGFUuYibT%2FGkHGglzBO%2BxrNzGqNUg%2BQaGjQiX5Zg4h2BrXvGOC%2Fq9Z%2Bhu08cMt%2F52fTD0qxQnPIYwX%2F93vKnO%2BhmpS1%2FtSngVUB0%2FWjgSSdgQkLY8METlLlPrxrnL32QJ8%2FBaehhvi2dKQD%2FKFhlg5riVbBpKxEfRn%2BKSbE9MoT6D2fn6lhGPBY2z2qro%2Bm5U%2F2jl0Q2dmVKxEFKOyVKQzLuakBdZY7gaRCnWzF9mJGa6UjjIU7jeoqxskZHL%2BL%2FJUsufUtHgnDjLmeVJsIACcBSBe4bDhO%2BPO%2BafXqjvmL%2BvdkCmYi1nxHuhewXnCXQmpl%2Bgd6S6uV9D9vQ3CYHQA%2F6ZqtdoYnKhq%2BbqbxvRYU7cgOZeLS90J0W8I4F6dxFjYCiFaH8BdfUYvG67fzZy%2F%2B3GPahFUrxSdQc%2F%2F%2FycEwwT%2FvZQs2PK%2BP3OaAcpq7dSRNTBqIglrhmEbTdmgq13QgQblvx8HPyCqWWI746FwGGHeE3XfRYn4c7%2BALudmP14OotpHw5LVJZf6TGq%2Fmtjsz5jWSBWgbNAvOnG8hfDo1ABNkEBk4Q5vEdfF4mfvf9aCOxdQHFjMKu45tAGOqUBP3Fc%2FD3NjOAoklqHulnRJ%2FwIVLoG%2BjhMrSK5Nb6Pq35DA2oGkM2hKROC3xAVEs3nVEZ5G5ELSbjdyjuAnF1ywQ5Qo0Pkm74XNUT3e0dp0Cd2Kp9XkvKmFt0gyloWWEY11SKgbO771%2BOH8RaXE8l1OQl9nDXWcW%2Bbw4%2FDyFzI8iwZD1jr0jP4xRnPJawCooalX3jVwLyP%2F9KfhOjySl4hvfSUfkCN&X-Amz-Signature=613d38d3c940a7a18f1517d2370bf0196fdccef6e80f2cab3cf3bbbb34542104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

