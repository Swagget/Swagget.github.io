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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISW5URO%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T154637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB87D4XjqAPM1ovBy0UMpxf3DDUQJJJ4knq4BkHwzR3oAiAK4K%2FxRAbHqlwtNpeBI3B18lo5XNsa25lBr44Dw0%2FzLCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMX9oSYgIbc5eyclifKtwDY81Ie2eyKRvxTQsCpq9IpYvkCw1mF%2FenzLGbO%2FtD0twKxuV7lNIDAp7QLAxnilhj2sQcZEsGKkwAm1Uz7na2xx380gjIQzg%2FfISQOJZcgpq%2F4GehUVWW4nScBhLKWeG%2FChYSkGD4yFgCxbl7231DOMOVV0Rd1rfSG8EfPJ%2F8OcYUJY%2B6zsZ8tQzr7DIFbN2rO3RtUHqvf8w9xGo8l%2FPBFP9gz7Ad6hBh9fHX7ZovSM1siX1Niyv4VO7g8vY07LsLEXENNeECmQ19Y5%2B1vMPYbo7tuwpjQ2yExt4bqmMQYWoQ5ihib4OsGbkqsk2wx0fmCMIZNefK4lqTQfrOpwTyEuT8Wb1MMQ3k%2FmGM6zue9iJw640mw%2FNbike2R3v%2F0nO8W0GgNolUOPj1EAyO%2BYek3YuUFJVdMPUkA7w%2F7LkLrE7tKYj6hae8Pk8%2BRe2aM82HYY6edu%2BNEeJUaTrZBXHIhEnKOgNRBysVI8rLyYHWPMASpfRDWqgnlNV4qgZo0n%2BQ6%2FnDCEavMJW7X84uOM2dgwwspurwkwjisapF2ingMoOqFsSNjXIkehW8YzeuYkW0L4Zf5cT8WGwmTpNlaL2ZdrONHZkvKhyjleq%2FGL%2FJDhMnmgn9kw85NaQgTvwws6yf0gY6pgH76s0SsjR5nFjGqXv23ODBkkvWNHiOp02kk8k062%2BnksZmcRezyu8zfSadQvwkTKDp1Jjj1NYzgA8cOxEaJAZoXy8XnGA7WFvl%2B%2BIiC0%2BLQwYzSpyGaEh58pwvSytJp7BmGlvGtKWLowrfbq8wgQLbzxRKBsObuy6DiueJdqhyL4LwUGRMMqVuKfNOjaRZABgHkDZoCaJv4UVWiEjPepJ%2BLJQeoQ5d&X-Amz-Signature=bbddfce5e7b65a85146a713e3945ebe9c258af50814c12b3b1cc204773f7890b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

