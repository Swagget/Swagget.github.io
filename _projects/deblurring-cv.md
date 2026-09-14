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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSWM6RX%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T224847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCMtewPr4YgCEhvG4syliN%2BnY8ykjsNNrSuBQUrmtTNywIgQZGSjy%2FNzK0Q94uY3u1%2FQEjAHzK6ntLXpYX2ufm%2F%2FZsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZrlt7F1hEvE0dLKyrcA2Zmo60f1W0dIONJqyV8so5OQE%2F3B%2FOCxsOHntaSfdkXEC0fKkExNxusIkd6Q6r2GgtOeZ5vMuGNCHCZmGpqTOO%2BJGvUvVbUwO0gGgDYNTifFw%2BJPH8rx3rUOHFjCIuzxN5k0dk9bZBrs0ZeTTvIXmGzlwudvRact2MCgC9CDgywW%2F921zasqdNwJsc%2BU26okHZxBUKthuxAMOLviL6nrsQMgDnv%2FUn9O%2FD73xB65VDh3a3jLNYlpIGR9qNvrf2AVGMy72cO0KvW9U%2FdlDOrrEifkhb2MFe6pd1kFfv4cbnrFGTbqeWsaiHK5gPaBQiaZKLWVaJY%2FBoCId3UdM6t5I8zL5%2FqRhNWEU%2F%2FBP0w3BkxnvjnrQG5wWuhbgKDt5u%2BQfLkQktN1tJNo4FPtoYoxX2P%2F9ib8mP9mILwwd%2FvsYr7JfUVEi5DaVjJDtZ2K9mTCs3I6NrvC%2BwZngGQR2d2KNh8dd4sLGI%2BqwwyVQUu%2FWvTHIgP6sx0cLIDLJJRAfcrE42vqyA6WJuF4XXh3oRcMiqltQbbDXR%2B%2BG7OhpHGWcYmOqV4D2%2F0RUnylTPvjhQvhcFkmQPebLMHGoXLtphfCGJwW5P9joRkPtEFKRoyeVXuuAjqyDneX%2FKln64kMMeoodUGOqUBnFnQyAkNL7G9eDWUTm4gw98hLWMG%2FY4WF59pq0VnubMf37bm3ziQ60RF4N%2BQVLMY85F8F1NEtxnGeYA1qtP5KL4rLZU0%2BFXvTLgi1%2FagsyBnN4M082GJpAI4TgPFzMEBLsl9ixE8j6NkuLCpAPEMiN%2B5%2BzUoLCisP4rEIBTuVqHO3xTcnALJLNBbY1I2Kliprris7THBS%2FqWtoZZGcjVAjtCw1VW&X-Amz-Signature=b3c1dd1486af051d3f92aef359eab7815b74a382d98a61446c533489bebcfe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

