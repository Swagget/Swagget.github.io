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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CVAN4S%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T135708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHI6stRn7EFkF22qC5bEfDTkkoe6t557OBWqBBKQMiAiAadMpjNoJs3T4xEkNEI5Xo%2F9bD%2BhhM0Ds2PACLg%2FHddyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMcmMDc9cx78T3dG0jKtwDT0zj0cFE2fTt85xcdL65oM3wcozYmgnaI2Azq7xynHn7ns1IFePafuDKf2rrxuZIojuu149AxIU0JrDWyQfgi5%2FJFsHLmYwFXqV%2FDsNNE17uofcVC7krm7lCghnOfRO7OF4C3xWjd%2B4L0uPw34zpymTh%2FbJViRJyue52Xt%2FI4%2FHRBSgCKM%2BMSgxs9o0yQt6Y%2BGcm6k2kiqIcfCLg4BMr5znRDzsC4FL0JGPZBPeXCRyKyen%2BDzmk2P%2Bnys%2F7w7okNQp11Bbi%2Bzcr4pGBIz03199qNfH43G115hmYRsiqEN7AP3kNI5I1Wf280fHWEG3U2C1LCiVABIPVPSSZ1qJ13L8k5jGW60BI6QWuOLnP3A6MuW7adOdtgWUSrbKj8oMK%2F%2Bei8jdlrFPQ5X8eqXn1LVEbzVDEVQCG3UjuSOHDPNfjB2c2vTYXmRvZusQsyGuwBwnnl%2BXtQoDKRfPH1N1%2FfVAZ%2BgDWokIAjEtc0QVn5GcIOXaOmL%2BfvIhuISWYHXYYkMFI48lbWEvq7qMfIag%2FpFWVM0RHjhhoH2AldvMr1T%2FbHg2n06PWjck9iRXzzYgo1A6%2Fgsx%2BNjf%2BaHbSHVBaWSWUd8M%2B20ZRynNt6eWv2xreEOX%2FG16a6CItd%2FEw6sf00QY6pgF%2FxRyUWWi0comaxLrm2tkBzLmUkjzWv%2BmYufRxbKJSVVSKMPv4mrMHatWjwmmjdBtfvw6yVmUPkjEat6LbtrJGQdHPnbaQhm45exXSArEdP774q%2FQxnSoB68cMHdvr3d63JVhgMRJZEGC1g62QFxqLHbtBALYd4bvTZ7rvkVaKmm53MD2DhQH%2BkFX%2BfTkYsz6KxH5v5XPK%2FVv242oRX%2BA78y3Rj4Lk&X-Amz-Signature=aee100ce06a711520202651f6d129ec442493bc17737fa927fcdaa7258191374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

