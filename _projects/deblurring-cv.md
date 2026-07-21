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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5UFESB%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgNZIqeibpAKz4f%2F7ISxnuC5GPmekWyFamqm%2BngCBDrAiBhOnJ%2FdFhbeg0lVWmkWk9N6BJzKWYDBRIsZdR9TilakSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDtXxxe55RmynlHadKtwDNrHbjfWMdtg6eRa%2F3HnhF9kCtxpb%2B4C8v%2B5R%2ByELJPeGA7tf8ZnGlDBH18twzOy1Ra3jyzyxX0fC0sPn5J1JzKd%2FfpQTIxzMrQf1TAkvSGXqnUeXhNqXb5s3EO9PeFBpW%2BGpJwzNlc1AlHR7Vmal6%2BOqJ1p%2BxqL7dVoVsc0bpz1vgTswQ106aaBlodP7yahyMVZhAaHG%2F2%2FMWtTnSVBWN6PjGKJsbxpLfO3iIREGAA6%2Fwj1hSGnAPfFKhtwCTEAna1%2BsrqiaUATTctEzhlthXtGTT4h%2BEpCRMfqNZSsksiC%2ByLBrgkOj6x7rtuPvxuwMIur7z%2F6OHM5aflTNuaHJkGMcl9HqOj0q5AZUZpoPvv%2BFCq3y%2FfA6jn8%2FuG6rdBGEA6kWxnSrKv4FtROxgFDSMEfCmwFtGYaSEVQnQodJhw6ukEVhPp7Q6RmLTmaAx4DkkAzYUaEEUMHmVdP2m5GdwO8vs6NHMMjzEs2PiRvy13SpOFEqWkgFDg7Il12RURsPCDq9AamD0UF7DdsL2ljEkKe5%2FOlP0TzQBuU8XYdyuKUi4e0EKLk0%2FGRN1oQxvp%2BXyFIv9QrtGzCvc1Epw42HkLt11I5ZW1QBIn7piEVtvYHl4VSRpcgUPzpwR7gwld780gY6pgH9b91TyqV0FAMob9RAmlDzPbfRy3IYAUE8%2FwciKluojIoWoyOmrBj8D0admvPyh7lMAmQd6XIyrL46CwfW95fcRhEu1TJRl%2Fv1FsdmsoUaq53Vm4lxV94705YH5isv79oC9m%2FLAAtrG4ipmm2ImCOpl1%2B6HUJmZFtJ5rozuM4u9%2Fk3OjJDceqUnyZJ4s6uSBEoAk3CyZLSA7yuutCJyq%2Frofkf%2BWyg&X-Amz-Signature=c20c8af29a7b30d402bf9b056042bd4c9225ff5ff1b880e0f180ee0be2ee126d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

