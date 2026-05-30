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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DN6HMDQ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T185520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB36WBq8C01LLUvBsamGFFxC2rPJxS5vK0L19x9YouPAAiEAz31jnhOhkQkfr5ODWpzwQfuH8ngV%2FyMa3Y%2BHKpZcG0UqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWzZ7Wry3K7AlSXWircA%2Bi%2FuVSvbTX7no8kl7fqStFQ7eDFAW%2BYIFRVJCs%2FFObmqNbi8HFbjYYgS6ECGh0Ie7h%2FXwmO2Vj5lSDX22XpoX9MOYtAa32fFyGS2v%2FPWjxa4JNyfhKA8jETD8tbAq4WM58nfrm1Sm3GtupCqn6gpE%2B%2FAMhubo8Du1s2BUOtkEslXYI5SnV43IYJeVCEnZYQ%2FhrnavZcuoSSaAE80sxNxbnbI6YwMeLe07B6hyuJ4SM2z0ucOTXhn4ny2yEc7ODJOu019FZixbV%2BnMxL%2FXb5qwvizw1uf73v8vl7nHftB5mQI050h2DWaWObmFbZ4m6bt5HWLuMUkMiE20cfGYDCZzsjfOp9yUHByHlML7HamlNC5oQfbU%2FooOFDTpEnCbwA73%2FYEHDVUgnb%2BPZshs%2FWI%2FMBfM%2Bh8JhLY34IZ1lDPwo0UQhfpiYhFUuofChfvLnLO4DjQScOwVla48aamrYXzKO6OzXan8PxTcjJn5CN3jjAqe%2BJRhqwGLk5NlspF8StDsQBplEuDtNbNheMLbN89J3q2e25eg0KFl83AcdcZBxTHoRhLQNGsTbCbPcRfIbSzbcy4XBVORX38ji7fL78B1yh8bgqtx5tM4gWCuWwaMR3Lc%2Bclu7Goq3i%2BpsCMKbB7NAGOqUBU6db8v95xfXPyCTJx1JlUkvB53wYyiYOkHxTFFxAZ%2FogT%2FYa4BiMxamJ0rpzzb3KvDgeTJDEOE2JDzMymDXnN79sguG6rVNhJn67tgtzHNNm7QhLP0XCtPQVg1P9tXcuGRvXoBlKwCqHMuDcnIaH1eVip6d3VosZTKJV37n%2BWeS1m64%2F3PeKbZBdLX2AZ27OCek1fcmXHZcN4PVdgRcr8YbnssOp&X-Amz-Signature=3cb7f1b3bc673a4f756093605c6e7b2e92a4563b07f4b32699ec57f1fc0db9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

