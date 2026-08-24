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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N6UGBJC%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T063113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnayWiSyVioNS1E2aTtves5lryYuGXp8wENK8mlvFNlwIgCu6ShnZ8szQE%2B49vWckHmpppAk4W0IcmHxBOZfm4%2FXkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9NtMd%2Bg7VohgSw9ircA8F31URz81x1p3efH32QsKUAcmt7Y9v3TVTuEQQ0rJt4%2F2TXXUfuGvIGjMUqUMD6MbELXAZ%2B7EMayjzhHAnF%2F8mKC18yw5TuEDDL54CPDSh3LN8NYmqNy2WaR5N3x2wQBP%2F3W4vNWt%2FLaIsWQBiM1KDVr0rGvPpFkcGLQKt6uM09XuFm9m8SJ1Dzk%2FabVEjPKCT6pMDCdr1%2FFNg9hnikT8IZyFY2GWfvFiTFfZEfKiy4yCgVV4g1Og3Cr6lVv1b0lsAy%2BKvW1qHKT268Hv5ASxNmjI%2BgkOFYRRl4uMxcrjLcZaTa1xkgHdijzzugwpi115Tgn6vkMEh84P%2BJN97AdbHKbawcRgdcbw4tfLlFqQlpMXbZLiCINdVmBoM7IcuRaiy5tX1SQsvDKeEL8Q5jPN6HoL2NYQTA7Tkse%2BsHdrNu4lI4jzdcno3JeEK68iL65Fzlvr%2BEXJSRqRHJUg5gp2aa7wdbuE%2BMcgLuoXISXjNGu8dxH65eeV4%2BCWQX%2BItwMyTurxEXCEiuW05de5xpTzq%2BPMOu4vQcOG9qXFNufANgLb5f7JnyLmfNFUbRmrPam9ftiaJlXoiyLip98rxub%2FCmodvWLbKRBwC7pTrOLDzHZ%2Fe7dU4su4cLnABmMI6ir9QGOqUB2zoFwTriVXbpI18rqjQpI3g3g0K6cx1Mu5WQB4lu1g5oIeTJMv1S%2BJoeTDuq49nyy4H9r7EocYyw%2Bl9RhJvlhC39JvpKIEAbZ8A3O%2Bm3rA1AwXkH7mHRhxR9yLN5ifQU3%2F616AwTHvhd0KnFFVjKwinMXJ2SoLPNHzzYfk3IGI%2BCS3iGgXhrsLAoQkl9SgobVkqZXwzEJlrmyyma%2FHWTeP5WpPf4&X-Amz-Signature=837958fe61f64e80a573e8968ffb74ed61aff2bfe12cc9c5d464894216e7dac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

