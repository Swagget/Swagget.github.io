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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7VXHY2%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T215131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBof6rTVekYIwEnkySxHoL4vMHwWRSDRA62vIQZtSKLQIhAMk64XYEz5J6gIdoRl%2Bb%2BFNxYHMRke7ly5nCA60jdIblKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmFlRPzXYJdjXxTDAq3AOiySHd7Apx7xuake8cncYksSyxK1pJTb8uQzwzybi5zf%2BqbUyQ8%2B14DkHvrZXmT0svBQcAxtjgF3gCeyuq1XKyqylB7SETTeGj1FusUmZqnfk5Vg4%2BNqUUWcZcFNjNDVW%2BAFNWmi7JQB%2Bx7w4VXRqvSOi7ShLoZ%2FeRB1YrSli0H6O9%2FF13rHbgU0qPIoeVyb4vSSidXOizriksjtpxD1z3BbN3scjdXd6PBrg%2FaGwCr7GAx3C4%2FsE99ujzEzNqZ1s1bGTsthl3AXc5qYgUEOroLILWs091IKORjPdDtE4ZSrevtRDZR%2BI2ofX7qIgNmmSj0tUWcNekvbu8Lm49QSrEE3OwZ%2Fdaq1E7NPOrs%2B5%2FEQhDhOL9Nzn900bKv0m%2BgwMiGg5t1fVALotdglVCQGaUg9Q7kI9%2BV7VGgiUh4i%2BZK8VPT6MCpOcviBjrhMlRVnv3QCIl4B2qm2YV3MNlotH%2FHQ4D3AGQxvsBzneuMQ81Ebz2omfSorQIuB4mABt7ZmpJrS1V%2F1BqSfy%2BKhvFUy0KIRzbIqIvgn1nQ1kwGr9yhnvVIMd4mYRMcyn34zCBifYIi6jfEG4b80eI1XiVm%2BhtxrLAQLGmQezomyiGSSQqKenSSxwa5juc4Qc0ITCUk4bSBjqkAe9DBFea7SUV3tzg8dhl2VcAzQKPmf5XsnLiW1w0nhpEPxEw%2FKNrPEUEU8CGxkl%2F0oMiFdyAGIOSaFcZYqIcgfhXbmdUaP9N9G9dl9dGH42OxWmdan6b5%2F9TaD9JiL4WpE9fUk2ej%2FJf%2FmI%2F4tJZTr20hVMwZo5J0iALJyiTwqu1lKJL99Vqqcs8JY8PLCGGMs6M3BJlq77YxGhptn0iLMCmJd2O&X-Amz-Signature=721dd2ffa8f42b0b0441238b34fcaec0d6a84762abb78935ac7228062e61bf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

