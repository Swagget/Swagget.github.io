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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJXHSKOC%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T005234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyK9XRIOEB0JVZDrOB0WIRrbd8YMQR%2FMFVjmQMH37AiBa%2BRt4P%2Bpz0O8qtBIER%2B06sfp6HXrOU0VPsIj9EqIH1yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCYMzWzQpmtSHW5EKtwD3DOyHPmpD20rhRLpjfuv%2B7LOhjSgUtb8PldmqSg6TeLkF7uzetRd2gzkNdo6f5qTPrXFJtYHVZUTIVVVQbZFnyEpfGk5Gnpyw0APt3O%2FTZFZboocxSPbjAsVNUT%2FVnqxBRpbIuoB9rR62eL1zG%2BrYnQhrm7Pg6B5LMqhTn7ife3TyHLOkRTtRaMIEgKViDqjdVzYZE2ZN55YI9NzaR0e2a88e2QCezRxRzXXxNQ12j4rkYz8ZiUe9cb7GNmvG0gv5gKh46aYwA5LtbaCh%2FoMkcczfAqyj%2BqXHxVOFowSmA4rPrIr5d7v5fOa7Fs0UDiJaBg0715uahB6dx6z37qBoWMHD8fv78V%2BPI6sDx59hB4QQT95Y2Ng5HZEFUn2wLbj9omZjJKfylubZmO5vZGLOfQsC9Tom51qH4WD6o57J22HClbZqOqtbkumknf%2FBtFMshiVOVU7IhuwNgrcrVZf9bWU1TSvOMs2E%2FSqDTYSqYpskM9GWKubjxcIQd3HFSMLJx4b64nj40nbVHccOEifhbRxfiJrfmgQXzNW7xghiSVYB7AvNcQFWDM6nXcJvpXFa6noTIuYtTi%2FPXFGVzSxKGOn1k7LGe2qSfutztVrbk5qbG%2FqNR3mXFmbhxYwzubu0wY6pgGpGkDJpiz170C8EkJm80ChkGP4pcDIjxFXrBVKJgVRiITBn6fUFIsWOKD0LtCRx3ELvW1dFZJ3n3LwzR9fra76v%2BOCnU40Y4olcY0GrUd9sISE2mAFNRXqMzDQE70zttYTD%2FVPHknuyQuAmLkis3%2Fnz4gApFvYRpncmbc5guCDznUWl4%2BBrqUzjxDhHqRSM%2BfcfW9a9BgA23QeBBF84yF2u7KP22Tz&X-Amz-Signature=fee26ed104f41c25e304c750c6c3feb9934b2589fc901e910f7a17239c7d6147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

