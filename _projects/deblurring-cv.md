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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWYTGR2Q%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T112322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEBsqmgjVOr5UP21sqtqw4LNYKlRKNHVI5hGnPHoSTtqAiEApFkVKtngW3lwZDH7py5FjekQiWyhQK%2BrEPAY0QJ8wc4q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDJ3fn03arFAAu9W49yrcA3A8zqwQuFkGG6%2BEBJbM%2BygIDWUwfJbYGYIi%2FFzbH%2FElaHhR08bjBWpK2no7bBs5OiWvcUte5QOsYO3Nd3xutnivUbH6I2dEI76lE%2FY21LVWgOuyGnIyWHlj0DTUixYRnfmkDC8KrxTQ9zBuaQe5PxT0ZSsLoFwvn%2B6ZNWWdYCnyH875fMcGQVk1ZB6g5N%2FuG77vfxAnV5cqLvOGowqYLb00pv6qPuUzTvFg94v3Egcu02Dc3egqCOrZhEoACuBt7RlUe0GgwYlExQMqoZFNtAMEINg%2Fcs395FHMM4snFxoJ4Na137KjsyFM0papQLzNxwy1ghuCWjE1%2BPAXOWeWjQrj1qzbiqsswnPJvHxZVJguDBvlgq3igND%2BOKM7hEkrv80vS3KBmukhrX%2B%2Fl0PtuMq2Rbtb%2FT4lr6sdOkwPoaEfMRzKxMRJnrFYm%2FJM4Fyr%2B737KHcHaZ%2BQhxIuwddDuwzExvXacoaIKj9tq3O%2B%2FM0RkBxhT3Exaanq1nxDf4vUZ8s%2BoFIJtWZsJmO%2BU7XeX40W3tTEk60mAYQxn1f2UIiqr9XD2ZEOrHqneLiuKHqKHIoIj%2FMwciy2%2FPkLdJzy0KstS26%2B9DNzC2tq%2FEf%2FrWkOcriuoHdXtjsu4E7ZMOGmntIGOqUB2tcLnfNinbc%2FevUaa18h424CgcSgNZqjrLUJusdJ8gKwtGZTEO8R3jglfqhcMRPSFfskRRncXWltn0r1KVOdeMkz3jf1kelTGeDhm6zMO8ASxJn0ul1X8eG33yJSG7vHKIrnlQ0O6OKv7VNhfIaIskOySxI6ItzIrvPVVEkbqXdsspgjPIHSBOqPo%2Bo2otoWTYyFo%2BqxCmJAgE8GFAcgu8VXuDPh&X-Amz-Signature=83f0140e9e7b602081b7235ebf74dad8745618beb9721bc3b825dc737c77100d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

