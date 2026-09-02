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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ADEYKH%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAa1Nt2GHNN6kLeZgkROHDU6X1ZLW0ve3K%2FEnAPvsbaQIgFPvGXqQOeYQ4OfCW%2BWIB6RCJSYewaZS7oK9Ra%2FCOpkYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZsaVBOcMEntM2MOSrcAwMzws6rKiEgZAAe6r%2BEPnWB6qV%2FIZu%2FTJxF3tLF7%2FaCu56hS0k10MtHtfY%2Bb%2FPlEmzfBBHm%2FZ8PG15SPT2bxAFxe5hn6XeaT%2F6mWR23W0Cp8iO52bHxJ%2BKiKS2w0G%2FeImo4DHe12lbLAXPWS2sNBnRZCrbV%2Bsfq7oe32sDJ4mcMqp76KJlwGM%2FfJkOqfVWm5naRI8fJqEDwK8SPfUotS9oltN38XapBDpIoyAg%2BhJSLURP05fvBnWKwd28ycRyBG3Crhz9nH7J%2FPYvyiAYVl%2Fg%2FR0XIR0Xf%2BZsYxX65ZSxKRmb1NweuUqhO3FiLA9kN%2BxgAWONUTVVXfJ2MyvsfbeQGIDZaQnVAqtvgLCiZGocy0rIUj%2F2A9n9W4j6EzxQp733R1UjCQxD92vu1YbXldB6ZHcjGUK0ffhj5dS6NzkqIhh3ZdIjidzIk%2FJXnOeIqIvIf4T0AoNjuWLq32h7GaNS8tpfeBfk32%2FROKhYfMyjaEAREPG20MVcQYK1UrUklDg0qV0D%2Fc5F0oyaVMX%2BFlC5IM3YYv6doY6RNu0FKvDCJj2FBezob8oZn7OtC96W5smfIa4LrtL5Q1DAFc%2FKkIHY1Gwt5c1wcJQj7YYNLEk8E6saqAR2ddRQ%2BD%2BLGMMSr3tQGOqUB1Imnh2sPbGvECVHm%2FWkPNww1XE%2FYJVenuXzX7koaxr4X9EYdrBoT%2BGbnREaY4JhHSZkNGmDON2katQannE5Zgi97l0%2FhS4v04cnTHoi0%2BaauecSBghtYgKl3K%2F5P7JBnN8siS6mZSRtw6yyyAJtXo2OlHywFKT3Y4RDz7zv9VEhDBT6xYMhyB9PnH2IDhjaJHyL8ex5ZLpCj9s2Rgf3aWOlT0Aok&X-Amz-Signature=915a7c5eb6ff213a4f8a0b587fbf55189cc4421e1a485d79f342027ba8cdf082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

