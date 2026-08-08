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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLMJWN5%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3HRK14pSnpwTAo8X372CNE1zhrbK1CKw1FZsbkAgsAAiAXbUEPjmModWvjKREnsSmU6f%2Be20P%2FsJUgETmD0dlMlyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMuX9Oi3MqJSeSvXJvKtwDxWJkkuW%2Frv%2Bo9XxZazMO1xqI9K63AuU62CvZHBOIlymT9tpLpI9%2F%2FysRN2D4%2BGtBL4GzvcnBf9JOrzRRv2COK9ju7iJwSVpAyCpKk5UZIqnSeRKCxbkIp1b%2BiIiPI0Rh2rbA6MQDIMPw0itBsJ13fTsAysxShIpp3ZmNTvWmnKRPblekoPTCL8lkVVgmNVNMMmkVKmD7PWg5%2B0O4qQeZtvk3S%2FETUhFfeaxbeoR0%2FjmJngjPMWBk668BeeuT%2BpXy1POqTTIFxISizxLaWLjClYT2SOlMO%2F9%2Bju1VxQyvl3IjElsoQ7DFXPMAEiq7M%2BcbJiNyLG9cFS%2BrNilCuuFUiYmbOqDSKPHQnXWLbxxNaCl6MzsC9RfXtflFaggx9hl1A%2BOtKoxFU%2BwPNxLbJa9B2mNlDiIYM8Bh2sSNt%2B0Wq3DgrJZaHVz7iEAIXUQQfPMjAmqxKsIJX1%2FKoX%2Bsd%2FtHh1YFddof7DEavSaSL3auWuVXSyWdqHgRz6y4cvQU5f%2BG0suD0%2FOAD4kLO1IBAhwWKNjOnQyoUe5qIc%2B4nvjMKKu%2FiZIU3%2FXJz3J90gDfUQ3%2FbNZ7OzRrAi%2BZiWbV4W%2B74VDBtiNL3JE0cFJviE8rTlHenzloa4Sa5MG8JPgwkO3Z0wY6pgHdT8fxSZqy0cnBgkYVWmkPQiRMYoFh6h21CW0IvmqvLzFBxztM4k8AXkGu8c66Q3jL%2BWDLnlJ2WO4f0LicPJKxfsgSmSFmel51vpV6Xw%2FLiVG6bEcuC%2Bv2dBgFbc%2B%2FU0WABZqNEPzh89TWIrSgXPUb2vaSQLp%2F7xaPJqiz82arizqaViVlCrc%2Br4rkYq80u6TdUFXN68%2Bjg%2B%2BtRWq8dqQsf7xStQve&X-Amz-Signature=74e1402b6ed02f0fbc9074ee21426da1ca30d492fc52ce50e09775386387c4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

