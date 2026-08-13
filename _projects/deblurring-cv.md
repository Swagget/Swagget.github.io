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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MCTJII%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvyigyYtct15Q2pODYeHNtXsK%2BDbXqZUg6pUKr3l1CSwIhAJb8PjOjiwUXTkBoJ6ZX4SL%2B3AZhj6%2BGXaYSLQ%2Fv25LvKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0dhzWYj%2FmwDj225kq3ANB%2B7WA2o9RTc%2FEyWrdl3CYn%2FCxO1pjLHijRnPZyJE1Kvr09u9S3VERvZcqwBHTSrJrvX%2B%2FVyRDxJWhZCBPgD5BhAQII2KU3XXB4aEDFj%2Bq2n9uqMy6c6puW35nPL0%2BF5X2v6VJQaQKVG3l9NhbLZcu0bA%2BiDbaKY%2Fg5ZipxqG5hrWzlvy1dhSPaY9oN9HacCPU%2FjW%2FMuXKzyvN%2BR7WzK8HA5pEsmdAeUKw8puAIyjGn9Tx4lQoFJe00CCqHc4GbaAwHnwpz1Uu9Iud%2FcxozcxZ4FiQp3GyTjseceFcBKJU1QJ7vjOi7CXaPPOWsv3Ecd8fph8cZ764B2yN9nBcWxUVx73uFK22G6w%2B378uVd9NI9EQklHD6g3tIxdfhP3%2Ff8Dsz%2Brh4hjv6ERZVHZsdfw2IyrIbCVSbskBX09yeybkWQf7rr%2B%2FM50UUrjK080rGg1C2UMIyspFGf32lQdbV29Y92Z6KWd2KoOsxWYaZxwGPWfDKcenAycErvf4OTyIGZdaiP9Q9%2FODVv%2BGP4mcYKjyz5e1X4aps35yNvdS3iEsjYA9lweLDwM1AMlH8r6O5HrD5GdbVXeTuRcPjmx%2Ff6ZnmJ%2ByD3WuDd2Jkn%2FBHHADnrxB6PdojiIFOjPGwjDfm%2FfTBjqkAYTxqgwP7TeftxGG3qqY5amLaFV45Y3ON0ztNLDrp7gDyIHyZ7YEgE2xUQtOgryHKCBVtivVHYkpok1OuBHJeL%2B6oLbXggFdRJcSxZpiT61ghQWS8Mn%2BX%2B4lGCnEI0x2%2FToS1jWlICy%2Bk1y51cK8FYjy%2FaBrgXQD0Aj4xbIML39q4Wr4%2Bq8wsI0WoVpq3q2ThRs1Eh%2B1NctVqPnzLayT46cejxMU&X-Amz-Signature=1c7fdeb1e3fed2f0209f8786e0237595b2eee82b41c00e5c453fe80671ae9a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

