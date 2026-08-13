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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UJCDNKY%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFZhAKZecun2X4EknX7xJJNX7RsCEDKF4qJ4a4QMsIlVAiEAp4uWfJCpliemaRp4uu1EFFLSm9%2FT2JEUiEhIgy%2FLS5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP%2BhUUFx9Lp5obTMyrcA4LyvfPqCvGxRuSsIi4Qvecnzh%2FMEtj8P1lYPDgrWjoW0KsmtYpvSfy3Y3R9vpKsdvw5%2BerrUJyxiAZT5N%2BVa14yll6sUbr6zPKTSX1vJ3mMSU4nxS3jOlOVRUVcIHhJrB6k%2FpXDW5%2BF0CB%2F5%2FfdcEe4I850SaTb6wQKRy8L%2FmQfB9CZCVSoXKgo7yCgwwd9xR9vpGmX8sHILWKcQ0jiYb%2Flo6TDOANfBem8Y4mEqxRRl9bGCZHUkUv6l8DXXaDT%2BOc0YWBAh9NqjeGUbFqmG0hYDyJgDRf1Cm4yUvILpgE9RR%2BmjX5N8M0IoqnDPl3Jo7MOLFQc1zjEoGBQKw7plvjdSPEPAuhUxixZz9rMh6Gz3U%2FwJCgH71O2Exii0lbtm4NeHn8Q4Qo0UXThB7aMJ9nwDU%2BgH7WGt7hc2sLSZd5SAJk2XVstLxD0u1hLq1YeN%2FOojHcoIZReNJoGHW%2FOqmBINEJd1eW%2FmsCBm6Q1pSpEgrpTdAeAirvw8Iu9w9MeadwqPF%2FIjlzxtjHH9AuwHgO36K%2FSwQaLsSMKYOyONjnAteKPm3tr%2FE0ygyBFl6fZgtbvjOzk8h4Xo7ml7cWPC2qXsbUBmjTl0V340Wr8k1HFBFT8miw65ZX%2BvZ0uMIjG9NMGOqUBujsP55%2B5vz%2F8RnNThXUMzw7dLYUjyl%2BGsw8YN5ctJMQWYps2AJir9i1L8B9mhmn9LjYjyp8Uy5p3F5k5Yeqn6FUWTE%2B0ngUG3FcEuJYEm%2Bd0tSHR9%2FBbk4HwaEuaruewGDWV0CfXylRwVxUhhh8kFsX8w2X%2FjHsVbK0gk0%2FBSzFxeqh0ANwt2cLQbayydYBAjGIWaNjQ3xOZKrEz5MIYi2uGy9q%2F&X-Amz-Signature=57652d9f1392c1685244b533080680ab724a64058752f7e97babd408dcbeb9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

