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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLWDZND%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T080246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD%2BG6Rq3z1DY58U3ER85%2FfoK2ziFCiHgElybjhZkWv3OAIhAIsd%2F3GkJUX42ZMTuy5Ae04V6oUKdV0esKgRsUReEgOMKv8DCDEQABoMNjM3NDIzMTgzODA1IgzyWIXTn89dqzanJjcq3ANAj90fwoadKoYQlMzWRkvBx3yQ6yFNIiODhmnD42gkXKi0daAI9wjm1jB%2BB1ZvWhON9rKlNqz5Qp34TkGc6lILJjvfYkEdHZ%2BSaGPHplYpqfOPHQYK3oNQwQI0QhvUeWbP70TSXORuvGVMyXrtXb1Fy8we0yDmgtKnKbepDValZe9k6OjJY4VJ9M%2FHKOROuYAo9Qo%2B0BerMq%2F58UfkThVzyS%2F7i6ayr723MslciYkdkkqzCynZAayQFeaA9Xbxl4vqcVkHRP65bHOpHYq1mZmjV9fb5ZDgZ6Z2litUQxONPsXCLgfSkrdsAzzA%2BHR0fc%2Bhb7yJW3PCmWSsPzUTV7e5HK6Xbyasn0bjY1R%2BXxIJdUL30fr7Cw7uo2u1cYu9M7eFJ56cXqTZvueu%2BRLgBOC00KsRY2Z3aKMMqRD7KVbbMB%2BdsvEV4IWoQMGc%2BlAv%2BcM96wlYIyfXC%2FkHlyXKZMsIeYEHsBGZ5Va%2F9ozdxn4I0pVW7CB5gAKqWgrS%2B%2FwFloMt1BOUucizwlU%2FiqIHgZU%2BYBILOzrVJhE8a7TDrDPB8jFWgQSsAKNdfsrtmKPfXigjBc%2FtqmZjmlOnL4gBpjjmYKgKhJAngbPHv%2BmKlCxzjqFnhoeFdpoOdSBLNTD695bTBjqkARTnVE7l3XBB5i4EoWFa3dYMcfwEGjz14Nd1K%2FbTTXXG8z7uoXIj0Y88puR%2BO3WoRrUv647lp5GkcYjJjOSjRehCWiRf00W8qpGhNy0ZctVzHiV9QGwvICjc%2FWyetD5ye4huqF961A%2Byy74dDrSDuH1D%2BmfDdPWHlbrwlKwDLR4%2BVRIRXZcNuuTxirsWK18LRR5qXdsj9t7c5o0eYtpyjCK9vaNh&X-Amz-Signature=6d8e0244ae671dd09393221476d59117465c2da4d60a1e4eb3342c48d4097279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

