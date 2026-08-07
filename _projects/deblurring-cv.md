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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZV6ZA3%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T173744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjlkV9SB0sGgMB24oTm7h59nmxkMcitHbthp%2BOVncDgIhAMftpuGJYyHDMu2R0Q%2B1t0EgzsZneAqGXD%2BDr7wyAaLDKv8DCFoQABoMNjM3NDIzMTgzODA1IgySz2%2FvAROiOZj%2F%2Ftcq3AOHr0aw3LHt2iFQlRF1YGTFhIORUEIBkMOGEpMiGR6%2BANX10Q%2Fk7cNXVyydvWeA2mgZy9Vi1GxCFDgt271LISNmSENHWYDl5P8Irkttk1EvsX7rn0QeF8E0ThSKIOMc3rajrsQbXwOb6yJ8%2Fb6q%2FeWRFcc%2Fmutg%2FV%2B%2BTpzYCLsKW2dNvMbivyOBHScgNoimT1rbHZShspIgh%2FZTCz23Jy6Q5ef39PA%2FQ%2FPWGJ2X9gJGyY2SpgTATjhxgAr3XtqLRaw6d1IF3YJqe379B%2Bi8nnLWKj6q%2FucwXQXnuzyaH4yFcOmTXHl0ptSt67i9sLTGLOzyDliIAYlS8%2BpGxMjvhfUGq%2FP76LehZ3IWMB28Yb77d3EnOGWp%2BRdfCLEsoMj1vCy9sVpOhoLlacGUranMBPY7T8WOSCsNZfVavvL5gajvhUqqMmmgC6EA9fMRM%2B8U2hj%2F4g66Fhx1KSQOIt9P8SPIiaav5lHXAqcdPBlKY6pM9KfbSONo1HBN89l3KsvzKEpQdG6uJ1e3mjkUOGd7FP%2FcLjqxTl1fiCjagCztVCwXmdhe%2FrgDkrtsLxS37dAP8bbA053SaoKDtKfHqkTmMzN0j4C%2ByDY7LA8X5Wvk6LsYLYgwE8DmVJ%2F421siqzDhl9jTBjqkAZlD3sFUeFJfHQQbTgNkSkdWZpn6fL7rPhz%2Br5gEIvTyTscxC4wTYGBpslF4fPZkdN854K6%2FB20yf6M0TTTwXD9%2BSqriqhJKz2R7AETZjk5Cc5TQdm%2Br4woMuu1hSgbgKgVbukWwIONMO%2B6nbY6Z%2FFdZJ5zU5nfZcYIME36gHmuYjV%2BPfJTf5SLEAo160ST2c6d3FqVq4xZopmg0mghDF7SUDs6L&X-Amz-Signature=1226114ba68423b715d359767dcda4d0826084cbf0c7c204491d1c8590f24dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

