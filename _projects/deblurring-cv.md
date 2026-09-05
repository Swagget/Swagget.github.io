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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CILKPBC%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T204643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDtHGoDvxP0oQV5KFxMYH8B3jrWMCN4ay2Wcl1fyPdNzgIhAPD9Wvc9Kdx1ck3O0b6I13XCxNfVKUJJ2XMuQCmRdxuFKv8DCBUQABoMNjM3NDIzMTgzODA1IgxuzsIfHSlJOfQT3twq3AMIfC7SdYY%2FflBuB7M07jniG58%2F40E942%2BOgqFpEra0Q%2FxuPJ63bewLwsnReYwUm87R28LSooOjTaMHrDdZsIe4opMhFbkwi5PnhMLQ72gqVU8fFvzqYA99TrTVkxlILTBIi4OL2QLiOk7EcwQsfYlCHk8NjXE2tRoDkrTfZBn863g4mcf7eNVg%2BQC2u8XDs3Wk2IEW7mqyBZ48sxbSIv5O%2FVU3V15WkM1tRlW9jjiaSNwWibQJHo8MguD9nkm9BTx8h39XPOoXH8B26TpGq8tXqikQi2GpI6CPh%2BdZThBYEI7GOfQY9resFzN%2Fy2eBwTtsSrNbLg8nRY20BOdCq4Nqmb5k0GjPB0lmEtZvVqzaCW94r2w9rd65LvCZ5QYdB8UySGVnLZKTT4nOJYCC6%2Ff%2FfkfRpzQy3MkUdiSO1U2HEEDkZQJdP8wHVbTyn82CWLbdwWrGIq2Vv9ehYfGGLa90NT%2BWJKLtxrAK8%2BgT%2FlAwu%2B6llohv7AA7bBNmtglffKPN7taNYLKof5HpqQS3GWEuO%2BMx0ZLakdmuTkhgqXY1RZeiYx%2BueNyuzuh3WMAxqFbsd4nbjFsA8welRLFNuP8X8SYzxAgn9mzHBMNjYw8B28pMcXecdWtnNpi1qjCR6%2FHUBjqkAZsb%2FsVExf%2FXCpHB4u8G92NfYukSfHozlTizRbSatN5l9Pz%2FyjU9Jfv4GE6bAAWHc%2FEhZVV51vH01H0eFF83blP7DN1bm1x04tryNM2E3KwptciC4B%2Bbg11k5uRcsIlx745sxbq6ligJrOaEvQleJpc3YvNLk1w6HcoWrHkSyfsPd2%2BQwshR54AV06tXmuhN7fCZhuydVtgOlZFa4NOHNSIii%2B%2Fz&X-Amz-Signature=cc26533d23e531d8a7d8f47bda1489b1d503cbf72dbfa51a3f06de13b42c88c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

