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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKRVDKLF%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDnc8DXPx8W2yhKbxnZt0Cf91U9ru7H6Rf5MzqMv3AAiB4C2vNqlldHtRXOWkDHJYI3mItkheLemwintWl%2BWRHgyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMCK7G%2FDJq6mPDsZzkKtwDicPSUB%2FRyax6L6hYgzhbIZZ5hdcrZJhLBl%2FoGBKQ6eDeR1HeVJukEPOaobf6gfFDJS0%2FFO5MbNaC0W7huUiMRPJ8KzyqH4LplpplbbDyVIl5QnujVXtnfcHSu5Zl0qLOXXVsE5RXd2fsGJspJEb9DkfiiIWNOmgzgvQ%2Fl1Ta3irtSIamXCNno9lIEx47dUyUIdqQvyEVjKIDAz8mIDNYIYmgeYDw85XxU1ZpUn4XpEJXAmnx4XMftXXQf0IEoG6ukJnbxnP22nxNmFZ%2BdUDrCQliwEQiMn0cZ%2B6OVlaR5nHwzv5xy6wo9NM6mbjPe8uCsnTYmiJQ%2FjHTpbLK%2FyNf4rNkFF8IYCu7XNyI7kYJae1MzKNGE0iGyonSM%2FjPWV4FKKfGJc6y%2FJMeH1yUTmw69p3BTp0IybGzhOjXos7gjdy%2F7ZufcQ6k4s2XO3WA%2FNxITF9ql0ZttZ%2Br7pz%2BArkxZO1zdzC72V7pSKkPP9OAm2KokdYx02CsgYdcyDpG1xZOmPHn%2FzbRpvWfy2VCuEg%2BxZV%2BaTrcml0oAfjkJIdRpvxTvsoAiAtcCw53eBpNo3n5JmsSryB84HlgJykxb860rdNcZCk0041al%2BCSBoX7%2BplzjbbAI%2B5GqzNp%2FG0wxcie0wY6pgHICHOFb6gFOkjkkcGZ2PXVFQNlTXNAz0lJJVK5vW6wba6fxfTj%2Bvbzv%2FnAqJ360P9nZsbBLLAxWnWRMh3ZarK%2Bm7gRiUyD8HuS6BOXYxGiVMfHipd5KH4yObVySNeCF6Roi5GYParDz5wSuIbE5YtjjN6KKBMSJyBbXiHyYX3ZXeO5R%2FqAAHz3UbOwLdXiVFG5A4gNmXMBz0Z%2FqvfmoqpNmuA5nKp3&X-Amz-Signature=1821a1fb8341e63abbb21ea56fc1d2f8d9d39d3958c50c29786829ecbfc7a7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

