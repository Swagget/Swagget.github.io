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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPXEBLU2%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T211846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAWKgaaVRWeJgPZYEBdI3%2FaUa3pXnXrk9hophLQFT0JQIhALCEZMcDU1%2Fz861RLgyLLvVM1orCYCoWMzbmVZjBqWN%2BKv8DCHQQABoMNjM3NDIzMTgzODA1IgzVfKknKOHYLIIPco8q3AMgjtH%2FggzJ4Q3AJUokdPv1RwMeYQOODpE7G9QdzQvbwLwnMbdysMVkRrpM7TEGWqE5sAR38BZ5mTWkCct8loENwXvoNLEqJx7FHbMlKTcABxHwDpLQDsGJnSP%2BpxJ86IlHPEpzn2%2FGIASdiUoAIxvqA1UO3AA7lQZAGxV0ojjHJyrsKJ7FFdtc0ucGAxgTPXEKAZGFNapFPejjd73%2Bvh%2F7y2L1UIr7OkjWH7y6ZDQ%2BcNDjMxT17DumilDLwCbczERtrzCXeaxUp9N5lZidUvcu3fEQKPfT5QgOUEma3jj3nM9snCR3hTPpwLA%2BMO33VjMiKD6GGFsLcZHsmrPckHRawQ2bQYliP%2B8bWQz%2BfFtGYFWBaiIf19BP6lEofTKkjKRyn%2FhriHxNmJF6yx4dBmLQF%2FXxE0R%2FxW0itW%2FYn5GMWb8xxeGW5WtCSSsA%2FQEhKuwTYhWg2SxlZdUEZchmuQx5J7GAPATxn4XyGlLFMvF3pFJitur2dl%2Ff%2F04vBG3SJoYf36xRQKO%2Fk8fU%2B%2FAEHIH96jVnSOl8LeDs3uiRd670dl5r1I2xlpjigEK0iTEiroRzYLq9vom7bOWih4ELqvoWLz2FmiIjbbEisL%2F8vfUfwMRJLBoXdqBazOWypjDl4obVBjqkAeHQLACrtzGR6eIfmwKkk15eN%2FkrmMBkkKS3XV6O6grRRuaw80RyfZntkvitqEWLzQgJBSEHWtr1%2FcMKrW8ZvffuA9Z0Kym689tfG4GjAeq%2FoN0Rg8AWONOqLxiuQTcXmF68HfjTcMet7YxOCFKjc9PQEdMTo7gourLDF56QH8GkYEMUT8B7HhLqcoOabbFSoOgA0%2F%2BUGYpblMBPUPCXE7yP3gcX&X-Amz-Signature=cda857c5fb0b8b946c74c86c00aa2385bf6d5e27172aa50633f2eb1be9e6de5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

