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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTWRLJL%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T152421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0BnCsBgjo8uGVm%2B92YVAiiNaVWy11M8msZfs70sQbhAiEA%2BX1PC1l%2FifXHDLzjxCXkvlGbGbYl%2FF%2FEovqE5itWeRgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1O8c1%2FvRJGz%2BYYLSrcA%2F5FTB0AJupCElUhu1fKNLGXTyepPMkZEC03Ratgbj7oJYh2SHgLa8rm2WF9fP0l%2BXXV8x4nKZKtD%2FwJ%2Fj3QYB2YbwjjfM8q0yR4%2FX2b5Q8xwjVtPc5RXlG2GyLcL2fC%2FOjh05G13q8LLT%2Blxls%2FfVYDTGyz7iSRPeoK2tvA5aJIhVjl4JKy9AgwyQ7tUF4yODoisSUasnSbwxu57eV42qZgn5%2FFAgpsg0IA9W1RfKAt6qXaAVAO3xViwlKc05neMCWD%2BgXr9OfoRyfjQfi7CBYByVSrCx0U4Ib7%2FYpd2ZaWY8h2pkjjfugk9K56oOP7MNblnKMUmDO73W4s%2ByLbksbwyvazKuMINVBp4nP0vLu59X5uE0bC8jkUjmm2eU9FXNv3fXqj3HGwHvjRA6aR7OAknR1WJhvvpDlwku6WzjKfw0GZpD0GnPQUIK1sQPKe5CrbKBcqb5oMFP9go5Xg4%2FK2b81kPbK7V4jTidCJLBdxWCZjL0lL29aXMS4OY%2BcIEwEONDdZQ0h1xZ55BRE0SQF8nl%2F8vyCqWvSStV5uib94dfdQqrx5eKRZgRN8GXpoBgsD8jF7pU0zm%2Fg%2BCZx0CVPe4q5Wmz3ZIKe6ilgUAzHK4bUOBWvR%2FzHJ9WowMNuJxNIGOqUBCyI7OraIkagtQ%2FCBL%2FDKh%2BfmbqmrhgeL2DbLhp6XzI8Yf3cm1gY0hY8CQ6cMUk3j2o17UStDuegseG0wvn%2Bm0Z6R21X7A6lkmaIxV7XwJUKRJ5FwDnnzk5IzHXJBEJgzDqZQHX%2BL2iNvrz1omeh8hGLX%2FWN52fuYP5j5UP7MCMLjJhWOdB1c8S4of5EeAM6ihxpN%2FGaKHE%2Bg8HujaL3lBcrKhBU8&X-Amz-Signature=d018880a3dc3a0e4e25022fc9334fba044b988ee88a9a7509a03f07ec1a6f00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

