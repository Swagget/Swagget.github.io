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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFAM3DN%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCICEM7bo8A433%2B8MssyTYV2aLcZZKz%2BAJ2lVdTOFt%2F%2FwQAiEAnRILbsMVxD0SlLfCKPZB1C2p6Pf7FbLs3C9X92I6ijoq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDK3SQT%2Fj18SPK9bl3ircAwaeUIJPV%2FhglhXaxO5QAFJFgLhMXw5%2BuMPspucuPFQo5GFN%2FmBFIGVl2alBLCcopF2d1oREZm9%2FGgRuUzCgOwdKzUSF%2FVwKvNpb93jd2FkXcAuoIEViln3ynuzsfSr7hX3izk8P2vrtBHoQ3GyviQslW7%2FMB401k18DCXx8YKP8VQkmMro0xtCR3EZuV%2FiFjzSh0UCdDmIscwlBE398UaURZSyWk%2FL%2F3mrtQ%2FnACFPI9agha0PoQo2LxJXXpnJRF4vU4QFgHo0WuTcan8WPbTFd4gIo3iYjmsdw0kQ8qfJ6%2Fo%2FPRaXvYjkRoLJV609CPKtSGbnUNQ%2BpyPr65O23suun9%2BkB1UY64s7%2Foaxwic0YwbagiNeo%2B0JiwX6JldKVUvCA0KON7wwRY%2Fp5d68chMlAAxflKqaVZp1usV1YFabBLfUhVJdtep2UmIUvyzQt3iTjjfXEPFm56tDOwWUA%2BU67VgNea3Wa4mjIpCBalCjrMyHZ7Dsl5SQ286AuFLGGpPSGFnLc1nCPTQiVpQz5yExl8Fha9p2VACtOBORzxUwkEwu39IxBzcOM8VDOkoJaNvKJjdWQWL0KbrSF6f4%2BTnSiEp2xcsAXXYG2sfautAinFmafvegXU8MLiM3zMO%2F%2B%2F9MGOqUB8ScDaVGqabDhzi49HQ%2FzCL19b6J8yVSknky3igS6eHbVEsNLZbi0CZ9yHCNFC%2FPGAnBqrN%2Fhm6FlCZqa8JVe2651jow2SyyZBhcHTark5TUC3n%2BU%2Bh24cVZiYK5MLiJI%2F0r1E3hsH3ov3BPleE1q4Xig%2FcWU70%2BQVpYtJewG2irjj6aUPbRSZqDClbx0mYW6EcW1x38Eff2e%2F2enLb7X2ObJ%2FDCT&X-Amz-Signature=4cf97ea45bd4369d7b9af218806873bec5c7bece799517d63d75eace60132598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

