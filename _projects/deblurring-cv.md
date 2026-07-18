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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YME4VCAX%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBf2Lv1JblFowbG1KETPKppRto%2Bxp6XUAr9um0Izh%2FldAiBV1tEyQCNLIPBvMcD1KyMEKK6ViSUmt07HCSXVk43kZyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjhtz0eqFWlZkzn4MKtwD2QqAnlAyfBL8SeQHdZ486CtJBYlLDGDvQn4whqpxf42nD4EUbpzOvVAhjlpRXsADiu246f6ps%2FW35Rkua5w%2BKwteQQx6h2YSQy%2FeBZjOOP6%2F%2FUD8V2RzOFCznbS9oxfwHeMce%2B%2B52qJ54Owwl8j01es09VDYAsHjpBhM3dJ9E8k0KmL2YLXhf114w8jcrZj4DhqImyUEtRKJ%2Bx4UqaGR%2Fslmj92AGS0nGXcZmoBT0VGps98dyA3EPR6gRQBd9vJGBHTQP0Sv8s6womLoanFbuGRk4MTdk0wvppXFUA9MRaBq6pLLLNIcDELqoy43ljX%2BmkByXIm4uQtmT0oPQXFWThjQow9VyEO63zcUGuZ%2F6ORYXVL9VOJ5RkG%2FElOnBhPcZE9tT8Bt1Bxec5xPCmAWkYw1nalqmfI9hTlRaTgXmskiZYtFvrJNyKiULKg%2Frfzh%2FL97E4mQ2qBOWvm%2FlS8CaC2Aeb%2Fx9I6uU0YR4%2F5PM%2FDTHhlCpi7XZeYCWw6v4Fy0OMVWRBfqPoR%2FiH0SphdflDC3WoFywt4%2FryDBbCbEofTjWBn7azyu6iXboSNg7KpNR%2FH5n84x2v6Vyy6ouMxIzo4gVM%2FaO2McSkYnbpigkQ3TGThtskIud%2B3kawkwtv3t0gY6pgH6ZXcX4VeLUi7CDfqMVdEkcN%2FGbk2hjj%2BNYVWEwkYPTN127uSITBsCKqZuzsb1fc9yWmNLj5GH%2FkJTjIGaa98hYbNt1xDhyzXuKvGef%2Fo24UBlZyN%2BhyzPq2Kkk8ViMnfNAOd7ub%2BdjoPlvw5QxwtaXt9sftPJjhp2pONfTMn%2FEqeoi4UCHk8Y7yFpEkOMNkwAF2cijjfWTArrMF8ZjrKirALnEs%2Fm&X-Amz-Signature=bff716c0a74d98fde39bfb0555dbbe61129ae34c657d42918e85b48f0f2330e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

