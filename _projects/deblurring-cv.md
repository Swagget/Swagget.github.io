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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVANT2R%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T162105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCMiAY7qt8N8AC0PwOHpH%2BKrFHTXAcQkCmBUecDpiztNQIhANNl3HC5jhnh9ej3Y6fDfHU8q07XTuM%2FWSJjUptAz7NSKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaBiRzkI30t2UGFtoq3ANrkFRBNoL%2FmS8k55mmKChG2UqKR3rbWYX4c8JOQoNOjQFkvS86tJjjdgbhi8VvXEDKNc6SVAjjyY2Z32YwiW%2FKaO1SZq6y%2BRjyvrg5EK5IoQLB4iLDNdgavHctzWkV0Xl7VXwvcGs7H5q4zU%2FK3FkXqUqZ9V4SI30GBnVOt7cpJoKVIEco36gzfGOEvNT03ydP1k0mpKySUbs1q7N8L7wRiYTXZfqBTY3AWbG7gzfeu4T%2BIJfU%2BhpXyXFcacFKbgXsUNA6MVmg7daI6JEanCql%2Bo6uouJ4uUmgU7OXCb%2BZJ9QCXorDfJHWB1IrTdHsrUXdpPXb9%2B2KczHH2yucPHoL%2BnT5XWJIthC1rSPm%2FYWvW4n0nNsnniBJvad6%2BV44qRK3B7QqF4gdd21xRyZZyBCUASHHMLzr6qLirsdi2A0Nl%2B9XthARFw4%2BVFv4Vk7l7xfwSv0KyDx1EaycwVSlTyup5ha2fen%2BStlrmyxUEsfDjc76wjKNjDN9UdugQM2pbya1O4DWGH5rj7VwZ4Diu44InU3%2FYKMZl%2B6gGDiBeLvhp%2Bj9K43bfC5ZAbVKZNU6dv2Ia2G55Jtvg2KPFSXgfK%2FhOvan2T4b%2BESVTz9tCjp7W5bVyQWDQB%2FkMcpfBjD8p7HUBjqkAWgyg1o6g52TP4%2B2Eo1hDS13RdMwUmEPyWUueYdaxoGRUBaLLIl%2BYYyq2a0%2FMDkNPnefBIzIDXIaVTmccOIT5jjn7%2F5ZhWUa%2BhCSLk%2F5LAXj8URmt%2B6bjpQAUm%2BnpC8MfxCsl7hQu33KgEFr%2Bn1KOjgfzJ7KqTHJuyEZV9y0mICNSRo8x1pKuaWlwpXajdBAF8HV1ZS44ZJBqN77ulhskQcoKqHh&X-Amz-Signature=fe999202854d2f290c52d0de9127efe1ebae17fa49aa2b94470a73a8d7d6b181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

