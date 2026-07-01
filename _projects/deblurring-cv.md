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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJXSWSK%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T070040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC8xF41xCkcGjhbNlepRs%2FcJZrZguB1hWutPOT23pc1pwIgI%2BN%2BQXBnml%2FFv3w41VxJi6xF8jloEG%2F7IEEzY%2FrVOsMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ZRL02LaL9OzFmDCrcA9RlvG%2BJPDb81TJj3tQMA32YdWtrJSQiRgqQcg%2BOm1nOVvD1bZ0ucGV0yMyTsdbGVxfubrSaegNbkqAkafeKjkAOMxhqq81SI0uEMpcdLrVlGaPJo0%2F6rn4C3F1pipdcL2S5M6kVvZBYa24XVddKH9nicN0ph5k61A5o5k2cefB6e2u6AFeqwQygcMnOyZy0jQhv9NmGV%2BA6XJQlfwFQERiaqsZsG3tXybY%2Fk4koZmgtByozKU9sWVYG1BKzRUS4QwQlCYvbTZyUSaodH2Z0bAJfaVOnazUpPkl74BcIohmYZmWQpJCnMbyj3YLnEiPlI1f16hfiKIrkQlzg1l86xe5ZQBa60gfzvOWZkLAYP1M9qH5zlN9c7YIy4BirNHDVH3NAiVczn82WpUfeSCAeNp%2B3fvRQzdbtwZ8gZwvZ%2BEkacGIKkmOyzgJ3XfyeVCf3tjMNAPGkoNb2tBhZ0RDSQPhDqGNQvPOOFNde5K1KZzcxrrkb05V%2Fy8obVjyEWHwn%2BGz7vz%2FxvLDt9ZD19%2FJUn%2FwkKx6Yg4DZUU5MxxNHaTfywv4fwOMZaaGtHQLo5NrFS%2FzXh9TMMqe6G5422W%2BU1LYbfiFMmb%2BnTRAKYDVw%2BeZnP8RfXVR1Iqcym2j7MPWGktIGOqUBdGHq2aZbcax9ll8GL4Xe%2F6LzkQQrfWVVdpgLBZAXW4%2BWlY3IrnEyEqtrvbwrfh6L1nV%2BWRDmne8DQAvpZysVL0HuuWNOgCmDQwrsHhLWoxRY74dT%2Br%2Fw4y77HJglnS6NSxxl1LQrLZuBWYWi8awJSwAP5AkENRkDZBhUGhs%2FHhwiNzJkqaOAaXVOI4Bd9%2F%2FToCgUrXXjG6hWbbuZiAvOu8QwDeY7&X-Amz-Signature=70ef86281aadb85e312f8900fd6b491684440872d882753fcdb1100d7102e009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

