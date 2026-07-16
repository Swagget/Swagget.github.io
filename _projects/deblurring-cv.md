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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTB4S2V%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T152404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGfEO24yh3MK3TrXpog3G7xbSXd9%2FE2XVr3t8YH4GfLJAiEA8lvwQeIaKXDUSUAjS7HRo1c%2BvnUPF1jzu2IrCTNoWu8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEqpwdoI8Tn8TNB%2BsCrcA6cq2TDMakwxaN%2F11As2CzeZ5iuGkFbLBraH8u8L5LteCzcNVp4UtERxsqMZNbbwt8TjemipXX3urjm8UCmi%2FwjSOP034wzviZ%2FXJthdO%2FeOR5Ff%2F4fZf3J7XC3xsbHftTyZ%2BnZDdcC%2BdkWu4Ah1loCXFy0cEFkDAsCdiK8RE8%2B%2FWrXKjrkLQy48wBgsvEt3XQdJ2FOsJ7KyGRFz%2BWalNzeHfLUmf4K7vDeVCUj1g6XpTVbIT0Kc2kIwl3fG0XsLbVVHnAtKjPFQNoBkgpcbmSWS%2BwRLqsAVHccRpdawm9J4xtm4%2FOnuONnkqV567Blz4at3a4VBmaB7m268kUDShZJaJ6cixLZhkCRtc2JG%2FVnJM4Eq3TtjaYSTkpzUGP%2FI8%2BTY1neFcIlSVW%2BfwiOecNRSWTRR1TxACSdMGikVWgAk5B61m4swRnXyfSdQV5iSAq4%2BKIIZ9WCbfz3EsVes30%2FuMEOVTEbQXE62LyglzQj%2BaRITDnXwO1h%2BCJ%2FsNZFGXQ%2Fn50yOhNDfr%2BHEHklMezsiD1O%2BNQrymmwzGYpXjB8UkrmhLo6C76VaMATR3Ftxsc88164%2BSeOkf9eRHu2jDFtCqUspsmKK0onxGgoUKdfgNYA6G4zT9d3ca%2FnGMOfE49IGOqUBvZiq42lmXuQy%2BignqQce1s3D5NILEMjIKMV29VR1UmmnwbuFBpajVg%2FD%2F3Wo1pjpT6DY1Cdpw78gt2M72BmmCH6RIAM3n7Q5stPLDgMkXJb6NQUxQR1NwHftxhrX0ZgIAH7MzIvCy4Rwz1GItHq5GBR1zsq5rOi0%2F01AFg%2BYrNxfUlKSMFck%2FGJJeVNuUNNlSZVORJFw7NVP7vw3FcjAiMks6AJD&X-Amz-Signature=99027aeff517612e2e9f3d86cafe8b4fc7370e6ffe233e5dcf88569845b42c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

