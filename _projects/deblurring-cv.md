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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQWUL6E%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUDO%2BuUJQ8NGcY3uurQTwl%2BSykdE8kprmVssdwKS%2FkKAiAvQBclovVAIjcVtlib5BKMnyugGlsRgZhGrt6qo3xDsCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgP3mV0aMv%2B6Blgv%2FKtwDNVKjYqE3UE%2FXadiBBUe7TL8AfelIpKZorlDcx51pX2y0il4UCSn%2BUSqHTTsVjmPQRLLIvdRF9XemUlUluDKcKAYuukyXTUp2cxXedbjszxH2HstOMh79IxoLUundhPeZ1DbtjQUgFtcoaf3dIE6d5bhZ4cuT%2By6ql3qINZf0ZUrZQhXXWsdIQmVHtHfc3%2FNG5a7Y%2BWGSYOv%2F9xmEVO3bAOEgAdi2GT179Isp6ChLRqNxAAuOXL0zDJOPSTgEdZGbm0lsWlM8kE2O8VwErM84ndLzDJdKu9MA93bvrzf48mPF1C%2FWyChJsCQm0cVLtnY50SusXVoy5Ve4WPA%2FOo9R06VpoOhuS66FDME9oOR4ktHTxYyeR4e%2BS8kCH1pkVNWKbaE95F0GOveoBjftlGAlD490RqHb0FpZ0y4TRQFBioUZIE%2FmJ1VFQoKw%2FmYTEevOtp9n5hwkhW0wxYKsLyZXGFcwtGoPE72fIp6KTrPD31zZV24u3jkUGaBO58nPaQzLBJZHnBuuoEXTT9HycNcL1nVaep4irYOx%2FunJft4CBVXteptXRg0XboGs6HX8C8IRlx4pSNMCkMZ0bpWVoOuNTCadQXwR%2B%2FyAQ0oFRjxlUM%2FEvABrzo2l%2BLcvbUgw7dTe0wY6pgG3QA5t2lX4Arl81xnPA71A9rEH8VyN2B1g9q%2BtIQEGjKxC1xOfs0P5%2BIB0Iaxipm6hbq6%2Bn7%2F%2BNiri%2BLHwhgz5X2XQ1WK%2FJ6W%2FZ0V7PAJqMP0yBn3wT%2BpruTY3vdnOZiaq5%2ByW7N1keEHb8yrLQXdR%2FLIC%2FGqSwGC%2F7%2BFafx0RP%2BRBJdL6wlxZR%2B2xE90i1d2J%2FUXO7pRLtwkPDtWJqVwrcf3WT0tE&X-Amz-Signature=2044584b3a1418e7f1b49ab0c5d8e2ce7990589862b88082dea6e3b14e02ade3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

