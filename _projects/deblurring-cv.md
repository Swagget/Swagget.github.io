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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWII4R5%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T144621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwQuSdLHX9FWiU61ky9eiwOt8GAOZsDXNQX6IQQ1IoLQIhAL7Dyeew1v7Rirdq47UKexklffjr8X4Ouc89mvi%2BX6%2FuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCAstRWpfgjtq%2FP3gq3APAQO5MZMX2TgE%2Be67GQQshS6wP%2BcSq%2BXFsRVZpuTUb7CVYNdwul%2BM6CoAmd6z4yjOzMXOj6rKEMDF1G%2B99%2BCcEOA45ZK2ML1SN8NdTtBO5kBXUVsFOlkFAmNHM8fcM57fP7wKh29BwlnLjatctC4EBSj9CwMnuYpDiHSovhyKNC%2BNHE4wulmUFDO9CwsRCYy4%2BVZddsjDhYvf9peBtfCGohD4VQLX2dor8NL9ISDt5aSUQsVnKw9Td96IfNw7Gw5Y2wkNYukTxtOFr96sW2OBcxXxpgmAUQX04Ohg79hO6Tz7dop5LbZ%2FH0bkr2lVakanBlj8ElT1C6w6LD4YsHLTyG1qdj7Cb6Olck9PmvvTDAbQ4%2BoiDRSH45gTsD%2BSpG3GjCBIlpU5ybJ7YdHwPXuAywHbD8NXrERQJHYlihWXA0pz6BYmbHN0YdbkyzEypKXKMZyxjMHu11w43aLNuZCBPHCI16X6visW4JnxeP0X8xikSnrM7YAxGmz6hNsVqVWwrwo5VUe3ulH1Uqr8T8aACGxH6p2KmD8FcdIqmuUbkW12AOi8b%2F6dxrdfoyDGPkCyTSROiI4pvJ4JiHM5AN2BHKnCiT4LnS5FotZo1O4HKG%2FLzvzYNwaPUFm57izDZsuDUBjqkAXa1ZM98SwFSdfXtlr30DhMFOSKagccrtkMf2PARhC9w6QYtPqjRTUVGL4fp2D%2BqlJzDNRBYnIf14YapNOl70VFkpAonTGwQ3H1hU%2BvlJEdj1LT2YtUMrXLbu3hAK1%2FNCv5ksHI4%2FLlhW0ku7OTPuln9PVo%2Fo1vboi4UgDy2A4fMLamaNdZmsC6LAI0gRSUwMxVDWvCcnKCzBfNpKFn8vN%2BAH5S8&X-Amz-Signature=86e40123d528c14aad3459aff4d72c5efa59aba9f44a96188dbc747d385bb3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

