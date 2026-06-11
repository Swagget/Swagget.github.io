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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAQJRFF%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T224510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDpu%2BEsu0u45UjkeaD32wvEzizTfEjetLGNE%2FxORlG%2BywIhAKfekxPUMZIS7rcGRyNE6Cc3%2FR7tB2Cl7my1eQ6ksSuBKv8DCAcQABoMNjM3NDIzMTgzODA1Igy4RREIZVTngXcZ1zAq3ANTDDSdFh5Ykr%2FFTjK1G7z2Z6WYclbLBY3ko74tEtyFA40LdKzM6K8HGy0O5llhkpQlawy%2BNfaS7NWpw%2B3aTazgFOP0gbljUXtjcaObRRzhBHPKaOGnSsUyC2w07pSA1oVSTRaK%2Fv%2BJiUJdXRVsfAh2XqEbZU3hif2pANnbAwKoVbJldkIdk54i9s4cfB%2BthpMjCHhs%2BIVEJxSjM4fUMW0MJngyoyZ6QL7rk7xa5M8lR1MyGMWHKSfcEq7fqhHmFAdGFOt6RW0W45ssieybr%2BddlGhv9x4bTtthQM6Ms6cfSfHEf8M2EJWWu1TKMxgTNYHmiaiG0mjpm5DmtfpLYBvJeJ12cUCG%2BlR0GIIoTz1ZJPuO87I6d%2BUgAIsu7hzCOvlH1pKvqvDVKgQwFeLqmBpHRmd6e6aJIkSm3SKfGb74ODpN4FXrk3sRpKXWn9rZPOm3K27%2FyegqSDa84zQeqmZ%2BiJlAHoRjDbw8Cjjih3rZemLrUMQqbgZFY48AQjnEOK4Ti0RjDSoNKiA%2FXbdjszDrTErK3lsHezf9F644utoP6r3re19BHe4R7UIECD%2Fc4m8BcAGPgx6rXXhOXFxluggw2VHzUWOTEuQXbW3Pi1noyHV9e1x2yPs5n%2FwhJDDv4azRBjqkAf39Amx%2F7DnbSKD5OzUNQmt2yaPoKqxfi5%2FPJ8QpvgCBmU8WkckgQ4R9OamACRRmEF4F9pXuhbeULB0bwOGQzOxTbhyzUgcXgPQDLrKGllTrCMXmZgSG7H%2FWLXXdHkxxIzJWZcroT2XIAM%2BVRrPX%2B1e24hfx8b2ADWSzv%2BaeNQvyh%2FDHqEMTQiPwLucs%2F6JU%2FMgR30%2FgV8CE4PnXYEkK2stOB1p2&X-Amz-Signature=d06b83b712a6bf901e021251875fe74e9b80920bdac880a21602b96436b6444d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

