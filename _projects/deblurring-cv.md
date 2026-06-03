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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFINABOU%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T102910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICwiyMUO30rOdDq91vRhFXcvgiclprlWdlBAC0XNfdlcAiBVr657twB%2BNn%2BfXMOBejLP6Y%2FmFJC7eRdj2JdRHDxPDyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMnKu%2FLyDl%2FI22vS7TKtwD1nE7%2FOmufqrQg2m6tWrK3IqjD8ZTYhcot4R75d4eAwvnkqc%2F%2BHtsJrdVNIYpwsqsP1nmWLBAQBQbU04YA33y0VniXKpCxHzM57aSzCGWEOn9iNw%2FjvHjruSoWUGfQRQ3I%2BaxKPMZV4QZ0jhvQmvb9ns%2FJ6%2F69W%2Ba%2Bl78iS0eqgubMS0TgX6G8ycfVJs9EDn634%2FXJ03vGOWvF56MAAFk7jTvEpJAH1cGB%2BwwR0cnC6x52H5g%2BHR5ZTBSJm6IswI0hZXWz3gkK75Gu4QR78Wp9H8gy%2B4QUa%2F%2BIWh9ElRk23JvFqcUqsceaaKM4iKHPQ31J%2Bu41pJh35CYL4XPhjqJNM66npJQfsbXFahYvBw9jXnDKc%2BnvqUeRjnfQB%2FunE%2Fh5jp1eSn%2FmlqvJuQApz0WaZSQZe8oPpIPmTLeaEuqoqM68KKMTixY3UFWm78DRk0OFUXfqVR2Z0CxUdDRAV4aR08g7RpOldly71K8L5Xp8dTkIrNE5n9BFvE%2FcNGYQd%2FOZ8k0Ef4xPAr8lKKtlckhhSAQE51rvWO%2BDPBT%2BvloQGfpE3NUnkC8PvGjXKMP7FpAJLWcFx7zNVBvYbICWD3f9BAgqT2O6GU%2FXEzAe7niDLyNjvoRRH%2F3te86O78w%2Ffb%2F0AY6pgFpEPFQc94%2B9%2F63s4k%2Bb0aolyERxXQ%2Fn%2B0Jv0sYFYuoJo976KFJIpamAUQkZEuwG3FctStSMh98HCQOwhylR2TftwxuJW8cRYbR%2Fk4W0zyku7nb79e3HS4P%2BudjsiBve0zF%2BsAHXjqabsAOfZPOtlbfVC5qgfdu66BRY4syYDVEMAOk2VwcdDw2E3zLG6KHRCltHlDvZOVFwfcTnQJloFyeDsr71vdx&X-Amz-Signature=f5e596601057f365083a98d0cb41b2815c857af807d134132c82e2c3104d23ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

