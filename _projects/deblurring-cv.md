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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBL7H2BU%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T154520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCqVA6eMj3VQp2WYMEh0oc01CbHZdZB7bbygGO6ou%2FgbQIgJdxoae%2B36lWIp2gBrzPbKgJdYzLVOX5BsVsPDeUhOqcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvA4MgvpYIOPgoR6SrcA8acJMb6mrrqhaw7wBRY7AxAYuq1v2YVzR8slBi498vY8AcDCFDOJEyj7ogiueN1gdLxI8q121BxogYjBhBbaEJfzRQVP4HpB13H7k97CoFKWNGGECnwIDKl4yXBvVEVrk4OjRCVLWiYALsSq73QSDNEcSCJW8HLtfb2WW3MQvunwnGsoe%2FU1DqkB5MpA7oUx%2BYT5NWdbX4DMBrEgizEUWwQ%2F5cNXnBS26qVQ3It72D0gG0%2BxPlEG3JnNDdHywFiDhmBeOH%2FB%2FC6wrdBw5BRDCiFxb6uiYCXThQLsys3SPGC25Bhib8BiR8MGFKlC7NT52%2BPOU76lLhjsoot4%2B48EWUcZiipe5Ci%2FXPJiCItYbl9Is7MN6lJD6KQGxWwQBuVx%2FeDkS%2FwgMdLE0owkphC4orD1Hcmday32QLCmSrlvx2KDq5Mjuh3tQvCHp7XqFroDpALw0dgCwY5v%2FrJjna%2Fj7aXOlgsHHg5CBu7%2BPstdeJ0BR75ddgEvXbxe0IagkXvxMv9PgmxNhKnc1dLxhj2sLxqsPIdOvEFoLEsE6nEuCV4dLiHvNsPwAVmq4WlkR8k52sDA9OBceFrxOFn2iEVQxhJMpNay152BtpMeLLRvihjQermsNtpQXOFyCGGMKKY99MGOqUBEb3taqI9n7UdZmdou6rAVK2UosbKNR5dT7voe%2FT06s6JsQDJy%2BEcAumQp65bA0UjlyhSDxq01xipOZGuOmdQYaR3ILN90yY90kwgKp2AEqloOvoP0eDus58nSxbxWYsY7nd2pVS3Dnfw%2B5e6AgWUhTXl5AcblZEAcEVRvOxgv73u19joGTohmds5EnVjXMbYZAMWyMRfYQ7GEx6OJE2AM6u7mFl9&X-Amz-Signature=bbf5738154dacfb07f82275857d1e54a5b1dc1a55b17444b7ef220526a76417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

