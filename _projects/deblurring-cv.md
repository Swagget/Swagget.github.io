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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2BNENU%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T123552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJpo%2FtF4kUj6%2FaTHN339APxTp9Xixm%2Bw6W%2Bm7enJY%2FEAIgHZA08UlHFxGD4vR84%2BC0WD2C8GuxE%2BVqhaEOKUuS7dQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHcgYjAAqiNyZ27ScircA8q7mQK14Bi8uEZLBtSMXgXvPpuYtZIyT%2FFYe9bu4El33QrTZn95xbb%2FXfP4%2BSi4G7ZMBJcpTsYhLLhMDNst1BRW6PK81vuDxc8G9sRZ5z5sBTQ%2F4jI%2F0n9GtPfxFbyIvJ6jH5RtmAhUWnQzuWpFhSK9DWDpOfL1U4K5bxEeQf7DtOpqbmUR9Yk2S%2FgFVF1j%2Fwb3CRFKnC5hCUBRsg8ogy%2BbT49b%2FN4JR0XP5AbHO2NS0VDPZ87u6ZzGaNlS2s1hpXyeP3Nk%2FzRugfzXhwPhA%2BSoGrTLnnsISVqxTXDp3MPijaMfcEVzMXDAxXjpu2dyJ2XX5IwGKDjH29zhfTvuC6sNyeic1xwBV5MHpn3GfzMCocGpD9NPz99aqpbp9pmRGUKXjbWSkUzWyhzKl5EdShCTuHHBZqw%2FSwOoXI6RsRON%2BewmF7tSFUqrrnEHidsWYcz1FjTgzTXc5O%2FNsPlHKVPhHTCdtFwalz8G%2BJU0BMLextbFhY3BzTrkcmFDFoOhAi6g5MIhpUle1mnYLK8fZXAQVYxrNOXKE%2FOaXM5xSKpHPCZvpDiXwr80niCFehXMnB8NCxkOZLGb84PZSB45P6%2BZeXcRkjz9uQcJzMD4ZUoZh0BofL1q4m97Z3m2MP%2B3hdEGOqUBZtZbyrfOJi2jomsCVxOgglCxabp4ktFITndHyERZ8oBy7Ut8I5KCdqoLJhJT8c3B4N01Xd%2FA%2FiRVdYsJ383dcMJCqVV6yGd3cgv%2FNdeJg5XTnyGJqhlWjw9AQUPe%2B1nExYKxFsZbIxy5ETXk6t2dcDSX5pslCtXGZ95M18fMun1npxcLfnP4twWI4al6RIYEzMXJQNluw85bdn44pI%2FWNV9%2BcPT2&X-Amz-Signature=8acf28f174d416b0c0045f87efe63c0a99ab4efa96443cea115ea65b6791c05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

