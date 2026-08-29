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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSKO44K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T092758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCmb4RX%2FgPCiQDMiwBRHmNdVYHJeuODnQv9uv2FcczjQIhAO4yppYSumdodaYegLUL4m1tr88wG4%2BjzuvAFP%2B2MP1UKv8DCGIQABoMNjM3NDIzMTgzODA1Igyr81dgl5WJxKJGy0sq3AOT9%2FFmKjeyUh1bNr39d47qeO%2BIUph2r%2FbBfaLj1iEQm6nDsrELQLqviTDuzZ76UMf1MI1lsSXtTyweetHpFLuy6R%2BxCgc8w%2By5WQemRpJDcCJFmC06VhkqZqpe1JKnNKWe1uV2v1QaWH5Cqs%2Bg4jI0UMPcEV45gWHghPI%2BHrU0mmincrMv4PrFOJ%2Bk5tdwqCFZo9V3nEeHtLogL70A7rO3TtwOvtbq%2BWLD%2BjjdNk0%2B8dXwYPQFChh2J8suYfsfYeZbbwflmcXgDcon%2FQva9CmEC9dCDlPkIv0MrE5EJAYOFCOGHdg6TX2NBuDCMylJfbU6blWoUqEYy9230VzFeYAhX1msFgQDVRfmibvzfvbN3Lpr6NojBaRxNrfXONZgTDLuPGDNIfnpZnJ0xE%2BEz5OihuSlPOw0NzvpOHoEB%2FxpYr4JPevVL5R%2B5R0RBCjuLF4G9wEK4MfpiLHA%2FvbreUZ5RZVhIuCpA9IZVQv6WNsaC8HRLiEpv4zkXnLpAZq4AvKAE2lkbKLFfY7Suj671k1JIhr3DFhMu0Kaa90ZqN4ZyPk6P0s5Zq3LvI0%2BukmTR9JFN3FgNZ%2B4L%2FCxZ0TWFia6P2F%2BVDDpLPUuP8zeSXC%2BaFBBYivwhNmLUaR1QzCyxMrUBjqkAb3LqDCac96SmfZvvMq5sBjINxnok9a04hfWIlKFmVPg3dzoH9%2FFh0V%2F%2B9%2FoxN9UJhN1hQbotNZ%2FhgTBYaGCXimVZx3qaeg4R4Tmd3g5TU8v5hCK2%2BnGSKcvGJjvxxGGAw%2BWp5TAHtlFsPnmUjCV3mehLdSzAJbkuwLk%2BBH2SnjXLk6oKOQ4ciXF7%2FFO69qv8EohZVK0IwH96GI%2F9I%2F0siAJNydD&X-Amz-Signature=493be1f22c225b13ea8c056cac67ade77572bcbd6b1df0ad56cb8032361312df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

