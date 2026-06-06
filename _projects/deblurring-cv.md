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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7HZE6T%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T023210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn7TZ24RopG8UlnByaIKXbPKjjxVfBP3JUkHXArERVlAIhAMz3C3JQ%2FcQXQdwrhGyyScfJFDZhcrO8cK2Ou6a9kS8xKv8DCHsQABoMNjM3NDIzMTgzODA1Igy1E8FTx8IiVL3Fp6kq3AMDQOBC0zXIqSc2BsOj%2BR9elln6c3wgib8T0%2FzA6uvdy15Q5iaErmid4HcxNwGvMbPkWD%2FVwYdlX%2F%2B%2FBMfWvASqF%2BluXtPtAdbW3KMi4uBMTwnCaTDhRwI0tW%2FG3m9l9%2BBkrfBStGG0rsgm1AGF0ieoxjrtDC0F9wq%2BcTTw5HqfYhPIC5i1n0jWDDGxyxAGRv7oCCU6%2BgRp4%2BtrHXa6Bvi09DnsqW6Us6vYyX0eX6zFlGMvX%2Bb4ab%2BW%2B0ylg78WtmuMDJuGvEY30%2BaydHgO%2BlNVxk1h3QN2jd6B8Iu2e2a3WYWXDjJl18HL1GBfoWqvjMkpThESNsbdu2uK%2BIKXnSu%2Fe%2BXmAjx3ttoY5qiMhFn8i5NQXwFXveYX8FvE%2FBOnXtMM%2BIOB7NdkM6cHWM%2BBAQt4wbr1ngPRJGwyZx%2FItJ%2B0sgV8cqiDSBXQ9E72xgUWxBNftSNnkuf3nMMRDuKq3Kqnt%2FmnqQyaUI86y9%2FMjSm3D44AN2ugUwdy8DJnMDWM8jlleQMRMr1TfI8TahVA85pga9bMxSRmUfaR0982bPANSlzC2ES2H8cSd%2BGqMDnI%2FvrmS8DyDjBwjdyOwSksXTH9IwvNYUl7pXUrukag7eJonIYR7ZUohQnODkWDajCW%2FY3RBjqkARqAEEuLwBiEnAcmxzxowhXIsGQwMZ0QKzUn%2BDP43XiiGFpQwSj0SL6jf2e0Zyc4whvGZ3II9T106T3B1DzSNO0sVt9UsOjOZyL74E6xds%2B24bjHZTcCSccyty8DapgAonJJDjEf1n11QtILQ7nMa2bCGSyJakWcAh6V7hPTn3EUnFTf%2BklYmQjdJLCUKY8hUrU1ofIBCDAyMPYhmFSRezgU1eli&X-Amz-Signature=e2c5a494cceb49064129492766cc8531ad563efb0fef0c4577468650a168ca25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

