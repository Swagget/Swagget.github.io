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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SWLLMSM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T002929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEVjn4AerH6f1y6wAjSfdCkn8GgVaCE0hnjkZcx4YCngIgBWr5OtPJISJ4JpE8tKDsunrhQGc%2BpnEBtJuO2X%2B0YVQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0HAnYqT%2BpptuyeASrcA8fLgZqFu7VeKNLgKtZm%2B9f7ki9E9d3kTC%2F1KO30%2BpcpBbYZqEVRbAHZ2dwZyreFC1e5eygQGYbIqxFJyQd5NPkGG9UGVcsUawI6PQyR2M%2Fu4j3ya6QENTBbpMtg5V6%2FPrWR1FPW4NvzQZuKYkIz5kyYh0H1sFOdFzJ1JhoWUYuBPjXvvntvAL97Kuz56w8ARGhs3NyYUkiGRYbtLoMVAjMHpV0btsto3PCRJbRlcqn2kxmEASENZp2qLCqcuXykbGXdLVjk3TjXRJDO9Kc63dl3uifWowHv31Vpd3z%2B9pINEA%2FEJqXkL20cghvZ6z%2BbxRAi8crcRWTlmwe6OGspyzduZD2SuoIRuK%2FClnC58byprKnFeht5eLknT%2FK6qcTKPMRz655Fnctk3hUpNZSzBpL%2FKyYpp77VSJaiK5uMgRgXGmkKY1jAsPlfhUq%2F2Jax2OkIlq1fYNCXgVdn%2BAhHOYUbULN1IPtxauviH8%2FJqe1wwKnogPRJVqJMCPi3uwqKqaGbcWc0sikSrpmlk2IUSZYRwAcHzc7zoS1u2h7jZHlk0rBbfdR5364WxsggW8Yd70uotOshpjbUlqFTwFe%2BZcamAn%2BKFXepdANl%2F6%2B87ZQjU5IxwpUm2zrFo2MxMLjCo9QGOqUBfhKpLFE9mli1Y1%2FcXC3fUvg0UxM%2BF%2F0RbR%2FvRa47XUnRoYHK2RslY2kyzCXJT%2Bxc6SxTFsuSyVCcHVf7nduVB1aUmq%2FzSimm27Dp49Dcgq6QuUa2b7TA2c26LH9ZSJj3SZq7uWoWj5U5dewLwYmcx4PZ4qxOdRaoMtyaIvXWL23rt%2FQy9yLI5zABROdBUuqLLWHEoLSL9KmT4C4j%2BHrgD1SNQedB&X-Amz-Signature=00ab0d78603c9d873aaac2df8a0c1355cedb4d3a121503c37311cc93efdfa4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

