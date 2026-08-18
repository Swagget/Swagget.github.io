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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466732VSVSE%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T081957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSfeHo8Ddw92vX7CWsXGTAWv5uH9RI4plDYcY6gMVCXgIgKugFoaVgwkNTgjvphyYiVNCDz2A5wQlR2C8oSRluiHoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDByTi%2BcgkWHsY5ez5CrcAxElHoT5blU7YPUAl4syBCiLI2LZqrt9cE7zHjvDc63PvHw65XCmg5riVvpwaeuKzy%2FwxhnoHtz%2B8qgWPrjoyY9QupuB1oWlruYJJbgReLeOdif7X42fLJdh2tTSmK5Vm4UH3ctqsXxeaP2UwEBY7mFLClz%2FnIzxXwPyv3BnB5nSKMuuTDyZUd87eGLE55kobf%2Bpo2VigIBUM3kQ5sYWa7A5yXwHrEoT0w1Fg9i9rg3SWprSD%2B1pLEfEaZxjivAoEgzpyzScBOPUxwpKr4yY91fmsdS7QzX%2BrRx9LPTgehswJQTgkJegVrihNZuzVB%2Bd%2FJJdxehg7J7bjxVQEOu8fcttXDDBeOD1%2F8YV%2BASzH57RJZyD75iXYGDTKWU9JrL%2BIFwwY2mROFx3%2F7BfH6Ya1BGfB7jhBcgwRDgjTUmtHYS%2FE5TrTsICFFdlQHV6um5NkynPPFpVjq5G1fFjeQdpj6bfhkJe9Whj6O3b9kfFy2iZlu8vKyiMwCncw63pndpCutHZCB3W0khqFAjLL5lQodH9qkhUuQqmKbLxCBCvm%2FHAS66pOsswmI%2BKLrnMADPD6wfXBo92mN33DjWZPaqzuSiNA9%2FYFQ3ubfG4yExAzqxcekjKAUFBUxfrqabeMO%2F6j9QGOqUBO3VYKIIZFbitmxg4zkZEZUqEgHESFWZ%2BIg4EakDWXgsQPiuJZARP7oPHOuYQqa5xFtCLKWJj3fN8KwdQ%2BOV%2BoTAkrM0lp6K8itALJpgupH7%2Fn6YTN%2F8bwSfcGvXCQW8bHmqyVRTvaxrI%2BofZ3W%2FDOD10%2F3O%2BtwEl3cQEhV1NOzvKlqC9iIl0hdlkjz3wxliGhQ8o%2BDOVDymQGxOgDGiIARv40fxf&X-Amz-Signature=756c27ac5a6c395465932e70ed38e41c795fdc087c0ac8a290798d9df599526b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

