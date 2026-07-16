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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHRHQZI%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDFrv%2B7woQPhyWi2DrqfOcqmRrYaYxtvLLnNzZxgBZ6WAiEA0h61B%2B5pLvQhvuz8Y6jADLLBHl97gJbv7dfSmKY2xhEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGUmAcj%2BY%2BmqCqQLKCrcA09%2Be2O6wCKDc8gvqZwubQj6ekBhG94N0%2BeeJbC4OHswK0iVTroWb9xXgD7Zn3OFRbf2MTLQD0z%2BQzFtED1Vyn91mjSmDcYIUf5F9Eq1NSPbk3oxKjZR0KrK5SsheUyqoc1bUthC3Luvcfs2M0NmUQzIgXUyNhhRlSOwnphQHxIF0BBRTViiKMZcWHRPbqulmjs6ToZgDRXxF1nW2xCMcS13j4y2Uah1WUiiNzeMSXbPjglKl%2BIY1Qr6Y2wdxuhSpQZfT3l2bETcyiBB5pX%2FDHrVAWCnFLL8tKa9f8zj0CXzXqusfC2LKjuVuuINlw2u4ZttehUPq%2BLHihVghknVOSX6G5uAPuW%2BaL4r6i2i5w4wqRHqpkXFz8ZQLkBwLHLEEj5JxQ2dvMIrgO4OF1nLFS8nSJDGa%2BLWfcC9%2F0EUBrPEYRY4mR7kdK8WGKiQAmSPbk%2FcbMCjWX5nYHkEsNpc%2Bz5S7cW9KQZvpwcvGQjuWtBJ4%2BSliAgXQJlRi3bANv7HJLpzW5QcFo0I8q%2Bs9qdD2M%2Ba5Y1ejry5QtkAgAolH0XrR%2FhADZ55D6HEOMISzI8aHXY378mRHkHhx8HHoys0Ze%2FR%2BLpJ0E8pRbXmj9YYoOpOdC8UpoFA%2F0OsPegdMPfF4NIGOqUBIHrBQMZUmdHE4apx%2F3dJZ6zf0SUCLcdnRqTfROO2mOn9zbI%2FSLsEubIntTWSPYQgUOXPyS6HlSDKIn3oLqmw5aP%2BLFXlE1Fh%2FaCGIToMltv6n%2BY%2BiH5LBfvjbmeBvHTLEJtG6gOfHrEesYgGoYfG3uG7EA38FoZ%2FxU00WdZO3URP2vAXx%2Fcu%2BZ9qVYGiY6iJogaCXXKkTZGYx36bqcwOHq2PBm8t&X-Amz-Signature=24b54a3ecb89b226c6e74e59148d66cdc65c2fbc3f169a01b9f4f816eccd0b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

