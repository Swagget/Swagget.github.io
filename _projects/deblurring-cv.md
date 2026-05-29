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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQXO4FC%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T111705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZosRWSg0I0zfyW3EXzTLokc1mOOw%2FNVFv4WR2dgV1jAiAhwWUL1YZjfc5Mbiz7vq8i6J6dXL3ocIa5q%2Bt%2BCPRaBCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJZk12ElZpiW1GmStKtwD0aHMQi7nvf%2BQ0lzWIz2SxQVKiFQyOIDTVSZsV%2FtAl%2FsO3FWbR9Vn7Yi2oC4N3wSuWln%2BPOLSenJJm5mHSWxcdlg2taWEY4voP7GnoAaWyBmrzcX7m59AUQJFqR9AsrhY%2B00wmg73jvp0RmL1%2B5Wqg7ITKsOmeir4CFH4cPXylDnQdmxh43RmrPQZ14htIYcfRuQSBveJCKRBXJRESD1QAvKaO%2BjU9mVMMN%2FuQUb3g%2Bn2IodRci5CVVWCupuMLk%2F3xreot9CkmDdooN80Qr9pyaor9sCxipl2GkuJhRDyKXp39mYsdlWc40GXyxI%2FHVvfhzV41lM8K4r6yt6wb36qcBONRuLa2WhRPOU95hzva9UInmdsBiVe2upiK8Hay4Dky%2BcIf%2Bwz%2Fv5dCSnYjdRMK%2FozI1BAHgarjKs%2B1ybENG%2FrKnkM3tr7Hd3RkozXbKfTvPDIT0oRw8C8OuQvndB4ulHQ9dLxM8Z6NHQlchscTkVFZSy31Q2S%2FnmwfUZrGKmKOxA%2BZ0LEt%2FQqwRPQ4MFqZAeftSt3IKegorhoJZIAsqZ6CkRc%2BGJfUc5GL%2FiDUdvSoFQ4yyR1fBuQRORyMWZWdax8nBe0OF22fN3yiSS5adao5fBu%2F6uCcsvR1UUwrebl0AY6pgFf4bkswY6yZAwTEaiBr0X76Uy46yGCdH1Jr6LSVjsGPet52Qv9gs8dkPRpjt88SVtatNPI%2Bg8boUAS6EwtJd3u%2Bikk4IvG4mQG8iJ6pniDFgv4d65GvT5EPt%2F4WlPTqS39b0y3fepJ07Pty9wKzDUiiNDSp8xb%2FaT9GnXMfq1oCt9S60jUob6LtMgbV4eHnbOC0hT9n9lDwS1tA9dZcFx7Z8m3H%2Bgw&X-Amz-Signature=ce3421ca10f5efa6befd1e0e74e0997bb1d9e94ba68a7ab35419ae0a758d6388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

