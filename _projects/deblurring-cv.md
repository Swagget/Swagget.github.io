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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNB6QR3H%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T200613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIF0T4SUDgHXhFqF8sGhrQ5nNWQGhsEva30HIe35ZgaWOAiAgJFufevNaYg7HXCJQtQ4negFShk6bO9KyBgAcN%2Fy9PyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTvwtrQz2%2FH39hk9uKtwDCF6uAkUYaq0kSOOmzZTLYCyLQszx2TVXCEehLCNtcMDWK%2BBotklhc%2F7I110JQONMXe85gZ4opvGDLxa2z%2FlUzNyj4SwpnbMiMvOuLgtfBfYO06vPfxL742syKzFjPkQYVy0o75JNaNusvFBR0O6GtJzaGLnvBJk5qrZO3TxEC%2FmLvUvzmEMlIErujmPdz8YGLiGpcztbzNbuufL5ebG5Mhj6020v4Jadl7RE4br8GhDig4JCuVPM0zRRvnDJaaUQoL%2Bv6NAEbmlFbSi23lQ1jlrFYbrjfpAPVLi%2BVZwuTaakUau2t3XEKM%2FvUk0Ew94ieTU5P2ScI1uL5INwMnJm9PR7FgEU2qPR%2F0sbQsefLQ2pkH3I8AV66WgxFMHAp0S8gzee1t267oh0pTgbF1pySmYIRe13JJ7%2BhpxVR5ZLXigLSfxnRKDy3Na4WQXJka%2Fy9A3FGNvoKd8Gklt5DaPqH%2FYf8iSIribtStVYs6gG9L0ttJt96VpuOFdtAUQf22Bs5osp5Z9eMSDUlFMH%2Bd6IvHW3aii8hDTgP08RNrelvXwcancvzfQuU95eX4wWJaxiip1nDF40RNo5gChnJ6sBiR92gy%2FeocxrmbDT0BoFZE5sklFyLbJORbKq6Row%2Bpvy0AY6pgHXHFT66AOaO3%2FOgtOO17Vo%2BxiXmXyYzxRsnU6kSiS0GG1R%2B%2F%2FpsSoryyU8RnOxVnkfrF6Yhhq5owgHd%2Ff0tD3z3%2FafFKzJdTCY2Ohd9j0kEeKcTd14kZzlrnO6udvi3NHLKbolnHMiPiUoc3tlmvMdzxjo717z%2FW2It1HDl1%2FmKQmEyBmmenLhS4ZawRekq%2Fe9TNZEN2Eg54GAEM%2BBCuhN2xZa4NHi&X-Amz-Signature=8c92cd424022c185a4789cc8af8f4abff9d26504ec599e1fb3626e1dbc8ffcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

