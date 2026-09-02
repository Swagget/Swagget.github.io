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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ65KFJL%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T212354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICHxl9d3S5palnD5cbWrFYePjL385koB%2FJfeo0QnF3eKAiBsLnLC6R2mTnhX19c9kzOd6tGnNOiJjFSlSdQ6DxDAwiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5cm%2F7aKJn8lXmHIzKtwDeogt4W%2FzkNzM20Q%2BuP46VxzE1IEigs%2FI8WCWiIlY%2BF9spHGfnFjhDZB1E%2B35Fy8qSedledxRQnuiB9jLkZ6W9PaIwwMgDERWVGfJGW1Ss3OKZ4BQQG%2BqLwMxvrz1jrnBON0mKX20ETgzbthRtwHsEoSVxPpKsDZYwWJ3%2FS88vQpS46v2wQb0KqoJBUkuJJ4BPpmQ8ADLxhhTsVibyQntxh8Lg9J0d5f0BwWAQNJGH7m5pnr3NjzZw7OhnvaQWiSqa%2FzISub%2FYw%2FlQtMhT0zvP222iijPlVoD%2FXo7s4ZXSFSBAIdxfyYn5JvFj2TrRZHmmOrB1zkFnPgAMBda4M%2FBMC8iztc12u1bJfsYzDyrRbFAR8%2FqhEhuv8Ev0c3Pg6YSj%2B6VT1VB6zDFLkLzHKdZDnkt8xY9ZozexVgwmTx0ws%2FUV6ODH3v11FLn29W4qLYB6nMCRIBtXNftHCclMK%2F%2B%2FKMFZzyOEoOt7b1b78T9%2FVSH96396pPU6v8S5E2p1tlbfnwCCgduLbe8zjgkPV42qbfJKCfiOUP3iARpBfS7p2XYbI2zlXQfRXIRoD6KBlaOAkExqFpGxKNgIOsC1Ur59FBHtWcu%2BGgqKWuat8tSUOlxxzHp%2FBrPNtolS8Iw1Yfi1AY6pgFZQo6i15ONSKod5o6C3UQdNuUDyW0cqVzyczrEU3ADW82PzgXLg9MGCmXA0UXIImxOI6KHWTfdMAhQR9XSfOPOjUQ%2B3ZzeMMSi6x46z47CQsvEoOtMhIg21JTcJHvMObxH1EelUNDzWrYaoCmzlPawiixiSMBw1LDxn7x1xHMKyEICWJ9iStPPmAov0Ua1VJzT7rehTay76f9yEbB8guq3ve%2BnpaEX&X-Amz-Signature=41d8adcca491eb7ea42c73b117f43ba1d0d47474cfb39c3d5f20da2c6723f903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

