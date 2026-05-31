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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPMSHYM%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T185911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDdhikRt6n0SWiWXY%2FjvZx88SPgc2gCGI1IVF%2FuqCw%2F7AIgFvSDwy3c%2BzaZXjZfCkOttsqsAaZYzKVIR9S%2FW0gdAGEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0MZ7ZFsljBrfZ89CrcA3yQYlgXGQMFyJaQMxMaYPexSlhoSJB323OI0xd9AiwiYQ6Rh%2FodHLdWgiyzZMJ0Lb8t6sXS4otvJGiCDTsb4OOJdVGc3GJZXT0IQG6aY3UslB0KVb9%2BMQj%2BupD6bdVNI3gYpQdzD%2BRk2pAxaAGso%2FMt0kZt5L0EX8g3HlgIlKj8ZR4thLIduuW2x47xrG9EXMCrN4w6wy0fBMsSK7iKeCv9ncyEnnfYOvXBEP3W3Y5H30sc8JMcAAEYHXCRcz4QoCtv%2FvzLFHiGq%2FXyFAnT3bWNsxG2acLkmT4ofVTAloquXrriJqvOiDV8Mv8gqmB%2FTP7mJrWh6ELzYsyJjdaS7YPjzURA0QEvshUc5bWhiDN%2FJoKNl4cylhlQzEGEGuebfpSn3PnbqVnvNAR%2B2hyZroGf44m%2BsSLJ67mIVmnCLUt6COp7%2F8QEOwRKfhwdQu3Kcg8raHtXEiFWSV5PZ%2FPDHS%2Bmrf3LwQz0kl90gDehSYAh4jbrCfVBh8gRzhXw3R0uST6u%2FYNZC2m8XQ%2FfNuYZ18TQHlH5%2Bxmyp4FkbOr6pybhDhliKpnQgjNOrG1aA11ZIOyCNkUtNqRde%2ByxYaZ4E67hKW5JUbzRdSzaZpyg6id3GYTVBBdcIPP2jphdMJn48dAGOqUBfuiytbt8zuVIZTxVoFP7jBFE1PEpm5L9aUfe1JsEOk44dkJ1h%2FzE%2Fa%2FePXgHFwSOTjpbi%2BTXBVXbdLsXeSCBfsJNMmYfqwxuEO0J7ja1dKFf0%2Fx%2Fk95CnDnh2KGOVmmvoM4p7w1A06T1PjYLSlC6DzqcVu88tsvlMt%2B39%2B%2FrAZUovciqws8Y3fORe4aFPzLYjW0PDLrqxtlPBhAEOFQWR2kSFwJC&X-Amz-Signature=e18adc0d29e62db1448d8fb7c60df72b068f4b2a457149cd45af15da3249aa6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

