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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWFY4WZR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T215604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi%2BIkJ%2BZIFs9lTB78LdNX9yV%2BmKn4WKGSkfbfaj0cxuAiEAwHTYr3fn9inSSC32G%2Fc4ty3qGagRN2n0KqOgmGL5kbwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1ihSLfGPbWgglxWyrcAyapo26fnMlsGOjCozCXqkQyLK0WSFbjr8N%2FQ9%2B9H08eOmcKN%2FsYVlipf56fKCZDPCqL5ELH7BOL0o5UASJxNlJlIn4AnShxLUfk%2B1ojTf9Q4QPjX05THOXMyFhzTTa%2BVlAi5nqBu5MaRiR%2Fvz67vo7t3NBws4%2BrVJ7S8edHwjTjOYKYg1G3cTp7znmZuyAVVu%2FDcWclGMNh2NioIFlnE6SNk8MQxJAGycgor%2BoOIqFWaOfdUqadYj6ONMxCUwqwT8C%2FA6K1MOjR8gcg7AYwolQbVWlxn79Clhk0usOh99cQJb5CQyjhk%2B310WYyZqV%2FKBeEjut977STYL0L3P3GEAE9pW%2FNXDJyUjdsIcPC53T9thtXtggX3EKPnbodbxJHrYEVK2FfJhFUb2h89wNAwPNFV69gZ6SDbxiUEql%2BXGAYCLzhRBggHsjgeVHMWDYSY8mkExVQsW13KKWJRsNvogVOAgWUILXmvXeBXfwvXAxsm1OaZqaSfMU4HMXZ8qqRrLAUlmDI8F%2BwsPsG6tTvvWTOnfv1b3Wtu7OfaNlFjv24qMNqegwGPA9Dj%2Fb8eOKHnDKw7OosGwgoiA%2BrL94oqV6ZeT4N7s04mJ0%2FVuhXZIvjP3i7z20ZZoPUGn9nMKeBr9MGOqUBEGNMDqJzvCUBH21Tr4UGkgkzm%2B9hpHsLvd0sDpVxnzivlbfSYl5YD87W7SNu1Fed9XUVMFvZcpx2f%2FxWLrubTMlgik9Wwxyirxl%2Fi9KJjWFZMCoFA33y4%2FMzfRDcWenTdmxqn4sgaJC1zIcEe%2BF2pTo5df02q27WcGryOkf9tbzZ6zAyuFN%2BdCuP3bz8K4mtytbpCJ%2B7niLtN%2BEF5TxaPU0U4I1I&X-Amz-Signature=9f66f5672bdf042d70a9853d8b3c93c8a61b09554f332e7bf7103da6f366debd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

