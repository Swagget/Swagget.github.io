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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJA6O2N%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T102503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FpQJg3Bg7p4qDL4FEUQ3OuZM5Z9bikX%2Bgli0YizUl%2FAiBbRdA5StDtgRPKM3Y%2Fu3hP%2BuuuN1Dln21K66PVgR%2BOSyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMc3Vo6XivVDQ5Z45GKtwDLBmHjIaTX4HKQ834%2Bayza6N2KRCfOopMqffcDJAtZQwWdyTbqi5PjG9%2BCbOTkbrn1Wa68gvWOLWnXLNgMVcygUjvBQ%2FDwJIH1Bhi1j0ZDN24eL46otQe4t%2BtK2KDa3QkhjNm8HkhvBe2%2BKpMujUfiMwioRA3sxMNjHc9KHhZTBpjdm5rUb%2Bh5aEnN%2FBfsDkl%2BbhJnKRItjFHuzL5Ixa5XqRTNe2TuE2ETeDvsU5vGjMEWTD0III0j9IMnvTDQDYPbORxCWo4RNRWjGCMK2urY5IBo7y%2FhznmD1eveIWB6MXuZoGFDGAQrwK7WnxDiGL8AIV13MKdCxwwfNRRfvSl%2Fw91UT9oAW3SVLJe6%2FUT5L%2F7xhPcUBi%2Blb7bCyDdLb2e8qtd4t1RjVsgjOPM0BVynDNK43Mg67PA%2BFu0A0TGIsLd7KLo9GSRZx9H7KH3SL2fUrnsb5RKcfzHSvFyn2S1Hy%2BAiG%2BZokffRkQhGAsWOZmTskDRpUvLza4k2bwULFmCW8d3V2Dzs%2FVQ4Ug2atFc3grLjU27%2FFF0KztFbcf4zfDUGNp8KM4hhSg0jVDDPtFbUggiQdBlf8j2nZw3x3iaNJOA5WTwJgd3N0vsgcOHzsjOvAIJKqrruEBKYEQwoJCn0wY6pgEEciaB9ZjOCatbjxF1mL%2FFXsWea4ed6r4hnVEpy7BpCX%2FbSRwksI1H2AY2BeUNj6OI%2BhFc8Ep%2BU943U8ILOy4fZshk7sVM%2FBPfVnaUDjkf24wrSENvAogBqbz8UOrhQ%2FfAaYuPJ2N%2BJ1gZ6BZKFayaQBBbVURMcqsIHqH%2BqxZMLLCQJ3HJxkNBW%2Fh2Tlj22n3PrG8m4vw7DGzorrDgqX1VKQmYehx6&X-Amz-Signature=f818f77a76dc1f7961732dff751883ca6a6a6670debd11a297b4e3d515ae5e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

