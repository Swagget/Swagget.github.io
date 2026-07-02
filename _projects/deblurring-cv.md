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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQZ2FLM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T065803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDwrVUJb7hnRgs3c7CgfV2pxOqJxvvjkoyGcePXbZaaqAIgFJaqk%2FLQNUPYtEvNus8ihKMeWksL9gEJlOSpGUiNdUUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsAiyJ814hv9DiBzCrcA9FBq3ri6aoXB%2FIdYmHLe9hhNeMlEgI8Q3gE9y7JO20JiguwV%2Bv7zx0QxtJ3VYTyoN2AVVy06NuMhNo%2Bf%2Bk0X%2Fdi9P5LXGkVDO%2FhfKy%2FghM%2FCsVuSJF3DXsef3suAi%2F8QmJ4PB2%2Fk6QDR6xkeGjQXjXiEcPtD5kJK6RUspTsEZiDoj4nQ6in2PVoTqasY%2FNdQU%2F9jd5pfB3Nc54qx0Uys%2BHgPRb%2BRdo83qrwPrWNA5NlNB%2FuRk2i659UTQfMa2dbEoc54NqWZOnUM0975RXQwpYyGqYZmjFG0sfVVkKFnUE1eciqaBDNu4vd1rZivJaCThDn2ZzAiyjS2tpd3M2HdxV6VcNRu5wgV%2FOXuTM9WsVn%2BLDvRFDwJ2nG6u%2BBj2UGQBl%2FsAgb99CNaKDnIlxJg4Mq7LoZJ8h%2BNsOx6CNm5h%2FpX16wFM6BCm9FJ7pEPgYuxxLDnaFY0m8Y2lD7VEVxITxXQ9yQpPtBl%2Fh7v2O%2BDJ4RM%2BFXdn3%2F1jKyOJkLuXaqptbjx97YPEUf0Dj8pmUY4tbBjpIFUBI99gt0KsawV1I3AWSmIPlU0nDu%2FeDa6tO5JmN5DLkTEmWSv%2FI2WATEHAl1gOPnvhf23zyLwGqXLBPKY4Rg1IjVwcWFmLmnMJf3l9IGOqUBQ1YNcR9FGSD9N8bMhrT6fHuAwp9lQZey%2F74PguSF0XDm9oodz1KSbVS6i2idSx8q%2Bj0EGknGsxENd%2FMZlvVfB2BPfgz7BEzSkf9foQc%2B5GfIDokI9tbXz0gnZwcsA3dQoMz9h66jB1TFbYoh9ENZj4%2BnwOHIfs2C3UPAX5s9W8lRwnC0pKxrTucbcJnl%2FejbofPm0oVwWyUlXB0NZ6Ac4jjoujB9&X-Amz-Signature=96f4a74ed61ad5cdb5a5228ebcba35051fb7fc44d34e4a19b6d973e93aa682e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

