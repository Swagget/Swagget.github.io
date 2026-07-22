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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XHX4SCS%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T121923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAa7rrM9%2F71qCmVTXTC0l9zk3wstviwhANTX949t4tYLAiAr64s3QbReXrbQc6Q4gRH0lkOpdlovZW%2FAkPaWaT%2BckyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTeCP5x%2FH66zFCsn7KtwDlqFbOQeUxVpEW9lGvcJzo3oZuWOJUZB0JFIqLM2cfcPaaJZa87z67RJv3l2YBlw7YlV7eNd7z7%2F4E9GiJexVIeb5n%2Bd6oT3Un5nx7uzFte906Q0rSOHoG%2F2ax5Ph9w1ejCyydRgacDTSGgeKmi6lUzXD2GdScZR8rJ3wwlS5rSgktHn%2F7cl9z6CMVQuxEUgCLPJeUQTGIO0DpnlSfv7MVEyCEACL%2BRfFVPTNuA125ZrSH1CRgGgOESdmzR%2FgLtlWA%2BYZpFwHMbYK3xUODsfJRJWNZy4kXRLg29uMh18xmw84C1FvS32M7AjqmUtabyOq0BKIja4zoHchyR7z4q2csykIhwyqSWrfrA6voM3zolvnxN5fqH1Q8HyVS4vZ7C03fCENfKYFYa48nMvJ%2F8pT9qRbBqhvh%2BqkFL7RFM8wPeNopCOWs83onpAdK4Z3%2FnRqX0PVDZlmILyT%2FlmaDgUpHsJGboxdoUSVXsRoe1PRccjiRK9fyrYlk4Fnh9%2FZ8HEd5vWZ27v7iykzimYMN0J4kPAQMh4P%2BQXTEtJIEZJ1SB126D0N03WIxhjcFAbQuukOtLKEGY4Rw4BjKZtel2xrrYFjmqpSwb3Egq4zsDRyTJAlxxn%2BrRTcHU1ToogwiOmC0wY6pgGl0JMuTSHlYq16csjghAlI6%2Fr0qtc7IIsI7%2Fw6NzMGkw%2FDL00bDzl%2BgfMDU2VVXAe24BUtqlWoSf5MLKbiEXMSOs7glrSVSgQrdYUKUSVNO%2FDKYDoY%2BUhg6KNH099tb09%2FLzv7LZI6zYsXb6DEiYSWGLu9OE9jHYI%2BDtFMQ5RfVOgo%2FjNOagFJO%2BEUiOnz0FbRLzKc%2BG1BRxs%2FL%2BRVEOZn7zJpU%2FUL&X-Amz-Signature=aecc43af7c77feead0df19c7b09649ea75cf258a6e0bc1fbf2c628f75e98e13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

