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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34FES32%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T221341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT%2BrgqI9kqSDHwA3rS%2FhMsbSADjLWmHwf3382mQOZEiAiEAqBBIZHLrn%2F4wo9ru%2BaSTLykeSM25LhZyI1BqW0hSXcUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBc9ErD4jbE5mIu4SrcA%2BRt1TUSE8FENriEv36dUxmEwhkghbseLLG%2B1%2BhuhQII%2BHTx2mUdrdxxI5V6LgGFD2WX2rgwlqmRjzOZCDVy2FvVIN89inplpRswRNMwO70aZ7P93s%2FA6Yh562Y1bIDT98Sm17exb4MypOga3fRxTg7ROAu%2BHgJDo5v0Yz5Gq1Y%2FxU4toYhlmVKyTyR%2B72COGgMx0zA7nqEqkExo%2F3528ZqAI%2BNiVQSTWZ7PhWs0yJVi4pCoZ96MbCYhUW84FHxlA8Fw4vjEAo5HaAFHMaSkvRd010nd%2BDfRPuZIqC1mixPJY6OwPD9a6zozxLsZhJ2Y3Z53GrKalZyfGrkKSuAC1ZPGIzO8kk9wS9%2Bv4Oma6nMImaxIfCJh8zsj3iL8iNcVF4OeViqDIM60gKKEoD3uNUaQhnPKk%2FDFSuAO08wdNCjjBkZrR%2F2pXVGI%2B8%2BkEcPtTKJTtUrQPP%2FJuJoSkLU6SthqqRh49PAd4DIyvCOoJ1npXBpUDZbHpWVVbAT7%2FlV0fT%2BzDTGEnVjsQGmEqy%2FWAyIJkv9RQL3xoM%2BCBdkTd%2FRZlI8m5%2B4Kh7jRpRYE6geiL0wH90gmHtnhqQq4Q73DzMCoRP7%2FC3Jnc3o9JJO3A4xPWszYUWV1tBpk3x5%2FMMHyndQGOqUBPBYhD9tT6ZHnedGXyTcHloeh%2FXlhuh4sYA0nE%2FyDFqXIWph42AivDdkHpX4psvKSs8fHkjsG6FUuNecc4LXkHhcpEl2FeHgzbAePWvNSgSB1Nkv4A9oystQDyWk4skVtEh5BdqaRVZt4ZQCeyv9b%2BkwWF0sLEpKcHoM%2Ftb3LMibd1c69J98Yk7bqC4KgNHklycMFO21x0kpbk5F0kgm7PYlzFd8F&X-Amz-Signature=4bb0ca14ce9af7f0d7a8a277cbc6f50466ddbac9ce34a742be9e98f0e6746336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

