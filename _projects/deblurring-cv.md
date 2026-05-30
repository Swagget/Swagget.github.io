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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJW55PH%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T234932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHh3SQEbcLjXGkX23PqVBCNoVdVaesASZVJ%2BmsL7sjBhAiBSp76f1zcvz3FD9dvCw0xJ9mPKqg%2BFRcqWFSXPFSmNsSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgJaNtv%2FvDPalrNK9KtwDg4rH9JBNITp0UhA%2Bt20I6AvfNeNbGyF6zFGZ9fpYFs7Cv4ZFo7qhOGhG%2F9%2B2bk5rx6o%2BZbIg8L7ZgMdpLXhah5tNkhtK%2FwbE9vC7DRZrdTP%2B5yZjGN8F52MrNov4EVvqlV5N3noMjVzE9qzu6m1t08P9cWQEtS%2Bc0YzA7WTLCB37ltQaOF73mlE4AbokekCo5g0ebttmHqBa8BI66v7lt6YS1%2Fsa3CglbTVqnwAUJL4tC9DMAL8RFFtnLoE3Ni%2Fja%2B7gWb8Ek%2BHR9xgAJ1pJvaJOKL0TLAC8Y952e1iwZSZObYt0hJXDVMXq7Iba3dmjqDhtmdcirgLzYmYQ5LW0ggxwY7v1Q4JvE8hq2rLQ82JiN7lfLk68R7Ue0SYwo6MRJ5Eo2VaULncvYEwrfrB758upu%2FmkQBlaAyGZXvj%2FTyicieJ%2FqXsNSDqgeQC4VtN1UDVUNuce9Zk8yvZ4lwo28zcJ%2ByRxkcllMIHK82Km11v77HSkEM3NlMxK2PadVUjzDW6GyfSObD%2B7jNsaCgsxQZI92fHcvuU31kmn95vniUBZ69M5zMgSfdwRawuedVDaiNmdFRzw8g%2B%2FRXUsExIxCYu68%2BdbHWUURbk0prkkh27YYJZLCwOo%2FnUVF1Qw7%2Bjt0AY6pgFOibaOkfAaVRm4%2Fsp4cHDSrM%2F%2FG7vRDrD%2FDxlebabezSv35EAvmQ9dLg88PRl55%2Fmd9Iqdx4Rb4N3e4i6FrR9QxCElAAaFQNsFVP6272x3v02coy8qg1T8wypl%2BsY4P0f7se4chBclNiRGVuP%2FiAvSEYCivb89lZ8I%2B%2FKO9TTVzajbrobZaBkYvE9QAWJuoa%2Bm1fm2x46QUKWTfAeVK4gq7RsA6kj3&X-Amz-Signature=ef58c2a501f3a9968ddd23da27ed52d926d632d379862d5f0f2c3fcc69d16d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

