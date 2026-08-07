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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJDGXZF%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T183541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjzLoPG0GmqxeAzYHueF%2B7uC1LPplRDgFvWy9C1SbzgAIhANy41%2FOws67JWY%2F5nVq3KUwwQcHan5ME5nfQ6PzuguTCKv8DCFoQABoMNjM3NDIzMTgzODA1Igx5sabB8xbCIG3WtIYq3AMYwmQZac%2F%2B9V2bmLKN8cVlqSOQciRpkkZ5fenWcW1JT7D8EaHf5DR%2Fgf0Rv3azScCIHnjBHWRMSZGdXi8EHvfStReOGVwlTfQg%2B6LBLIMFBphzS1%2BfS416Xwc7yclYa4H2%2BYDpqF1YbHed3JQhAYmDv5u76coSBPMJG3XOB8Gs6Or24AuJWslVEAZyraxjjnu5ledBzzK0fYehmKGEiC88XxHU%2Bntwlfz9kjIaF2oOoZ%2B5AwWor9LQk2qcwTNfxBVWWDQoQO6i%2BxsvSsYqw1wMZkjzVERi0mtz0bLJEt8EG%2FI37n9tndPKNy7jaICsiARidSKxCLy6wQFX82U8pTFyytv7Vs0xfF5Gpv1WwjYu5vHnJn1uOca4YPgZUum4sl3hdbRIs2nR0bI1Nm5wfRQOme%2BwW%2BUcAtsf%2FSkXUG8MhAHDNVSejgrN7V49QxblFKtkGAxY1wltL5Ex0TIrmXbr5aA5PtW%2BTiCkSF428Awm8Z5LsmVN7fvl9H%2FOLrg4GGLwA6bqRSuDhGxLbgYfnnyLlhkI%2BFpkBGcHM2l%2B3ruSYGz44qkaLxfLrUBQoZKwWB52MbGrLXfFDHTbUbBLevfZsvgftthTldRXr04my%2BZhpWesULBqblgO9wPyBzC4ltjTBjqkAVmktTV1xktZ6jjw%2FwONE056qzxVzIL8D9hh08WzrMrHAXVfpL6HYPnocJd%2B8SFKrIVmEcikyBlgl1beJHpmTcRG3RJAKQSHbbfESGWuyjzedNcLjLsK5XCjTj3%2Fl98eyt%2BRY1AI%2F4nkuGzvz9kn%2FsLrldLKka8T08py9HBConmCb2PrjxgiF%2F%2BKAgYMDQcp5EN4GDhEFKIGPdJzyp%2Fq34Nbdmj%2F&X-Amz-Signature=16ee9632c3fb11b38b6be9a72911a14aaef53c177b29d1b64a5a12eddbf9d2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

