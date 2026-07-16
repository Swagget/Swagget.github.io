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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NC3I5A%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T095225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBwgN4qO75CA%2FbWpozC6qxilyWk4zFNqWvg04M5f7TEBAiAbxfl3ciopR2mKmQPTEDeJnIYEIlT%2BAbNOvqNdjiVTcyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVSxdm2CAi7XIOYdCKtwD0suPb45rI5FxXFzakYtX5f%2FotiQZ4rKEwMv93dTF4wNoBrjVcrcCpzxd0zdsMXAU78Nlu7JZP7esVtdDvAaFWDV%2BuXa2SA4H4BLlU0IQq%2FkLAUVwMm3RIz9LPWyw63xht4AN8RmOa1N4NzMTIuRzMwKIW3%2B6W1lsy2Ac1Amp6JeqOvk7bnsBHGkYFlVLbdTfshCSkXBD01XW9YamUbzHDFrNhIImEzd0yGoNmK%2FTr3YHJQWz5a56vrYs45H8sFRWXA1UtT6fSUwn1%2BbjmahQekLzKx0BC%2FnQUYcnChNTcu0neTAPMHgemk4ebckCgXyb6MNOYMFCgTuVpU9Y98swwT9uCs%2BZwt0tSxragxlxIuMjQQxPPT9eZCYJuBDDJMVjn5rq5jZEdBowDxbYbEqTUzJHBzJk%2BhJxxBTKAKPO0MNojXw%2BaRXNe0FTNgXdomewpWGx5%2BMskOf5dAUEaZs9r61KT41TQufaFSE%2B8utrzRDMe2oOK9kItNjs%2BHHPIqjA02OLRwOw%2F1we7FqlPQdAuWIQWdWitlswIVvKhjq63Y9N1FjV8ntsLidi3v0prwdN1soNIHX5sHRcPUUQnAK4jmGWFhA8Cm5E%2BUObbvRps0J1ouc4BB%2BXe44Iv04wqKni0gY6pgF%2FSt5dkEGta7M%2FnhIvOxgAGdgegV5iwhpnjMcooBL8SKt1xhpuacaNATTuwrWX2KkCZc5ez34dWaKpBr9%2BLU14BBrN4aQtD6ZsdwbIGYp7FGeEmPtDNEuqe5cHIAtKZxEgla3ou5vc%2Bx2KrkgniRF1XCq3Nl0d3lMHWLQ3ckJY9MjgC4E1B4X%2F28sdSU7qoUZREuWLa8PM6TXFz34BvqmU6Jd1MlYj&X-Amz-Signature=45f5577bd0a0a84c858c51c9d43cfc4f631d1bb7bbc39da8138b3594c1359bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

