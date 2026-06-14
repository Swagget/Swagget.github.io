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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZW24PAT%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC32nNWq13tRCwv5XTXCPa%2BD9ZcsFwVzk8gN9lkMf8ikwIhAKEzq9Nu3RJO8vE%2BvvOY0PDB56sPs5Z4hJ6fQ0xXvvOaKv8DCEYQABoMNjM3NDIzMTgzODA1IgxucscFcQ3dCj2eCVwq3APfXl5xqCuTCF70bb%2BzBu8LyG%2BivjdOhtGcFVElS%2BE2%2FnpePTBBW1aiBB1%2Fdn6rQVUsLyz6pg0jiAHa2tfGu%2FxKGj%2BTr%2BUgNDZBLeIwNjoED6u8DNxbjORkKi9sq01IFX%2FgmDTQM%2FBUsSYtzAstgMXDXo4iHA%2FCLldRa594CAZq%2BUowod05pckLYg4JR8vLnpJCc26%2Bkx%2FCfYCrEk10aN2URPkXDexWk1gbe%2BnOaue2jZlnbgWgO99wASFLeO7%2BHYr0lFHMIiAiIpeIverfPOsfwr23vHgFR%2BX2F62xYIwQdRpsCVkHBPZrJYTedbo4NPKcFeMtc1zT9cIaPgJOMGxXKpfDyGKlTeYFL3RNctQ%2Bye6BYWQtnsnoWk0QrCBpWDlxHkk2PCiSui9vMOVlsD7YF1%2FNQC%2Bd5EMvMnah23yIrDrgMxQGsuTntwqQGbeHVN41FVKHEHfivugAky7FXqggO1U2UhBcPQXl2TQ1XKWu00cEHKJg%2Bt8V9j7%2B0kj%2FkUrzvRWlPRxD4tZnaHO96pLM6li1LuFwX53lxrOkRiPm2jrBxtol4JQdzs2KO4vOpnwS%2FrDoOHwCVC0aDW2QF65TW0SHXbsF6SSRvKvG2LgMx5J7fEsbwPwmSqm98jDNvbrRBjqkAWfwV8mbX71BgIoyVo%2BHywl7dNetv8VzSuQxXbfa2jtgiclbv1KrTielwJ6ePbP5pdzPNcVvpKkmhh51Rq7MLvmPh2jRiOuIQXjoIYx%2BJ0umHSAQ9u%2BA7gKEj8hdUKFsAii8uTFtngdcw9Sagd5huZBh0CRw6%2FfzXtZv67h4RP95YPZhL8aV3WaHVHUcALTkePbkJAkCGp6MkdTI3zk6%2BKTrcQjp&X-Amz-Signature=8f1639b2dfe00f5c1283f2a2f3f014c0c89c991ac964e49d3a9a6aa167812059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

