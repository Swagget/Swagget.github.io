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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626D4GZ7X%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDqSSSefWqo7Jakh3vZzVLwTvqbI7MmBxZaV78kK5cdlQIgKtk2lkTM9fdZTnsi3HwZi5Vy5vnp7PNpm%2BeqHkqRDv8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJOyLrMVfXcjoSaYVyrcA71ufmQzfRAssLdtLC%2Fw4WW0BQILQb2MFCmawUdau9X%2FPnv6JYDFMhU6Eb3AwB9MoSJPC2ot5%2BNoZUaripC28l462LhO7ics5LjZpd4DYXVJ8tb%2BTEwkYfJox85N0hGCVE9bo7kQ00Mt3tQiZyIE%2FIJl%2BX7NBpX8DwA7VbIlI4Ivy5VQ6dDBc9Ub8nvGAAqJEzZ45z%2BdwONnvHQCehBzgOYdwUfH62U5Bpur3uaMN6x%2FgQNIjHle7cFVHLgQnphptgH5UvLxza30bHg2PqN88lsm9D7EVAo3lzoY4CZukL%2BjQ7Pz0mgiOz69IOQ6%2BnQKYo15a60V9QGdw9xG2whwi5cxIidLLqpI8gC1kh9L%2B3WrWI4GywzJ6U1ANfcbAa9iwp5uyu8HGkiX2o88nsqzZj4laxvIO8jcLKW8P0gDmDqwpmqFsD5NTm7BUr9f3B3T1mAMqsFOLexp52Mgw0d2tiR35IK3D6nv%2F5Fstx0ju9U039baLl5rI2PCKfgcB3mxI0HuewrmgDsM7X5zc7zLN127g7o859CLPb0v10C2bD%2BBw9nDFvV6bo2n8LaAaPa0ZNSTrT43hS84F0bkHdQF2%2FP%2B%2F12AGoGp4UrpRcwpx%2BLAFt2nE%2FxH55c76xdQMMeHoNIGOqUBQbsvF%2FhvT8NpN2Mm5UZCLIeZL5GPSETc6MX%2FGnUF1qM%2FFVASWejCspAgBtBFOeqwiTvo%2FN71TZvdDOE3ZAuntmAQI1jqpfRithKdOiBUNcoKWK3QL23DsNgSxyLbl35Z6Nrtzy8KheuECBLrr7DJH8VAUhUxfpoOcbRU54df6B%2BsLHWCb06%2BqUQRVGBZkQWxM1N5DvidatqtTMTv9s3CSgoDnzlz&X-Amz-Signature=1b99ccd86ad77b135e40ca138a4117b21153d58445958bc9019e2d7fea67ec71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

