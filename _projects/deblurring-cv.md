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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZXBRWG%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T095558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCR7JlcLOwzc3LL%2BrGtQuG3Qu0J1sKw%2B18lystX3WBFoQIhAK3Rb9mdvIBVC%2BjJsTFgT0AO4lZVLFQKgRnLEJ44rkiMKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaIBfGEJNMp5vJIAIq3APbjpxsvENXWx3%2F9g2PZHoE3swYaiLIFjdQa0ZzO2jKSVuLytveFdLdo86VoW%2FvTVNFHX3W%2FMe6JwA1XVTX%2Ffpx0ZOdCko6J0MDhCrZ1B45FnJvsFw4Q9dsvhofGZqotSFn%2B38I4z9rSMhurrrRx9MAlzLfU4ClsUBt6bvOuiTP7IpbdBCNiMhWJ8LDZiVJHmZyNakDBKNXWmZKiDx57B4V2kC8fdOnsWMYScld%2BA8Zpatfq4FWLBpD2xaB03hehCv3bqnvQ5S3OjLOlQMVQOYdMs%2FRjh8dDCP3SL%2FTUlDAfAP80zD%2F5KJ6kRTJMsPGGCllnCa1ZSlGAULPRMfVDhzbiEeYy0D9NtDFb4Li07M7uyed8oY46%2FA%2FIzM%2BzuRhPjnWbtLWEwjKw85yS9aYeDLUiIIYMFRTEeOkCqM4Eru2Sf9eQGFVpRLJDU3T7Q%2BJNCG8HkKDkRSOHn%2BVQIXXNwmiO9PzIRIR6wHWqavnBd8VaBkCvCTWujZCRPGk5E3MVBrgMmiSEsgn7EV28SxcncRONXVA%2BRu9Xmvh8v9ZOXyzmGKBSf3DFLz2wBClG16zEkCBtJCDKdpYtD8fa6NEBAJotsSLrRL8hTqEviFbLmj0gP986iP9O0nVc7gg7DDR8rvTBjqkAUbMnvNFSsIL%2BER5TKSO%2FhvwHX1NpZhJ4%2F1rzm2o6lDU6oc%2FmsmZR6vxNEvTGYUS7P%2B0Zy2XHm%2Ff73LvsqPxnbQgEM53dwJ%2FLN5nSZdFo4hmUZb2NC4pCHv995mZF0bOyMo9d6b%2FT%2BrI%2B9jrKoIHzh8KMGjREQPHMao%2BLB9PjOknCZbLtZv6CcS3NB9z6t5TIBK6vW2BHi7HNfc%2B8o2VguThzQzt&X-Amz-Signature=cf73dd56288f458ee73295731ecce9753bc777af0ec83df4a360e0eac7bf54d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

