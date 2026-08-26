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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOD7FZ6%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T122302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDKpVsiOPO4bUKPpnHGkw6iXDdx%2BJXIGvDhCTMhIU%2FMPgIhAOPiZtGeORcpcqXX7Vtan5lVrh0f0G5UijiSUYSrkguvKv8DCB0QABoMNjM3NDIzMTgzODA1IgwceNXTQpt79JJ8Ezgq3ANNhYaLUP6udtADt9tC2ctMpByih1nHyF6JvwFdzc9gqjZfTwY2wzMM3ZbKwLddmw0vu51e2VOHNkDv1H3UhPgHAbvTwSclm1eCfkClLFS0%2BArRPRng8qTi1nW1lRtcg%2BkzOMLFtPOYI8A6TWEoXGrQxYPTL5vvtyS7p0o3TmHrxuJDXCqpoFNvitgwERFtV8ETMtYUgH1rL%2B01rmzgiDnM70wXoYO0CR69%2FfhRDz6w%2FwglhRXGNXo%2BgH%2ByGPFVIS%2FrGI49TXvuZsQx5wSfWLv2kNegpUHtG175n%2B089Keyh4K3mo%2BDsW7goEKtrUHaP2fa6j9G6R5jWDh8F5s%2B0xR8VtHqZDTH0fqYuvpOUtxRUH%2BZjzNsJBBtA6UnE0xODIY9yANOcwuOG7n%2BbBeFppIY1gbgdgVfDSTYEy8c%2BpXWzNf9W8lgOMk%2FBH6W%2BrsOOAo1Ys31Fj%2FveD06hraIcYV6Hx66Y03k3wWX0F8eGhqaJrGF0uIqreGOOQlH1riKBso5mLOb3aqIfn1idIUCA5%2F6RVFhUQsAafrJgNF46vsdAFm3Ghas6h2XGTW4aQ1clZseX%2B8k6CUf6e0AVIPtEwt5EjefqpXGlCweePPOPqhndca2fUFhdLvWEWaftzCIqrvUBjqkAVNDd9lwbwtpvNQkXfaRGS6gPwFp0fRMK25cg75KmiYXRfGt%2BlZGtSGmcvJNE5Qz3Q%2B1vUzJKxfj5PPk%2FWPAkdVlc0JY38zIi%2F3fFMpDji6CaQsCTQb%2Bsqw0Jgh1DGlHcH%2FPhFjgTbnDSZl9odNKoxVxfpyESSC7h4%2F3KoOYqqKkeJJQZRRfbs1KxWM2qcKQBBjuKKhoTXVDwW1%2BPuDCwHLmQnFE&X-Amz-Signature=066ef38cc3942d2e0e39625fd83cb08f104f147056023d4cf07e684601610366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

