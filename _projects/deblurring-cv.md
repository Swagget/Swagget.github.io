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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZUNFQ7%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T111729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCGKteMEcFCAGEqbi8tCmYfEJgdGGxJpCHBW5zclWJsQIhAIGlRRCjgVG6aRVXzJLi7YoqM%2FEuDvydk1Tm3pPea2oxKv8DCGoQABoMNjM3NDIzMTgzODA1IgxweLQYtNDFOpLeunoq3AMZRAwRg3qHMKArYNKEdzTOrKUFDFzi%2B%2BiSCjSAw9Yh7OUvuO1qx3v%2B14QCw9Lb5b0Je3vHM1e1%2BN2I35m4XPj8E4uk2PLtM3kAigdiwqu0fdVgrBo47Cu%2FzZdjfKQ9UxcDZsHovnxl4Ucz2oYcB4GpvS%2B6LJZqzh6D4B3Zgz2QDrM9Rmmty%2BprNhRn%2FIhT0m%2B2WRAYQS6BhFYslOaXYalLyb%2F6JY%2FFem39XTWF%2Be7vYLjFyuKZH7muu5%2BzyU3b8aUcwXcdr%2BUgMnflGwjVjJ0rRo%2FopheorP197KHJd0SH%2Fiu7gRDMIrcOsiMdBbh2h6Z9BRZEQ7MvwDyTEM0iKqZmSz%2B6FZxYW6bkH7P3zoW%2FyeS4tgkLDPvaEg5qnSQ%2BiycKZY%2BYmv7L7yD4nzg9p%2B2fFbP0UTLeGz2kxhIcLoIXnaK70KyQ4apwmbo7XOecLj0BRd2m%2B5ff09G4T%2FlA1QcHDT6f1fxSV131IvJzL2PnWyiAeqi60CCUdiUj0g3fQvuS4v%2FUyCnRH1a8C9a7Bpcborki2yHPDusBm%2FIH6Pd6SUx5kEdg%2Br0yumU3LbfRtXUtDiUKajTPfCGjzvS4oVD4uzp5MXZNk%2FtJI7Xx0v1cIxpu7pBcRBn0FownWjDO1NvTBjqkASqOFtAnAwB3mXbE%2BQVQgyI3SDfjzszsqj%2FtLJzJY9XrDHmvG9iXRWsBZfsIa325%2B9L0KDksZ6ka1jFhrrLg%2FgyVt64ihU1Jo1pRoddWs%2BMiHJyXBBwbVK9QJvtZOFHRtRRiGzwyDrD%2BPFouxW7N4EyDMHg0GBkdLNcbImeZMK0NeT%2F6d0sRoE1cJLtBdVu3pHe4VS33ekeWB%2FbnCQrNa4KG77pa&X-Amz-Signature=52397efaaa42c62ae1f7724b2c9fc936ad2df38ceaabfc75fb3f50c7043d9b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

