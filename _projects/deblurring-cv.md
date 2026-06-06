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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZLCC3Q%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T061859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FUA12FRh9H5sUzOqEg2oefbF1HWoBZQpGdJo3eHq3LgIhAKRexq0anQKEnQrJiNX5%2BFe2NZ%2FSBYqxpthz4vukLy0fKv8DCH4QABoMNjM3NDIzMTgzODA1IgwGF7r41GsuOhPJTsEq3AMiRqED9z3Ri1sQG1p8RcCSAZbvuA8x9QgVK%2BdLHoMXeWtNv8%2BeB7%2BlKr1FHkMfJ4g1JmHP0xUte5bC9NotLz%2BJBWRaRuVmwx3XSCjuH%2B9FbfMpacQfFRmHJfu2JigyGZdhsocQ7IMLmxq82Lgwtt1kDZU4usKO29JV4u%2BfNVZIPqVWCqrgAHAQ%2FkPWF2v5nsdscaPVLIWeoL0ai6WpbPkFcmEbwzcs8C7u46JyWedjHFYzNDHEeqjuefBCd4L7ACeBP%2B8VQ8KudO9WBToFcRdEqQnPrKgFzHGXIdOC%2BuoyWjbg7%2BaXPIxLRnhSwZywKwn1V8g3LK40ruOGWFrOVDW09IGcdZRk59qNUJ5oKlf246bMCpsQKls7yup9QCWeBFM97dM5jn%2FjMtyQp56VndR2yX3NxePFa02eDRr2BGI1OpuolsUjiHoEiW3Dsx6ew8YtsW%2Bu1hKi77%2FcAVEuh0mvx8%2FI8T%2FTN8xNM%2BT0dBTKmGEZTkcV8NrbB1V0WUqlmi6TxtFEAI8stEoFIWawYKRVDdwXKA7MKE0mqGe%2FIeybMVwRxkgo2U9OajyZC0ChBjmwOUxLR2e7xPLXjziLg4ga8L5%2FrnV09pJ15QCTodOEqxVfG%2BB0WjG%2Fdn8kKjCV4I7RBjqkAZUdc3SjZ83LxIfJ0aL%2FL%2Bmifh6%2BlOoolQo%2Bz489B%2BumWOJshADKCHfd8rczGn3RWDB8XDlztbZZlttjJMbdyDELxvRIk7%2BUiLZ9Zt2b1jbIXdaocR4fBqhaGRKJLPx4IZ5TvqgpCxY0qhrMDY8W%2BjMJsx0TAf3GaIkLsG5dOqL%2FVU4odD1vr7Rjg6%2BjAvcqRsTdT4jaSzHWvW2FjRrdp9EPnrLk&X-Amz-Signature=0517f9caf419e483e01e41b87055c6172401559a8bd21826ef957771a4a0e23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

