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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6YQOW3%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T045539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKyTmtqeKese2UIIBrT3cUyf%2Baku%2FHI73nrhebv%2BYf9AiBvuPOxwFI%2FQHFTYS6dcNNumne2O7lPujH9mWKz8Y%2F2tCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMdZSQ7y89FQhD%2Fwe%2BKtwDeiZdgqVSPMVhL77qKjbNsXsLLsLLFGWBU2JxvXXHSJknWTmAejO2LR6dk9pgTBOqETBA0baObizUekya646gETFE7PU38zNTE0PcGDsO3Zqyy1XV9TAAOEBiimyTRif7YZBM%2BD7PVcD4Z%2B3sLLwbPA%2FodJWMfF31v9YR2VsBc%2F%2Fhytoeabyh5yGBpppwkAL8s2hdy%2FreurYQ4LoeOJIxsN%2B5b24gGkcERS9%2FiMddQYHf0a%2B3fiqedOittl1rCk8FM57Q7j8uI73DB6DghvS6XDAC%2BK4W0vDjcYbuEXK4iej3RX44romhsQ8UfOIYmdtO8Z7MxjbBvFBnX5PJb4M2JyiLQrCqyMYu3nDbigqrTMGJOVF%2BUQYh9OtYQRU%2B70mcMfLV1ojQi0DNnrksX0lrK2ll1gfFXwRZd7XLPRwwRe%2BxVNXx8tE%2BOgJrmbpOCKWmc9czEwnOXSKWeA2CcRHZePj10dcPgmV2Cqmz6nDVYm3G7ixk2kXyZS%2Fr9ZX3ozh7pakMwRdxnxrwWOd1ihp%2B%2BClC1PcwKbRUMRtK7eNZr86lO8rAIP6nOnMnitnGpZkW5%2BUmT00U9s41cm7%2F%2BSS%2BQF9o6ddY6Jb0kH1cFYrTEPTwV22vwQD0CFhcdsEwgMal0wY6pgGMJFdkhMIG0qeN5MoZCbXvyvOZZ6YNJ02t9nw7WfH8ZS%2FxBUlARru4baEjhjYlpnytqZPKFmKpg%2Fu%2Fr0agtYD2HCpz%2BjuHFn1ySznDnl8hzpdHhVaA6uq4MynK0pNtjtB2x6gYTUuNmBvTNJUh0W9X%2BJcldAe0YRwPPTqWFws90v%2FdX3OEeR5Bew8AgxTOHYOjEtmC3%2F6odfmNHRgUKn49iMJFdoX0&X-Amz-Signature=919d679b431de73551e90b3dbe08c3e81e4606d2b6b0b11fb2727c01feb885a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

