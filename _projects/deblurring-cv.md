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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56FGVCZ%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T215351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HBnhZjZYrypottJZUWGdCxntNVnnnJPgSYTVdPawJQIhAJO%2F2D2IYEudbsYIMrCDsTTvf2f0YAxL4OmOa9GrHpX9Kv8DCG4QABoMNjM3NDIzMTgzODA1IgzDxPg7qem%2Bas9zsxYq3AMSKIVczImdcau%2BcXSyuRRa6C8AMrx%2Bf9g7Ezas%2FgIZ%2Bifahng2zUrXj%2Fz7cIJVzVhtR9XS5FBORYqCufZaTh83h%2BbdK7Pp%2B6OmnjDeYkUNH7YjLxruSe%2B1LLZsFshw5tU%2BDkWs8lTKRg0jdX%2BodX8LRxy3JlzjiD5nsvDCX28CuRvmZjsDnQuwrRba4rHKCXcK15%2FPXMzBzUmCqfPS0cV1%2FWd9dcuyqZYVuMbERkCWozfA10ONl1e8zAxKm2gldEEr3Tiwpep32ApQ7xit271RHgtmVedXcsoTnXa9%2FGUZrsATLU1bQ6Q8DCUVr9G4rLPlrh0V8XLXAoIZad4v8WI7U3ulx5weDJX5cG5tz0KG%2BLqNlJvpLBBjx75JxZ84kwB%2Fo74QNxKGgiZduiG0oY7k7wkrLhxVd5L53ZCps7YGlu7smpD1TZied6o7ZSCEHcJH88jrSp7ZQQYM9BszyGoffn14%2BXD6Zkwsx9Ev4v8RLpFDXiuD%2B3iC0S%2FxS%2FY5CHQlb7xSP3opbTCGIFv9nM5LO9%2FxniAoWNdC8utyW87PMyuXUSXjOYyN%2FuAyamB8jBkoOvVggEKWQkZv8D%2FT5o%2BMEf3Gnc02zSBs8epxVwrw55UDiyG3P1cgJGchZTC1uqTTBjqkAVPivQXkz3cT2YWwIBNPZ8rYaxapDAkdalORXpQ5MzH9aV1K3%2FCObQ8LkvKdoUFWUZlqQ7mTt0QLt8fAFFIFefLvbxtlu3Itr1kY9%2BLL2pHY3wdjHhUzOe3OUeITQt%2BGBIE89qQhi9qd8u0pLmHYeh5ClvbX%2Fg2CFaxhyLxPzt3fYluXOei8h8ZnN4bOSavXnKA5ieRQ3mLdTLkR9OtBmWNH%2BhTW&X-Amz-Signature=7b7467970a099088ddd1693c6179eec3683e92e3a6fd1bf63ee0268159cb18a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

