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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVY2O4XG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T153045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDZWXEtCSZKJYsJlGmfxYlqAPO7R0tHBxDjsV920NaJFAiEAjuHHmH1b3CiQ%2B3jpg6N6XNB%2FWy7eE5zJEsdliphGrt8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOcrdA0DPVdVBmV25ircAxUjDV14WlJj52%2FYshsmgqnSLsBspzoeBfBXoqZapcU2qnta5cHZt7zgj7kLZRlFnlEAj%2BDfiFijErNCsMCdAU2LgNa6WINy794mfiffHmHEYL4ae3w7u3e6qC0ZfuI%2F5z2LJ6vCX6hX9gi3042ReA%2Bakt9Z%2BPKWE%2FZ4mJMF5%2FbPD8Lma2xiZlbpnm%2FLC6UryQi66cKuN9rckdvHx%2F4S389uyfw1A6PFcG0CCib9dM4shSaeFWqLz9P7KuN%2FSUcqKBAHOdJej9OailB6iEtF4vWGdoQaiOzxRmimg3mvvWwMJ5%2FhnrLG0qr5b5%2Fs1702JX0NiwY66daVzI6SVQUM2EKNKIq6gPOVnxIWTaDXMemyzvWr90YUJ%2Fc1UR3nnFSukYCNUOMDOjm241WsYp7%2BmbUmK65FSZKf8AhX%2FTmjkH1%2B84hwpfeUh2pv1zFo6ogk2MumVNJa5KHYhYVjEdV7vS%2Bjoj6cT7Zzug9Gm7OeIB8fDzs21bpPrkWFcFMrRMRNBJVi4dv%2Bw%2BbCsTZ0QOacbalSc6jEe6a5ikij4eI8nUqxvG4EL53kpxADW0S%2FwcFEEDw8rDtX4BvM6nS%2B0EN0QVCy9zag5JrRa7EBn40Ze02SRsuGcXBEupNGk1UzMPHSttQGOqUB7fGMrHRBsB0aYv5X7bMLriIzYfra7WdqcZe%2FKE5riwxAWK5d1JJKK3OQ1lMlDNXNRxVWc99OVTKdMRNaDGRvYHDIwJJTISRXw0Ir5Rfj8xdwaBR3zbLT86KOHbj2Yp5bMxPZ1xNX6FBCWPl%2F3fmc%2BmLv%2F9lbeCtqYWlcZu4e%2FvC3WTSopI3f%2FDKYKfxOyQw9kaGuQQev%2Bj%2BVJQiZuNngCBbBWl%2BW&X-Amz-Signature=dc297e00e91b5ef901bdc0091e89f28f4b3df98746028ef9b070bcdd06032caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

