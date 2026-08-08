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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NRTB6NT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T142031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBBC8aYEGiqomDCDi7sfewGi1BrV7cfO3AITW3vQSLGAIhAOZc6xbBrh6tzU%2BRB9Ak1gZRWBRkyVadgEg29rrumofnKv8DCG8QABoMNjM3NDIzMTgzODA1IgxwUrl99MoPbdPPJvsq3APOuHatg32CR1cHFsiGp8gX%2FUpmqQGuQWhHeIZypMV5sepg4RNOciA0pdf2jpVO%2FgsyjxjEPon9H0nZu%2Fpuyun6j4P%2FasukHR%2F2CHg9U9E4muSpwW6UoZptMoJdcKV9j2q0Rz8yTKT0XczjEdio%2BS%2F4JRzeT%2FhZuAgLHxPSQjexK9zgd3qEaDiBKPHSgpu1dEEyJtZC4x0N91%2BY7f4eszGaXdvmHmLa3vXHLmrFQdf2zUkHjTpEPTiqfPnFvnmCgQx1Scix45cONe9uCR4PNJcy30IlAjQ0W7tk61Re8ua%2FdN2SLf%2F5nT5J1k%2F8bkWPf6pBpzapblskd5mVHpor%2B2jot1pgbV9pIC2rHPZjBYmGWrTFjCP1adjMqBQba3EzeGboP%2FQI387TYPhDtxgsWbZZqjlcyFxpf9zPh9i3P2T7PwhuR9GupyGAYe8ugiq1p0ZVlHyWpO6nsiLrlBZJ3lGrnx2YoM7BL2sSaGUaGKmhPQc0gElA%2Blu7fVcAh2491%2FAxbmwnZ2GOoK9t1ym1mNu%2Fr0EG4bOx4BRpIL0w3z8gZ6TSGdVBkPb8F3kDPklJh%2BHipcRpA%2FflwyfGPWxMjrU0r%2BzDKXuBQixewSnxkXgQnL%2FHrOEWMgJPVH3mEzCy7dzTBjqkAWhxl931cEsweYs6RdgR95yrgo7NzrvVBVq4nNAvFIcIMt5feT3aYEsPPhhFuu9%2BAUezIVtsQZVlBFMgrmVkbnCOsuSTQWBTGX0OFGtZqowz%2BtHKOONbJd5EDQTmBXqPX9Hl%2Bn9PpHbrSseQONf2iazq9xYcQbNc%2BKG2nz%2BsQQlhQtsielNIlwOPO1qP2SnAHqDOJeDvd89vaQ973q713KpE8VIT&X-Amz-Signature=5f2f285f19e805410f219156ca5b0ebddc526142b70c7fbfb5383ca436f1084c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

