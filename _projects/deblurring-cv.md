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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FRVBQS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T171837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CoSaAWBjb5UL%2FoRuH4QURYzTHxbYSDdHhOZx48ysNwIhAJDFY8P6S2pmskOpU%2FhxhnFGmKNaltqcBeIHuSoxXA49Kv8DCHEQABoMNjM3NDIzMTgzODA1Igw44P8%2Fzxe%2FhVmMGuYq3APn%2BE8WVX4%2ByrdSthrORyyUjKwkW3%2F8O28P8G2uSoHkT70%2BZj8Bc3rBAim4%2Fmptnx8uVAcaRDGovYmunC7r7mePlwG93ZpDdGJcvx4QZjuyuIgWFD75fIltApOTtiYu%2F491%2BBTVc4dLqoZNImADTKqeIXHkirsgwXtNUa2C%2FouNYnQmOufgk8Tk6IiY17Fkr%2FYraQ1ZOfUkOx54tgaXoHpua5PhpnGlMIEbCRUXsE3%2BzQoVPo95pL8LMykeA1MDgnSZ62RvUP3VnzPw1cVqeqSeYwqoai5xO1FrX%2FS3EIPGHJS6vgnK6LudS7gW83IZORF2hsCog27tyjvK7rKBpbhMhCrkcEsBURKiVw8s1UfWP%2Bcm5N7qWGwPCryG6R6fAqD3pM3YDJJuw3LP1CWqeO2rAxwoDwNz1rQOem7ImYDXopgy4XAHGZ8glZ%2B%2FHuMMS%2BsfEh92Tcm9YntkltbvopZodg1nVXZa6tg43oPyEAWHxSDbE9G2uTHzo43Kps68CxtRsiK4KcI%2FSigUh0cTyzD%2FenyoZscbuZpY6ou5FF9ILWuzdee9hWO%2FU%2F2BOB6zAbG2yrDIsROb%2BK%2BOTprKg1vnIwytnS4rOMEViz6B46KkAZK84SIt%2FGYrROGimTC3nt3TBjqkAW1XNnlYTuxoT3MS7G%2FJ7qsAKha2b1SSio6SEXJ1P90CV7%2B60vKv%2FiLiyIKg0xPQ%2B7pHnaow%2Fb8y9gXXfD5SFZk60mLlEaB9SKzZOENqSMgaQ3VhVu4EmL%2FUeE6zNvdLDZKKehVAJtLhT8hFNQcBjUsFeL93T0WR0ZL0mxJSJHUhGQ3wqtRO%2F4dMgwdqfkYYqhU9%2F795vggrBp%2FM9SO2t26LWSrH&X-Amz-Signature=fd9668e281732be5ca19b816e0bb3c9a27d24234543e1225b559f773b1648d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

