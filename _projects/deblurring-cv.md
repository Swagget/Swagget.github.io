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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRGWVKA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T094120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwwhnTB4%2B2M%2Fbhma8hG6%2FTLzM2tKYOI%2FG1pKzIHXgD7AiEAlhzcRZiNPhdSr43HCnVTOwm9AHTnY6MYORVGXwtfQJkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3HLTopgFOVIylNKircA40VQ3CyvhatzwImcN7kU5A8LxBiIRCQCe9jGalM9uIrKhL0edZzFToScmIsB%2B6jjvaZsYDXMyz9C6mMT3KGCoFKEZN77vLv0VcOoZJyEmHjOFsVnkjlztkwcMHSdvJwCeP218tF8oBDJZ0gTD1tBqSRyCmfkLZDaF6EyOD4lAhK0KF%2Fu5R5WofMxYGshkQqfiD5PFEl3IkUw0WcyP0FYk6GcYsald%2FjssYJS1crCuad8ZEbJxhFS6IcNV1ZiynjKRodCKCkrazVOCCs2ww7ayZnDZM9Jvw8qToUzdfzonMEQ%2Be3e5P5Dnp4%2F8IoDgQf0sV%2Bsl5YggzLpvWMnEmiOOEzaIZaDIYyvK4H%2BTLcB%2F%2FjrmLK7YPkC2xn5BLFVlcyQnD5LNxzBCTse8%2B9KAzbQyWdnU%2FseAcuQtnK%2B%2BAIn7kr4R5wR7nHGmnpsQm4L9CpSOLYri1GW%2FohI9ybjbuCHyfzZwIl0sOUYxhtEqGUZ6c7JzpCh27GA3XnYUusxabPkpNgxwbQSXATLRy2LViLl2chl%2FKpN%2BXpzO7seq6YvCsAvJLzfpeP5zoXC%2BM6II5oyyDqbUqwq1nBUnnfLL7nTJWXsBDBQvBMr5TIYfdD81AA60iFY6SXMewqh0VbMLqn8tIGOqUB%2F%2FiK2OAOMExMYdWx3Ce3JE8k4bZWCzflWirGKa%2F9p9r4KnQt39jho0LJELZFac8AUFSecU6tz%2B1GoEN8MyEk176VrjbJdnmNjUWsIBityWNypC8hkpQEwpQunIIM7aYPkhExQDKzflPXlm3ULOguLqLc%2FEoLAuMBsuYYBm3cn1eNULsGW%2BmxYopvAqV3JN6DawIGme2zrMLlwdDXci9OOrXxT%2Fp8&X-Amz-Signature=c0c7afc45728d5f1c40b05b787e2da68420d78f29cf33a72fdaa9346bb04269f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

