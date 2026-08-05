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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ6IOWI%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T234410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCtqcJnF2TrNnhlkjH79Xx6yBYBgM3Z4m8EcO9lyWMgXwIhAKcLQz7yRdl39nUrlTo3YLiDTcvqmRjZzepwE9fwNQk4Kv8DCDAQABoMNjM3NDIzMTgzODA1IgxiTsGDEqCRyAk5YcQq3AOKE5F%2B1ZKAlJqYitrOVPn%2B2x6fsS9rUFETTvhgs3d9UxogzrrGG8aJy6agJjL%2F72LOalgxZePzuwzvktC5YH2Xcpp%2FQKlapw3%2F2%2B%2FzpVtV5KFyHwN3vX80MvlyCBCZB4Uie3TyEH7EY3dzFyHVDrLj%2FWT2zAJp7d8O7fOU7MC3sCh13Xo%2FwIgUMZelBVJcc65nPICqQJ0N8WQxzXKOUJ08OyLQ24%2BxAq42uvcgFhkjXVlPdW1rq74Elkg014eVgBpgFi7VcbMcY%2FXXVBxy8X1I%2FT%2B%2FOzRlRoLFk7SwuDbpVgPcDF60Xm7x5JUjsvEUAxE8MyjKFwBHl%2BG5yHlTt2ep13m7fMEOxdWfGZkrRjLCZ6tcwGxmURjWJ1CQt1i%2F%2BcHswKU%2FAbJg%2FBWia4%2FePGPw0KRKNMfZ2z2iApKw2pcreb7J51ktF8NOJ6iGf%2F2u%2Fwn192qYAtDbQOOjZORnqWOOAFV2BeIKLsM5PeH8GviXC26CAj2ZOvqAf3hHBGEFTJzj%2BGiwhlJobZATAtiCM02ahaOrgad7k0SLrrYan2x1xdIpfP9o5x%2FHeh4AOCqffGSzuNLKOoI3xkSwCQA7vvWIh6kSH2LsltWsWk3VncgSx%2BUuD7ryXnW%2FQIqt9jCQgc%2FTBjqkAQLo8FULIuuw%2FMTMI7JsVktuih7SYcGoqIcjYzy2CNjorlAf1MHJyAInqkO0dS3hVq7jcUVdaAZwq9Zg2H7kbUWrdoCwedSgkAQ%2FWU2%2BIYZM%2F3KLiZrrzcG03TPDszDpyjeKI5VkvjgD0E%2BCNsz7OyqXcESOSVE28xO7XtietPctYnljf%2BBj7YodxBswWPXxymafhUhvdjp%2FWrWiVKNqhEwGWvDp&X-Amz-Signature=d51e5080c1fac2d0d887ceb4d6a5905112986e39596c1c0b3a73fe4bf5e3530a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

