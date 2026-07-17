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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7IRVRB%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOeXbpyavYDojSj8XU8kMjff%2Fy0VTAZa9nfQv1sh8%2BgIhALUA9jM1CoYKe1P73YCBczIInnOQDgvSIi6x7SGe%2FzRrKv8DCFYQABoMNjM3NDIzMTgzODA1Igzq49YvbgJiUx25LPUq3AM8Fsau%2BMQtbsll1xwJ3eejsOOQT%2Bfp5TZzjy53DYLI2DnUruLh7ocbBq5CnoupDkhpG%2Bpdfqc3kfBzo5kl%2BATj8VMw%2BPeNzQIrpL1ax8VFEFF1xH7hNJ68ru6AIcmUPPToOlAifzxioM7sTcza%2F%2F3sgNRFHMJWXLdQIUXXMNgcfFO1gY5vtbEGT5NCUq9Fsq9P6lpDmQmtg2dFMtGuvIUvY8hpfSBNYc1sm0qStutijxY6nLRzcdQIh306qQjYSD2K3ckJrIWhqqMgIk5bS9FUSkz82SO5Z5QRBUksenhK5L%2BBsxNtqI5Nk78Tvk8DDg9BwdGulOODoAhyDoYNj3a%2Fp63nVInSF5J4p179ammmG%2BT1VQ91svIDBgh1bZpMUO3QoUI1%2F4eLJEYfqsWV21LEa6g6FS3ZJdJLIWo2VHMcGtfXfpv%2BAGuCQ8JgMveC%2Fh1egzKfc1vDA2gLSEMBhR1l56duIUKeQbFiyxFkEnfeBkCrcDk0aPyDDabZ0FR7sNpjR%2B3n5uzFAQgICMI8N7fqyurHB6OpWs%2Bu86xlR7yOg7HgeK%2B4y%2Fxfszf6%2FaJlbvhQAL5ulers6Avpv1iMD11X%2Bli8HMYG8azk5YA1hXF7xHbAoVEfNw7tHHh1VjD%2B9%2BbSBjqkAW0tur8%2Fp8uC77frXH4veJArOc1cA9uAZNM%2F%2BSPBTVw59M7hzpKwvf1XSee3d%2B6DF%2B8LB4yL4RwmG1x6aipfVN%2BXFP3dcmkDDqCzcAgysxJnw0xG8REZiylnYQA5stypzX4lyqHa7PwYDXJkLUdsOCT8z0BOMeikzy2bzi0nJofQBjMB9xjO%2BC7kvhNuSR2kte3202qI9CxlsOKUXnkwkHjT01gu&X-Amz-Signature=3148b899a754aa610d533dfe4ac8e2be8e213e7f8fa8e9221ddd5b27529e5a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

