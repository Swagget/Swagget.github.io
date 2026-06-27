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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MJ2KPB%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T185928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICacMCuKv7iN3ZzdsggKLNpbvFjiznvgP8vLs%2Ba9kqEGAiAoRfrAPVWQ%2FJFXEmMJW0Ty1o0skpZXI4Q4Y1XarsCdByqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqjK2N2q7uMbBLN5mKtwDQJ8XAfK8meYiL5KF1YoYVu0vuZRUtseR4MrecldUCnT7vxo1E9TtL7UGHuhiHIg%2BwamzvMyRkf1Ui4ERQsDa7%2F8SuPzas8cpKTqPpEg9EsXor8YuNfYKhBvvQputlgWSs9xzyrtJVj%2BBNDSM90zsPtOSl0yUH6o4nyPQUZ5c0dfxFAGWGkduwgVCDRKE8%2FqVrjI7Vt7%2BGJQ89rYAq1Mk9NUV5%2F6XrzDpIa8%2F9r01WOMzYR3j98V6dKdqh4%2FvES1m3BNHB7Pdml0iHwPQEq0aCuMGSLOlAYBNUiBiOjH%2FRkagVHjVhEp2xG%2F0XppLnYkTlG6dntWwkcE%2BkyZq4jOvNm78%2FztRZ7CAfL%2BePu7fwqMgKQoiVWo2K7gWPV0WV2rZFeFvpOWzFtKg0agfIxyPHuycFB5hen9AVQK%2BC%2F31j88gzfGtYJvtXoEsXPg8Xlwn08HWP8%2Ftwk5td%2F2kj2llkkjSKyW%2B5WL3BmoFI019Ik6diLd2AihZyZN%2B5iXQW%2FrR6uTFPzlG0JpIgYzyI9GDpbM3hvgnUPy8WYJhv80O5w9VOEPuYvIrjYg4o5wIgIymC18oiD5c4mmAQUNoZLZ6PzkRBKCvrk1Idb4%2FF6e5VDLOipckoya9AqohD4YwlIWA0gY6pgF7eaGWKHOcoVSWlW95uhQ9ahMxjRSq9ZNLnryZg%2BRyz2t%2Ba055oYLxxIfr1MYUqRwnfWTfryzlfewdxzwLOkEimyPXKjJukwQwt2da%2Byc8%2BhLfT5Hc%2FWVjty27Ww5ccMgQgcg3TlaHa2yXdEN1s34EceZii4nQkNbrTPN5ZUp9Q9hlMC23T1t1lsREkvSnKFb%2Fby1fJM0U%2F474bbByBVHKN%2FlxZFOH&X-Amz-Signature=df3a17e972fd2818943bd61464cc8a48af2a8401eead64f0b6c4ac153321abf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

