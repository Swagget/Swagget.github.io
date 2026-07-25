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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNZMH7Y%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T174545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXIwX6xedrrHuMJw1x9u0CSpa9m7bwYTbxJlCyrvymvAIhALxCiC%2BO25O1uXVfIDupCGWxIUqTlgM9JK7KVTYzwMjgKv8DCCAQABoMNjM3NDIzMTgzODA1IgyQZoryoVuZJ%2Fkk7I8q3AM9I96zOVwJvRWP2Z4fZybnTlbU%2FAnJezcImBM2SNssDR30WGkZRA%2BMnqzBTN%2FEFRs0wxGhLvaqVzC4UfsZ95yCoK9ewGZy2UOCwM%2Bw5OJKRSgszapnIQyV%2BoEWho4Q79o8wQCUHRT9BbLnE9FPN9UOWJefEY08xO0n0LpM0o1JL21l9Dysf036o4R9Deua2pdheIWPPjfQgkRSmA%2FmKwryaXx7Ke4fS3Q0g80MHGKa7P5NXje40RQPoGEmjgq8ZwmzjZ1YyFXpYsN0W8kh0i69iUo3zPgeRmvEx6ylX%2BeCu28geBRXNzayRztumL938QR27dlLgVb6G4g3glKJw1WPxj%2B9nuKmEBmaO5qnRcUp0hPAVd00FoJ0lWA2R24epDm3E1mDHoT%2FvzhMy6e5ME2jkyW5dQ1O0xSfAa4QPwr%2F1VO2iDDnA%2FgnZl8gxati7g2yF977AqypkTkbxEjPFLt1i7QoM2eNPe6MQb9yYl2hZNJuK7N7Kx1kFWl%2Bks6CRp4wqxwaOlGGTtNXRQNnNHbcgbhNqIqrwlleReMFSt%2FdiAP2eU2%2FA%2F2FskFXWp4ag2EZSx5tewFG%2BgvT%2FW7QzsrwogAZLbAwBBDkQfN7xxhHp5LWQ7DadhInB%2B%2Fl3TC2o5PTBjqkAZ3nqv5LoV%2FYPzJW1JRagxnU6Q5iDImyeODaOZNG233sYkP6hQvbXR1YrOlb%2FubGWhX1S7hMWIadELPatNWobFZObTXRV5ih02HtLt7zU2%2F9cu8pwWbclLdgJ9DMskTLDn8LtdrvhYQSdn7pkV4nQjOfPY4vY8GaBExiNyLhwZxYUOMIB1zb0CdEm0quwDZrQIewR4MI3f0x9d5TmtRI%2BABgd74R&X-Amz-Signature=fb4b02589818e94e326187977409c3cd85d0e6318fc3596e50c970332741f2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

