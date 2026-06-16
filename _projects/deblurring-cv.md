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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AKJBB2%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T062015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN1HBZ3aTKdc3GhIP56aMcRcFqclYH%2FMnj0OYVtEvPJgIhAOMl75%2Bibhnkw3h6ruRZNSrBRWy0wgK7MBNWjTpoNXrgKv8DCG8QABoMNjM3NDIzMTgzODA1Igztx3S2%2B6oXRGFROesq3AMa68vKtJ6KHTUaVHmbHCBxnl3Lngev9h%2BvpXIimGxCTQauSDILhK7kPOBaiW0B8%2B4fj%2FxJh8LuoXy0j3zOKc4tOYTgxcL7JvNOcj9BVbEmHNdCittsgpuHdz0DsxuyEHWSccIfFr%2F0jpQv5pGCJf09gm%2BySlSZIEwkMKYrMl4jlbu35KamWvNL5v%2BShxxVdS4rEdJC%2B0MnsJvd%2BSzvVXqaV1bwkj20ix87ubtlgySecCPWyZrK%2B7vuF%2FfUR8fr92nEYSN0%2FcsseCJ4PLNq0eI1OmPuMgvO0HdoHOEOD1zd7UXHzf3%2BQr5vm7KomE%2F9UzLQNoAMnAxiNNoLkZMRmdzB%2BFdsSrZhLcofoaMvqTV9lUT3OBzIH9ENYQ6dCi%2B8NWJyltkegMy2TtundDlPDyAq310oAhpo2h5jbDyjsoUvY4hpcmvZpgGsEhe8TO%2B0EBcZMdF8cKwfsYyFghvf1VVsGAseKkHMv3zD69qncbrexHAx0wXg6k2pLu1Intk3kWCr0IZVw4aH8yEBwwEfnSDk7Srzdux1nGx%2BKZxotWrBPjwVST0ANxMTrsdhrMkxDA8EfLLRbij6GjIGi95jKNTP9J6EJ6GHAa9ZHKv9mJ50xnVN5EctjDDskc%2Bx1jDCxMPRBjqkAV1dopNoGf8kt%2BxU8%2F1sHpcA70AaqfL62Uzh4wkIE6TAmJIfJuVByzn0vwPYplSZBexBoUXUm%2FjBYRzsRi%2FHRmyrpzp4chYHAZabThxKGXadgQsBLg9qeLRuhlyWJQA046VMANgEwkqcx5NlwGuFm1U7jkE4q%2BVOVioF6dyG7o9a0aJ5ifU1Uy6xLAPhCxzVExiCB28JCb3A5R2ZigD9uHa2QW76&X-Amz-Signature=cce82dbcef251246db05b40b8d96efad5212c33b68b4a0ac91bd35c8eb67b082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

