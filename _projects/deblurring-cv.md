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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH235OGE%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T063719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCt5M4giQ%2BU90Vb6Rh6oGRE6IlEa%2BTlQ2ELJQc5TqZWFgIgZXF%2FtEoXspgnSl55gW%2BPWT3Vat4WSjUYLYIklnrDumQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKHXuXeYd5mMEZ63LCrcA8%2FNP1hXMwNJl8x10YBe5FjlbKu2%2BELaCVUu8tWz6TDfsU2kki%2Fs9Fx4tAYMhcwBtwhr%2Bpjd7fXyNvlTGp8UkxoC8owEhPxKLf6iFo%2FmN1oFss6yvATrLbGKWXYvKxhlK1IahQ8Z7rIZ1tEZn3b0OkjpDru6gD80hDEkUtfHXqfDeQ9YKdw0DVn4rYF%2FDwyLk3F0QeMXGYvRhdjYpRhwHuNFTScph1m8CnZu7TntK3TCfx1rg9eC1c%2Bn1WCORIKbUVpXIpYOKP3ke4tLPb0sA9Aeu%2B%2Bj7TIgMfL59CbuHbDvh%2B%2FVcRA73BVMRXHVFMXQx%2FNNxNfsbBdaE5paQdHWNAv2t0iVKOMtCGSj%2BaZn5E7mkvi32j7FZYLSUVdT7yNogNQhI8ujIKlQDqVLGhcWa0wiqAdaVynjzZ7don%2BXkf6eMap0A5NmbQWCR2dTg%2FZXMN%2BiOFWN5Bx2FmObGnqfXsRMj9beCSRmHRiAdXtCffCbtAXnq6oiZ1k8t0O%2FZy5i5LOgikSk4uXjRd%2FKeD2BAE86vQVY1H0ItxDYXqJQbABbmuHVGoJFghNe0Rw3CK7wgySQEgeH6gUL9c8A3g%2B6gyMtP4kAgjFh%2Bp7Fd9eMNhjKu%2FhCZPvR8piobUr4MJOX6NEGOqUBqOB7seIF%2B3i66Lbdl02rGTcN5pcjV2YgRS4VVW3Nk5oAs4%2F1LiL7JxFzkBhcBL5ka2AdJfdg%2FB%2FhvoT%2FBi3l2Kb%2Bso0SGE0XOM82tXgCrjUnz4n5oTpuOKET40qrhTlmXHG6ux8aa%2FyVc4zngJlLEZ9PKHjjVNtN78v3csPySVmFH9nbzGuvoiz16YtVsalLNlMxM170z1OJ1v98V0JItSrgpMrr&X-Amz-Signature=d600dbb934ae246a23691f7c7f4c7a7139f2b7cc7819c8a99f341c777967c465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

