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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMGJ3O6%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T234646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICTsTB%2F8ShWKG6wgMAzqYrnZ%2FjNkKqrkExRtdAafgwS2AiA5rXseo85zvgVuWo0Bt2s7SzpqxW9hT3ERszESmiuyeCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tXsBp4OvNyzmG%2BdKtwD1HylNhoul9kuh7X4AJ0LXSWAjtuM6V4FCqy9AAefoR3mA%2B5J3Y92xMGoXo2oAZ3PVSC5EpLlLzfTtu8f0kVPbcVoxrtP76%2FMedRgfOuo4YWF%2BA6QEqoTueC8uNBDV9QZCm8ovO%2Fs%2Fuzp2mamizay61M8sHHF2HPGrq%2FaTHUVEkfEuSVtyZgxYB%2FUERmndZ31jjasgFQ3ykBYrgQD8sbCNfyh1NxMrvEDRFdQ6wlYpY%2BgaOmALRZng2YeTzqVTa%2BIgvo0cc26VUKQshlSVYEl%2F4UZxp%2BWyD3IFXdRUv%2FosRODAUGVVC6vNqN9crclphH%2BOyEO5yPr%2BjrC7uMo8dJ%2FU1hUvXc62UDzXs7YzDe9lFK9lu2en5zlv5cu0%2F4qsoaFE706S8VyJ1GdQne%2BRgPHD6lgyWkGyxE%2FoGewWi92d%2B1gLUEfeF4bQdy17jIaogXKPyuyV1b4herTVmzyEYPly4cQFTkDx4saWYErsybgoaF1txdRDGrKcL%2BsA9t%2FSVXHlOm91SNnKkba5PDELBmWRZE8AwqBCpZxenKxvvXNppk%2FIh67REAALLHWzE8c3x0pBEt5DqNjZFCehDOipqdRwZS0x4XevIn%2Fa%2F794pZYLtIeDZwmaEZtGIzmpwEwwYG%2F0wY6pgF67wVjVFH1S3eS07z2I0e2tQPDQmmrANXwgAMYGRZw0g7JpbOetebSCatFe5erRNG52uKssw7qwiUCSiImfL3Nap%2BEYcpOxE6zQyfCPeYfH8XDqaQ%2FgAZaJs9TNAhN34PKnT2noOGM9dbGiRSl5OvmQg1syrZGF0hyI5iG3O85lTAYWfKo3iT6%2FCBNoF6DiXXvm1oDIq4l4Htu%2BvDyVsa00idGHVJm&X-Amz-Signature=c3ac8e190f4191199be605cb882aad9418708b21a26cc39120127031e76a5f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

