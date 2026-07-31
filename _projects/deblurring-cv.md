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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHL5SEI%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Wx75DNY9TTshlDP1Ec6EuiSjt6RKH9ZUsRyX7ewevgIhAPGwqP8O7DenhvqDqOTt9diAMVSoutDzYi4Acn1E6NiHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2urSC6Dx7l7tFd%2Fsq3AP6xVCHttDmSQBF3UTpCtAvwbjKvkGJoGtoDRVRpobhikQz8wuw8DRkJvNmBm%2BPR4kAKpiGaRYtMdnpj2nQvsKAmwIRGvp8IcDGqoB48sm6MOaEz0dXWojJgQx7EbEoCEIO5FXwN7LJZKuZMr6k64Hm06aJZ9XwpZ2sLUUYxA63nd5utf3B1O4i4c%2BN5qiJ%2BYTgBf0I%2F1O4goJ0qZOplSqOhz5hpO8cgJflKFsbyV7B7i3dhoAhX5QcmpSpdnYxNVZSvyT9QIvPy2K07hRJ%2BCgya8U4lxrvkAZnY5ft3XMCuEG9XCWrB7HtCDIwYF8k6LJbTWgRL3eTQbGga7Y%2FzVV2Q0WNdLrbLc3N637E3enhrqBpCq7c1hORArXq8Bgk21J%2BW7c2X4Mr%2B1KUh72U6TRdFXvGEoLDmjX7s4mHdBfbA42vlYrrbpsgL86DxoKt7AT5UxVVJoyssDNAqldaiBVXofq3wAorhc%2B9G5Am7JdlkOtnU1MwgA6SOoRvgB1qmLW3Uu80U1sj7C6MIiV8DLHsv5fOrGSD9O4MPCjwDoURQO%2F%2FgWAhJy881grfju4o99pGaET2c5DwO27FV5rHxWe6ph%2Bqa9FMLYIDDMHOSyXrBxaw4ZjncxHrye3QKjD9mbPTBjqkASPsc3Zx4IeDey%2FMwheWOxrmlT4GkiBLBZAEAxMgl%2BA5LkooCisunpHfdvHXL1oCsPY8jBO3XlNIga%2BxZ5ZV83Xm7S1m8%2Faidoss%2B9bKbnqy1oO%2BQS3yitvJ0bwEHFIiY%2BZ7qTA%2Biq6Fs%2FKQKaiftU2z%2BOaRQkhMCcW6uKTwFJfHtHXQvNAVeWFXVSiS43Ud2DsrSZ2lh9n5Cq9%2ByQLu7at1trp3&X-Amz-Signature=7473c09dadf2fc497fbcb20f52deb893348d72ba6a0e629cb3bacea48e4ca210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

