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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD26WRAS%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T230533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGUSOs9dIGemH1XprjIQe9GsF1FQliGZctdz2br2nTEPAiEApXLHi52QnUISm%2FV4FfMYNYd8CvQcYVdhZk%2FgPkS1mDsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGcixjtkn4xP%2FjTbmircA5SZslk8zAa1wlv5kWnau2dPq%2FBOvQSHuAF9nNGqlLLGRhs7V7%2BsHnak%2FTibbZ%2BO6%2Bu7%2BI30ohFiFCEF80lGTrxO2Kqn8weyfOO6weRxJcbpC4EgFSoLB6KKimFf%2BrjDoWnhc7oQCokC%2BjDu2G0cZ2YpsH3yl7qIfeiYcNoSE7umh5YcCX9smC0jCE2tcoXt8j69tS7PftmO4nAOR6x1CocR9237RoEzNY1GKR%2FEa6%2FOmfZ6YnlNXA%2BgkD6kcAbesQE8pkfEytVNbB5gRyskTHB15ZZMpeoV47tlTZ9sbBfzd8g%2BYCcI6yoy6yNfroL0TRRvaEOFymvC1eKtnNEE3gnlWNffQmmI7XugcDlW9whZYlSfEgn3SSoC%2FpXU44UyK8H37Tor5rYPA0Pat5kV38CBViXkqi8%2BOwG%2FBd9apsVEBF%2BfBAYSXiqHNQ%2BkjgxUxlJeKFJ%2B2LMCD4IK48RmKSieoQNRYKr8ZuMd9fRBhMjqe791fCrsmhMLYa5LRCGGjzEtraLHV6pFZAxPMLuquKeDZC2E918hT97M6DWkTeoNvIzubw%2FqE6ALgZMGDuu2rvkayIJq8sPNtrw0ybnXlkpYU637jbDaCmkUVOVTcnFKwaACdHzBofkVB%2B5qMO3z%2FNQGOqUBc6OoAf0YUEWCjszYeYq%2Br7wgVx%2B6eaz57J09SDKxrn45PCwOJSOa%2BJnjfIDt8ZlOoGmN8A4eupAksoO%2F0pK%2BgVh%2FN%2FnwFZB0ugz40TuaaLSVMabqpShQ6fPYZ0PUFOp8h0cnKd%2BErPTxoDVNK97bxHFWSHJyNbiWwnNC7Sq8Q8cobzqUhsrwtAB6Vqy%2BzCLcu0Rub4YIYfvFmgYVjhZk4shZMc%2Bk&X-Amz-Signature=8650b9311b5b709b649daf4efc10cacd1197d6c2d02708efd8dee88a8b7673ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

