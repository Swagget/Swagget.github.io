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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLJX3M6%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T163940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCubKCdWwx%2F0PxdLNnfOvvUTtmUerrCYz7nB2%2Fd7%2B6U7wIhANGvB2QWRvCSOqusOF0lxFg0YUI67mGKBhWoZSBI62kvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4exaMFqJvYs2fhlUq3ANOop6owvHHTrMUi%2BI7tsgg%2F5G8uaVByAj5bsK54H7JXxxLcKjY8PItm1U2cpM8ZGdoNzlByVVB7Zy2GNYQiBndtKjdKj%2FZlISxzDC2UFCeKbjX3xxJt0UhT4SWoiD%2FANJRif47wj7rXVpQVuSmm2QuT3xPEuRTnJcJW%2BNrMkUYNp97RWjOlG%2BvoFx0HUsgKAWyDKbSh2HncRVBHo8ClxZlLTgqWDMfVYS80yO6mRqr%2FLFNxcEdYnmRx40yF9k0gnETF7BcA0PKhHBTLaUc6BxcGoBDIgId25UWyQ2UqHqNz%2FmydUiE4EHxp2JpjmmN4zPd5UoinG2sl1nb%2BjO5lcC0KacdRls0cQ6GQpzgFqMX7tNuFqRJ88gU2sBgNtVrIe9VEWOG7R6gWPiaxbFpZgQzzlo3u9h87wf%2FTNtK%2FyXgtslkGCwX%2FenvzQyIeDV02SH1knNg%2BFlHkjP4b4Ga3LeZnWwndyraUVTcjS%2BXdV6Gpkd8cDqjBHdHE0EIIgYzr5nts3cJ3fwWXdAl%2BMiKP643uKEyy4pbWm6PDgqPwpo5mwwfcdKhg4tp%2FD8eqHBmp7R5jDYqrFjlUQOqKtR%2FeZuncWxGmf36jqt7aS%2Bow1EKibx01A7YS7ZPNYEnnzCRwsnSBjqkAYddF2g99Xx4khT%2FmTFiZ0X3dq78KzWrIbkJskIu5QZTKLeUr6Iz3LRRLKmQxvvdi3cb88WWQhLhJeOZ%2Fz4Rw8exUVjLHcPYJQNjcPz8Vhs%2BGwk6LjAswi0pyzHEJ886MZtgtXckb5VSFkWgUFkyTvCaqOwo8lDobfx5agLerMJGXYk0ZVE2dFqZC3CVHyjCafGQt%2F%2FjlJOD0z%2B1cxCNDlR61rIw&X-Amz-Signature=5c2767301e61d0976db4c000e027b1d10da67832dc34fbd172f5a21837091fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

