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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXI6GKAO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T092216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCh7YFpDxXBZ0iHR0vbgEpjOCoLuJwke05CTSX4t02v6QIgAaeKeK3xfgqjCE4LB4NnBS8qWgGjsE1YH7SJ%2BOUV%2BqEq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDEirM8VkHJDnih9LzircA28zNL%2B5xnP1RGmA0bARXf%2BhAnxQPplYXeWnLEEXVq3q7zfa%2Bi2Q%2F2YbUJBpmsfURPCulxhTSuyQlNyoSkN2amNQzn9Dj0bwLDg4aWfE4A2Vxc4dlYo%2FO5vF4QxFYq8zxoWLO%2Fcmon3J7%2B%2FsMk5D9LWDZw0t7eo9%2BATp8i%2BUD%2FCVIIuSzrwmayfbYhpw%2BhRcmTyIr1ZwGG%2Bp7Y2XFXpo%2BEn41T3rjZC4IwHSutFZtzGH5B7cO1FDso9Chdd1E3ki5kktl6jwn0oE5ElXQUYIO%2BWA1pjF7z2kqEPNQTtIDsrXw%2FGdL4LNK5%2FOJwa3HuOLBaJGDS%2BX7D8iNnipU9JBMH3AQuTykxM6qHBDCPVnOhnOrxkDS55Z5P5hEFOcI1FC6WPPZgTm08AonH7wcwCzMsPYHEGLcC9MEHYFK2tWJUCqvUn97dhf5ClPFwdzMXXMNUeDM8oSKifCeh9ukwL%2FmEJZ5zhzGE66Edy%2F7F9D8xvxVa37gArJ1t4Sxn6Bn%2FbYA6v%2BJPLHDbG99iHwhKe78KVfXnIdeywIT1Q%2FmFNoOy4x0BSRxF0QSVIUVncx8vwD98fqwq2YMWOc1HR0TzbxjuroyetgibQkY0%2BY%2BVxbOE5eBw5r%2F7h6PccixHNTMPOVtdQGOqUBnj1Zlw14vpBncTJTFht5n2c1DVlvYcO6%2Fk6P75rYn6YPCSA7fLylkog5%2FBg8NmG%2FDTT8c3XMAAjZF%2BwtS3dnDy1t6HgGH1sXWTjxlLbJKJybbaDZrPpRhUgzaE9ikuDYMKOwpsAZTW%2BJqoQjAH6iZDdEYVNkuZf3SC0UYM1Nyq8tFpb2RUU1xriptf5xuTveHvUoC7C%2FPFhse7n0zsSZzh%2BMwlMb&X-Amz-Signature=dc186232e43a003ddfa9498614705c032c33cb238925a393cfd02fdcf933cdf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

