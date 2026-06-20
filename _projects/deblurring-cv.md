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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAIVWUJ%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T152702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCGy1%2FuYBaWs4sNKfnsyPK5Isfvy6Vsj%2B9f1LDnDWJqSwIgQWHr70OsaD6OPfs%2FImlHatsRv%2FeXJK8SmTnbQxSs6cgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Cn5zlk3RLaqeZ1ircA2C4RNajdGUL9y7ENBLueC%2FqM4lmgGiTsuDtwL%2BQY5rVKucrXkw6zOIxTK5HPOnYnjHrJLBw3Oy8B8oy846QLyt76Ch%2Bh0eNjVYO2jnCUeb2V6MsQFTsMRoFw0R5EOnmlX2Qv0Pqn%2F9ynPFzW%2FD8OuCw9FdtU%2BcRk9YZ4RvKgp5%2BDdHw%2BhZQVf6WeNW5RkTbYM4BP3rAwmw5nV5TyfqnfiH508ozK26zEFMeBAyz9sW3J9CzPc7%2BvNSU0TD0%2FPXLVgiIBluLrjaF076e%2BuOg0HmE1Vr19tEJPxVgwv8H3Lvmizx%2FRVF92Aj3WbuiNobLvDwlojj2v098lGvTJGlc73HU4qK%2FSWFdtqdPs2D%2Fnj9g5mJ7e2pgbCRGd44YyKbrDrowqsre3yePK1fDGKGpY5JUilH8R9ngDaObi2VnTNDfz8R24CH%2BuKb06AVLixN4Ix16hngOjbWC0OAf92ObIo%2FkbFI9bBlpOHBDComi0GAhSwk9jt7OPtNW6eS3ndc%2F0kPejI2dG79m7wGXwwHy2p1h0WBUcAl0%2B5ZA334B51ooNCD%2BPpsn3UiuW7QJ%2BLf1LltatgQbbZNoK17W4oBGcplVye9TXSl%2BFk76TzmeD7ypdBpxJW%2BzpjObZqqJMObS2dEGOqUBRKwQ%2Bj8FMuPR9cyY2WGWZKnEY3HfGuBt1GwirTOTfT%2FjFn%2BhCLLhUQhbz8SBYiXVsZxWJR5LWED9JmKbbztgw00O0m%2ForAJV49RbO6ftPXeoJaZE6X3grgIV1wjdMrb9kBONt6%2FA3o5KTlyl8Qd5MxLAaKqXyae3pvDDNbJWq5lgnjUhNK3sApyrKckcg8AJubmzHPWhvKA1c82quGyp7VZnluqZ&X-Amz-Signature=a31bf0d228e927808e39bf615d351b7881cb10e2c05de8e86403c03a9a4598a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

