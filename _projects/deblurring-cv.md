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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4PQSBD%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T152351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGLKLpr6J8S47QF0aI8AWL7dBTjwB%2BQ%2BTLkDDe2FamovAiEA8Ifp1FbuJx6rEBqV9KtxjWdum5t85P07SrkH7BRk4Gcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOhOBA8w8R2Yyk%2BmbSrcA8d0JRtltgcWnZ4rwUMGnkZeGI8SWpi96lL8%2FTPduAcgMwJIVuAZxPY1Y6KThKHgMJNK3SMw8C7zCcLV3Mbc7f72ZX0o55Vl4lpq5YlGfwV3O%2B%2F5aWSsn9PVvx3b7G8zO0CmBBe0%2F5gc%2Bplr4EVNUeTExnspyClpHj3%2BjjydTwfFVir0lYIMjwxhcWAo%2Fn8GD3YodnZddH3nxcKwNJfbDgcaV1EwhQU8NsKQl7OcJM6DbyU4OxRuvkRU9IXaHjJWUrOyr4kDHe2OrZy8b36V8qpnk2BUrlmtcB8cQFndC%2FpVHtl9b2wl43m0lvMEh7x7xFDacxeZQmb52uNN4aijx8XJSpmtxtUskrvSdmwabSeXT7wQDL8ADfeupzkfzoRJl8xFbnJMfKFXuEIPtpyGF1j38s%2FPpMgdty1cSlzO3KH5M1ER4%2FJLmS2%2F4xie4rNrGhOkfwL0F4087OwhCSCLBGBVlNKEp%2Bgh%2BjQgS7eGY6A5EZx2iTMONJxx4C5rf02LqFI03t3tRI6hjAHNVEtwWdsiv%2FDdyCz4BB7Ch74bvG60T6apov3YkW6BAkBtjwb0t37TMPnhc0I%2BsFmsAu9BKR838iixrgMiij%2FVxBeBlQ7DYr6u2HV2t%2FioWnsYMIfQtdEGOqUBjxgTgI1Z4PXJB%2B2dJemvYy%2B8LGyqB6ZKKxCM7OIOe3LzGKxRhbtZbMAmPY7XD0MoXnOPxuzoJ5IPekQqp5N0IPe6wnkm7kVm3nVIWOCYCiNa5KSW1zuh7FWFnNUUMe%2B6kWtXo3nL%2FPCyYrFXnooiwt0aFLoKSeQUiVwg7YKtgJADJRNDVbCh3OQpIBkNTG8oQT1M8N7EzrJJ74EDdr9aoNCGmvOe&X-Amz-Signature=5aec4e99b2c0a67affac98d98bcf3e0e3472733e7d91ecfd183359d868c2856e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

