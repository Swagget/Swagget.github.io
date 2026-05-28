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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MGZEVX%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Sw7rHbycaTabUQ92oRMNMnL0%2BXl6vZxO%2FQHAPZcggAIgVPLbK3PCw1qyuMHSiigGKsIVx25HRyIg%2BpXJKGZB7yMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbT9zc6IF32sDzVSrcAw3krGwO6f5HIPV4r%2Bae9M%2BF8E5TMFq%2B8Dp4ARl6cp2IusUCMQSYl07n%2BVLz67ZoHu0OeC1m7qvnLuJ6yhwJsuPru1L633Q0gOeNBcBjEHDf9erEnIiUud7FjlqAQ71Van%2FQ4%2FZgwJE4zWJ5W%2FcAzGChVcppDQ%2FKEQ07At%2Bs9O2CyD9bmBImOROniWQ2V0ckCgLPIVjxQMnjNnyjOssgEzfC%2BxdEpym%2BCN8KCkPQaLL2HWobrfKgud02vYqCDZmft7WthnQ3XrMXqM5VW7YoGwerbCE4OBk6EhkbrTGVSj8%2FveuVOmc5zaXne08eNs%2B5hYMJ2Xk7zyop0gNh8szXhFofad0GKhDkIzOSKoyYj7j89vYuY%2BshgM9u1AQmUec50sMPcTY5G6LcN%2FBSqF8V7Q0SYTbPVTxeZVXdcL7NAjzHbFGU%2FslnbBP6p7qDfIeeyeV2HLbhnasUXwZHSoSA0BVwmj33%2BNFURYa2k26asAtAMxhDR5W0DYYzewSDsglg7Aiwrr%2F4mqyriaWJi7%2FzkPYMmF7EtmFZ2rv%2F4O6lePp3WZIwQyh6HSLslNUG7SvAqG7xERmHd9ToxR8Tw1qoY14mVd1YVoKxxOuA1vmS0HycTo2kPQwi%2BqbL1m7yMK%2Fl3dAGOqUBM1aSDvQqYYxTvcTagrON29YK73p3ZdKeK3g%2FJZDIvF7a%2B9fqI%2BkVLk4XaPl48FmwPTsXp7ecl8KzwzUiPcxTRyliyu2Fh9iH8EW%2FQ4VO2jshqLW0BbgGoUi71GZd%2BTAZfX%2FdRUeeEeiT3L%2B7%2FDQXQnsxr6dfJb7E7Ej6RXtBsKd0FHIEuTTmkcz0JQZjyNX6VH7Zg6WEY049dcglEUJpcoAtHhfR&X-Amz-Signature=966c460bac62f3ea9ef1f2dc0658e558c4585f75773b71bafd7200167c512481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

