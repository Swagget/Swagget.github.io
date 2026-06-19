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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5HBTCE%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T235637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MvJigNIokW1f0%2B%2FBAESGg%2BbXmHxKuFGaHm8mnSxkeQIhAJrsOzilBw69YMX3%2FYJBN0frqrYiSawIhkIB88%2F31CdTKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKSH2cDg%2BP%2BJge3aEq3AMYquiqKfKCItrMnuwJ7FFwUCreRQoCpV7PIZwCF49SYy%2BQ0kS5Zazf0mC%2BFxCVebaTgLdd6lbo6fZM9Q43lmxt3oWN%2BX2awHZL3bKfayUOnPjKPYcjt75j3oa91ER8Mnl9wx5pl%2BbBfWyEM2JA4nVwVWHKtqTqiA4%2BT6XO5ET3CCjIlSAm84EiVBZNRR9oz4bHhDgbOys3oWTX9QNTopqSxF4nqdQk5qtxGaApomKWR2lgBDVbLWNrDFaYnImVrMjqECEcTofkqv6t4Iisi3J49LXq%2F85ctwzSiawZfWYLzWkT%2BHwimE4qrYFxipo%2F744gPCKcinVQaQ7Sr7DulNWVBa3MTUyGFT%2Fdn0Jaan8it42EabcTtP6N2WDsYaSlUpFBBfUIZTKVvhSVvTQ1jzyEJDh%2BGSXArRs3JFjXt7wCVmrB%2BjF%2BdaA9ruW95j8Nq4TQt9uCPRW1u9PCOHVOfKhQxlc264q7rvwQm43Ks18alOjk6dxXp8ZwHDVa1ICyxSPOmWf%2FK5RaZJ%2FICxZIHADteQl%2FWEPqOaU87mDk6k4jyJnzdv8qlSR9MEbRUibY%2Ba9l85cE6kZX6U%2BeQNvsACvA2hnv02vfUzE18X53Yg4KDppGxox2D3UKd6eBQTDrm9fRBjqkAcGARxBsWodUTyIA1R%2BmoX4orWPMhDKIK3B969qXgx6fGiaGX6WFR%2FIh9Q6QRCeh0VtWKnV6jBo6b6qZP1mX%2Fkn%2BQ6FYQbYYEurtiyWKo7Y2Ne%2FoG1xcjibERR3wZBUyJIJmEXuJNzNg5uhBoJIsCaPjiyQTyUOLIeP%2Bn%2FDCP7kblXtSU8KX0GbC275lZiKA0SS3vWMt5ee%2FA%2BSag3XO48Z1QCoq&X-Amz-Signature=1a10a56a390d3418d9bc1d6c24f92695fd2af989ec1c0bf0144505bae20bf2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

