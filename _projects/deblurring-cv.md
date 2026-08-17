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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKELLRD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T042916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHiIbxVLYt%2FoalsJgA6lq3OIK0LipQQJf%2FUKUjUzDMQBAiEAg2Fy11jpt2VrvVSwNStMYOTylVftnOaBJHcf6aO1LIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAuew9AJYrmnvdGauCrcA4PfDzo3LBLGD2XtYalYIFfWYWJt1Zhy8naKcXYbuAGju6oHfY6yNyGrjbbmvzwzK9E8Dqafsba9nFWVR31T%2BFiCedxCDl5NbpTSvIq9wRttvSdiUJx%2Bmpq7WuZcydNhdMuBfNj9npLtrG2yYI9wGLiXaBWmjq6cJ%2FvNDyklcqcbt31hXmtuugCM9zBPXBzDUyRCGVqN%2FxSJjrZMhwU2BSVyODUG9AgXrvHczPjmrYGYCnaK3odk8YeWc0w3L4Kav2Y9WujbbdCNYcL0gTW3J%2Ba3HQ2ocXt1s%2FYQydCdZ7iS4fkLzXiOa4oEtnVVDCkHtnS%2Fwa6v6M02MDXrCWYAdsQxokJu15PdZudF1LLpAAT109yXdmHRRajjKs5ALz4e9CsMNgSi8HOAoEb83WQJCVtVvhosIUhNkfTCmp3BKUKCO124GiQZpxHHJn5nendxmoPovbcvgx2iiCTdN4t63BxyENeYsIAeITMeEtff%2FNKHi4MG52PjIjw%2FfmXuRrJOOgNwjYxmh3mA0hY7QQM%2B2ZmFLaBJNpcIOJJKmmha9wc2fVLiXaVpeOGUrt389wbFj1UlLNEhFrbz7z7WGBwxr5ulmFVy%2B1gJbo%2FoJYPmH8si39NRb0WbkUfQvha3MOuXitQGOqUBeoOyKAhMIf%2BpHCtBQUvyJhn1yJvGldsGizgSAK7Tixwze%2BdMqHHTUhAdTq3pTP2j%2FpD17JzaYUjaWpi8OfutE6wAwi7vWt6Vx3VvI7uv3IPUE9mn2ohCF7nQM43a4AoFkdpA54AuxRiLuC%2FoFUmfECY%2F%2BMiOlkaMkPW9zMVzOL2q9VzmAmeeX1te5m0vCPhPDQPH2GKBwig74qhEnmgLaolR%2F6yg&X-Amz-Signature=5bfc9eda73751443d8a72d5c2170dca9516d3bfac321cce83881e4e5aa44c633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

