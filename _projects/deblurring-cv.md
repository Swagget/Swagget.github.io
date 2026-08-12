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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULPNHU6%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T164312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDSozKEmXjx%2BR3Zk89GlgNGvxravUQIo2SGw5r4PhFBuwIgQ5KBuHj0o6Na%2Fi3NlrniIVkYH1SEY2ybeKlJFi8jMikqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIWiKaPQZ82gkLgWyrcA7X%2BE0YxpDlTKVso0FRhDxnTE7JbOsGGS%2Bg5hhgCZQIYJ96mtWIKCMeItwzY4PCX28aEITttWrd6Fb9NcKU84MwaFHgBzQr5O6DEUe3xn4BX2MmUQSEpHudImWYFeAt3zIdIN1Yjmgj7lJnTz7uwyTjb3TPguQd7GU8JRA6H6gOULKN46JmZ%2BITUnrv%2FNU40HPCQS6OhxdZsKjjjxt0SWP9yn8042Y3FuEh1y5mTXAZzHSwB%2FW75KKql%2BGCTKrPMhzWSr2Rux11BzEDg4rb6CNjNr5z1g8cu9AxovxVxBuYAKPtEEuLHR%2Bbc5WTWzqMZqlamlwMK%2F5ggN9tC1is6UVCs35litmJJFHQt8YI3NZFrdh3TPjD1Sbu4Qgr%2BCBsiODauwYoEXhmhCpYc%2BRIJwvPdhh%2FWtBn0vfiYNU8kTn4J9LXG4O%2B%2FS5aVF91u6eqgmbPFglte%2B9f5GwKass%2BwB8mtqLcS0d1hQr1n8oLc%2BsPfbrFFmn%2FkFzM0gWMX%2BA82oDw3NB%2B5QjLtWJfGc%2Bb6VpggvFI84MRxVjcTA2cY0Kb1as8B5S6U6L%2FhZxW%2FC%2FqFgA3kzZFxrYDkF0gI4O06v8v14oc4Iai8E5qiI4RXeUFiuvs9kL%2FTmBspJ6OdMMWx8tMGOqUBSCExRuFAnTq4YbSMXe5DVF4z1iwZwR5Feeb78nlW%2B%2BmbaVsdhmmEtwysoEp7Ui8MDdOxa9Un3KLDrqgUjKt0CGWX%2Fh2zI6o0SnlQOMm%2F4UtiITHrLppYp7zl%2FygiFRXC%2BYz7d%2FwOpCWxJUwAZPeIrPsrl9nMHa367AuNgOQaXJXXhxEz71Rgd%2BQzK3IIBP1Mx7ujioCq1rDTKa9c%2BXmC03IvhiUb&X-Amz-Signature=b8fa130a2449a153912a5f0d3f4311e9451ca1b67cbc25c25eb6f02f507d8f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

