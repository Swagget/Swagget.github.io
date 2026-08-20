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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHHFWP7O%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T002942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbzy%2BVJb7mRGOytMONtSqGvlVkXugq6pDl%2B9YzE6FlGAIhAK%2FQAAeDeJtVrZuLZ5vqr6%2FfQTgsFepg6BlE71BbqKCjKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHFNDWh1b49QIHLkq3AOczcHb1Tz0Hl%2FIlKctDfVrEn4ScL%2BFSvKztGjPD29%2FaOjXjeZwKoHIl1f2fUIC1WXOx%2B7lymHYci72mJBlLTjKPMclpS4onTfhjaT%2FhoF4NwGfsXYF45iziG9jj16CPRpA6oQwfBUqKnLBoJ3yHe%2BouRZaw3IGhJa8z3yHVrwonZ1K%2FD6KBvDMuWydMuGa9PbwWO4GOKf1VmaxqMNDD%2BDDTm3I5k1l6AUO8cFv%2BpoNCvA9DTQ2bwSIKaTuuhWq3Pv%2FucV%2Blygn6c%2BqSD6IbZnfM5eNY3kOQY%2F1fp33Jcf2gc%2BqaRQFycmQWTw7knApAZ6HoKAlnTyQ2bxgorbYmBOsTZOkCybdZ9Tqah318DTptIAdYjI0FqNnx1tTAnGZnCrNzMsla5yE78DsK9C2u5SJTFdWZ5g9n%2BMP%2BlWIJdREMsiGVgixl%2FqTfz9b5%2BxmI2rwjeeGem9o8FwFbKlhuHvS4tgencMiVrJ2PD6wHXpMXGwuDPtFx5HhD%2Bek06rbXbb00bhDvYTTGl0qPslmFoxXXoz%2BHJj895VxmYERJ0OkH0g0QrR2D%2FPgnhrPR3K2BRYGEuDb9M9W3mJ4%2FuwsCtY9YTeOY7ctNGheOJF6%2F3XE1DezM%2FC3hmGzVBYUNTC475jUBjqkAXM5AAyaha3AXj7WhnY44h5HNlEQBkw1yvTvSzQxQx%2F5TSeIgGiYbR0OmwiMsDoqIo2pxOu%2BZlKVF2aTvAcNIRt8w%2FV%2FmiuKJQUSbFs9HwUYNKeo80RKHhOV3FDPlb45lDo67toH5sH9sgQlk6ZsBNR1bpeDt1ZVYkWNt2oyCR3LC2MdPBfg%2B%2FcrJWtNcI2dk8rDsYsd8CFXlvMQmNZAbJPOpSYb&X-Amz-Signature=8000a5512dce4284355eec18eb4e97a7796d89f5fd22fc9c81ac0e1cbd4fddd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

