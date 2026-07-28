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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APFZXZK%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T224753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXGi%2F2VCron6nKiuECV4Tr7LaGzk7Tlf%2BetW3Z4VSKAIhALkSmkGLJAw5cOWDAFFXIfi9EnWizat1I%2F%2Bwfp0Z4zWUKv8DCG4QABoMNjM3NDIzMTgzODA1IgznCpfjaCf%2BFnLvV3oq3AMhWyD0L6tuF8J6n71NYC4nzh13%2Bq2nDrSmr51hlj6ahB8qjCVOKMIbOHxf0HaxH7oLalcbqZsBAal84JO2WhRiqC%2BWtC1u03%2FxwFIZXTibMKyXDTTgucnVJKnCbchN%2FbkVEiON4pIjdEu5dkNfpV1OaRqlVFVya5s5m2NV1csmePPsNxXMtJk%2FTxFm1N3CA4vSgmFaKACL06pOvtYpWjBVy%2BrX7faEJYcAMV2GSzHoZ%2FzPO3r4GBQ%2FCev1okwFkf2YQpYxasN%2Fq8lVsx9hmCBn3V2P1KDPXrfFwdfEbUsR7G20rBkU8EJPPZSmZqQoc34jEcNdZn2w8U59bB0U%2BD%2F1rqvH4mjc2MAZ2UXhE9kVpouaM8ijIDx%2BeKciHQQ%2BYhSSRAYc2tK9iA90fsJvq7lZOu0%2FUiCJRx1IN2bdMP6YiynqnnaBbNrOOu82vKMnvU%2BhVyd0sc8mtAbcuf%2B5P6MAVrcphIypfUzz2wTiJj97IrUlDywts8u3rBtqcElTFpiLkn5Ll3WHpPqUtx8Y9GWUb0%2BPmKpchbM7j5THCyGqW8piMLg0VaoGSw5%2BXqyFsPF0%2FWYs32y8BGgHMjjOiz8GUf2XH5x3xpdzFvsk01vSTNmAladjM9XXUP8aDDC6u6TTBjqkAeTanDpnmCV8m5cBt9xDXjfAibGh%2FKO5Y7exuUL4cChZtG19vS%2Fxo3jqlq1VbiW2tAyHtMhnAA1CRuLRj96mNgtQmLR43bHOVvKYnrAkcjId%2BAnEn8F6zreeZnNKdAC6rGtTNl8IkldaR3u7jTzOiTs1m1Q%2BRQji3PMlW75XvmQpqbgqg6yzu5T9tznXZvXxu2L0e2AkbfcWmQTVJ0s9Axyuh%2BzM&X-Amz-Signature=6b604a69c2c9d99a76c386dc55a4771cd56fe9010631bd84a797cd14a639720c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

