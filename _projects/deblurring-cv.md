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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZET5644%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T062230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBvdH2cuW6c%2F3mo4BcTeb4aPA3wMDcE1O6lCg%2BoGXuIQIhAKbPaQ6izzKfgLHatZ27X85KJcHVhe3jhMplw6e%2BaeLSKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfmx0IEQKQUcJeq6gq3AMLVWmOTU3JhrYD%2Bc9JaCLVBM%2BscWfJKHzNPxCCvDCOctelI1Nml%2FQ3qK9CHSqPHRgssGWb5EAPYTCzhINexeK9FR1HC9L4YZZ3dmWgRgipIORGTcEcBfeDgSDKfjtCg2RgZKq2pVyyFGh2um8ZqU4mocgMJEzMPRls3oW%2B1%2FAs8DXseyy11yeZxvh55ria5dHR7i5Lkma%2F5oESQ%2Ff08G2Cb%2BsKRqcd41E7CcK0w7z%2FW7IVHawkKnVOV85IH8VL%2FOREK5k3Y9I%2BzHaxZXG%2FiPctuiIWbx8BZbMAy%2BsyNy9VPu7cGLyAXimgWABccuTXKGqox87p9Bwgu5qUguSds6pXkc56Xue%2BsXR%2FUVJXCTmcS%2FMV98klp5OFhySsn1JBj%2FimIlQB1xclD63i%2Blfwbt4AprzpVWVA2smyT35oSX7u4VKLX6PyCyFzVQTmKU%2BgTxtkmzyA%2Bk%2FDPs1YFudkvv363Eh4gG1yMUeCVoJ9ca64hpofWEuVOg3uI6lJ%2BqvZakv5QyJlI%2F9eN8zlMt6mPyMr7goS8ZReG8ItOoVsKMGY9wT53OLcIoiloxxcThzrhy4EDBHFLc4nWKswAqYAdqUB8MQ1jvvnVQo5hg9Md4JL7GvmL%2FOm4qS0JZAs5TCyq5%2FUBjqkAXUlU0JP0YFFF6P7VtSpP%2BcVMUSkg21D5bjsEYWLjwsnIjOMOJnUyI%2FPP1bwJAR81u22o3boksUlqP5HPHGrvWU2fBOhbxfs5r6pmFIclgvASa%2Bl9NLd3L9I0k9c%2FElQlQfd7qEUbrD%2FyqTwupeIPdHe4bx27AnQ7P7PyoE17aAgsezxe7H5am9xMeHVi2ayJeY5QAP5N%2BZZ79GwnTPXZ5TdEBiC&X-Amz-Signature=4efb06ee3595c3f0d9726e5a37a8792bb555ca7702e42a18fef39ae58d652247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

