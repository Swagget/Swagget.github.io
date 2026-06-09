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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Z5RCKC%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDhGKLdwA62JhNtj%2BEx4nMb38vTWIlzgNlndS1g93a5VgIgGXYXXAh0r62AIDk2WOMu199DalDJA9dMj0ZMEtZoyG0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuzZzLX0tQDZLVgmSrcA0OTNOf%2FYQXu80k%2FM92cHebJ02wRFhFsp23vo9RAbG2DmT6pbdhoRpeu2X0n%2F0NwRhULILPPDtkPvq0%2F5Krdqlg0FHvrPJ90z%2F%2FaVhq9DE5koQiKe2u%2BkMk6o6fjUZItYtejhjCu9s5bym8HZa9l8IjQ4KKJS2T7D2Aa0CwsXCtm11pZZmvnMAeacC4%2F1jVS8HPxXoSeUYQ9E8AwwMzBUcO0Hk5xB4C332WspfKn08DX%2BV1OLGdk0Y9edlTTweU4bhFrozLK69mvH1p4JtD83NltlrQ6Rzs%2BUOVq%2FnEPwF%2BPbST3ob4okglpTkwuFX6Yx68I5rQjExJPji0nPn%2Fhs%2FjLTUzx6TR2MX8wLxevTHQxFVriYAojaagh0f%2BD%2FkEFS5DfQe0Uceza1BwESZECuxu7zTLwcVI%2BPeM0AQsODVrCSHS7BM%2Bc89G5%2FIHq37noZjc32thhNtThshCdsgZg%2FTdboq3ttuNM8GOu%2FkbF7fD1aULJ4rDbe3A8sKK3m%2FLoWJhdamxutu98xyeXAgilYSU6eybwAjrcQcvpcfOytpVYT%2BAZ8RQQ3H4bYyabl6ybbMrR2aQCbYEg3F95nVnTdjmDHA1M5G8iIumiDC3BqKHEcWdDibjoOx%2FkHeaCMISlotEGOqUBEeZtB8sizs57CSqb6DchuhsQt89MNhG8mO5oOF%2F%2Fy%2BjbmxSZyMlPzcTTPt%2F%2BMf4Kyh1JNJmkITTJC0r%2FJgpFOagqEDA11jjSLq0TarJuI35X0ff1kY25O8awVTn7QgBy%2Fw39gteTAC6Es2lGemncEeVVkEtdC9qCc3PFI6RnYuIUcWp3g6bhS8khzXNfrztJxmn16WpkGeSEd2lzFzpKKxZtnBQb&X-Amz-Signature=bbfab9f76847e2f2dca4a7157d0b0c5ea59c1ad9315e32c60c231b7fe46fca10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

