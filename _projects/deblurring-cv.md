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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF7ZFLG%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T152121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0MuTLLJxjYyA7ApbxGZVrNhVBbL5LC9uTY02TKa7EpAiA5DcBIB4pby6t%2FqapXU1Ovwunb5zYbZGI48VUGx1myQSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS9Eml%2BF%2FqxvCwL91KtwD73t55IsgYPls4rJNTIClhHhmLXX1lthetce%2Ftb4OjWoj5vGELPJpe%2BCI5%2BgAUn7EPsIAA0fBhLTpYqQPZeP7unKJrp7mDKzuYzih%2F6y3FaEaM1Vw5KM5BIzPBq26CMu5FFJDIldJRfog41mT55MXykVyYr97URQcR0QM%2F5XmT0%2Fx1RBf5pFeeajmELuu0m3djeQ%2Fka3IJ8EjvFQNGpdm28G6R4nyds96GqtWQUmkoy%2B7yUOb2yr8iaYnoZ6q7s%2BhzPoddipvG%2FKuSHa%2FJ7UOj9I6UVZNkwhcBb7XypYQoJcI7EPVu0iNsI%2FwhCweb0C7fOAoAaPPhunpETVJvU6Spj68QTzd7msyNiwI92QeGpf4hRShP75nBVLDrx9zd6ydWsjyoCYQYXYFphbdbcLbxWTYnjPxxG4aRyFEOkZsGTnhcIAM6JSLOdnCuR1GPDR6CQdhYA9NteKLu5whlrhkKMO1j0a39JZ6vK6tGTZ1hgEhslVSVaSgI16vq03JU8iwz6Dh6EpgXOip9Nzz8o3gnCFlhwbgoKmMbo6WbjknwxQKMphK5f75CaKrqgZZ6ukimeG5N9SBd4ELGjT2BNjMZMPOD8jTpVgD5XKVyuyqbyLuJsyd6MkHcen%2FOOowu6uc1AY6pgGszfzq5x18bb%2B8Shbm8OGydCTyoKk7AOlrz%2FdVLu9FCKWbCa%2B4cOWortDiVXZzh3s%2F0616SNvczWMX9MjBbM942OlHuK8Q2BZMoZNiKIUWtLoYXGOAbUentyZOUwLCllM6FO7CQ1h7rl%2BaesggZXmxNHeksjWDGgdqGIrAFtoF06UsuSuQ5%2BUw%2FQtIEjNnajcBO5pX%2FYcq%2BQuEKhY6p0w%2B6xpFYy1x&X-Amz-Signature=cc8ce2b735f316cfb604af5610325ad54895eaf3581f61e0afd2bc098fbc660d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

