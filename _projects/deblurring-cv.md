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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AGBPIP%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr8hRj20QZbqW2sduXVMNjcxU%2FkgVeyS3VbyCqxHFUBAiEAzhmPNb2jnyxe5TuxOHAQzI5Imw%2Fuc4AjwBho%2FcvP7XkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjRDkNWjzkL9kHVQircA22Sj1eCnnDl85hhKQ%2FEXMkwKmYd0RoEDsDWibDbXSu9rilZkHAkAcMotmwpJh%2BKyD%2Bpb3MZmR7y2m5y2WixkfcCHjbcFt9b75KfodJvdmI9WCXser0SMUIzdmRgRNbgQyBazTpuvhpjS4a8W76FMRcVEEEyEPtZbD6smW%2B%2BSTdsLXkV%2B1lKw7NXDvKNPpBlMp9DPqjZamk1DpnYHYvOEibVIJ6Qv%2B2vRsKDcyJj8%2BSMYdq6bZUQIbn%2BPMhNkxBWFg%2F3dw8PximM6ciARKkyLJClZs46rEszCbYmnv6TW4lXEZ1Gm0%2FOCsBUCv%2F0cEFK1pMVaG47oElaMmaC7mooAG3ABaJWVMTaIkFNZ9bpq%2FilXl%2BPCyhzthcbLwBJ4zrPEy3N5FmpupobLsZJyk7gLkFYxjrVlouwxdUZCE5m5MYr4cRwoxXAmXjgYzI9oZXoaSBAroqu6zKYaTHpJQw9Jlq4MIwvivyI0vx6b4WVc6AvQ3GbNjNQTxYkrno2DpUR9xwXahHEtD8LUtdb9aKK67RgfNO%2F7rztoyAsInHEA%2BMUO6k%2Bgx3Vud9ty%2BT0Zb56x4UQ7pewycwkL3xDqzX0AI8gboxVHthszupw%2FCl%2FtV6JlfZvB2xLLWNzFZVRMKDvp9QGOqUB688MVprcQZCXdcArMvSnHse313w47aLWhNMREB0nt9xv9pmGhBUZih4tokQlhFcND29%2BXXgFL52s9POz4Ayo%2F6C77QT7zgalM1jW5am%2Bzy1e6cPoIWRc55d5iyrrXk5g0E6N3mlWgUL9amxS%2FEgkgO20eNftOxGwDKmj%2BtBPxsHPD98Ydinab9GNjAZnmjTV215sZIdS9FUxZLXRF2guzVT31qvn&X-Amz-Signature=d8df5ba2195f92f1b620adf14355b5636c2e467f52107461f8b98abd02db2f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

