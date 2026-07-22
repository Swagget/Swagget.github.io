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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7PICOS%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBPwpvfCGtjULBP4YUFbVxahK9TyB5uKwv6DU%2FUC5hKjAiEAiPMx5RMxBAcdexhTTUwzFnM8NlhE%2FAuNxgCiDBq3noMqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtyTmuC5kVc1OueESrcA5kU5D3PCl0lDPaBoS2DZK3DqQNuCXSxubywbeP39G9m83eXfE3WigmVvfGZGClsgO7iLxLHdIdaxNw09%2Fk5wFDo3jJpZUvWYu%2F7E7fAN%2BA1DqV%2FFtuxqhMVdgEkppxmuAYLs3XroOw%2FqWQX94UrZmn8QxCnlHbe0ryMGUBU4oehIErcFRPgA2wHxgWfdm%2FUuJfzc59tVoHtNGZcI%2FXNol1KQIi3vlk5sERTfmq9FSwkRBxFo6R%2B8%2B78lXLBLAeMMEbVCjXxyFRBPY%2BMgTt8zgzzBm0BuLfPQmU9sXcE6cKobvpVAU7keAZh3IjxZjHwKy%2B0DBdOj3OLj6BqHJt3i23xxCrw04A8wbbu53n8QZfFVg5eOl%2BD8kiuY%2Fn1fUW6cVsUb8M8IAiPK%2FND8O%2Biw8xUxG3PiZ1VnfvuBZjQExp2nhIjbFftChr0lzCs7B9kB9KOAAOz%2BVMi2hmXfuGnXQDy5XKoOslVhL4R3sE%2BOblVjZXfvVlK5CJaO2PMWjAvFv3kVthwpsZqgXaHoNjgerKlm9HhKkegVUyqi7el%2FaJp21MjDxfQmQrlgH6pji1vucGFQvwLR9dwGDOtysFjMkxcfGDYQJiDj99y%2B5r5NaQNivZheXZlV7HR5pgzMPCIgtMGOqUBSbtWdmSwsDXLgYnKeS0XheoRRAjw9RUjISGxTXE1rOgcvI6gSlTFNvkrLoKwwQbOVvbkXciqqb5DTSnoEZEoFxDQahpV%2BkCwAHtwdD%2FMio4FsyhDGQ1kII9d5KdrSb%2F6zJoEIAx5TYJWPLAdEWN8jo1yyBflNRn0oSGZ4bRzRjnJIREWoq8BYMTqcCBYdrhxJ2K%2Fi8irOTgK%2Fpk0RzElH9J46tjc&X-Amz-Signature=1a3cda06785a3f32b0c70a538cf1d6cb40f4fb04def7a631871aec3e40a61da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

