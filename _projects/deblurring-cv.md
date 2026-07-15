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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UQQSEJJ%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T130315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMG0aEl%2BqLHaw6bfHoiuO%2F51bI%2FwjJF%2FPEzxXJbu8MrAIhAL3KRbZH4yutWvcYf%2Bu1eqojXZL76OzKlPXa2v0YILKzKv8DCC0QABoMNjM3NDIzMTgzODA1Igzu6P2DQRnWkuxju%2Bsq3APNdKcaC3%2F%2FxhTBYGw2k5V6X7mfP3R6BhqDo0uMoGENzKQQdqLxrpAu7eJg3uhg8WdDCcuWwXRYvywaPenc8N1uwPVMW1jtlcu18ValMn7leADvEd80n5QOKbDEcvgaVeQC%2FTVXA96T%2BtFrjQeWDRiwyl6UlTiLOEmEUb1QSGCP1e0Hl8zkTO2X72s8QXx4Vdbi3tWTyXSxJvlJW%2FtvbrDbd8%2BmhWY%2BcfG5Rj2w3zTzBxDlDcjzkjWfz%2FhFwjdRbp6m9rVyobfMNEoD032%2BzVVRI97zk4vpTFroptrXJfGJDJMNop3Sy5MYboDr8U35hrztTtOGvUL9yNYEe4OeeZ6opVw6OZT2Bcub3U0toaGKK0iJLFyyn0vEg8lnKYYw6sIWU%2FKw%2FVen%2F5F%2BvSL4Fd976KGmq6wiiYL1ME8xWWEgdTXA9SBNHrvQHSzi2s4jJvYXHw8R9RF522X1IdVPHfV68nUrOXLnheAOZkIuT0Pj1H5r19UWlXmk0GbLldlJSf4GNFdgVZ%2BfPET6lYEFqQ3DP%2Bm7O59GHZwRMEY22%2FiR4Cm4D7CSQs8mdRq%2BtZfDBTqNeHRqncBep1c3MqCRU%2Fhw%2F1FjP8qWaAakqKaxQtn9olPmi%2F8WyeuPwrNn1DDH9d3SBjqkAWJrfVztxwCJcvIR0i0bl40vNdnhRu%2FXi4vHTlabBWr%2BctQC9obdcZ3z6t6iabJDC6UP1c5Ks5YiUT5IORyHyrojQZBwSKkzDum8undgyjsQ2g0xuVc2izN8RiW173BCN5jJPpGriWP6Pd%2B9EcVnyZQbia6Bfjxedeh%2BHPccsws%2BhHvSRy69%2F89CF9ph0fK91ibm6KmA3ghzwW%2Bdk26gaR4Meh%2F5&X-Amz-Signature=406427254c0049f85b72b9ddec053c455a41b16d086b6359d46c00452854b798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

