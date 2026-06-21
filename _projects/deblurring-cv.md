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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZNKHWI%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T133017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHoNifDSv0SRPh2%2BH5XAvLAitxxJ%2BR2GP7435b6fszgHAiEAzVpjjqqdc1ojEweNLI7k0g4C2Zl4EwKS5ZOmkZYIVpsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjHBUykxtZ4VBekNCrcA%2BBGKyY0BWJBDfI86Zt74pPWfqpsgDCJDTD%2FvYBlWSEAHfcsF9AfdNhKxt1XkBgB3x9tbnAAcygJpK3iuDiqXSQSbtrcZn%2FdL01cJ133I9cjCuCJ3sU6PIrADY7wMlShYhe7RuAMknCsLNIsIOKj45kbPR44rvXYaLfV0vM4eGr6jP5UzsUhykwwKXvHXIg3cJbjcPiI4qzRwBIZhrmoA1XxIwTq%2FBAY3JpPJuc3hEcnObsWQYqc4Pmt%2BhHDTvBXu8%2Fhb2Ll4pa1Zlb6UM4KGcUWP3SdyNLlPbA9fwXsjWSBaRLcMGh%2BHcCACakLWbClc9rCcT2OLeUHFP5g3yLlYDaXGzVKYrJ%2F0IyJ5dWL2ucCl1FT9oM6yxzwb3JKkfoW483VHnOMrklvi0Jue%2B0hhpOTY5S0Qjr%2FYqgif%2FW%2FZf5gkBdiA%2FaKTNkHybSkN6fRRnoeUmxCLENe7b9vu0P93Z9FfY%2BMC0uNeqsT7%2Bvkd6jZkof0I86UsxLGRW%2BJtspjaC8Y3uhOOj%2Fa9bsAG07y9m1BWZrm%2Btc0UDWsmjrwTmt03rs6fsefxnlsMfOrV6oeQ3Fe8QUuxWHk0Q7SMY2P1%2BPxsLvCtGTa5KjTCZb2bXOmFLcWvsKNrtIfyCsCMK2P39EGOqUBJz6JE3cat4gKNCA%2BonVcVoG9RNz9zehv%2ByuU%2F%2FQLvzi3lTTueBe2rdrgkR0zFvpWCrC94CfzwljQhlJBFhfhXwWoOP4XgnGEVLqw8ieMoH9ThOX3ep%2FGGW3Ean3Xidz4k6v3bLOP4JpxMFeym6LuebXmXhkQtHEEId2oPJsxoW0vzHZwWtFJtXkjMMaM708pjc3%2F1DVI%2BQtidJuGENmWM%2FiI0%2Feo&X-Amz-Signature=97818038a352c109ddf8c5b0cb089c74943ed604f677db4e928ec287084ebd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

