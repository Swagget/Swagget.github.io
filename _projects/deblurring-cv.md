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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZEZVBD7%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T173825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3DBo3ExmtRWZQfwxdbJaUCLtjPmh%2B9vl1MRkg%2FsfuPAiAbOx3x9W7El8ChJx%2F6d1F%2Fwy23qD21vm8duB1bseuamyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6d4NcS%2FTsc8mbDZXKtwDhmkd9AB9Tr70lL2YjAzQr7snzyHRFnjQXvCLlwL7ceOU8g1TEcqlywTmEeUO6OuSjxcfj7%2F8OZAZeg2vIAWwlhDOjLfiwAVbGerzrAOHl4WWsvLG1g0KOpz6GIm%2B%2B7QYtP0NfA383fN0EzGY8RhOZe76X%2FpjYjjaewZ4nd2WaL%2B32aqzXe6aMObg6J4tdLoznF9p5vcxd1BRY5s5LX2QGcbAvUkEMUPdqGzv5HbipCULdBBuBTFtiC01Wdg61GIp90N2snq2eD3eZQck9139NYoveAopwfyvCB1cT8ARdfH5NThUxWKmWbUZnNgq%2Fk1Gn9ZubSNV4OEpGuhKqlw%2FbBR226SNV%2FqzxXjNcmIYLTiYxslwqmajkPdiZlXFoPtDTxmzvYg9HoOiJgMIZXWzr1JMFdbAcDJxWuyj%2Ff%2FR3qfCu5sIPoY8cEPdcdgGsukCroa4Uc%2BmnHxggVjqVDBGqV2wbHVF%2Fhreh%2B5xze0eeQywxUELhasP0R%2BTvAWaHS%2BBTausu6r31MxaStJ54sULs9%2FKQ541YkaOrCx%2Bbr4rILkTG%2FBqAVCD4Fp7Sj9NYIzg4doXuJAJ5Vu6fWZTIk55O6P4%2B8%2FXz1w1SQStoK5sR9zl0C78pziJyfJLTXUw0bjE0gY6pgGtK3TU9mZ%2FQwBEVcP9SpOQvhNaMNSL95HMUKMmUFlWa8MGOghAeblcks7qieOPe3iMcSRBT5AQLv5dhj%2F80TSEOITzFtK9520GEs9f3V0Z3cxC9Osksu1rTGO7MFJ0%2Fc2T4DOXs0Bfmqbt%2FbOOzntCyOfRtrDfUHIcQRsG8lvvp8tGgZmHL7IPm59CaKiN1pdwr%2FOF406axuiXfLxNDyGUnsLV5lHY&X-Amz-Signature=68566c463d3657983a33789c5ec669c74bf9db341f3c2103fdba7119a0b22737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

