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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCFHJV4%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T205135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEFwzQLvsLJRZg%2FqL5gipStxuWYF4tvzZlAi9HNxp%2BKAiBcPf7F5hgYLlz6hSKd0JiAEBntAqW6uKz%2FhColr62SLSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Y5UJDATu3UpY8JOKtwDbIzmJjGkbbHxQ5QbLSFwaSbKJRVNrybGlJRetsdudhIieYLURpK3xUcv6esAp%2BHW0Tn3J3OqINRdX277%2Bl8o1IpXW6SodT27Sx2xRpe8FaLGZ76dn5OscEbW4IOvzmaP1neOYEZe2Uglt0VtW%2BW1KpP5cptTJdKoBdGIl14rnDNpWq9VY9P7sPVmli%2FSofSGcFsFte7VYMM6GY5IXKr4ENLS16HL41r3NcxViWWNAt4CGal1BSuucRKiLO%2FjLwT%2BjGWkIhUuQNTkFRVswz45ygrBpGwb35tWIWVAPnVz5JlRybg2bx1i2A2EXKUDvO%2Bx%2FDMNH3t4z2LeIXMTe9SNihxXGvuhpIsXM8RHhdG%2BcWr72bZYovfENn6IiI9YcL8l7AoEIb%2FmlugBNS2kTgbZRqivF95Nn%2F6AdxyVQA4IYE6hWmL%2BzCyg2MQwVheoxVPaj5BOLxAYDonYB02mdf%2BnmdREVAG8PxgQQVAuYrH%2BncxIbJyQu%2BkYhm5t0lg%2Fim%2Fm44aFIsIH9QkOEDKFaFDGgatpdsxWP%2BeIWbjrHBej6JkaX%2BOdcIsOa7QgvaDf0poV%2FO1HXhh7DSZlzxcYSsAWXbXJMg6hlHtiZbdchhsj9ejoM0vp%2B7yTu90bp%2BYw%2FOjD0wY6pgE2PtJroTxbWlkGjk14dqUHR7INSelpvFVR1cDIhqtbNNVYhjiKssIZodpCeeqNs8RgSuR0r6kiNraRy7dAWgkl6QJcGyL93aEK0EXR4f%2Bqyt8CovK2RJyvrjErFNWoowUiJqqUYRjqM%2F3lM2FCls9kiZSpfFWh8G91q%2FC%2FIT00kB565qg9gxUjQSkSopHD473G1c73FpCELh9r%2BZ8dnVHDKu7pdPOd&X-Amz-Signature=5abccbe9f7294c523229164d63daaf15d1925937e354d6d8881a9930a7cd2215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

