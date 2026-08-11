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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATOUKAI%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T041330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX5z9xhsKscJ4Eqrs1Ca%2BuBKmZ4p9ZBXK3P3WXlvdChgIhAPtkoT54btdF87W9JKcZksqVLME9XcD6MzaM6PbEoDSQKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8ffvn6az6tmdukg0q3AO3ILRyZ3lvhqCaGfzhXiDq8XqnIb6F7yp3FwdvGUJ0Dyq7toaHiPO9%2BbKh3AUVQIPa5XU1%2BRMJGFaJ3%2Fm0uuwX1FqZtfrUzE8IJSVR1E7hLS%2BbGstlemnPisFZpfMwO43cQdIO6DccGcZ7y3PS%2Fb69y984ylKhjsC9v9U3Zcl0l3rXgU5CAJ%2BeStXt%2FCboDNnkQ0%2Bp%2FsjROLGfFlrkbjuXqLrbF1qxEybLLHBg3YS%2BcIcdK4BfCO39w0bE%2BxmUoRCKvs%2BAQdo0i1O4SFHZ%2BZ5%2F%2Bt0KX1Gww5GmIB99aqiFpRlfzeemGaNzMDD84onCbDgUwf8KfL3GuezXIi9y1cMEAsvIv7oCvEznIsVYou6bzkhvI9%2BnTY5nQlirTpgM4H87uxU1w7sbWjOS%2FSuD7x3U8Mt1%2F7IA4ApFW8ZXMmpIYoyZSGZTObcVWOTGz4UoaUN2zgt%2F0F1s91trq%2BoS4fQ0NiFUDyU8db6FiCh%2Fp93uoTCL08RpGLTlvGNZNGN51TMqYqI3rsac%2B6EDU9mfYON64E1ohu3P91dQI8sQPwzEnt1pE5ufA1MMy53yINKYRK8JuJHqJoop5oGoFiyUocc9m%2BY3nJu8QX3nckOxNYAr118%2FDxsDuOvErCMXCTC%2BqurTBjqkAfMSqa9mWNbzuQoxIp%2F7mdkYBLRadpq6Ni0Gk4YCJpHur%2FxgqnyZSn%2B%2FxI%2FO0Jp64JUEKLwUj0PhG0z1b%2Fi7rYSHWya8EUeFh%2F1n4mLLid9IpSxXRmgWA9eujJDDd29WvKuOK7CDsRmjIXhFoPonHPBbG%2BTxroZ8wADfulxoYKThNYKp%2FkWFu%2BphCP8E1WslzvivjvQHduV7Nt8hwaRDmQwmr69z&X-Amz-Signature=768e045a329dce9647ec4f697790f355a826d4f9d36baec453e626e0ac50307c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

