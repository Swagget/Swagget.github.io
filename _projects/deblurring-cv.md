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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KZTZSO%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T085447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDHPc4k%2BS2cK41J4NzArb82WelFheBkTQ6Phejvj%2FHPQQIhAJ0nkzZN3ASqPBYqehFxb8jyI8IXzoPsUO2cPpB2zHKEKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR14BJ4KZXlxcyslwq3AMUGXRH1Id8Srs8spSlZcv%2BGL7rzVohJxuyuvugbHCZamW5M9C2uDHggNTODEvGbjvLwTAJ%2BFN4CzIYdiuFnfOM1kqELv0EHeNsK3DMXNIje8X6Hke16xbrtdlwGdrVa6z6JSu4CoSRrnMe5cMQhNSMOvdEu44S7ehZkgE5Nb9zKW6QN%2FspO2PQWEJsI3kB1fxBlooosIm50HVXYeJgcCoP7R5abdFsPvo9%2FPoWBOWrSnEEqEmxTd%2FswVUikoiV1HciET2AsOsX%2FZeZ7qr%2FZPaiS5%2FRT6paaYkRHtTialZ4atmjXxwfb4LYdUqLCO6HUprC9yKwTkJLrEbuP81lIXZD2cRy8WfBpghdygiA1w0Lb3nEP1k%2FNDH9st88OK9Ti9I6%2B4vGyLPAhHHf2iiOlP6sB7T9Ro5ZC6PTkgAI9M21cT6x3lhGth3v3qiDWs4hdsUWoAKyUjovNRLoR1W3vANiz78Hj3ew0KvQSk55D78eattvfatuQ1j5jKiEfltiWafEVbeiKWyJVWKk6Pm20mZBa9qnwr%2F7kzmZcxjNMgRe0lNRtREukJbG1rRGjozGn%2BG4vRodgbEL7IjjfEsNweBG7bnElx%2FXTDBqlagCTH0ISG0xxHnxH98OAIJGyjD1mvvTBjqkAQOgU53zGURd8snFJwncCmrh1SMY6yrMyVJu1csreNkk8VBZaX3A9dzU6FH4mhKQ2KvWcPeylIY1WkwNSVqtAGbvvKh2UHzpTI%2F3wi9BgmuQd6e%2F78cU20hF4Jlu4li2UdW64cwMJ1Mp0%2Fggz3pOZzA%2BnsMc7WZ%2Fkdq34avcXu2tWSdBGZm9pEGO5mG8S1wBxbnXlvfcUy78fQ2MMuFOz87hzrlc&X-Amz-Signature=574ebcec35d148db224a01988f8d4591644c25f182a145cf4edc527bed8f9604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

