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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6H2SOR%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGtqW4HiVtFvGIZogh86NlDBnlWmq%2FiGEJu60ZFwWN%2FtAiEAniL8Pe30VMxawIe4YSIXDcJnFo8mN0GKJJXyyCIKT%2BYq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDASI%2BYqRRS%2FunT4ElCrcA0TXJjDsjINwZqNZ5qXl9RzB4dmZZrTFmjEapCug9XJOa9p%2FsAufYa8XNN%2BvH%2F4ATtpVda36w7Ou1vDUgY3riFbUMwMyyhRHPJlgYZfYedgaXMk088diWZdmeSniDflCdXLNaHJ19NCfO7xkBXvjS17hki%2Fq%2FiQTMBtnjHCF4WMkEYG14OUBEY3sq%2FmNbSumBfcL1hPowe1G%2FG7zvrV5YbHbpkZvtf2FGFgTI6uufQ0Py9%2Bh%2FPd%2BFw6tmNBr%2BurhSefTqj3ahl1jv1LhCBx55IMH6vwWNfzz77ARPnk9ukBAmrRTco0qxQqSkIyE6as1p6ndXDj%2Fh6CTtu14G%2BdWHNMfZ2K%2FkdfufERxjYXUQSa7VQ2owzVpxM8IhOoj7sR35myobyPEwC8%2BdmVV9O0OU0NBGWK%2BADijG0Zcy72wDobNRmmlD9u%2FUJLR5KoTQ1f%2BrBclDM2cSstLcK4pmYqLI1jMdZV%2FSFkZHIUWaJhVGQMwhukiRzfnLSIwRD%2BlbHrfgxyGYjwPX%2BLguHCImdjsfLyjo4XqkeQIQRWIRdeEU8b5pCQdC1lQjrYABZID8h8QPCYjNWB2RX5BUxV26jj%2B6OmFZRuUKwGWMbv3IqQnw9u4KkVud0AGRTdEJihWMJWqjtMGOqUBwXUj4DD4azjnEzvA11a09xcA%2F5eWLJN8wlEDmu80gDJEPIMbr2YC1%2FH1lAJc9TYYnrh7XNIarxT6P982gb%2F6s9smykYEVK%2FBcxUlqCAaC4zqDCSrTwr%2BKHvczcpi8S8S1BkSObColb1n%2FG2aD2AD2hrJ0O9QfNILgNIyDqkOWveRjgfXcObO3%2Fy%2BYGAzeDpeMn3kB%2FrPJuG8LtgI6z83u%2BpZxekj&X-Amz-Signature=354558b2caf8df2eef322aa75d2e5fdc84361db56be6c995365294ef45e85e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

