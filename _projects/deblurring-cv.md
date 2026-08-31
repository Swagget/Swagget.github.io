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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4AOAT6%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FSISXukm92uRXBgfnHUMUFLosrw7RqryfAoyXPuiyjwIhAJw2qrA3jBejziN9uzjZmwxwEx06eb6fQxu1J5sD8QkfKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2osXkOwuOG8QnpFwq3AOgLCp%2FqjliaIDFPUeBYtWYJEtIlcWHlKawN4JgpMi9ZyjhcLBIhJSykQot7aKfDC4j%2FdAhAWUgqpsg4GV99G2%2BOoYgiRZ25RruHNH7YpGXcm0ZIO9hGO%2Fcf6cU0yfbp5PbAQ95wCuSuD9emUw8GJm7Yt%2BYy7nmXKPpxBtDBCWScdYXmE3PnA2AuitUOcwYQq8Xt1owdrWetIIBry%2BSYLirTBDu%2FglYf4zhDdzAyfYu5ekmawb6T84Q90Y5ZnJs7eg%2BLC79IAhf20%2FvpfoFgJd52fJIqj2Tiws56TrP61hC37WaXR%2BLVprE3QpAizUUytRrrgB%2FFJ4mQcD9JJbKmR0lOWlS3RoaQTDI1g7VPOWRPOEMotisIw1jSRIPUl0SUlEdJE5%2FsabsxDUS%2FwhKtVNSBQsZMUGXEqf6Jx%2Bm4LWQw5XqgvXedX6p7pwukjY9afjRWJGXf3lNAvjReKxv0Gyot8uh5popGW9OyNFIh9365%2BQWQKZliqczeMgUhR0lUtFuxSqg9%2BYfkHrwzI3I6w76jXBBrUIsT3kvgiNOJWoVbh8RbfAeVYL0BNWercECmNr52nO4iFRdrt%2FkUKUtL%2FpZHfdqe3laT%2BWse2J6hX3HDPi1267B%2Fx0PNv974zCj3dPUBjqkAXo21jM8kL2O8eJRR%2FgScork2XBtkJ26B0f0GkQLNTzAQrfTeU%2FMCQHwR28%2BI1U7MyZKTbFONQvEKfQrEES8Z7xTy7qbs6FTjTy28wCJujf%2FqJuFJW%2BaB72BWbpVPM2f6pqE7IokqHcf%2FIFEi%2FMS0QFV%2F6Yx01S3%2BQMCZf4rLY7SHEq7wo80XFELOIaNFwVM%2FZCSjFbqCtBYReDexVZ0BTQHHfz8&X-Amz-Signature=9d597ca55db8164261d48703e19538ce1816ba772d55f4de90962289e6ddad69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

