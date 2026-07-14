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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI7377H%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T094232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDw%2FA2uw8WtdtKkk3djYBtmnOri5DEj53qZ6z0BtRdtUAIhAKiN0QEtQXmELAdPIQUFubNUKzCj9iA8YTh1IZ2hM7mNKv8DCBEQABoMNjM3NDIzMTgzODA1IgwBEAHaRBr9fBRBlqsq3APznq%2F8g0pSAAbZb133y7ofWIQBI8cP5mXEP0g4BivnGLvfJ%2Bp7U%2FWl6ak4oyb9pdpwy0QNBT58%2FOFt9pdJTU2o7X%2BlnkhY9k%2BoSnYsHhyNi58%2BEvYLW4EHJwa0kvkwGXTH%2FjhfQYq3G1DWYeP0BDRKlhuG6Rhx5dSCtZmmtnSD2NYEgFg68ZCj5DqmaN59jGhO7K61vcJd%2BK1NzRRioUAjnXSjq9SfR%2BsW6EtPHCjIOeyamBlVbGUQ3dXtPCdHmBAGv2mK%2BUHK8aWXUVQd2Ny35TbtfmeSDzACFS7zRYI1EwbmDiw3dHyRKQ03X6nrUWXv5pDMmdbUBGY%2FrchlMMu%2BhhsEDscH%2Be4%2B5WT4gGwvRDER1xlrcT8j8g7md2qi%2F%2BU7EXmiNoFRgX9KcSf8Z%2Bj5TRr0Mgy9bjno6Hl707xgs2lku1Ll7jMoM25bRQhKPfW9A2%2BoP%2BRswFjXmVHCoUw6hb4rjSZoLeao68Paaqw80ReUw6nxMK9X6MgUnbgtNrVc%2Behye7tQOjYA9FPG9%2B%2FlhVCypMTXPcW7m5qllKdZN3YAjUEqPYZHgFH6Tq4IsQOwGmeq5abNuGgbvzvCQ%2BS%2Be7wly%2FtEy0sBvGah9EFvAa7bsDPzmCs0fkB99zDey9fSBjqkAXjRd2ncXQ0wGwT93KwEzjvH%2BZBM%2Bk20jJ%2F7roMAjn2mXauFTZLqBOLW5J5rLww9W2210kTmmFdiW0BByswt1OC9fO1%2FVw2sUic7v7O6UP2SJXAnB7ASO%2BOrKlNwMnrc0DCwrLmErzZ3gcRkCfTwCdKibsVGfCzH0xPhGs%2F75a9FdFmkTu7H%2Bjt6F6diHnuiT8B0ojhJ4YqKcgHDSoAgX4Xlv7P6&X-Amz-Signature=419856ac0748cfbd43c822d0d52ec4779cf548e19eb77b6b206334dab4e011cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

