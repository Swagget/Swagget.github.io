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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HCIATVO%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIG1%2FZ9y94x38M8InvbuI%2F12ssnca3QaGWcXIH%2BTK5mxXAiEApeI5Q8oHWCBCDg4n%2B7xsK9zc8w%2B2%2FUxY%2FsCOA3k73b0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJRRnriJolr2x8kbiircAzBJl1yknvr7WO8O7zN5Hj3kowDpF4Rj4afJspzC4i87NGNYIrppnXThS93dNgPvrBR2wUyvn2XgrRnd9l8%2BLt0kSrOTQB%2FMi%2BCGWXFrzsSjt%2FCroJtVh2w2MRF6K09EABRUKOxjGtoVjr8MfdnsScaPV7KsQUwGMpLm2gPmnreWvwS2pjpqD86r89gjobNyNvsQHAYL0hm6bREVkaNPE9xyVTDOkgBo5OvYr8WLXnodxH5BT7IA5DeywC0OygWeyw96GFR5RQJQNoSKkWebhEjlUiYFBPWWYMW8PXcEa4wcGAaiNoI1zFr7Rs6zFnLOZDSZHR9IdE6yFwFxCxwIBc2Box1Gc5cqd9b%2FZb5sjJunYm8BUuOyiaHLJqzO2aZ9Hp7Z0bo9My8AblvkvZpiz8Ov5%2FRXH%2BEsjfUMQfLQoQHMnoecCTKEPDFRdyjnLU60cIzKtHJJxElY5AKLSJC4gvAmMLFLiiTSCUIOm6zKIVb11gwmthW9ZmH2vSO4s544ymfPHjMwYyNZeJbMNJglNMU%2FePo9vqxNiYqTq1b%2B2wszrAqdaJnQnv6dVS3WOdgNkCfrueYQYH55Ri9xjOTWxVbUiOx17fOz1Ce4X5ZRAK%2FFX6jzCxzF6m6xDNsfMI68g9QGOqUBJA%2Fkqz7yo5smnDc19IqQ%2Fe3yHi8YEKiG%2FLHfqiBwXzp%2F3RkhhlU3%2BJULNow3p8Mj0kRPhKJ1KziG573Wx2uzsL8hXjjXsnj8u7ujW168ELGYvaA1LmACx4j7JhrCCayC%2FZ5LzB6bkcL0GluWSnobWvlrQN8oD%2FIxXnDnDoQvesSzZBM%2BLb%2FQDV4oaAgDPj4J2z4LFXrro6UXiUiX8%2FYXG4zTRd8y&X-Amz-Signature=1c1bf37956ecbc1200bb5cc00deb3295426b97d772c28f39553b861b8a7cf2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

