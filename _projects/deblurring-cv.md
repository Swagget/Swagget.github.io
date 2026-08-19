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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZQLPXW%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9fd0tiYCUzX9DmVmlmGs8OCSDPi0OGGXTACk%2FU%2BRQsAiEA88uZSnOW3QtNqugQvjnxjKHC9v9iTZVhYGQvlqeWeBQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMPXoV0Yk3LIz1zFeCrcA%2FiaAEqraPixQAs7Qsp6%2FzbL7MZ%2F4lTbZXx2n3d3Jgfdlps%2BW0bI2aUtBcgLGlA6fLXooxqTyEV9qAOf5laGoljkd9w5afSxljE94nH4ILNOx78ACwH3SW%2BueVC4UPIOz4ya6EcZTQOBFzkSzefyPvZGmBUoiHjpKj0FuydXakesOSiRPE1YttFe9Pv8TtSgOZOP903cxrEYPjzatErn3SbrbZAEgShYXPz%2FcHpEB0WIjmVG8IFNJH%2BX0t%2B%2BJJMLDA%2Blx2vDbpC1%2Fzvjh9g0Qw%2FW62isxwcrObFjFXdSOnqSFr58W6q0wSGLsztApoKUFpRaopVLOIFBKHqAQqQXM0pSRpv%2B%2BYnpzdJcirKhvRjs4HJtzrarWP4qpLcCd72DTNRlFeF%2BSJdsQr9qqVxroqMCkZSJUDxwZdwuGvBLDPfkXr%2Fa7MDztxdm5Iphkl0skU2IPt%2Bjh7ohqe27iNu8MqU%2Br1g9GlZkkdwiYiM5kNswNJ0EHBgRlRrHX3Bp5K8TYBUZjnbwAMp2ldX5g6rhqIMaaOqJXb8wjg4xfo2g%2BsVj5kZ3%2BUbjrhqockhY90wzMkDvL3wa4fxHw%2BAogYgraOHrPk3%2FA8Zn8gXkkslJwXlOCLRDaxmCwEBpNTXCMNaeltQGOqUBCBcNvpA3TuOz0PpYSiqeBnmrtRbqrjw1qB%2BfC1NGt4c2GWtz0JPuAMuWJTamdjLSigq%2FtH3yX2JtRDdaamrYwWPpH3I6%2FVf47TWI2EwLp6Ik2V32Uu4JxZF8RleY%2Bsqzk6j0DZohqm6cPjWwm6v4SD%2B%2FcstkMQ97l8jnVi5jZICCAdNRCwe8cSHsCL%2FlZH5II2HVJa8Wq1PuqgcSk8J1hcV8g8YQ&X-Amz-Signature=b326c72f1588f13049b31caf514488ae7c3346786b93c58c12ed9f8109fe1e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

