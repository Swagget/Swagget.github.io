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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOC4WW2J%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T130115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKdD%2FOZvB4UGyzfDhWCqJnblfgoeaLr5CfGeM1e78hsAiB9AZbPxYQQImFuhFfB%2Fz3O%2F7hsicnTz2i8IDt44PnzZCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ0mhkxqFJUYKL1VHKtwDup1QkV8LYirxA1mktVTCw4PzQUAir1ouXU6htnoef8wfXKbW6UZU79qig44kMDiSgjZk2KrFy6AN%2FecVFdrHIX%2BVlM5lFYUBEJfNMfVv4iN50D3v8hhM6pgH7Li4g1DfImRJYroZ8vGD%2FqygqpZK9vhF6Z%2BcWZJ3evoupeQJzXJreJiJfvBeTzjtH0uXSD4Q9gHIjJNt%2FD7WemcC8dYsYzaPGZ5JRkMtf01qlFEl4yxfHXbY6Guvgft7CYiMlyZU%2F20VKU095T5zYwp9kVZziKtwqX8wWcjAfZqPc%2Bgn%2B1GkgrADrR5xTmDxUn9IlBCVScXDNpDx9PELxVYXiE9jBdAccJWLMPM2DHtMto10f%2BeDLdUosv2ikSWdKaZzP44R6G9zVk8AEXFSU9Nf0qb3KAG7ADV57kBfAxAaisFJks0nc3Dq5haRv59Wjzzxhxjr29d9cM89kZOEQuaqzSVR%2BCLMhCNON7crP9v9oIJF7gpE931vN4DEUuCxHAecRojgJZ5PTpZRCXyS%2B6fbS1oN5woahNY%2BfmsuAYDd9VVtlh56xrBWxo0AJBKJA2rrKwEMSZtD5n%2F40TqTajQMfO0Xg6cpw%2B3lca0wjc6kdVuoZcmYNSW4q9FToBoaDe8whLSO0gY6pgGWbmoUb3p6XvUvxnvnzauRSlse%2Ba0thQ0ehbaU8Il5HP414tVcc0HFeIR%2FhTyx30uEZHiH%2BuZXhQ9womi8yX93%2BQlzQ5u1tlTGQczfP5MLQ9PD3gZmI5zZUdKBFDHufd6hC25svOG8pUoEUBMoKn%2BAt2RA0GF2HkOwkTPJ249Ja9R8dO2bA0BUPc3Y8VfE9TupISMiu1B81dir4mCuX%2FbGs%2Bv2bW8B&X-Amz-Signature=b6147e7b207a6b23269f414fa34bedbed452814eba984a5909523d81a0a4b57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

