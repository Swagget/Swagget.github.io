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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTKIIBE%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T205723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTunzIy7V2nhQW33FGTDKqvV16xm6JDPtidANLlala8gIhAOqwg8X2j1xJ5N7mOCuZP9ZbROIw0oo3ip7SKr6zq%2FY1KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyihe4OnDw8u154cDgq3AMUekbhFNxASIcUpxreY2drHhIENLYecdS3I0N00GuYWbifZqzrVH9Vhqt1dFQcx0nMQP3TkJ6xu40bVh12OL4KIqY1euxKJXhaul2O52NLRTWBM%2B8%2FP99ckYUf3%2FP183UIdgpYws6xe%2FBOTCX4zm8y44SjitLufqbkYktfyHJiEgfuzx3M%2FuW8Qx4137FveqGNTNoUgUWrHyDTWLalelf6S8TR5bambGYgbI1PNCLlE%2BveqMudc3Pn8rslaI13j2kE1rq4hrVVdxy2OsPSHl4Bfso6km5SEx2BqOG1ja6O%2B7jHLPhtTbNFb9Vv1wOkh%2Bib8DQkbGGhVokMvBjAbWEWO42o0Ur%2BU4zSgcw1cixwJcbJhcEd8W8pP9MsBwRA0o0yaDuR6lzXqwMitJ4luPm%2FziN1XNKA8LjnH3nkguC%2ByRu31ZK10brUA1gtwHeiuMPmZxCuiD28pordPwDGam2o1rZrbKKvKXuf4Q%2FmTx3XNesvSWnd3T0G3kCjeDIETqXlxW%2BgBKgBUzLNwkPkdTyYvQH3VE4qAf9%2Ffpe6%2FJR15MMxSHYwB%2B7X0O6ix91VAvUqZ9Jq28qjN1D6fPlgTNz491NoH%2FLYYy%2FyOfN4ePF%2Bf6ppL4IsKgCGHDKPpTCilsXSBjqkAbL6cT1eqt0brJ8%2BVFZaG6sRJuIJQT6%2FX5AQPW4AGJNmz8%2BkFVVKCKeAQb85OtU5zd3QUOCeLf9K3wP6LyAkuy5HPVR7c0ZPc0f7Y5MJotgDX9dhgrVagT%2Fs1mbe92wzhl9iXdhmP0pV%2FSW%2FSTYKVBD3qpJq8yOUQfBrSlL%2Fz9AdkuEWAFCa67kmJlrRM8vVqyduNsoZNEdIkuOIOpQ3mpTnc%2FCV&X-Amz-Signature=c411c8b919c50c2458effc74ff75f39eb5342a182bc46d606e494c313b4d4154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

