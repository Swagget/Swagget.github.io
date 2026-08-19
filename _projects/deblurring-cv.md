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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57DYM75%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T051807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK9blrqagf%2FaqH7b%2FZO3ZnbaY9pZVRPGKtxHs3U7KOSAiEAvURH%2FaNCvZKgnRYY36sRG2u1%2B2UGfb%2FS8C16afOJNc4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEaAv3R2Ydhx%2B5OAcircA1oO1Hk15lgYKNN2W4xnDAAbQ6kfzH6XsRDI7i3M8%2F9Bxz%2BYSCrIeHQ1EQap1PfwGlpcNOTwKGiPA1kQRhhk6a0uPmNc3jF8tqOvtwiHodi1TfvbLoOLLdwJnFxROssJ5B%2FYVfeigEcX%2BufhOdSFZdkeMfkDe1FNa5cONw2i1%2FB9mPgo5lNR4mr7DZwBOikRMJKNVy67ZC%2FGGgflsFS9n23nVhsPapt%2F5MzBj2SMSla4%2FnUbnsxW0irwvw9Ocm0g74M8EwGYbBhShqD6aGznyYHkyxCzottUQHbBK4L0PtYGsiX9onreI0TGbxPeCF0Snat7X4KM3%2BehqXc5mOnlE8OPYGnlLNzIyhhQPF%2FYyGsVKrn18ra%2BT35IaKii0iPrY6De9TtcC7b7PWCWTSyV4iTTA9GD5wNTHU%2Fs3UGFLcOVSQDFlPrETC71IaDqKDnMRCuYmTXRTkHJ0gv%2BH0nYFs4Wn%2BbXdOd8Jdc0Cs7DLbhKWkKaiGXDwZkOW9RUSxlAEdVZhevchu%2Fo9fijU5OMAJ7jkrotECDpbx5w%2BQqYQTD3BsKeOf%2Fy6ArbSsuqd7BsRgwyDDtJaCD7ZvG0wrWjAD9QemfZDm%2BBHbv8s7yYyJY%2B%2FGurDwFRdFTuR5ETMNvelNQGOqUBlMy1%2FTj81Flo3TiGO09vQdydIOhqfQTel9%2FA%2F8jy6SarbzTNEzURauaS9mvglt5qjOVij6PLoTVeTgsrp7u%2FxLNUOK5VA6t8nyAtuBveBgHLapGxgB06pFkvMFeOqAbPhPMHW%2Fk3lNdaO5cq9ifJR0JYAEp66auKlXU1EYbjLfcy5kFR5BTFrJi2YAIZgIKwzqp%2FGUOM4FVxgcw8c9vdZLLb3m8%2B&X-Amz-Signature=d45cdaadd31ac59aa65d0a432b978d7c987775f1c48080e3524cc1af4765100d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

