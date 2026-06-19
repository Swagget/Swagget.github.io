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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLMXSP3%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T143558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGHZgip1wOZA76yabpDugYdAzNEN4N0UCD4xoTAMrbZAiBlaSC5yecjyhHVd682Npm0lozNOHSauBKzlDTwGvHw%2FCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVpeYszrqHLxEfT4RKtwDCI3HJoxiknAhp8%2FZw20ksW7xvCY55YZOKx49t2olJiBQuJwXTnYfebG01Kl6X%2B75Kd5%2FhUyJD48sOlL4A%2F3wwBjaXQTBZ6KjedabV0RrrYfXGpfXQrRdZ%2BvKWDezLtw4HZDsVVnh3nBqnFxAb40EsrfEXelkLO1s0jxuDhcVoJVFjsh6g1EgH0QUoIWO6a9SAyY0DWqhE7tZWFqQjHNqiwzsMSovIkVYx9EWy7c2f%2FDXkyJyrcr4sGzAjrsk%2F%2BxLBS8glTObeT%2BSha9bhWK57EnLHB1JsS7tUiMsg0dXC%2BL%2F7vKLYdvrLEpmshQwmYjXK0wvTJyUH%2BGJyr2K14EhB%2F8VkydXT4guQrp%2BqQqeWseCOIxdXDdUS%2BTBIiTtlXoiNXw7TvPK0v14Re4SRNlrfduMWIqaePoR2z1Slc9mwDKe%2FUVlrFVIkUzxbbQBNOWKyACW9vyX%2BPlVTEXzVH5LfMr0g5v%2FnQiiPBtZM2F8Qlx4lAcdAsydhd5QBdb%2FTe64fGzdgKOd3qs%2FhEATpzN27pq2F59wXvJSaIcvbmZmZhj1LmwjEIDVV66axfvzJMMzqEQFnR70o9cOV5Y%2FunGNuMPxQi44qSUlT0eeSgM0ZKX1YUvhm%2Ft%2BTuKJRYEw%2BJTV0QY6pgF3DIl2Szeig8gYGd9hms83%2Ff24%2BKNm62rbHQX7Dsy5aE%2FZl8aXlnSuBdeVwxF9T%2Bij2HZaApbMZ4zOyjbF9crLngkptwAYzOleJ%2Fr4lfI%2BbBWDoFZZ1jjgzqDhVLtkA743vts88o8VngWQ%2FzE%2FHP0SL0OFAZCPagVNv8ievov0sSmiwYRzVKQn0YZ77oe2zYHhZbzHV1zH0%2BbYZnbjleyv5vXnPuil&X-Amz-Signature=dd79054084acc80aeb883bd73b1f3fc3614258bb7304d94720686031111959ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

