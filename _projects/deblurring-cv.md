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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3Y7ENQ%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T184054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICAfdnkzD%2BATBkoRZAOcc1%2FhIyCHrzzUmA8Lq1rVZInRAiEA9MEFFCtBxu%2FBPFt54bOMvthrG5j0DWOO38nio89BaFsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEVId3PnieSbKhdCrcA0iKsmEUEnNPev2b7ibb2qYELn%2FkOcTVxMUX4wnPwU9vHTGk5Bd3%2FaOYOEA8BcvvvkPvq19HFjqb3V53sfEVhrxZusMXOO5VRsHr4oyVlbyLM8KiNcM3%2BrJGDgpb7hns9J6C6YfxO%2F7wVsx%2F%2FDsvvP35hLi%2FXjUPqp%2FdftQSN%2Boo8vJTrXi4KMIRXWDoWeLGwslEvHS%2BUH83H5nvyTHEn2H1dvWflPV5FnO3NrWyYKpMK4DsdYgJGux9xdYdczdCDgIlWr0w6cwgFB0O3eD9wbnISpd9JZQGPS8U%2BH8RXm3wl33B937OVNgSaKMAQES1QdNDdXtWW2k6DhruIEaJXvQIAvaqJxecslSAVuBE3broeJCDhCA5GGgTw2flUe6nftzLQdJqVjz7OKObVLApQNe9%2F4hTGGteUFoSQcPJrZOfpd%2BfKgS9qu1AaZcXIs99AM3lXeYSEA0nSHj8bD8IeEGcnk9rqzEjWCJiXM%2FvycZRR05YRN2N9ASJo19AJzfYX6NOADVrLJk9jqvyREhENm%2BLisaawExyzrfJLUBYp2UG2Qg7lzMCoZwEOH9a%2BonkDlVp%2FBGXmc0XBV5y1WzyhhJVy0h7xdALX3j44cFlmJUNVuxOWK2KLjx7kIvuMKO%2BydIGOqUBNXasS1iB4NJk7PF%2BbGTlJr30jjXHbkDngxhJ7ocKKlTIgMfm8Xd4u4MSNroupAiRFXBgmHRpd5xPB0Qfw%2FolHBcbL9K9qJAaEaPO2P7Uqd31czdluUHBK7QrBNgmEykuwLMvAEzvhZWRxD2j76BtfaEcrQRclvzvZXfDc3grdyhXBJQKEKQ%2BUTEHlm0Mg8bFYgOWCfTEwXAumlAz%2BWCdsqLYEhbl&X-Amz-Signature=5e10b63d7f1119bd5a88e617905287e56f6e8ca388586bf26f8fdaacf4b72b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

