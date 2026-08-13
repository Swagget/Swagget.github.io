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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJDSECP%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T194840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAHprKZATEf%2FTQdQNAIXSueGruB%2BL2bm868m%2BUP0RrqRAiEA6%2Fg3tvamwOyHzoDUKrpLzRU4s%2B%2B32jQWq4LwWp%2BxTV4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3T%2By9db8AfSgcE0SrcA%2B8RQoas594E6UGeJytjeKbE6wo5iizIFA6OnFw99oJ1I3YdFNV%2Bf8zqvtJNKzW4yxfoaD8z6zzear7a9TDCV8FRhxlm%2F%2F2r7MZTuHZwMHO3Dx37H68ZLx2x1OjDuADyCSb%2B68mjOsfk7PzihgrQYjvP7ezT9JVZhjy4qNca78R5CgoFIF7SUfy64Q0hSRB%2BMwVKQlFW%2Bp2qH9Tu5MveqrPNZYOIZnafrrZD1JfnZ9NAZShiKT%2F3oQZ4QUc10Xnz2JXotSMY%2BiVJG68PqzSRIdrYc3Vh0D6zPxEAy20ERaMg2l7S4%2Ft%2B4sGn3AIfQHZl5EZV4mBWL91R1fjPukbASrNXx%2BARSboEiIMiqK9%2Bn3K7VLAUuDm5zME11QhfUJab5Ee92GfH3GOGIsL%2Bd0LGVbeEiQWC%2FRGyh8M101%2FbT0U1Q8kulzH27uEeH0vXHS2E%2FTDgaBYNkpBfJCb9uB0PrId9L7oDHYL546flngl8PfDjDJ9giJVJafOFPCPueEA7qW1oXCBnpZwWk7cboiE9aPfceIfFpuawuv9OWW8WKcoKHYalttFQwNikPtEF3X6hpi%2FPJPekEJT4BNeZ1V%2FL023wHMMcZ0JxDWi6ZqL3DZdEeLqegydV8RUWXX5KMLuh%2BNMGOqUB1aUFTayoXiR3RuCLVTIiL88yFvBQvIXwdnsEWRgh%2F7IhFTGvWJnf0j%2Bg0q7iUgE6243zlFGR4JijTS2xu9Kj5lYqbIRtlw%2FmuSztimYXOyI1guV3yJX2Xy75dNozoC2KsXt%2BZ6wry6ZG%2FywqRcFW4S%2BCuCvpQihIwfq9qnP8tDqqmuWBYnGgSH9Bj5np8BPcczl5Ji841HH5YJyohHaI0jLsYHaj&X-Amz-Signature=4aaafca1d59c981142138e11c54a8c77f0b5b77557487d9a8297f87e846672b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

