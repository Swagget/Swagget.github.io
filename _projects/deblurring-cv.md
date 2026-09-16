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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KY7XQT6%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T172037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDospJ8x7Jt%2FqVPpHR3DpK%2B7haPgo%2FkKRU%2BcXttJGuSqgIhAK5L6bx435GwV8kihyogFer7LOQ2oIJrkF2s4JpaAUdDKv8DCBoQABoMNjM3NDIzMTgzODA1IgwnciQa2qrCjYfdSqYq3AO4a60GQQNhjKns9KbQiE3kSVLd5lYrP7BuXYdDfAcpbxip2KhTmDPOGZ%2BjOJw%2BZfY04VfbqVYI9Krwfg8L4tqVkG6PHVvJja28jfvnNKhvTQNUzyg6gafXaVpt5RkqFkBxeEqCMUqCTgoavEmum0tfKpVTrhUzLL4ZJ9uXWiloantXD67gXSUcTmeYBnkQ1HU1LDnBUO22DRf5tuZDstLrJ2DywFsVM0Wm4wUM9hKWGy5uZmUXInD2z8WsjjIksmfFjUSozuyiEBfHSnTvJmR5Ex%2Ft5aIKGQiHzrdAZg5YsKtZS5IkBFJn3IuWZOiVLcA2zkv49pQPFcN923UK6a8VL0%2ByUk1fWUsu5jWxPT5rrm0th5s2NbgX5Pqf28RVnFr3QaF%2B%2FiTLQsGrYoeAYekrionKAiLNRRscKtYuMgVKSVfYVFekxmG0VS9JdgjZj4AUAhg3aGX5prBhhZoJltocGfX8RbP5YmV1sZDAy1%2Fy5F0oqxyhryK%2FnL5pS2FEa5vmvDSCaFfoObY0FAdwxBkMWB03V0Uwf80GAOUZVUXOJq5uZQyqtiEwmGXYDySgOqUw0gTytG6wgHW96LnYu67a0FesyGXiS9Ela6Ht4gqAWzib8YSH1m3WFLSbCDDDnKvVBjqkAUwEkVuD74g%2BCguokyrMWR1lso6moR12kucoKY4spL8Xtw4BJU2SPSpUjas8rCbXMSZDmG40xPc52XLoEX6abgLwgMusJH4BfBjy2sUKCK72LtoL8BoicZg8lAO892wBvppiBBes0fDCG3CYxzWGRudGrs03PMRDX258vaJ5NQo9koT9o1mBt1FPdtQsJLlv%2BHaws85bXgvyhQR0ZXGkYYeY3Ygh&X-Amz-Signature=2b29fd20393383acb2b8b4b592856c6cc56fb4ee108a9115ed336b2e542eed9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

