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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDBJOHB%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T114124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHxr6NoQncg4LsD%2Bx5R6Qci%2BBm7Em%2BU9GNjQ2I%2FOLp4BAiEAy61VKQIyVPsh09MylFh5dTJzwz%2FUrQD0Xtv7SvsIJ7AqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8xMTgAkMQHrnTzsyrcA72kOoIsLYcAEnUuaAZqWj1nGF69w3ZturOyGHhrDd788mYyfze9B4n9W5E%2BzpxUmQpKbQyVzvucDFyrTpzFqxPHXElyCb4efrKhlVjOoK6WChYVXxHTyMoOG%2ByznD5fzd%2Fqi%2FLyE3NrOc15S7XTFSCpDUuyh2z52rxDfkL2EQDekr81Fpt0JamHs02sPD7Wkr467aSdysqxkSj7cb2HJN%2BtoiVXtIOFiK1uADM53eerewqqLzqpijyxDWP9PnPezPk%2Beedldc2hYnkRj7oNll8t2R99ej%2FBn1xcfGW7vdpNDbE%2FQh2Dr060KPyajnAco%2Fl9jB86%2BiKphU4ddo%2B0lXrXtDj6wztLgI2KBl0Yk5l7pX3a48nssRzwdY%2BQh0unsa4CgB0WQfDWAoEDwhhdeysSSHOLPTrKo90qgX0IQ80mwvujYi2EeZ5CoiZaOblZfjGjkVCTzWShJZQunx%2FN44e8j%2FTO7eAMSm%2Bgd3Ut3A4G5voM5ffazv0p%2FRRDKSr7x1JoejsUkOEWu1WqV7OrGMB2VLTiMYhrhgu40qU39WdRqWCGi0wSvi75c0rnWqC13zu1WByDApfI885DytBdfZNnQ8foGmOzWbgqL6YAj8Xm87wcwiTf96LtQb6mMIWkyNIGOqUB9PgoDu%2BMlayZx0WGaMNkRbeDgw8BJzReBFgSg1rkwGdQkmo%2BsSORQeBqSP6pLTBm%2BqP76ddf%2F%2BV6PgOIkzmQ%2FcuhgC%2FW%2BGAWv94Q7gdFNU6qlEO1HA0LA%2FaNvRXD6UiFNBg6DEa4MK9i7MZpNGsptu84EIa5VxZTuY9cOa9fkTyxoTKmVuWkb47SliBqwkWIVsD8YgJWtxNUMK7Ii4yz2Za6HeO5&X-Amz-Signature=cca194b38fea74eece6554ede3955074a8e525e1ba9c735471e409a01549d1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

