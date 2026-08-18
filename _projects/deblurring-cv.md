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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3K2D4W%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcQIYR23BoSGqiix0xJGK%2BXr5%2FnGy8cVTYVMm%2FIjnG0AiEA%2Bf1ycFy5ToaADwEHTyFqhFuOWOKUbweOIgG7vEclvqoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN0UVRUSeNbDH95rYSrcA3DhKeEiVBIHIYtEbcRSTQJ9xZqNyAefBywYNpIENW1aVP16LdLpHnzlPXVwmPHH1i4erROKY7ELJ%2BZmo9xNjmi9xoISDLZ8OPzR5TxMW0SR4o7zC8XvmLwshz4%2Be%2BbG73p0gTy4zN2%2BS6qyePe%2BZsr9hU4hZ0q%2Fw8D6JUxAcVKl22isE7%2FxlKd2rerlTVIFAD0ps71Q1QKUKfDB0j3Uw9V9guEjYVTbhT7l%2FZ1deVEq%2Fd%2BL%2FRl%2F6mMDIho22ut75M%2Fb30u3%2Bg8DHpPsLAx4QWkX9mtC0fUavtQGlxUcV7n%2Boh2nKpIRSSy504HOeG2urLBMO096JdMyWqiPd7cdsOxrAfwxLIdhtuai5Tb9f3KmKVBU2HcDVXQAGRf%2BG3WfqGzxdPiwayg2uu6ILbg%2Bkor1GxMiGmTayz72OjAu6qEie1c4cHOLvBgrmXtvXnjVPIs%2FhETadDnL4dIYjwS6AunZbm9lRMfcWOHVHG3XO7AgdKzm5S9V1aLLpVkB0wam96eKIl4Hg8ZrK5%2BgEXfwRhEtfxYj77hXOsZ66L%2FUFDRxevJBucLlt3%2B5Ma1XFyqcNMGrP%2FmYyapfn%2FxLaNK4yBI9qvk4Z7yn5JRRhWnsMJP7YcJ2ljtt90DIJ9igMIO8ktQGOqUBykKT3tooxZoU5EhYZRdeo0g2fmUGwseDVmvE1HoDPnr%2FYsIYEERg9XBIKUz5hl4uW%2Fz%2BjcYfOTZynrW%2FeLWAReqqIs3LxvV401wnUe0Rl9rJTFjWWDzM1oh1ggIZHIRbFobeT3On8amPgJ9vgN0o7l4ZmiuiVDSdVV1vNTaQ6wV95fu2Z9aOMInCkDymTA3dPH7JPzP6fIGCaSMON8rlwbrVrsDI&X-Amz-Signature=3e267f6a1d6b6295ecc0eb86fd69dea16fa14076b268890f7bafe40e73173926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

