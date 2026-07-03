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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLNPE5H%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T132820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIFBx87N4yglxOfMwHDlpRG0uPXtEbtyMlmZexggp%2BcYUAiBg46DW3aFSy%2FYayStdtijZjh8nCt30u1%2B0NhYvDXTuIyr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMKkDh33DUtJmEPKZBKtwDu%2FLZYy5iXJv2ATTUVhUsvyJ87Vk5FY6hqNa4OartAW6QmjDtkr%2FqrshXSRwLCcgcHLyDWY9aOyOnFZ7OXvYUhrvLFiNu0%2BCSKWw8LPUsDM2TjtcgxY1WnAMCi%2FofY7Yc3CjwkpGNlAKqmyNJ38NLypxOntcac4sS7AENUgBxVkKKTI%2B7ySgf4QI4aZ76M3zEbXrUNvu8I56LLHB%2BGJBcX9zKuo7sh%2FtaXINN0aTHWUFitMsSa2NuqkE2oYKaZWopB1QFiksHadJgeoG0KQ6q7RqT2pwbxOoPyM3zJ%2BOg3EOtnZo8ZYn2PKaO4b6p3RvH7Zd0lmcvFQVOyfe5IDJQBqcUZc9epX8FUO9o0s1xfYMRIlf4kafpMJtrEZ%2B4tR%2FtHvL5YBqb4pWFRLDS%2BOUnItbSrEvqeQPmdIZXQJmM3%2FidO0h%2B1RLL%2BmHmZad8nuoRYTIhDGc1vbGEwq5fb3LvizLiXzT4WwMpvttFQvlmOsKzjlLuzc2BgA2cZX5xdeicOkE5lvin5pcEOgHUuzi2TQRlOMK%2B4wrlrPYGzjc5I1iDPmbYqAMFOIIFK6%2BWiRBF8SVAt2V3sh8bxct9MZL3e2uZF7Y%2FD6qZ7LQVmllvCCimgRk4fbP6e4cSs80w0Nee0gY6pgEP%2Fqi9bEOAmbHXpq%2FR9Gy9uodTFguM5XTDEyjVYZwx%2BV8A7LO58myMPBrxQy0teTOZdj05WhWl1zln0QCXDs1i7x3xlFbCMuHErooYHb7lyogxn48W9OSPO4HhNFClnj5HGc4CTh%2FS8nLPHsiFIA3LY8ruGjsKS%2Bk27DZA%2FTYAy4Yol6HB5GumG22UzBguK2HQhwbS1PrMoEZXbBIvpAPNnjTCmHRI&X-Amz-Signature=654a9b2b1653d6bf6aa2946f8e2052c474e23351724d721babf59dcd515d936a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

