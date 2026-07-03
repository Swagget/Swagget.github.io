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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNRSFSQ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T053955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIEb31dugia%2BLVTIP%2FmonvSpWXVUsqYVCNPbZTaRtMI8TAiA6VGimdWPYe5TrQI0dunbwz%2F1xUCgvsgRGmaCcK9sb6yr%2FAwgHEAAaDDYzNzQyMzE4MzgwNSIMhoLO%2BW%2BiOcg%2Bw6%2FEKtwDBcOR1yrG7XCdUsyuiF2GF0DvLzrtw5WsrBRRz6cA%2Fqa39uxCep7AUxA11S2dTVAWykxdfwhRAuQADjZEb3VgpwQMJES8oNfNQ0KWCLVrx5IX8%2F%2B6H64eS2QNf3ud%2B4aCMXxTOkGwJrlEtQUMsSLSuWWAco8QsDxJil6gpGOzNA37DySE0bWuT%2BeRgGLsTCKbX5w7aHU94P9GKPH2ToG%2BWW%2FKnvtuyhalSpsff9Do%2Fo0FxujuHzEjgZVhL%2BxXw40CnKQUmoi1fgfQtAdPZIAT%2F49ctCYf0vmXBzsGglSuKNUmCFalBvG3f3WPPF9gSlQ%2F%2F5qCtHblBh5j0LczAsRKsZTe1JFRCMCcxZNzVudwO8oMJEg9BV7u4zj6e6Wx34JkSlBMNLnwFpV%2B5HawXsPaFtp6CGDCLMz3L8V%2FoadsyrfAjYt2JYnS4uSj7xUc8Ezj20BaDx0Fv46wTi2%2Bu0UEYDjRorZUvF%2F81ag%2BAJ85ql7U2ZfYtjACBIzc0S9pBNBZ%2Fc6Lr7hZLZUtdtandFYdZFGlTSPpM2IsH%2FCnKWoYczgZVWHombqFhOl19pAqpqnIqTP0JFLyUncPYGpHalFPZJjCaLK1qdEduBGc0ppUpT7MUkUi1F6v0iDdhhcwkpWd0gY6pgEShKlrLtCGqnDcuQBszBGaUU1CMxG6fSAKCLN73P980MNSsl5uobxDniQtD706iS919ix%2BA4s9rx1XsW0SYpmlfuo2wtpdE82Gx4UooGdunfN2WGqpl4s7LOxKEyfR5tA1euurdOrNoTi38vJr6I1R1ZZDmliKyoH6JEPa6kDRqKcpsD6EcZbiQ6babW73MSxFR9qu7W8JtMRGL%2B2TUSOYn5iabWeQ&X-Amz-Signature=21271108917982a2996eabe660682a2fa6f281c7e6a55947bfbae8a4e85bacc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

