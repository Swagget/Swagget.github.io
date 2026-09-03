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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MK3F5L%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T233644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHaiindtXoO7u%2Fp0MH4qe5Y1yPD%2F5WxB%2BtvHHEIDxEgQAiBTjCiN40xUSsW02pMFy3qYntbVd%2BdlGe3snaupZ58UCyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb0jbdHSg0Vc0s1wXKtwDkRZqxPUzFToP1tNzDAJqbkGYPyEyndJlIKzPqDa5fSPGljRZVKQ0cvHQt7iZfOlF3q%2BXQRWRZt%2FtpW1qXbU6oT87PSA2%2BMf%2FnQhSv98UdkNg97djYp2YfXmnu%2BSGjwub4WS83a6P%2FkKu%2BzlM%2F1XkhkBopcTxvLax1KgxEwpWHPOkloEDH%2FNiG0mUx%2FvNRjWVXjpw6GySPtXAb0Zk18lSHf11H7hvo6CSlCmPA8eGKMnW%2BNbO1TQ9gznx8Ie%2F%2Bl2YLHbgcWKTug27Vf1%2FyVwGTTKNAPHe%2F%2BbgSP9LxZI08A02Q7oNQwchW1Neta5A%2BW6uO7yZhkZZoInkxIJapMIJL63oIXa1NPDQc20gTG441ardIC1R32WSK6L44u4uNdOAMpCjYiCZtg76d44quFATOizqODOlGbSyhOB5X9KJJVcs6Xrzid6k646MLy3GQP3pk8ddYLcRins5IsJLVd%2Bi1zaoOgB0kl6IhX6kZVU7B339qJmayMIidB4L%2BMmLaa9kucYdzwP0GQuVyvuGYB2BSRSBFwgnlkOSJecDninchZOpy4gbOLr5HkXmPbEeuOAUUqffdR%2BfenNwHjk8dF1KYuC%2FXYEcnH%2FXbnRNFjHLhQyt39N4wcMdfAOdPPww3L7n1AY6pgGXmiavasMIPiHrc5MSjlQy37PdNIk6gdGDDFjnldl1gpXMPDxLbEeBFFMqyaQlYurJ%2B6tn2Y0JBe42SFguLpRQ0bTf2ZR%2FfGpotLPMxmCC31jAEERqA8P21kT7kdPXhhR7%2BvlDOMgGyc5vifNgfrpofSoUw%2FA79f18lvI5VyszqVUrOpsBhMpQuSJii2TUDL%2FnAAvCwaOUaXfmiWmj6hVRVMQ7RCr7&X-Amz-Signature=be178a276f39aab3c7daff5d856fab072c3eb18f783f254f4cf5d56b069ed2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

