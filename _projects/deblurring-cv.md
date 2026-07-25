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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRIQHXP%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T234756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIE4X1JwmorN%2Fa4T71QjxjV0mrd5FMMMrX18SyOTsq4DQAiEAsnp6sGbQ5FCIXoKo6qqm3V2VlTDZCBEHD36N9KJyHKYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBulpS0ZV%2FpvZWo9cCrcA1RrC8epxoqsRhI1YGQLLew4cD98%2BofVflLugdocnSoquMDSgfQOHVUYjSlruEVscyqOcdWijufwinLWO%2BDUZQBNeyIr5iPEZOFoK9v7eIzNPGakldm3fBlQYxkTlcHfAhrMGKZ0WL3pbtzoxct1xjoACRFn4kP0d%2FfusdX3MZ9OjY%2FDCuk5JvoIuhkiq6rH2VaWb6HX4c6MLFXRPzu%2B230sGbsY%2BulymwVhuxabWwe9GQ0Q8Fir1S61z14DhY%2BMCdK%2FNG%2F6sR3U8My8y3zfRYmKiwmYLYT%2Fvis%2FVNiH77sP5L%2BThWRUkV5AXt7dVowos5jWvVVkJqhKav%2F0MN%2B9qBpYPoiPz3Wk3KZf8BpqV588c%2ByvLnu0oNwQmiNXFE1VruRxFc1q5%2BxUS9gDZ4gRqCA9gfpHw4EtjKa%2BHb14LJCvchCpL9PDkoHcx3q2otNFd%2BgtiiB1N75Kdu8KNuMjYj5SHPyZziphLOw9xO9Ntgl6lHqDu8%2F2v3MGXtH206e6bHjMHluhZWGohJ60xuH8e%2BNOPif3OFo5sgVg6IkIy3nFXawvqmPbaf2SPg9fuUjwyKrgpvdlbddKolVMSqmjn8LPHA3QPGcKajmHeeSj%2FRXzVfW1cFcLdHYt4GZ4MLGIldMGOqUBaxElAA0IbYSKc%2BRS2oqbkm%2FhEPCUqmQHDD24EfIOWjLUHEn48EF3iVyMv7g%2ByPWtKX27EK0MRTaWKQSSUu%2BXWqh2zi1rLG6UrMHOt78ABx36Nk6P%2B%2BcYreIwYgKKvYjuAyQxbhS%2FlPI0uASmbrSCGXTmYqaWu5%2BTJfZNdq%2FAzjRBmonQ5oC46lJ5qZcslHluugXM3eRGrjN%2Fc7s6Fnftj7US1839&X-Amz-Signature=c92c5be02964d72f5b752e49d97c4a15135b59e98a107083b4b8ee3b6e7cd048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

