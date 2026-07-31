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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFKEMY3%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T171517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjiniTOjbGx9ccv6KeDXUTG0V1F99N2Ik5iIV2oeSYgIgOQraTmPr2L%2B798904XRi4BvIrY%2FIyQBZFYEDMpFE1nQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm6f56kTjrL7afTdSrcAy8UCYI8SZNUNWhIHclgkMaUdPnPvgdmAEYfAkfQ5aJcJiX4%2BesHQwCSdRqV%2Fu3kJAeEyCVURifgOeg5MVdFIpEH0X9UyDsqJ7yM51yRA4Pg%2B%2BSyJ4r8xEXJM7gSpJCZm9ms4n6x4j9nqHdJwf2NByidhbwjcF3FxO4aS3gRsC%2BAe7pW4%2BtR2g3z%2Bkrg3epUHWnJLsU9YFa1pN6WJdcxV7649pJU1Dcd9s77WED2z5K6cZuW76D2dYaRg5cNziH28DaEMJ1rA4sJVAVLRZ4MdQNybav8us330kui1pyBSeHrpAwas2aHJr90d1co5psgnaFnKclCbyJ0NBzraa1TRW829mT5u%2BuGFFK%2BkrCpjwbQja%2BenvcM2sRTSI4DPQdMG6CGxlm6Och1VAaa7uY5N7Q%2BLyx%2BEhvhkuYYwQAIFmsZqxnj4qkpazxHZf6racnCkbuSBPpMk9kehHPF1yXcc9bxGjw0Y3N%2BN7rXvx3IJgWlFFM2WTqJnbkNqZdylJK3DrBAt99ZZkwsXf%2BdEvzBEDDABIrwQ%2FqHkw8Hzdzaygh%2FyEsO61b7xVXALqlOIrGR7CsbSKLSbPh0SHzQNv%2BqZ6aUsakEQQgSBGb4mJKvcaGlFBA2lSy1bG9vN1bBMKiZs9MGOqUBtndBbMs1iBdHhBBLn4T5j1FsXixlIKTGoTaB6gn1S0%2Bif1f4izW8Udo7YpFoSZz9JgrPE7l13t3254o5JZFORvi0rJdmG6rl32VHILeWVEh5nxy%2FuCuFYYusPtlUWSisLwxCgnP6akgL99TgXOhd9SKsCQs7Mdgiuxyq7ddHTKm10PeQfUzrwE%2BoyoYJg%2Fwc1IgLwGpP0D%2BoKGjSdsHVOOADViiX&X-Amz-Signature=eefb69b052683fca52c5f93719c6df6fbe4271bd9aee738a1206f35caec1fe29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

