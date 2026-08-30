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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7QH7Y4%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T235910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh6ry0UGQClhLnZTpiR8gu2naW3R5d5oBKDik2bId85AIhAM3kIvtctYFvcPCE9G9bW4tCodduO6NDNydjeXkHFEUVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqIRRiJx5XZZCzwigq3AM9YLtbqWelKE292MMnjWNpts%2B%2Fldk5wri7fz53aI01X%2BkDP%2BpIXJ7J1gE2fnMmgcm1fehI3Lf1d9GgdIFK%2BrW7hSYuqRWvAm1RcC9sLas%2FumgnwyexJT36oslcM2wHSc6AsNCYXV7j2VhssesfsxR%2FJdel2A5ryAepZ8Vhc0%2FjOZzcTkisIFSohl1Pr1q%2FdIS1AsPb6ERiczYRhSTqA2CfrBpJtjI2xkSLSIEVPJZsoz3CbCLt0IkKGHoGQJbD%2B5%2F6FvF7dCngxUoMB%2FNQBUB0VqJ8rMnX5xCD%2BuMzCdw%2Br9KQlGVQVlxebJjQ8A%2FJXKjX0y8%2BvyJZRFDMJqACoidtmHH1ap18sl%2F1idWt8RhwZL72tSrbIU9fdbp5X%2BGB8Hac%2FUE7RnEPBIi5mqkr%2FsOxC8qtPQty1j%2BvuPLchHVd39lkjpqyLZZVOMMgJpMtyzvyP1RpIF0lfNZG8VWlKD9ZdgKHdeqdtsUm2eePtl%2BJJxW%2BVUgxLjftCrQLTaGRzHGFh7d07O1A66RZLFVEQqmMMD69bObgzAu7CZsIOpy30yggl4UVaMWb1OMH3bu1b3w3ZEqesn8lqC052LLu7Kw9NfORJmTr%2FB6zEfwkQLRTidgWEroHizKEI%2F567DCf%2BNLUBjqkAf27f5oYaZFYJynicL5zEyROTsw2A3iC91qUmIFyhJBZd6D9tJGlds0g3uRK7r6oRdOs0VK9GGu3zwgot9AN666QLkzU0rWYHXqpQN16PYr12XQclcfDy8ERXJgBEfGzKDYCG4anZ0tVU8ss%2BVeVkP7vbUl0A8DugLGcl%2FL16bIgDghkqPd9%2Blp1OZe4Qko9Sl8xemtWgepXoE4b6fsa%2F3i5TuwJ&X-Amz-Signature=1498fd31cd1949c36662c04689206c4ddaf44b684fc53e25ea73e3bbf59f9b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

