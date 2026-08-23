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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUJGNSY%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T072259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDM3wsjKV5MjznKuX08mWQfh8lLZj4EMtbr8hrDs8eVbwIgUfOLSJwHGB7lyiC3A7jfAPYyIfY1WGHI2y6nFiq%2Bp24qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7DE5NAeH8lEvT2YyrcA059QJ1jrvIWZnt0t6B702OMgoGsBXX5Ywg2Y%2FZ%2FiMO5cMdIl0JjSTJZfPIJamCvUAOzNWjxO8AnXOjmP9Th2mIjo3Y7gyTMF5PjxsYckGMo6xF1GS%2FVklR7oA%2BJ%2Ff6qd76C2%2Bohb1NfURra9VlYIdUcbvndlpvY0L%2FV%2BdmUT1875eXA%2BqBR6lF9D8%2F0kKEweGghjJj1OhqTqBaVGW9N%2F9EV5ZxkYn9BqHEUyyKmrYlIOLEEHe35ac39W3trV2JUXDdTJp3Z1UpVa56KUm9xe43tFEiK9dGKK9CC3fcDvm%2FvQ0bNd%2Bsv%2BzzFAwOaiw2PRXJFp2Y4wODOmjQQuTDLr%2BsxZPp1%2BeOcrsK9KyB8J3weJtJPxwZQM280P%2FhWdf9AaJFg32T%2FQfYCqmDVb6sIjIX4Wcfxkk48RKX7ke8rXvQSk7%2B1VSwZazpf9oknKJtogHcQN9fcqh2wTnS5prL40xdANl4z2HdwFVoksOUVvKsg5zTId4%2FoM0Zbyc0GVDA2o4cLDih2dOSqLJ3rKjcMNngZVtS1LxmooFRKsjaaIK3c%2BM464SF5K6DP1gJT%2ByGRcK7LEyCpUgIWR99jtTX51hY9w4wMfQE5UJGvj0ykN38n0lskeFPB5Ekv3S3MMO%2B0qdQGOqUBo3SXVSkI8WncNbqGp4iCUkvLngiYv6DRu2CE%2BmpLEmnQpz9Hun5LWeQBwgZLiTTWZNoIG9%2ByfdTIaRgkAExTnkk9cQKsAFIibM7PitnHtyWNiHSt9J32ft%2F4rTwlyay4aURxUU294Si3k36wrAmO%2BjIzb16%2F8nLEDGfioph3ae7IBpC5eoVGkOqKwZgcdEb372ytiz0V5YW4Wa886ASh2x2SwqE9&X-Amz-Signature=611ea1dbe15022b5bd479484de59a6b8d9f2acd7272f7d7c62ed5b5fc00665fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

