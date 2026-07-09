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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MFVXSF%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T063114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYZPZzliCw8KmBP%2FuMEiDd2gTM25dVhA4ZVPSSUw8FhAiEA0PLb8z5qrPBZRTjMNh2pClJJRGekqrN8qORRquqh3OQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxq%2FX%2FAnj1ZS6Lo6yrcAx8vy%2FRKLQ8fHUGIlu2l7svUfMW0OmaRFM%2FGQwz%2F7Aq6DGi7PE%2F7tXVweb%2By%2BRBdx1mZ7JWTGzYimmLEniD4uCzqsDjXuNzCJt0gQUgOK%2Ftb1VYEXP6vQJ16Tu1ZQHrSDXyZzSGJD4qvg4uMWH8aESNlcnwuiprwOpy6b37iRuOcPD%2B50KRs%2FnMqkIOJ4xxteaBtNYSkF3IgiHqb%2FG7hZ4yWUMttPMymkZuTe4xSiax%2FM4EPXdoKDKso97NZicfi2UbDUCSfqqS0vn6zXyBYBoihPYY%2FMOLzx5o%2BGBHhSkOZBqzdE7%2B1PcNRTXHAvupi3FJ1rYUhvO%2BD85pAjf8QOUgeBM8eJr%2FB26rLloLwfmck6maOUFzWD7jupFjnkf%2Br0cCAdaPVxQnwymCof3aW93mGdSzDW6IAkJY6Z7Q6YAz7mneRIg8re8z%2Fjsfy8ItH8dNn1RxE72TpmuIEqb4NcnHl36YnKDd30GKeXZVUPZkpWvnNa5pYi3ABinNc1ijJ5GqhpPgdAuO4ow841wf6JGNccubR2P0QG90zvXAabBKnuQdIHXR%2Bloq%2BVYzNPEKlUGpSx%2F2YbsJ4gDnvVa0b0R%2FdTI7qwo53MD5n81uu4%2BUjOObP9cwC6K6dCq7WMI7rvNIGOqUB9sgChB0KO8k2T2LFR0pTqwqItAVM6ti%2BXWcj3K15AqCF1j0ge%2FBGxELQP76M9xIjb9NULQLtTDh2JmqJzPmMaFGhxbL1vMjKmqv1fjyryAUz4w3oKbzEeXVO6xR6diGlC0A7jPiqFNonrkt1BARWmzlG7gl1zXdSuMTRRXrmdAmel4feTBlsVIwNcWWc1CPpdQb7SxT6SrdVJvgUQcgW8tRXCwCc&X-Amz-Signature=96ad0e31d420262bae81d497dcc8b3fa7a6707b54981334457f5ed32ee0ee1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

