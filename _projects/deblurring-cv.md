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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHJN43A%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T161741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCn7O5K3Rl6vJmg66oRVT6epwur6Uy%2FwgNLAmH4i5RdmQIgSv8Iugv0AYGHcEROlMUIk%2BaRRvFmQObtcYsLFDOvtHEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLFu51%2FJaee65Ads0SrcA2MxVhZzjWbl8Sh8oIJX9aF3HdfvKVgfvxB4nqSEX%2FqAbIKTdgnLpHV2b2OWHw9Z%2F%2BrD5iUQAj4XGalPQkgpyS9FPFZ3M9yGaIW2Lk%2FJ7tCXdXiYg9n3Gh2SSSwSHQGzZ%2BhhAQT9Zeiou7zqo5Ddm7y4YgLeV%2BPa6i4uhux2mWZ%2BID1ZoY2EAuvvHRWTeKHigo1LwvaGnm%2BOrpWY9rwmeh8EF0shbehLN8F4dngvp3RidmAENaKhnYqVyoNsIQJ8iJa1VIoF6PjDlkuEjRSiuBDsh3xK3FLEgB3ho77xDfn0JMubPm%2B1NZgkE3AO1SgLmAob%2Fz4%2FiJUoZ6NhNCEoc0vQhu1n3Vfr5z5fSJ%2BhFtPFhGIAdFUrckRgcv0Nv1XncxmAfZPrmEVFuK7idnGgqy0rd8LBOg%2FT6uccj28DtCjmTyplni8BgbMANRmCwC4%2Bb%2FDP4iuBZ%2FG4AI%2F3kn87cuMFc5prNXoq9aafssFRGoP9gTs2Gt8%2FpvNxnReMRgoz1l9%2BlKHJV9vQxsNAqsvT5olf10%2BhCstyWJldNSR570XMeuDxKf4zHmeKWrEnhgTszZhajdlbyvGzEam4LlV8pecXkO8TIdS8qVaHFOg2XcmPw3rSYofPWD%2FTLCfTMMa76tEGOqUB4KONP8BSd12Phz3HI0RkKUIgrh1RtieJmDGRoK2Dtja7HAq%2FnJcDxOBTAKcfBkGx1v9XA1ulQ4iJVH1y8kJpjdXkxmruluXiOHRrbxslcweAOu4zWZwTbrFc%2FWuZVvgeRYzA8QaZufy7uavo4vDw5dbAcsD9VNLZuGdFb3UdokA6IqsRLkF6i6FyS7hYLQMcOGzGINHx9KtL4PslMB8c0v3vjMiD&X-Amz-Signature=738c755868252be1067786aaa1293f8f02a19d762ab7fa3b99bbed1e58a3317b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

