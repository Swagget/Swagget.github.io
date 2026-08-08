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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7TOO3B%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T191940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhuY2cKRvT6kwz9dT3qEJzcKE8YvxFWcEQg%2FA4aLsZwgIhAK%2FGQG2SslfpVQV2UDLdbLfkKE7oI64JrmQZV8oMRU7wKv8DCHMQABoMNjM3NDIzMTgzODA1Igyn2DS6QJzAbQTAd3cq3ANRbAAE81o9cHcc2x4GxweC%2BB%2BDXm3aZnYvLA1d5UkrO%2BBmMLeIB3T3Yq62OZIfaJUDbf1AHmwwPwFV4ruCz4UGtO1fZL8DJD3XQxSq1CbA2HZnGEaYNDZnRoO8asS04QOGiFmVUgW83VHe7PC%2B1YCqdEkQSIBdQ1RZzeYduRjR9dzDjk435vyeVKl0KW0x%2BZsjSk%2Fd2yd1kIP5H7Z3aoCIJe2ENSpJFZp8h5zhoGorfJ%2BlYt1SPY4wn7E%2BIh5iILScxVjbtbgol8ycCONr0I4BZJBtqIzuF%2BjxPgZW2iXgmqJ%2B9m5ZAI%2BT1LsZLaZufVY82EMqYvGdcONg0ctw5uuU%2FdSsVfUty%2FVBgrk7jbXxax0Pi5NekefDjYVKtuylgOemmFSDDMlhU39jeAu8SBhG6zJC%2BmzA%2FNQRscqAd0pfDETMeHnVjj2NrMJuR8L4pqtAIfJL7wIDmGRe5yWtE40g0hhX6DCreEK7Hrj0PBQpM2RaZ1UefTZqMllGXoYZIqxLKs20Gw1mD%2FLDctcRI3B602nQ%2FL0Z4Dhi8TVqAcAyijPV4NTkXgD1r6e%2FVPPOHsDWTXgLBRb%2Bg6wTww6iX5F8jKSTu3cQ7DjXT1dSw%2FIFd57JYawkt03%2BnA3VzDDe0t3TBjqkAQu6Li4eBJjlNkywWW0u7HGJj7Vf1JOKwHTSOOH6ssZ1OTwKibhfyc%2Be635aGQUqvgQ8vErzllB7DYqCeBGZusS%2ByhqCFrgfLNd4eW173ZBgj7XWowFOzRJIMlGiFenCwrSxb5%2FB3lQelwarts9k4udIGsWQq3pW%2F%2F4cQ4HVeCL%2FffYYJhUWNfIwOhFBaP0ORIh5HwE4eie1TWIMPVrtY0l6vh2x&X-Amz-Signature=2faa4f8525a99de181b27cc62b54177632bd80bf4a73100af9ca3177c7808256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

