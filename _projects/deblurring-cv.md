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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPWFGFIE%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T205836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZrPd5DCb2GWjdZ6YLX4XSA%2FwkFQ9xD1X2a61b3uvcgIhANv6nWu2brGrvCmBAgXfYTa%2FD8serjWckKm0jBvIpQ8DKv8DCFUQABoMNjM3NDIzMTgzODA1IgyMxsNP7mTAb0cYjewq3ANv8%2B4R3QtfSo6PpNEopmLLHqzZEHuCI34cnQ1IqjXNpADzPIeGeHimWtehGk8t7BXWp6SCpPM2MHtwJN%2BZsebwtDSDBpGuk2rdURU5i8xnp7otghntdIlu9ihtbyGeRGevKnrr2TqLIIShMiBSQg61UAbXqRCjv9k7zLvx6TH2MRJsHaMg1vp0Xkvi8j1vFPw517%2FdtxzvL41UmI%2F0sJGBJAW9PsTQGF%2F3TqLCx2y2Sh4M336lN58QlLymR9KAODyGm5lhENFMmtEoBcjL7kbw6t%2F8pQhgIt5xsJsrYmvCXNS9b7WDvQeUvZGy9fXW%2Bk%2FKVjRrSWMzLc0b4MpdrzU3ZVc5aeM11alTbfLxOKP19F7ABKUUBdvBiB1rl6pIoGxhUAa8XWRZzOKaJ4l8qP2oL2FmOddTwhPbI4Pt44sXH5hP9FI1piiB3XutJhB6JOCXVtgk6BJns9kGFg7nKT2IfuByVGOHLB01KacElynNc%2FbYopj9iDnpS621Vn1eCkdvnGRAunH7QXi27LGkgdmdlcNcgt7VKuoKbiMcIBIgyTYLsDEf9BfGHjCPADJFTxGiuyCz7wGTE6e%2FMzrfl78uO4d2KlR7pU77GrFarTFNwrECNJc9uTVs8gfwRTCG7p7TBjqkAdMnHR%2B52pYvsk4X1M9jtnoxpfNf6UJjOzk3QM%2BxTHPmYJouQA9Tx8Rd7pf9TnLqVAgZYd6T5WptgrRzNKZ%2FmJ%2FJJAhw6z4t6%2B9Xz6tSiovutjzqgAjhAjzHcIKFL7mfmI16EjP0dytxG3H7tIki31%2FxlJcYRjXteaDq0gXX6%2B4Jop3OsKsWzIOnMN0RJBoTA1scqP0Qp%2FR2tCNXRVDRvCq3u0eL&X-Amz-Signature=99e182b2763ff2e489bd121a790538d337fd5b97f213e7f41c0142c02243542b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

