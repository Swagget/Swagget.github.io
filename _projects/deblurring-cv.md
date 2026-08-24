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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WQQDU4%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T052737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHKoOiVH1Kk7%2FoTt3A%2BcFzCQVygpN8dOAZQ5auAn%2FTB3AiEAp8LnSC%2BP179Pw0enD4RK7%2FwTzWtaMPZoa30Q4GQbdSIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqIIlf3BMThoDuv6yrcA0vWD8lwSQ5KQP77Z9TliWM%2BthDUYNkGAEX%2BzpVU%2B1IvogVA6xqUcviA%2BcuDM7KSweHrM8JQpyJHvt%2BI0PkKRXYz2cgLgouWgc52ReCYIulDE8YF0oXIRSSK9aE9RJwEiE5hv6dWgWNHlF%2Bhli7FGFu%2FEaV5Y%2F3KZfGgncrIIdxHN7%2FhRpvbOJqHmKM7qWtiEKwiKy6CaJpHE79iYJnHBisRCdpTPOFalIJSKn2QWkyAq8HdqojxVqyPW3EltIQAkbxOphhWun0Zh8cOSa1Y4iDvv4YT4ITABqWwPdnt9kBlX45Tg8R9fEoRDG9xASIcCN6SZBxczh1NnlhAYpVF8yLqP2k2YX6WrT7q0TnUPpBmUzMVBqEYakAJCmHe8r1cW9sf3VUURqnblAk3gFv1e5ZAm8q5YjShEcXwF1l5SFxJsXDe0GdeDxQR7dj8Y5a5h1E%2FTz5DTna4LO9lTCf0KRNT7Rot281W9W8AHDe81HGw8bflGcPtSm9932wC4085bT0VtDeAWI31QRN9%2BTypKUvbDQVR7%2BbXeQ6JIfFBkZB2Tj%2FTehkXzo7%2FLE%2BRHcdqlS11tj8qKXnxnlHzy091m%2BZ%2Fdsh5LRaLth5Hir%2B%2FRyegBF7cELVDrzqQ4ZIQMOeir9QGOqUBakaKTZfBzHIhBJpdkuhb38VUdURUtb%2FLVGSzF8bFV2i%2BSNyxipimUOJrhSiI3gA%2FXhhAmI3kzntsrcc%2Fcu36UNqap1euEEsm0ZXb2blo2FmDji%2BbzEK1KUIOVGk8LdW1ndh%2B9sB%2Fgv3wED17a%2BChI%2FoYq3eWUp7zVxQcg0WD9UnLaWnKXYGE6x5mCn%2FlSUcOa9xb3SwPc%2FCG1JfUD5oc0c60nzHb&X-Amz-Signature=314bb53cd1583e193e107af6bdee00c97c1edaf2df20d978961f705c0ac04a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

