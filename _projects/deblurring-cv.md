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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQKND5K%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDUGpR06jAXnIo2JnJNI%2BfLz33llJqS1vjKEW6AVbuiogIhALJOguEvefyxWtuuRFHmKq%2FJqMmDypYFq6qxN5ib2RFTKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSfrsjI87EvD9gQfwq3APa5XcI1M2TLwLQy1U9qLKKUGqMeFgIKyXeEoBw8mrcuZAPdCQDxqsMB08wtgy8nvR40vTV2KtH9wcm3DYhuEe2dQX%2FD4WNZLDFvc95DuPoVvCn86nGvQ63Jg7MykJb30ol%2F23TktonKVxfcA4XlUGAYkTn7D%2BFxJpHP6K36xlgOgneYNCo%2FrC3Q%2F%2BzLo6%2B%2FXPXx4efHHgm6BiwssyBAlqTyl2eZBotg%2FE1CnwS5R7PF4pU49Mkvd5b%2BenvuTc0Bm37wdivOwVJeL29vVjprHMT9eveuuPedSqcu5v33cYtfPHq3YB2U5Z5pqrVasY9arA0eiZhj4HuLdDDHoFG%2BpWkAq6ZYJ4Qcm0WQJAhBc1bsT2TWsmeFVfsbSSvFD6UNmc%2FmiitdaH6it1mCQSkudkVrm4J%2FOaGapuGx%2BwVnOLLB5GYo%2BdCOcKIk%2BXTMpyJSwNb9yIh%2FrVByv8qAMRucntb2BROp1jgWxnQFUwrVf44L00c2mTUnNguXUVr6Zt2vmsaJyiFSf79jFACmtyhhGbM9FeawLTyW5b8urKK9VOaJc5eo4rkDiT%2FS85z8JnDe6OIVqM8K49VzAh8GnvraJp0j0xH4cXI6ITB2aJ%2FLJZnyO9C8Jo3KLTABgXmWzDa1rnUBjqkAaeqKZ6t1I0%2B4ZnXnuoyvSshVNEY9uz4yVReByFcIwzRP2FhWpfQClFHmh3HyfK7v6sINR%2B6n1DJ2DgLAjJqoCT5BXcnO3EH0mqgUJtL1MSinX7Rs5Cw5AVCg57CuMW9eqXRVeSxFCFjx%2FTw378onogJzvHApWW8wpPpq0OWK3xxfgMU8v634zYjO3Iniq7lt3O5HKfTzRFWJnV8lVSs9QTNvq%2Fx&X-Amz-Signature=5e4d99988d9c0c37af8d6c37a9fab08e329549641427bcf9b57135221397ee47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

