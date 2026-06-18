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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NP3GDJU%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6oEgQj1PCsN7LBpMVMfga5X6NIbC5Is7k6MY4GfoHWwIhAMe4nF0jz2f%2FLZgEKJp2sB8O6s%2Fqd%2Bcd0qoyVvO8UV5AKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0qcv3DHIQGICXTvsq3AOd2HaNBxSQTYrGBjIiid05Ytl2B4aB2rESMp%2Bc5lW6wtjvxrdGXkQZMSp2Q11wDAUNuQW8JWDckzc%2FbLCedHc4Npi53TOO4jGlDLHD1j2ET8%2BMp90hQKK3u3mQkmquLVNPQKCwpyuXMLQIM1aNo9ehm0kqqqccrMyoQFDjits%2FRgBXAelKm%2Fr0am%2F87ad6gRcmQB%2Bk0AohU%2F2ZFMkl%2BOoe%2BJDAnvX7h8wJbCh7II5SgXDVs3TaF4MBZ7gJ1g4tq2Tmar%2BldWSZPQjKzFs0OdTBHh6vPoFo2rXyvqcUB2YX5kIfua6LVPNMoVV4R%2BwLDWPuxYtGObXmOY4yBy7WEuFYdzlO5cGAH5%2F8gczzlqBmPRlJFY5urj1YdevMszqLrX9KMOfzjhwrWqf0z35wt7YB2x0Shr3JR7BF3wLl2V%2F0COCBMlTfmcbya3xOvKTncrzzo71c7JG9PWnaCa%2BCcokL457L23eAtyk99HxeQlN7YHChmJJkIkHnfYMcFmHZOuqKFH9PoYwMulpfnyXNrzu0wYCa4fEjdQya3liysgOt69oTXqwNhTatEC1cmx4t%2BBI4HKtRhfO4w29Xs5uW8LHmI2cye56PLbNl8g9K7Fyna91L%2FXh1HVdOxRgCVDCol83RBjqkAS46ZfmNZFjjDawEN%2FFRHWGYJZUAhUT6Vf0ZRI2XFs3fdFKCHOZnsUf6IlXrpS%2BGKtvMaqw6MHbdCz9Ee0t%2FFczBd6zPWSPvBldb2zwdBz7fmg4h7rDdgwYP8GApEa62wR0AuN32Za1F6GPdukF4mIuTTpCG2cnWrcT5Y%2BtGhkMVTaBrqj%2BOXVHd1cje9G25mNnsm%2BSItY4PSfVSJTW85VwDLRmT&X-Amz-Signature=1e3d53e27f8dc4383bc8779d276c494dcd38cacea1e2bb31118cddc9e863ed38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

