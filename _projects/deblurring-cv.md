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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBSG6P2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDhYD7JowJMaJlr5xamvWzLyHfkwXlWaF79aXg564k7ZQIhAM%2BPP9slvftpG86sZSTyD8JiL%2Famte8KNGHuGHKr7GucKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUIYVqndV5zY82lTkq3AMBWHC3p7uK4Xi8QIdv5xZWt8o8F5n%2BtnoGahshqqqc%2Bu5nho9gV1Y4%2BCPOlNJxkW4ZFt8Q2mqcIvSXEsJfY4ktxnzEiEqvUfAHk07BNpFb1TUloWzUP7EHo1LoItpZ0XN6a2SEDjaU0lD26tUqArVPw%2BH2IGfzqxFX%2FQH7Y0ri%2Fr5UgdF2BLSK4YB%2FeuRvcE8Jt4M3TL2kNyoNxfu1g5Dm%2BpsKnzpIQydF82qwKDnK7yECz1ilQqvpK2G%2FXnaOhj9xqTPxun0MIKWJDvRYw5efsBJ3s%2FiXYGFgKudWV0HNCPgjQ0%2BsHWeqNQN8nLscvnpYKzwnsD6fRLI28NAJVIR8zSc7BC8Dz1%2FGDKxSYHpKdtPsHvjYfCzld661iY3pcZL7y12GcNAbMcgbOWOj0nq9%2FERkPi0TGhoH4J%2FQqU%2BJN3sr5wVQXYqrD7tQbNEhLlOW4DekJ%2Bp7ImHFM%2FW3fVt8olmPQ8Q3BBeGVLdgae%2FwTBNpES6VOfKA1JOswCava947%2FQClz8RLJGPfTaRrnFHnZb0OijdIZ0SKFHrPsQsDVhcEeLCfpnegs1q7Zfa%2BVGoLi%2F1c7EE7YzP5CbQDyerG8H254QJ4BG9ugLieXNo%2FqsMxDTy13OKK6T1pSjCynK3UBjqkAffVgOVyV%2FAlXGZERHu1fRtJUO0tD506UaBD3iLVNlcqx2HeX8Mqs3c5OIAG3BPqsCD3%2Fo6f6q4sinGSlI6qQGm2uxDzhl4oatIYTEN31HXUaR6HVUTnpS6bsddtO%2Fy%2FDWBle%2FnwzkpRqFEOLw9DFUe%2Fo3%2BIXEPJARq10Ey1s0LJIDkMMbuqr%2BViU0zFqiOB%2FhUVAhmcEdKBnnn8e9S8uhong8CW&X-Amz-Signature=e5ab10787621aa836b9b2b31c522f1a6761015a7bf52f3d8fcf2ffcdbf60ebf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

