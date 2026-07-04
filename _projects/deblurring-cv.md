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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKE5EDJD%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T115938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDWooOKR6Oaa4EFvnPdv1qolyl9vLzLMOk0O6egZQ2jjwIhAOUJITfcLH0g8eRq3clavRNLwFQAEvHBxg%2BS3eAqgusLKv8DCCIQABoMNjM3NDIzMTgzODA1Igx4CIHmzJ0AYv8L6NQq3AOfBW%2BOOwfzNGgFwjodEV4NcT%2Bw9i4jvH6uFwU4GjnhEbqOY83XiV%2BC6Qb8TTGLb%2BWfhCRCnXI%2FPWd88ajfZdrnau%2FwzzPE7iKaEO2kG2sNtxCALhC1gu9MTW2UveaCo1lQq9NbbcgCn5WU2PEwwlt4DQchbdoRUQxQ36CrUVgUdM6g%2F52AnzREKIxNViexeitEl0JAKs%2F71QsBRL2VUt3r99CANhjiTFiJ1SNTNkS%2BbLWDbiqlHu7P6BBHF5U2GQF4jvJC86xiIC03UsVOKLHi3T9PZcyrr49rfYjDNxqJ6OPYKsx5hR0Wv1BookLjRf1HlTZ34AOOh93ld1sOHqS2XGp3JaIIU3nyckJJ8xliGGkSWLzdVWfMRcFAUJf5Cfjzs5CVplO3Y3voEpWW%2B4S2TjKASA%2Bj88RLE8woTqj0cOhMTpBg5Z%2B7K%2Fw8Gz8alpvH3VZbDeMdtRU3krQb%2BKU5%2FWGPpqIkSCCpeYDuJBm98qBF9q3%2F8dlYyUrHeVOcGXFkHH8R%2FPCq8F%2F%2FkCBhSOkJnrYrrgX1V4DjtXPLO%2F4WghZoS8uRJAf%2BlGSLldTC1uNlvWCZnRcj9ZTLxQvnHekfQWBzmroL%2BalDbayDgPyh5dd606X57zPhpNP9zTCnoaPSBjqkAV0WIUyqMFtoNEtDr0EKgNQea%2FRW1No7g%2FtxLy9NP4r2%2BQEfT7KH%2FkGE5iL05rD62M7ugI0BaMUFmii1d0HPgezMp2irGngwhmYgbxAGqX96yXvuoLHa%2FFbWrJpCYlYQyHrJpR3WYrCmWh55ad0v%2FyX61u3h5lWdvDc%2BVtgt9711OMzSyP5duVFTWf1HppFVNp29r39YvzJEpnCK17NTSmTBRYWc&X-Amz-Signature=64c5c360a44c98cf8b7470b1789943df579605e752d2e5cdb4e8e56f2a68fb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

