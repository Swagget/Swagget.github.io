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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVADBIM%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T171709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKty%2F9%2B3GIvP133OrSqJVe34%2FgXGcj20WCLTEpfoNJYAiBJPxczN468eTPsQHi14IWD94mXrQrau%2B1ZfVFlf4ToICqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtv5HbE3SRHmwTVm2KtwDEI0DdiPm2IkBcnuJ9lo%2BXNjpnazamSjLk14QyRcu746X9nUu7342ufh5Fahfn9d2%2Fq0QmwjK%2BOCbOWX17iK8yEJrf9FOHWtWnmtVMT6tZ3EQinyHDErnY0kdCL3gKAqG7jPrEXe2kSuHsjn7IDtx7R%2BLzgugSW167Uq%2FJfT1smPUv4Rg0mFt5oN48Qrlvqv9Sqk8locSJkd4l3gWQjxgbjWa9rpeB3siZSUPb1dKANfXve137WUd3wJWBg8m3pshaeoKeVGj0q16r2W4vpiv3qhD7BUAlUKYNP0Dk02opcAyr2AZfLdQelRD9LZp3NjMrmrx1h69wMyVx0Telf%2F7dhvLPGc%2FnKIlcuxblrbt1mqhgap9OdE9gvf%2BQcJDHk8TjfAxiatqKDJUoYRstEQ%2BROUOSXyvd2ITphZczdEOvVatXPvP%2FDDZFMOWgLJ3YBbsNc4dBUZRCgWvbLxR4u3LY2KOqcDrhBIwkGsv3j4YM0WKXdfT9wZrgRGbsuiWo3bS9kDuW4HbsKm97zxb2JjYVCe44bQ5%2F0a2ugEsI2AzzzZzbBp0AKjE9geX9EZUpGR9B3692o7cU%2FgLn77JW1IQaFXApnIG%2BP3U8hMu66Mq1wVSKWN7LhQ2i%2Ft5TD0w1%2Fmh1AY6pgEymMaNVdSnU186wpClPB1jQLPQ3hwtaA4AJf5KLw5z%2B%2FZlpt7F2ywM2gLaXkgHV%2BVZKj2LSi48YHybVxXIpK5vtV%2FsxjQ5nDvO1t1dNF6GAMKLUdIusKfEcknv1elHcTQ%2FUalaOtuLDXJlhirBG3ZhCc6V0%2Bzg9lufyFTCL8WPlW3XC%2BjuVxq1UQAeNbHQHPwT4UXpBNaHRkOHsDul7u2Uc9j9iOMa&X-Amz-Signature=5d18702a96a0cad36c89766e0337144b1a38f449d25ef312874c6d2fe366f4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

