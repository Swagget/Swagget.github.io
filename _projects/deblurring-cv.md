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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS7JPDM%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T052138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEtZrZLy2t5yNir9XLRBtiSsFQqJ%2BfJfEE1GtVmjT1URAiEAxeqBrrm9033v4ZSJxQxqIk9D7kspPgugE5fQcuEdx1QqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQBl9euRI3cyTZP7ircA19t1OsvSgBWxK%2BjPQ7DCgnolOkCcP5KXkAaZu9vGDrgm13%2BxsI9X4klysRWzw%2Fzs32DOpSHakslpiYuicaJWB0MNJXNE6pAH%2BKBCSLMF2tjBcawRHH4welWuslH6hJHO%2FFhWzqIoLO5RF97XOWbc6%2BmVw4KBhnWRHh4742xVoV5%2BY9MbFLowh4xfJiDauf%2FzZX1y7UARX%2BUGRQUiFAsTCCsm%2FYr%2BUAJAEpexQPYc5rkc35ktkDNEsG5H8cjSVC%2FDlsVIhUluFKLd9IIh46JaAnfj58bKJvxW0okJrJ0ev14rrBjZpcI7zl81x9VEjU4VHy7oyWYSDcHtnUEVJcPXkdU%2F50RGlEJ%2BdKJL%2Ff0H3kwreNvgPqDmVO6uXexy7B7Y%2FIyhNZuHMU9LYqmlZamiIbmfG5YE7Z97UB2gTYSKYiRtoWz9fOp8H7e0AXzLYBQ14aM3hn3oX8YUPSCVCYy7hHumJp5twAZNbTYHgdPP4G1hVRmlpBgTYw5W38eFuAGf2n9GiHAsaC90uBG5WaPi6L6uYzLwPxsBl4%2BGAo%2BHG9iGJ23UrKYAkXlC18DTI9GQuoXQGlXpGfX3Cak6cQmCMhJ6%2BgJ%2BurLF0DK2qHxBD4QOJAVUGXIEZmiwVI0MNno0dIGOqUBJsTOBguzpuoz7DqA7IMyYHcsT23%2BNKbP3zK01Pa%2FcTlbAAGD7Sd7PRW86fRzqv9dLKmphN8c4zJ5kXWVCndWZW6y9CCwoINnNneZe89sNGxUizwJFEz7uBISDDHFbRLMPV3jmlRaDR0rCz3DgEzVL6YLENao%2FGUqi%2BldipRBc4U%2BcRBvlxuR%2BI7MYIpFVQFo%2FWLVxvapYDjQKaa7v4K%2FwDMslhug&X-Amz-Signature=454a8f824b92ea39dfb631feb52c95b814ef15bd6defe9b3cc9fa5fa24a4b5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

