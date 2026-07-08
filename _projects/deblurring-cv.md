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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRPJQRZ%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T235744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWsmsqzrNaNwRbW8GdsAueE3NvHwXpU6EuP8no2XbeOwIhAINvLP8jdmWStAtDcyPMO7rlz33qN56S%2Fn4v%2BT88USuMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4m7Y0uszW%2FT7%2BgWEq3ANz1r4k%2FRBwjCdvRQHdGi4HwolDZHbSjuhP0C4RsK2ulENoOtoe8L%2Facc3qdUaR8l0%2BO1y5EKhldQ8T01PA8CujMfpNOkLEYN4rj8eeuFbSPeYwSafCXUng4hhs19%2BKtACMZ3IUyzmqKR%2B%2FGiXTQSxTd%2BK0aLmYgbDwTnL58Zv2H3sQascS9c1CJloSPpZKqtA1jMvAxsauMs78FxyaN%2FlL9Yu8do85YAPyA0v6EOvJ%2FiU1LkeHG2HS21E0OHZsgccAQY5Xa1AyWbsG%2BxkguPALod5%2B4areCORrUVvjSyOnHxU0Jt97wkktgTrabR2x0nK%2BYD7S%2BkO0NeXxmSMJ6hCAnxNTk8fttlG0IxrZV0nN4fRQwpwxJis%2F1068b43n87kNCZUUQOCZ4z5294Q7UrVSBAVcUJ49Kx1B7hsCYvXZT1as9fwxDSn6queXtsw5yfHd3%2FVKaAtQI0rinp4MrtpkbgjRNSGHFTaI8tF2Ayr08Ul7lrK4zjWJTpqgIDpNwbdS5zh%2Fr7SN%2FUGvRWyj8OIjUgdg%2F6T9xuAV6hP%2BQojNaRVoL%2BZuDErj8SzYs%2Bg%2FeCiDtvinLNzErTSeIofZy9BaxRGgF4SNO5N4oZbiioo7Rw7EztnSkbahjPO5WjDtwLvSBjqkAaRx6%2FfmjISOp7KhtRZEGybsgP0pnKjymjpXUC1pKZB49jOk7Tsoino%2ByLaZ78nuN%2FFbz2iuzjqDBll3KfhGB5NulMiJdvqzGizNbQEembNlqmZ%2BnLMnZD5eaKLCCCINqo7lzKCqvO7WYxWRSKkBzQ88WX0ca2FviEcUCjPGbvnjBCFwUZS7BJ%2FivHFHuy44XBTyFdVYeWU01OXjytgTS0rsR8Zf&X-Amz-Signature=5b0b1b3ff31c30441a88fe7659420abf0e053fc97cbda04d92e93b69793bf8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

