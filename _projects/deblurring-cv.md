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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZCYK3G%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T215346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDSU5yTjG40O0osDRCXv%2BNqYvMvSyfGM9%2BxCqY4Zb5HxAIgJcmP7Xdn%2BiY1Pt4K%2Fdd7pvrRag5mwP2DCyr8AY5zjYUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB%2B7Zu0Zg6J6xkLB%2ByrcA3bco412%2B85DYwHKT2BQujhbbyMfIItU0rAEwwKQ%2BbnGx3oIxW0kfb2LMTpFM3GDvhmrnPX8%2BecIRG7I%2FT1Eak9gZ%2B7GvsVaWfBiVcp8%2FFO2aGtNuYaKLEWW55NB87Ycjnx8EVzlbD366VpgxQOD6oqBvDPglkSwLgcGnemzk9kkpzXRTyGJuyPLXjN%2BJxcnBXnIkCCbKoptTph3RkNm%2FDTjV12DafmcB04W%2BS1ozpWm5VBlxZaIkF2o9LWjqh4hTqr74dVq3ecR0JfaCci%2BF4THDf5lZNSXIcbtpkzQPyrsNBs8bJ1llCBERFGGErx792chQjgonhc3WVHKvaLjaEk4FhMU6tpglwS2qKEOFkoCSfOdWJcQkZmKfMO1%2FUUaLMBtbCSSPFUKBhH1wfGdw4Jc%2BA9LP1FAte%2BD7yKofRzz8FQCBpXEI2xkco9Uu2V9%2BQJ%2BMoMdXzhIuEC3rGGAPT6DOCZK1GXTnWwWDj9vGnlvG98AmINSr%2B1omn6VkSlmxgTIq7WFM%2F2%2B6zPmifCZiSqwBNmfNNCGwV3TLom0KolL9KjODHg2ytw89s7Wl5ZEUsGGKPGOCgPKForwhwzHg1jVdnuJc522GSDRQwWtFCjUZUkSW%2B6GrOboQHEtMM%2B2oNIGOqUB6R0Yb9X6Fu86f6nWdqvZ7BO%2FQ2cPh%2F9k4DtZ14kbrWMDBPZ8rKVOTsd8JffFU5oUQWF%2BgSKwzJY7UFXwgTYw%2B3uXZ7ICLf%2Fsrl8il0jiWz%2FonWe99jHwxHAGod75%2Fc3B9RSVsqiYwDpusyfu%2FMVHsVW2MuLSAFYfxEjuFyEgqX9QxnkIftx5MwwmnduSxApFpi4bQYRCAdFu3hLiApixzA%2FxRN3h&X-Amz-Signature=9c569ab87f522c2167c08dc47d6709fc52e55129e41c309b2defa9cb68377e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

