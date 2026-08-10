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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKKLKRI2%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T154604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNlbKL8sCYMn9rC4SWCXklkuSx5EiDYfa0Q6wUSHaRwwIhAPEPommPMpamRV%2FiJ%2FHnCivSHIWSXRmehKc8jaEBYzNgKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRTa75QEFOPkWW74Yq3AMnnpm%2FSB5Nie2j0T17Z4wqMdUUHL9pbQ6bveh04VxvSJy7Vv5VbOwbCthtbL40FemzbA2MMvqNvrfABwPd0%2Bjd3oIDWDBEw1W%2B1UgxEcdpHRfT5EGzOepp8E%2BN5wRZ9Nd4G4J4kJjtHRxe3dQ4JDRofyF4QCIfvBwXzlckF%2BgPvNK8gsoF5IGOloAk%2FnGHrT%2BwhktGzyy2Jb%2Fw9NvaOZZFWoJKLYBCTF0VoFrlMupckqXlC9qN5SoOrPTJHPgyxwMs1D2%2B80ircQxmLLyB2njKaDi8vE%2BfxCooAxbCZVLop4Q5M%2FzZSf83iWCyvryzJAN%2FCoPJ5O1CzZddhxTwFCfIPG1JmWLYSfwilh0WKkCoBkNoKq3FxtWEVjY2ZZy74t2AN7wnBhE6VMKtFjef4VM5S7MB2n4I2Iepga3woocMlDortW%2B3cyT23g%2B3VpRHbhRddrVknr3jBywnF20Qg31UM%2F4Ez5JjoE3UwbK78zEQkNMdn3NUlS0AMUietez2F%2BIWfgI3cKPHxlvaJO9hdYjg684SyxkbWytevjirrNUEBOjmn5%2B0hEkhB%2BJL6K5SsJYn6lVsT6DrQcMLll242zayUX4%2FFl5%2BtqBtTT0XYaCvnMBHiPz486EtX9aXfzCQtufTBjqkAR3qeTEXjGhWbBPg3LHO9C0j21QG1bkImESrPrWXJqlr6DMFXc33wX%2BS2sIVUapEDVvdDrGz8g%2FhN%2BENEDavM5m0zkP7YCZkD9dV2jPBfSplGg7CViLkYurgNT5qE5aUp72BCh0GRFLFIYTgK8dLmCmEiCQsspfEtbrwQy4nt%2FVSzfLR1SdvcpqAroEG95IZzGdnZhSMMgbFDwjJNXm8M8wJJ0yn&X-Amz-Signature=f1aa0d4c5b2fcf879bf9d6594003ca7fe2be59e60966eec3535e5c885dffdba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

