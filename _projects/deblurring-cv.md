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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3IV7QF%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T044347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRsgFIBHzKXo6FuObzRHScFuRr6j2QkvSqbjMFRDzVbQIgTYGLWJItxxKYrv6NwvrlrzTMebEQ%2FdXnFWNEz7wbD9kqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNuQ%2BwRaWGQ%2FKBdbCrcAw4Zr%2Frlv6GAD7oxuYcY58efrvzttsnZqZ1hVF1VEIGtqcdVa4%2BLYJIHC37gfqj9A6FnZmcCNN0z60O9UyseHFBSe%2F%2B0Rv1%2BcwoFlrDJP%2BfGi1cJWI066TnHB7mgqXU7VTQEG%2FC0fy9WGd3IAo2rGqk%2Btl9v%2BWUQjhjjBeZQUqxyuobW%2FaYPqu%2FegoglzY8zleMVAza4NVLBbYIuzHdJCiLqmAdooeIUGXNDfjI2SMS3R85YoseYrtqRyI7vEnGj6UwXCdERc4i8%2FjojrW4AllVNrHNbDAsX7F9SU9k3nyloW1W%2FbqmeWELtoFIODL%2FfHW7M8htXe8xJtcLyMo0H5xBqIFByipdzezN0wfq6k9hwCpjLk4%2FzXr9yRlHbaGwLOdn3%2FtkxlRtwx%2BEXKbpZpIijnUvIMBYiASVSME5cKRGMSEhW8U9nusSiMLZqtCF93vENKObo5XDmq%2BUlYEbIcsaT9jGUbkWUBTmeESXWFaNRQeE%2FpBeCPDAl7zBSkQiH%2FZMU7z7qs5g9A1E5zEqgLBrYrIaC7qIc9qY4CYxVbJe1JAPetNeEkSvGSvALrwkjz57ZduzqUQSsXgQRkQ0%2BZIU3LAQTy6PUNy1TheEEAIuF78HZwofir7nQZcBhMLKXq9MGOqUBH53OvFhjSVJZ2sDHcmpAs%2BxvZQETaDOPJ5jzVtcjSKzG05YDWEXhdC9pILjn7wYJAA6HPORlqmQhP%2BKPLFj4UL8UP8G15yzSxKsi8XQPL2duQnAUdTJGIu%2BzKs6WcQcicQDoXC5ZoF8%2BnHOLhgj405Q5nAYFg2doW8ti7%2FbktmUy8SzCSNqRIfiIn04OGRb%2B4limEDNCgAQUDN3hjGnixuvjv0ZP&X-Amz-Signature=57177e37538da3616d1a8dabee3aa94fc571efe751a5a505c0c1df2c8aac7c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

