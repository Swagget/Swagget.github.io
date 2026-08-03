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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NMASJC%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T191424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDBJEwRAG0ll9mFrS1pojepY8KCFe3s%2B2zvasAzRoxtUgIhAKeE48KtsMFO22FjVpj0qUFvxae4pv%2Fu24fIvc3PR0qvKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2F6aJdysPmUEqZBUq3ANf8lhDi3mxK%2BSKndL1n4QRhFgF89g2abCNvLFYkP89%2F43M4uqozMN%2FGO6wxaPRDfD%2FUr%2BG6LLbHP7HfEOHQ5SaG2RCUO7KQKFV5eimbV%2FgC%2FCwasNwbVL2ZqHPO6h%2BOZYKz6Q6NhzZkzNwj4rJz6toAWcLIwTuZvHr6HlwepcW6n4LI2WE%2BcCYLkXHeGynWz5nqBwjOR8MjaABIC5zmK3EI0nBDWvRjn%2FnIxf3PaIlw0Cv2EFUzPBs4%2BlJ035dtAkcohC9VAQq97bDAVcp8mySjUCO9ZfVQ9fj0SDUhG4f3hgsrjmlcs%2B2N7QSwyBD5pbIkcdYIbRJ1dd6VFqCe5BSybfp60y6foAdzqfmRY31RMV2Dal6wd86mtipulS6JiYsB0cxxGAaWKr7LHPGS4u%2FRFTkxkx4X3bp4HtXp%2FmC%2Fojh0Nem0L3EGb4A56T2jegdF6qmwzpwANd85KZDobD3C7kLbIqdNoWLdH5pyyXGCb6ADwn4cU%2BPu42Lo6YRUjyHNu2ZU3jDxBd8WkOOQfBdjESdG5g0DyP9pUtU9hQgp%2FAS7WQetA2z3EbcyWWd45NJ5rtteCG4pmqgzQZo5flKOdM6e9QGmrs9YhiNMXH9KQ73aANIjol88By2xTD9x8PTBjqkAUYz%2BeiHPZRIeyQQPwxOpPFNFReQBE6JwJU%2FOcNLmZGIL8Fmx5atE5dIJqwuhEZ9e20sSo4ZREVzOZRTKRBl984e%2BDOYUXzUwK2EnNhReTGoqxKH%2BO0tW9wqFbDqf3rtWRjexOeDPZuKMah3D%2F%2BVmBBdUQPCLcJ5scHiUz0PX9Hg3j6GFD4S0bFitBxU7fUcwnp4028g7D3N4TYwVTewKVgd4r4k&X-Amz-Signature=354727c4195059e2d55bc8633126d57e47f3bb87b57f2efeef4be03a9f784c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

