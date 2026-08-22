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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTYRQEYO%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC790F0XsVvdT7GX7yHkk50r2eIHysEF5lMMnsj%2FaaI%2FwIhAPe3II5W0vokGGn7GEeYuMR2gG80EUfv5zuujxuOjKD7KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSWhilBjKj2Hw%2F%2BH4q3AO7SBbc8hQ8nbO6XLDkc04w7Pu%2FpSPb%2BqjtJh0863RuOoJmbJ%2FFUd518z5buCFvz4si7q6XHtH3l43VYw7fVFGZk2z2wS%2Fj4R95HnmThv598l0YPQc3dkWtv1A2nn9%2B1GdlzuU1kKf6KZKg6eWP9pM1LV89PbiWBis6%2FqLq1fQoZ8a7wO8p3bTl4gOYM3vpx6qAqeWmKrFiwrQLDSLNjIEho7yMnBKMIWS6Stb5jc5vvNEJNdylL3nRiKWslc3JStqfCD1wkHS%2BDEQWghOaPm611rPbe7HJ7FqkbGQuEHTr7AnLEeKaQo5TlD4Gf95pszHgJHdfY8PzugdQMrngK4Gg9gU1TyndOaLs40LPMTcJQ69vlkd%2B1YhSYP301Az9WOwXqRwVPaoFIssSKT7P86qdO8BBYvfwNfHyky7%2FO1SK83HsKs%2F5N4HB7%2BuSPE6neCxVcSn689prlEMeydbI43cfTVcI6%2BdVxV%2B2yKeEeDxMh0wCrSdq0HJTaZvsVNxOztuKgcv7bDUS%2FUWjVMW%2BNiN5jOXiCEhewRLiaIkYSuODnEWhPxh1uBqW9hwYxTDsAT2hZ5EAvzUdhJGHVX6wU0N%2FRrCYxpxweroJL7d3%2BxWprxpT95FLG9HXALoUAzCj4aXUBjqkAZy5gDg2XxaNHJ482JNoP1LliN9rWOwA1w5zd5o5G9%2FCjjtxFvpfJceW0lv3QAPEStNaDyP%2FrUxGQdyGBY6BDipc%2FG0N0jtxuQmiyOMa2fCpZpbMQ%2FY8d0W7OQiJsGPgC7LmxzSHlFo33TUcvXlKArLYPd13bE5rhZNubLGGeZZquQi%2F%2BXq3uFkAaYEBTP8L7VMrZQUx%2FHk9%2B2rOeE9est3NjX5w&X-Amz-Signature=11acbb4b8d8a071e1b50a820eed43e8b471a58bae36876001dd80c6100c59e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

