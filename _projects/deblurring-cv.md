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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKU4H6N%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T190451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICcBz4ySnegfM6RpzTe%2BIkrtqSosQySd2otQLY1JNxnBAiEAynr3TByPW8n1CK5XIHG21MrjpUb7Eucb9e1sM8mQXPkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWFLSIhFPKiUd24XyrcAzZgYfHVDALwTAimZFs9hmu3asQNRLIqaPZFJ1Ns0ZYkbR08fetGxezRpGnfY%2BriaxETU4rSh0mOvKrRIEY5sHrw7XQgOH9mv3butP3I5ZcpklONOBcemzcPtK6xNENAekPMDW%2FcPtjeR8D3c1hNPlmo%2BCedIpWOAUGE14Uui7hpg6TgIi%2FpQTFYAscwjedkctqdrGMVFOgPKR3qWYoa9DKHVmxed%2FLPRyaIO%2Bk%2FQN2Y4XVaEjeuKRoow8NQl16tG%2Fy5Xo107ZEVRPZhCNs4gLOMHWSIqv4q3qYb8xeUXipBksuMeNfcknL16oL5O%2FXn3GEfMnu%2FM5jgRUa23S9Dzb2qhKlbR5BAZmbsHDUD88aCOz0X%2BgK3fvXcm3Z%2FlujL%2FDA1v8HTSqFYiHxIfvQPrk60fOXe9Dov%2BsG9O%2BjX5bZsv2hg3ukQG2K6%2FihDouQLUkdGemQUf9ecidPxlaX1vaZVv2V0orlXt4ZmHJadc9jgcpiDLYb2qhZ5vhUJBhMwA5JKivicVGBMvaS435Tks%2BPkZzx5FQTnZpSocKvifACJdCofhKJ%2Fs9728eWviTgEqeXR3sHkWWByFVHIKA%2FX5YnDuvKfQpt5GxlT0AkFcp8dmW9aQm4d2QUNHp3vMNrCmtIGOqUBYcYHM%2B2WbpvxnJtC37Tu3IGB8FbF%2FscL4HEI4ShikjdEg0ZK5kfcuOjnZJoctjpJBe%2BttO2%2FkZrsHz4ywKgiEOrJlAaTmerkvx9Q1k02LUABUl4rryKYtiJjlVuR6vdNJuvkg3dUTdYzZYDHTIa3o0ZbFUtOrAWQWNpXHF2MhpEV3PsojZm%2FUOPJGF0YZ1ZuUrlAJFRokDvUg3zHOF7JlgUhZx1p&X-Amz-Signature=fd4aa2e18006c53587582422043fbd20c9fa026aa5a7b21c4ca19e0707788874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

