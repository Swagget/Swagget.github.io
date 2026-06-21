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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV24FQOG%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T171512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVIy2fz5LgZAYKWkJfyjJOqRx5LBh1eltn%2FjblJ0rJ%2FAIhAPFOEw2RQmZjeIDNuKuyVTXcHEsc4bMbItM9VqieSKQ0KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUh2TrblZrfYmYID4q3AO4V6M6QeaGt%2F7eVleJU1%2FRrYpU68mDdPF7fhRoaBej3FSoDlqWKBUEW1hJgf7ji%2FLj2WQI1vEp3A5qVnjFP%2BCC8ux4cqLD%2F2%2F4%2Fd8P8OzWKLMLr44elfDUsC0%2BV3jyBn1j6lMoGcUKT%2F0thJBDmCfNJ1ja7nxI65%2Fgm2k4qWBiDQcC03%2BJu8DO6oMx7UYafR27%2B9CEaDtotMGakvRQrfYeqiAGcGDUJsxn3OGd2dP9zfkM%2B3R8aQFAfh3qhxB8osW5FUeoj%2B%2FmLsGRsVzVvD0HTofjXM%2F0eEX11%2FudqgQC6hxHSfRVFybdxkXDpw4DdXp9sEt%2B%2FalnP%2FIWB7y3FoJ6Epmf3OAP819T1zVg3i65PKLs86VDFynNT0kc9ROJs9ziaJILodcyZo0DiA9ObHhzTIcHOvSziQ%2Fg9TvRQ6jUbzvjWd9EVISNlOM5WWyaUoqMkIVASehZA%2FtXz7u3r3NHEZmU66rjibCisc6I00elatK%2FPgdJRJCuNorjnThqvkIVRXvAh9V7ZjP6AgLK74sUZ2gTv8lGNIcvi3lp4kDX9cPW8SqG3tgvcnAwTwuPWngTxMs2seCKZdZEWTVrIhi9rd6OWKHkrgXfRGH0vBjOd%2FD456qGP3ntkCJjvDCUjeDRBjqkAeDRh%2BLJhPTMzg7J0%2B9sr8aGZarLh7WXhVZHVV3ECki6Owd3QB464gfvO74Z%2BVbCE1fjFVZgx5PyNwF4KwsIgZ6PWCAMn7kooqQuoK8XaGu8VDbVn9wLvlsMqLFo22i9RXxeey9OoA5wMKIfm12XIQbsRBWJfaGzDZg1XkvFmHhJ9HK0aGm32%2F6DFbr%2FAaVwSImfNkI6zhATgiZazxMQT%2Fga38aY&X-Amz-Signature=74d4ccc76e3fba267d3b3210d6ae755853a74fae7f5f25c4cede2c7e0c5e3b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

