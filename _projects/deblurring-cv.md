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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIKE4U7%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T205201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDht6zRsTSMLuT%2BLFqmseJftC76iyPTjQNGev1kyRpp1AIgHBBxm9RW8jBOHXWJusRfylSwpzqBh4pBxm6yXnaCFwkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7mKbguzAkY2ljTvSrcA9lAyH4OIILA9LFu1KHD8sG0MfUoVb7HUYjDQMf26qq0y0TO0DY3JryJmzgME%2BnIsFSLWFCFQ3QCoTtPx1lBPgf8brMiSllD%2FITW3vrrJgfP%2F2sklUDVz5DFft%2BQpbvLwYsSEI6Y6OgOaYjfvHFekawJE%2FOGQMPxUz%2F%2FUa046kzi8NK5F5tw4PCnVWNYPI%2FyPpAPdCVJXqb7GJboSKkwonEqqIPe0A59lg%2FTE7ToYZ2ZNjv%2FTTE2TLM%2BBiUV6TYFfhSUhMiZHh6yy0DQbVihx9EoqyXCbEYou0WdgmsZMtaJyHbdaaCAa0bi8%2FeUkEU1y5N9pFfOQukrsHKvY%2FWKIx6Qmrkjyvs9mSt9ey5p7js0V%2F%2BdbiSAuScHkvxZAeTQmUPRY9aPW%2BEoNpv2WMXpKIY%2F5EFXMkAapVcdI5C8PhfYzB5KEuTrU9Umnus0vcRXq2etELGP0RAmd2PBGdC5bYZyiuQMLbp%2FGCTZqrcD%2Bk0HDKcOycDfX10Ar1TuW639rRT2LsfWdxx77Rre7ViiTg9cwlaIi9qfoGDEearr1udFxCzMw3rDLoKw5lq7UPXnotQEf6KEyAQfreI4V8AotE7DUH%2FkLlTvMTDOdwJraDCT1YK6fGOzZ9K26OmeMO6IktEGOqUBF6oQ8IBgVl87PJRGQng0G9dvLT2BeiD0rlkU1lwHylFQWjBczq%2BM3ouyfZKJ7hQnA0gPABIfr2ItGmtnSCV%2Fugjefk3HJiGTnq5HNr5CmBCV%2BaU%2BPKcQZCbkkqDtNSySmmGpOqOOx9ZDHLUALlG5Y8IujxvOLMZmpSj6tTYE%2FJchhWAlR6tnLh4xSOGc61Q9Oz6zVPfKu4Q6tzjcsZJAw%2FJn%2BhHx&X-Amz-Signature=ba29da983330d3901d78dd5e7c94aa140620acc2e89fb43923058fb76531128d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

