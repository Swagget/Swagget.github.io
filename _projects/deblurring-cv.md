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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTK5EHC%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T153443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbc5EfFkyy7HfPgJvWKhU%2BpmT%2B1pIH8t%2FGnBWtxopZAIhAJUvgv8izf48tNOdsTiLOtxBVEvHpVzlRzSU7Zs%2BTBaCKv8DCH4QABoMNjM3NDIzMTgzODA1IgzBQeT9pi0LXXk3FJ8q3ANOXYRHAMT7nkSpyQ1O4tEbWOx6XcbBnHle3%2FCHGE2HlDoTXf%2B1wR7mmnw7Ru5BeAf91xUELbK0Qw1HTj1ZFkWcINB4OQ%2FyCpTbVyYKEHybrzviTv9C0BE1MN3PedUMg9Lgkhob4sD%2BQv5KrbdRR9I3zUfrw64Mv1tjQBQguUySc6ugQaE5XE0ityGuwycPnjo7w5UGCxTcNoPVPz0FRWalWMckXG%2BX2zlvwW1nmmzaH2IICqKfXk5vVtApo5PHet7EDIoiWhLLO5rhhSKQSfTTzOIcG%2BoRx%2FDgoXTMpi%2F60V%2B0w6MePVGR0eT45QfnMqT8pLUWXrqr6%2FdzYsTrqUrpI1gM5kicymz85WxUeXJBI%2BQ%2BsxKcpREbNZc0Vgn0fU9R5bHRLZtqRkYRBUhU8%2BluF8VQshYXIj9j7Q2WuipOuPZLm9FreOb%2FVUD4%2FV5M%2Bx5VQYLts3N9PQCqXZ7RpV1ZLh%2BcPFKz%2FEtaxVf5WGujd12Ra9SCuvs7qEyTJZnig40%2FrXc8ERmvc07ImRmFzXTPVGDWzXcGWlFAnq6iY5bLLhHjBfECvrvUgUiMcc47CSG%2Ff7EPhzfYALrkE6NRwl1qfwlJy%2FrgCIAHt%2B3W%2BXuOxEcYA33ASPEv8AdPNDDlzdDUBjqkAR%2BpMuHKzwFeTKzNFh8hZSzbfubFj6AABaXY8fyG%2FGykHcdpG%2FHueMDup4xdYwf1GgNmh3A6ggqzfeTI9l31AlHB79Fg1V8JgpU0M6wq2svs6lRNPY0%2BaIunn7OOtgjdkyHBaklDEoBnuSIzJDL%2FyQs7hiSn5UhRQwmnDerkw1kv5WwMn82dUauRD2U8rPv68DRzVmeAVxrcVSzUKL95%2BFwiHbvB&X-Amz-Signature=c01c826e4378e8a110cc137318f2cbd9506f2efcc5bcbc62bc71c27c457cb3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

