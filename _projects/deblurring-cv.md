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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARO7XBT%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T175503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcZouRst4HFCpHqj0KiONN03TIbz5QXJmjxi9pbZCgMAiBmb3%2B9HyHbvbztFzm5K%2Fd42PrceaPSFE7oQMJubgyHyyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYuAjD1744Tm5AvqeKtwDV3JEGjcEQGKUxbXjXU5RCE3E%2BKQbZz8SG1PutRoK84x9bzYRODhCkFdvoTp0V6IBc0AybZt%2BxSJHeSCodoc24FmBBr21shB1moaLQUCJoY15yv7%2F42H%2F%2BJZb48U1VLUzkaSLDbZlVw9iVGnx3TLycMYP3Gxeoy1ZcOBHu1R6D%2FMB7%2Fvitk2XNpI2lzW9wg5FCN9sJ0ygXs%2BrVfBsxCLejb7gtKe7wgAG976fHsDgBdNXKHaDTYNX%2B26O83IKDgmDycfJzPNpe6%2F%2FzAvsPcQokFjbxASp89CAHzDpWc%2BSo3Cuwl75h8ZhNvgPXJVDAQD4TFZKwL%2FrfoWssmza%2FjAj2psOzoAG%2Bbz0TLzS%2B5CICyujR77UdQIiUGMufUUnH2%2F3YWyzJh3qRIMhaberwBr1rko%2B%2F2xyHVQFfJ2B3NZ1ZYTrk2VqDTzKvdgr%2Bx%2F%2BRzQuZznSAcI1fK4sG0xzMrD7KlfRupLqJ4ssKovpLoLR%2BnR6%2FrBAwEsqZ%2FBkAhPnFdeGcXVeIUIGjYh9yPg32bZeylMVPgO4t3YQVSd0iQZqOAO4bTXM6x%2BMcDJ1J2zNUk4%2BZrERuCNRMpbfnY6mn8SuSEBW1A2L5bTFkZgoWd7t2nPrSrJ75kdaht3JDpMwjsLs0AY6pgHYhErEh8Tm7KEhvmhUMzyukQZKvLgzOGtzbgUUPK%2BBwFTlB2NHv451Wm6wZ%2FRTJpHSh8HXVhJYcQwWMWTHYCAluX29SqLKMDAUVC%2ByfdZiOGcZpeNVST%2FVmaT3TOxl5zWVATVXTqKBE9EqXgXfeSquh1QJwMvnjV97uJt1aQ%2BS75NqgCxsLkrunJIJknTmFmflExBZN378O80yhzZnbK%2B%2FcNO3fbHO&X-Amz-Signature=289c7d53e7a5abecf2914508746f57830423ee52bbf849dda87f8aebfda048bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

