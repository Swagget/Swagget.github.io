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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVSREYF%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T164843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIETURYmA%2FYAcU22bvULQaqEnfqUBKpIvjowjo85zV0GcAiAVxDI8RAXdz91qRfkVr7xonliUR9PQTjOCBT%2FziFN3Pir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM39DZcuL5CFT4KFx4KtwDPYmQQYVZziPdQvQuh8gEcusUOsfAnwNkJi9t%2FQQyGkCklw8Xlx95igU73CMvf%2BV0%2BqDFn85nEv9%2FaxUpAe3KHs4zHbn7NpvtRY83BTV6jgV5LboBpJ9FajMjGkZEaP%2FD%2BEvfQhIDHfiOlW2htKiQCLRoMwvJXKOr7yvq4bmrU4%2Fe25kxqjmodBgsVnZVl8D66H6X%2FQdSZU%2FjjAywc1QB2gr64ipMtSBCFMF5dkupi7x%2B7toBc4tXZKk2cICVH4UBtveW7JmOVCkgCyYeT46LU4gdIVN6sRlnKuwl%2FjsWY8jWXKW5GiEip8TwR3NgQ8qSA9bCK6vqZOjqFJEZj4%2Be0jzv8ek%2B1cZ9OQ44RdvLzRB7j3eAWWyee1hAPB9lpb1aL2HJTuGISANlE8caop5Z3ZoH0hKDastMnPrfl5vyqYhkKkwLeP8pwtE2CwFJ8Xg6m1nhibFr0I%2BZglGS6Z8wXy6GNqjq8aNd0DW8MkQ1iBrBhIKE66ZyXIlJCo2ppoMqIUYNoF3mYi9peMdJD%2BrD3SQL2uOhW%2FS9inMipYwDXMJwdKFTLyWmfykSX521TaPMBr9BfpNIDUqfd5jL%2FIXzdDiBDTyqJ4hBvaPrvD8PgvdC0bshf6hwgT2ARQMwtsCk0gY6pgFcfqdwhS1OSWGary5noG0%2F4JsKZLlS1mU2MsKPkNv7dq8JrrqjQBlUFZHqnjw9vF2IhfifSYns7WLIHc%2FZRunGtiWMYEvjvwFMCAcnyoKOxId1kZwjkkoRsYHJ9VBwy2DiBgWgpaPfq%2Fz5uhS%2FM3oyD2A%2FY%2FzwW0WuiwYgdUQkPIRYLuzsmOFI35ZBQRlJXZ1Q0M1ubc4jXj0Ct2oN8FmHMf6%2FuIsN&X-Amz-Signature=1453f88178cca80238929f661d7f4575572c75006c2889466a6fd2a7cf0265d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

