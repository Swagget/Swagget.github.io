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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IC2GAGB%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T082443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMTX%2F1Lp87ZvLzt3EeTBRqgrkdxXyoIV9J8KX2OpNvvQIgO5SRjXbRJTvg5%2BXNMhZordTqFm5C4yo4YLRk3eEkmpYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLYg149ErIrxUn8mvircA%2B7xDg9YQEq9wmwLhQ2JJ13JupYNrnlasbvinN1c7bC6dkfAfxyOnFuDOyBv88YN%2BfGEHmucDTgz9f8e%2FjwWVivCrdrJVk8iOjqacTKdNh6pRPqJDwv%2F2iHvoYI2swbtZjQpghrZL2HJdjHpSoksGmPt832T2QLbd4cuQ6%2BFHUlwrSOeJcLRd2jIzLuTzbiEodRRKCwuwW3Uzlnk%2FfU0Dk%2FxjWlgVJBWb0M6a%2FSMsKdbpFHGf5fcwK9Ds%2Ff3cZanvEgf%2BjOG%2F4nk8CVynbmS6BI%2BqBpPF3nX089F0KM%2FNv7%2BB35jPf6%2FvXrs5p%2BI%2BzEHK%2FVHjna1vias80Haaoi9wsp9%2BllI2WHBf77lf2hk%2FSsLOzfXfAswd%2F1kkPEtp9F5H9BOwqa0EXkqcomS4lRKFp4u2vh1oA5FROcNm%2F78295SgMWRxxvxgvxXmDIt12kD4G5QS5rI%2BSe27%2BV%2BbOtsXq8F2qAdSoPenDc%2FWcXBFaR1HHJvqMYj2lpx%2FO%2FDiB0JZ2E9sdC%2BNdgCdojqmQDjxVV82g2CPfp%2BkTYuafHFp3Zb5oddy4m%2BZUwRD%2FlGkh%2BR5xDEJ1CV5o7YrquBU26ASr38yHAeUF0abHDgOsKhYYupAnq4KSUfq34hCZVvMKKl29MGOqUBl4uLq9Nd5c4%2BC1xLRRiac2iGE3UTjYnbX2EsApPpkZgYibejR5nB4enRWh7j7rGE38bjB%2F%2FS0W8FGckVhcjhEsLLih8WQaGhgKXmoEWClHC1M3acs60NMlFAfyHRVF56oUI2PaFs%2FPUL5x7POv0hiSxln3%2FTs7gbc0xYcPrQeWePTC3%2FviWek8QIzpt%2BUaImzuYtG28xxZaOP%2FMAlmYVh45CQumH&X-Amz-Signature=fe57cb9792d155a5c28d28b04247072c41a8c359d73da9969cd33604725f0e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

