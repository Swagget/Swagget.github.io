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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKSUMAL%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T123008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDR0eLXN06zGQJuGIU1qxpysw5Or7978YI%2BKZlV4GfY%2BAIhAKQu4X%2BR%2B8A2rbvBDtmq00OSeoeEbPETuers41sN9gDoKv8DCCQQABoMNjM3NDIzMTgzODA1Igyn2H0%2FqKVE1J%2BTH5kq3AObLsun0AzjEJO6RkEILyJrnHGiCkLYN8ZFg%2FAzqaIcNXIKNFueGPk9%2FXB0tR0X93woVnFzp%2FnpCPakXJqyr7tsgmLtqO5S3qoDKeywE9kS1vY%2BNoGL8%2BnYHGqEFhbw6Q9zwwUbCRKsHAY9dagXkty%2B0GkHs2x%2BKhNJA6BTLPYI9du3gSK8F%2F1gL0IfT81Mlhx94cAk2XMURIlnmEoQ6PPrc%2FLDxdqk4HQlWD4zXicJOxGHI9%2BokN5fxxzD1NNsy%2B2ThVf8PCD%2BvQ9BIpTH0g7%2BnXRjFcNI%2Fn51XPHNegfXuKwt5XqT0OaNAQy0izkY7U3WEt%2FO7EpDTK6PlLG8kIU06HU5HacrRqXnaIXK%2FIplg6WIZtwAiRVNumFq1YfnYUk%2Fm%2BAL%2F%2F2wNEqbCgp4kAvnq5jYI84XQbhtsmz%2Fjl5Uolgkhw1jgKdeqUAcoKQqhCXBNlsVYWN6mbdSynhqjgnebui5FHx4w7sk7mqLazSfipVY4aRkTaXuXVpoxf4DTPao2n8E8o2LITUEGCnD4y8BeFIuiET4ZdSW3cK12%2BQJnkah4orgMl%2Bw8301h%2F8nCs6jJnfRtTidnOqKQPCLNj3dbV3rcUL7SBP5YZzp06xUX0f4l4EC05p%2BaZGBzDCMuszTBjqkAQJpvZEjf9KgnCEu%2B3Sk2G9XbpePjv2zIBfF0Q6WUY7AEWDZvvyguUunVWPWnddZbe%2FIt%2FLjw%2BcIRV1Ry5E01boji8yQt4UfWvP7SGuJpSqRQkyagTrPJ3J6gnVXBpnxQZcU%2FKadxHzlM9wAe6FI989%2B3dqwM9AEMt0sNEV%2F4KYcO8iDEoUiv4IrkTkliX4FJ9jbrO1bBQQ%2FYqryLe6pyPuJwyrz&X-Amz-Signature=7c97bf3a1e3325b25dd6b429ccf9c304ed2f30b95122a67c37d7f1a0dc5008ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

