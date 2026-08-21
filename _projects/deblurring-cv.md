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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22GDICF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T052053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTQfzA%2BnU89bJVzgFHPP0PGCsrqLCnLqyMNvu%2BJQY3WgIhAPvcqAx4Kpih0uwrAcUui6ngGcPsQijiWcdzDRlbnAMnKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrvmDudjQNx8ohRrgq3AMi6XnmP80M9KWYXGqJTZi2lUp8JKDcRWcRbgkFVfdn3j1Avoov%2F0XjeZdKPzhZLw0LcjuhLtUKj8E1UXigJfFFJuqFqvJ8SGtMvTr9inkLAjvP3karJqFmKNgg5gt8AXhLj6u3yJ7EIoml4QRRxIBGDVLPlr%2FpAY%2BTHbyLLyc%2Bv7pQ3Z1LYxy5a4GA%2FVMJJ1zi9d826rOiEGxNS74QT9pKzyfEMqX1dUa6ueohj85OurFaXZMD7KcUbI%2FUC4zRyvS4Sv%2FE4wXkuNLQs5YDISwK%2BWJ008Gl67sXQev6KASfNDMvWyy%2BGoIwkUyXkb%2BmuFqZO%2F8eVaLD6wYaKBOKsP1D0K8Q3eZ72aeBMCfTU%2B0HD0whxp2m%2BIv1Do%2FyJUOV5JNcVHE6gWP9K5v2TbtJdFDxEYYTnRYkXAvqxt9eH5sMJqqnVeSxq%2BccUz3agNEutMkJaR8IylkZr%2FKb9%2BUSkdB7I%2FAhzawtudvhJr0N1KhI7YjPUHDNtXGIsbA35RNesdJAzZbqEjqktzM7i9vhzb8ZdBNOWuEc6l%2BAGM%2FNFHMHwGpSjVLSFGaMlCwHdYijhSLP%2FrBxXJDc3EzbsSEQgUFjwoGaxoOGYOQP7SirJ%2BuK0pTW4oaSwBEcuBs2LjDmrJ%2FUBjqkAS9TCv%2Fl2XeZc92MLrGxJ3mmfcHSKK9LFUI3FIMIRBX5l8TB5c2svs%2FzxmBuMmaCr2SjhBrnIW5vSd0YKkLqo%2FcJ1Zdw%2F0H2pB54AdoXCZXFUiKQM2H1WS5gyDbfYn43%2F%2F6RBgzHfX6cCmXzmVAGjEPAbuHggPiEdvu%2BovQgdkzWxFBuVrwpLZDdGcKc5s0cFgQW6MAgEhMSLBkoyJeIz8x1n4ss&X-Amz-Signature=3972d0c19d21a784796c5d0c7f4b79f260372d50edb27641a33b6e5649b8671b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

