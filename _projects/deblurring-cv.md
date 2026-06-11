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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFBXRS4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDk76v0Ta6VlB14WXGiYYRYOxPou6z8ourUcBFHJaTpjAIgcXf%2B%2FU8B4mKTTp%2B9qZBeEx42hmSXG9YiUtmZ%2B24dJxEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F%2FZLzJ0efdxYTWVircA4G1CxgYyLr1YaroBvQlX3IK4bUqY%2FvdQD5sQ4tTFWfX1EK0T%2FD9uULpgjdrR%2FAXUC0oQHwyZwxxOrEdLlWlV2YJzG%2BSMWTA0o5fv4UZi0GfZ1EbXO%2BMKguqDY3jZ9n8Tgc9UO4LvoIv6BNHIHqrxmuTUE44A7ixovMq7rDxwV9ELjCjsCLCYmiMllpZb1edbGTs3i4wCYKK4suDVeBzF12E2ixVem4udEhmir5x2pn%2BvaLfFhmrwCdg%2F7wcy5KBvy1G8zQ7GdxbMiXAZrjb7pqTsAF074AezgE0X8psi%2FB9CykIla%2F%2BHHi8p6fADOQtiV9TxWT%2B2rDithMKksghqpSsYEbdhSM83el7PcGfRQPFtPH7q89NCMvpCtepVEpMLlPP%2FpWUL%2FJUcZovY42uCDoZkDozHU2hWLKCxTpRx6jrvihpiHGkAIsdwEfnsjBZlizNU28%2BcXg%2FqkbrV8enYg3zeM1DObSW9Ymxezlptmkvkq4N5DmT%2FSRvicWUTDah5O4EnOBYCFB7x86z0KyhzNJ4zFqtH5PHdY6b9%2FrT0sR4mtmcuOPfPDQtcCCTe4bD6VddktKbSMUHhGpD2jaLHKS5YogWFNDwsDVtmU1UYa7BX9bpfq0UaAH8P5VjMPTyqNEGOqUBfQbn4cAfLEkWT%2FQoZUxFgVApD9TtLx8SSaTZZ9Zq66Rp%2Bl75H4ima3%2Ba%2FAWtbuWpo3G4mGGgl1OfqoRXBqc7D57V%2BwaTFNhqelI6n4GTSrOBull3cCiNzaQGXVxekJVtcijUl3WuNw7puKtpg59AzvsJNoli0ZK%2BO0MdMwV9wGuowg0ntYC7968HdqjEFu9nmApNsnKjtevRMUU4xB7VQOnvkUuv&X-Amz-Signature=e7564cfd6ba7cdc112f9c23ed065dd39b2b59212e07a1a48b281362e0b5232fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

