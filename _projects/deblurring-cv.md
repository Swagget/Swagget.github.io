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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBXBW2M%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T113630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIF%2F5KvMd7MIDKszfmWo3Lxba%2BKcEZSTx2QfLSqC30KAMAiAZ53JXq4%2BEn8lh5bSQ6AcTD3UtKv6kghqbDDB%2BykNjviqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKQZZg33kOfeaSRSKtwDkzs%2Fpe3E%2BPXltwGNC2xFh%2Fb4D7noEW7FrlXJYRsLYJ%2B8fCchgVYHGhGl53sii%2Fy5IkOAAPm73ynLyoBorsM04OctXcP02HFFgOKlQSH%2FteK97cVuS4r3S6PibHXHulNdArHcQ48NRZ8DNjwD4XFkXO%2B9NYaJift%2Fdzje%2B%2Fd5amHbHhVxveZEYx3QYTX2jHUEz%2FWcbm7wVz9ouGKKTcJ4G9fNff4oBYw5JWzvKnLeGDuB0kuJ61HXYAnQIYXUCc%2FQ%2BBmSL6qsplD6Rduo3vgBMOhN%2BFmgOqUkuswWPJFwy7bmVyZ0YE0x5wFIDstjM9HA84VLbgUrt1xd%2FiLQPl99dLdcGSK%2BlsxDqY4%2FYkToSEq30SCusJLP5UdrDPbF4wpnhZaqtLQhu%2F%2Fknc8aC5EB9TQKtkzbAjwjiyNup8DrPuhMJGJgb1b8eTURPdoSebh6o1W7BBfLZ5q0E3AJMm11VucWWCT2xDJQ0irRcbTt4eeXnHvPKRJJSRH7PdSKWanfP%2BmO1lxy%2FbG5OZkIKArqvlq9zirdpmT7dLTrTDIUYwTAo1l08dCABXrQ6sTJXIbbRFsKRVOLy7S2QfTbADWXCohCzqOC%2F4NBDXxveYGi75oTKoH6z6WRlNYTcG8w3pvx0wY6pgGUIov2nHoP8yDomNj4jbLasch3XaS8%2F%2BPYwxB6BXG0oc4FgW6KJ71cSHQFnOfLO9M0wWt%2FNvXUKQkN4x6hwNZQCKq79%2FP2pvmaP6SoFgcAGRBEAKsCK0%2Fhd3kEZNfXSyMy1qxURxJNMS%2BiMSZGreDdMG4%2BHRFJAwvzhMVv7UFHJ8cGbHRyRVOykAV78IjL9x5pRf8qaWa6ZV0c54%2B3g4u0cr6XT6Kn&X-Amz-Signature=400c9c16d4e63e3b8c57e2bda692ee1def7911707dff264fe245f5f0bba39a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

