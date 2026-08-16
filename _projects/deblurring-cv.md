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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTTWXAO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDL1ox5W%2FfT7q6aXEOPw2%2FpIEqoUydLiOhHaK4V1gZXdQIhAOZrxOvywh9bhv3Jh32z1OdmbXnEfGrCyPdQbOtkM3joKv8DCCwQABoMNjM3NDIzMTgzODA1IgyptS8yHrkYA8M7%2BxUq3AM7HoPszf%2FFN3wwqc83Xy%2FMaupaarO2bmTFtA04%2BiapB6G6xawBgypqPOjrGBpbcwJHH5FIzYD4FeZuOjryRE%2FtFRrq2LTwKCXRCFJbsxkel880KDTNNsXrvLHN3zD1cyRgPq%2F41J4sJvHowrZws%2BTYjyuN7n6SBCs7JBpIhc3QugT2tXeHeo%2BnS8A1Ju8fB43BXbw%2FopWOe0pdFaEi2fCr9bOpQ0yvV1Qhzx7SLBQav0y9J3AsMAm8MTPbBH9A0tqyavYcqvPXgcmfLvTD53HWitp09M9g5LoqgMria828dPjMiirnDdqZMv1I1urlDgh2ZAwRWXSn%2Bkwusz%2B0Cf%2BDVxt4RDiSScjrJfh16h1IlKeMlnvfHpZ%2BizA%2FA9uKta18ML%2F5MfrmmktnuMU5p3Y5PtR1TnST7ZbUNqIRqWYLSJv1xhdkbXqVA1AI4YmJDzuZKtjD8a%2BhyxWppdIL%2FE8VADvi0E4OCMDjRSZDI8kCYXbRJmgeGWvQsqmugzCJFkrybyvBaMSlELskLScef6fW9XTP8dG45AY2KDhpr2yJLAN5A%2FGlyRWh5fXz6Qrx%2FfPecRMXPyfCuWStOg68%2BKiB9Dl%2Fi%2F3UqG6%2Bc0EgswgFI%2BF82jnK7xsllZY7YjDLqYbUBjqkAfQa1HFcy4V2zgPUEVpDYbBVewQ326iNWpELvlBZCnIfjJtZYt%2FOOyOws25EtJDhf61fk9HUxGFVArSfGJlHKgMsLuM%2FwIlvsZ7t8pTnTJY20MEPDpkFUMrtpSkbzBogHJ0lOP5GNlZyGxRJrRu6mlMdpxtIcLGqQsSvdcAdHZYCIUP0zOguzC9xuV2siWLNWU2QnchHLwXnU0IpeujWbVddMido&X-Amz-Signature=a1f7ff1dc75e5376c894f5f581c3a06fdaa4f66953b34a48726f4636a0d749ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

