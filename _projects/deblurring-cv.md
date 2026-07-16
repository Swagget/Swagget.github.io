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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632JNU7BA%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T224452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Bh3ebTsrXlUVazA2A5AWIbf3yVZmwLTw68AmwcxBEgIgG%2Fg0hGWy0MIF8fsxeSkO%2FIIQy6fpsG0GBIWmBj7mJTgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL9golr8EZocE8jb6yrcA8AVWb3oSEjP0hi5dYrcDlUjI55XkmLoqf%2FuB6Fj9HXOa75YEGsXsSfalShSJHG9T5mCy9%2B5xS8nS7RPcCk76i%2F5sw1lDVBWnKAKyYyDnqlQcP9YIS6tlD8JJGUxlbHqA1GFpHdBxl0KfHPJmzeA8sk%2BW612Ygvc7uhjkJbeRIbCie%2FhWi8F0w7o7IDCHKdlAIznENl5nrrWSUy6oN1dCzUKAoYq8wi44BG%2FHXUVUN2SmZBkH84%2Fe19wAKwp4hLT%2BoF9u3wzir7KQfEL%2F6dmg53udRsRQ3RQjcwWbuOozIy5ImQXJedqgkoGO3DpShk2kCxP6EPbuNUenZhbJcxaTVEFxk1uzMQd0EQYQbnSf6zI5L2j15FaFPTDOwArFjIlW8sByZGjBtQw7HPu7%2B4VThrZ9OKkVG3fvZdiWubdUt7mx%2FcgpOy%2BMu2iv1LgAGww6IAh3Fj1NQ1Sb3k%2BAVJ6OxJfQ6udouplBXJJ3GpUtlnV6C1z8B%2BFMVZY4v0yaRrQhrfSF2RBgIAXk%2Bs9cGNVN0FjcFq6jVqmLmzkUEQ7KBUy1P6MWdSKut%2Bv0nkO7cETq3G6%2FS9uB3w04AbOj08CxFBHGtYqMgJo9u16NhC0g0LOeR%2BRj0mXX1KVaj0bMLKI5dIGOqUBQddVlClOSOaAEDJSp1akJSGqvF3Wius6X8p8lcc%2Br58r2PkvMXE%2BEtLc8wz6xZKYFdkNwecnPSK4zaMjewW7lFWPGx1luN6QvFc0juFP04Z9U8gzRR%2BLlgsgsTI%2FAaF%2BaTulK53%2FXz5zWq8J09XOKRR8EmoTr4VXAS9WdEd%2FyDQIbeD5yyL6TUTA6%2F0NYzuA9v5ZpknzjfwLmWnbsUKv%2FYJg%2FsM1&X-Amz-Signature=99666d38b8c65978604f969f8a575311a46254de5761a005bbc6429c7337000e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

