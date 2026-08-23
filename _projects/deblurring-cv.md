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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKDEMUNT%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T051746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD0zULb25iXfFlZeZQ4n2biIIWJDGV39XdQcfqtglpkXAIhAOhCGYyQJOD%2BYbTTOT0MmjPxlkd%2FRi1mUONpkLoA34iYKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxD26Qcn193x%2F2x6gq3ANNRwQfSXhYt7vzstaDD6J0TGoEEjtZqXjIRcnrqxJW29MuO2HWGw%2F%2FCXqFwvQwr%2BCOOQPqJaRug6BjqdVaJTP%2BGOhvvJE2ilMW1GBkR%2FvlDIHZwv2Hs0xYWL6FQ6IPk9sASDI3f8KjR%2B3C3taXwZxraKgkAP9pKuAIyuzZ0jZXq8f8b4ZbeNenleIAHGH2n03Dt3De75OGiMuwxqKFznGD03N1dOzaaA3VJGVGSwcxEEuX1Aa4dAMYqxaLlFqphfrhu%2FwAYXSkTJoDG0ZE%2F1Y7qVdvCgnSwCI%2BlyBRaz0PP9plkvapy0z53tit%2FMkITClcZQ8uIKKXfuc1vtrujuNxGZWKN%2F24gPGCwj5%2FopCTnMHRJbup7ZXyaK%2F2TPAHmKKJzzC1QXre55lkuPZHLopTWymsgn0gjzTUeCxmhOEuhPmBBrMJo6bndg7niWbzb0pna592OKGi5qVEgZUB2T8fWRPJvPKjlTQsqViv7fRgyaM1HboM40S6TOniADwT%2BW3K%2FlPeX17veDvmcvNvChuH4h7SXxxjHjmJopAQQeuEjCJDLLQ6cKDnQMoVdffQ8M%2BZiOuvfDCmSvZMgkX8ArWpbIpFjbuuuGxfWTbfDqynip1i4izEbbxXleQ0LDCTtKnUBjqkAVuzVxtFezpvbxWErk%2Fv%2FCM84qiFKUMLxZgS33o9Qyh5nhczCGLplF9wOrhr7iHtwrq7OtaTVZ1KzLSzdbJUsLSPDsmUDiZxPenQfvzWMC5iQceUC03KFu7Da2q5WvbHvNYWc4UeYqoWVfkSXss%2FdlbJ9jsxZf%2FaJngsY5cxp9EMlQOLYllvHTWNsXmMT6rsdbF4TrGO0%2F1SBKysvQ75JOWKVT2A&X-Amz-Signature=19d9558f69686f84b4a1f2931ac55cb92e84a2f2e2b325e5d82660f1fb961bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

