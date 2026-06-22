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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY545CW7%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T222927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBeO%2Fz4t6DLImpliJyTcT0FVuNyyjV9%2BrBzVZbXTdB02AiA1FwaC%2FxLsParsEvE%2FjG0rb1sTiCIKbO8VrwCyqrLMbCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMeA%2Fvm56r%2FZJpRTDAKtwDAbz8mSKiK9bOyGsucYy%2F2eIZGxyOoddp8TvP0dbYndYS%2BAW2NABdb79RS210iQoX3%2FyD9Zy3i8kaURIYCg0Njv6MCz8fHsSo2fUzEVFr9kOW6%2B6Hw7R%2FjkNQahVKtw%2BUY1ACUbgF54Hj5CgVNvirLXpPUpqAYqVi9lDHnECtkLWICmyOkN8FTtN0PxIaSExHVMJ9J9OJJKloeVRTSlIiYMJFzTp4kwDk%2BTRdhbNDQgu%2FWmsDWKkdDtiwRGDF6speWdtSvXJhj7C7S1%2FHFF5w4p3dpRj80Sdm877Y0NI6aq2lWw%2BJeYL1NSUb8oGzEWEWuKmH3IF7jRS3A6hDMWtTVwr8eXB6JBQVPYFsXusXHSw42wk%2FJrK5L7bWyinao2rVLdvn0oElCKVMDShRn1VR7NhlegWYmzFJF9a7w%2F8k2a%2BfNp4MurU8X3QnDx%2F3z7vcfV5lOzwUExYFFXBWsFcF%2FMdkwq9QSzyLpPDpkCyFoHWjYm1s89WP4eUnSzQcX22v6mpVM4mfp10cYpnEZPqTc0y4bL1RmudN4QwDnV0zWx41PgeKxs%2BG2wHT4lePiOA0QlwRNvAnDdt%2FtUoDxog6OqI7DlzbBA6bOROqBZ7vJnII%2FZBtLqxXNfYWoHIwkpLm0QY6pgEbxftvJ4l6A5GPHzqeZB5Iv7b2GtnhJMOG4K3ZFiz%2BN2HD1p0zThUzSyk%2FdI7%2BPNOMlI%2F0vQ0GZClP23Nf61LkGDMKyqDL5%2BpbfFVgO9v%2BLGo8yzz3SoXp7Y8rwELSSdxvzbIskE78fzpHVEzEZ6Lw7ANcAATCmL73zLGjsYLen88zSTXsfB%2B7Om%2F8fS2PmVhKxv%2B4q5wrwDB1aYwkvsQsxX5QsCHb&X-Amz-Signature=18a4d398c9f654d9185b93f096c71c13f23c6d3e9258f3d55a6be56a96cab33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

