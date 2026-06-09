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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWQRYIT%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T015141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuH3hmhw3ZrC8ImmCq4H4iw%2B5wltroKV0haIbo6TVlnQIgcNbSFGdOooqaHi2ARm0QaQedhLRHhN%2BD%2FzKsRGijzDoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsYsRqq0PtUVIsT6ircA9QsTVR3L9QeNMUMR8coi4deD5zUGPlTeYXQNTAMS8nC6kc5zpuemuAaZWNG2ANk5SdR%2F0jRzr7I96qspqbCap0k9Z1b7xu91g82osklCmynF3MDb%2BAnuxiWKwAAUgw7E%2Fco4yo0NoEuZjKgPhY8W%2BGztv3pLY9UhjNyRMA%2BdABrZVHmYpW0V4dkwpzbFDiTjmqAei81hEqm2AUge8ZuUKhYODgDneFEaikVdYIpPjE3vh35zYW%2FNy8jHZF2nfnTQHMWBatgPjSM%2FY%2BQ1UnLnIUFGthrzYGRU8sw6RtwgrF78LZzuezlc9um7YyrycGRV0hxnmx%2FYZLAG51m4phqcEU2SfUYT6ouKe82xFkWeB9YG0NC3nyjOj6C74TPABX9zYlXmJvgaSG609pT8eUp4nPNE6qnL4RaO61HW62fimI3JOGfAZqSHNr2rfbppH3b%2BRmeEycwpll00nX6vlRps3vl%2B%2B%2F02uJFkILKkTcsGmQn7l%2BZP3PLy3PWfFzLsg%2B5aUeokXELjpNYXbngK0ssYfmR78tYwp9bwxhgB4Qp7NdCZVAlrzAwjkpqX8EsX42MkGRN7qEFBQRC5FkXgbr%2B4EpftQOC%2Bx21f%2BdZpMrdTU3MMXWrCjvv5WQ1axwsMLi5ndEGOqUB%2Bh4UJLb%2B6oYRlQT4ptLAOjW7oOW3PE%2Fny4Mk4KFRBZ%2Bhv%2F%2FFf0NY4boJGm3UedqtS9xunGUfiWfNiLCD6lHElcDaL1XJWQZPtjwMYJLRjNy4MDBsPF7erfoFwgr8gmmnrFwlq6AH93rHtV6PRf%2FwcW5mG1IEl9XhWcZFwY0usxDL9HHXCqheSyb990keHQC8k9%2B05rB0mu%2FtNm03ufrTvBQHjrJc&X-Amz-Signature=fac145250b105841fc1a1086184c5837a25fbdf2e5aa75ca8ad67363017fbc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

