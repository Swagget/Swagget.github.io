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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FNLKMF%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDtFC1qmvr73tQY6o5EK5FApC26IUrzpglJvO4s5qsl6AiEAlQPlgcwTgJAetKaS9ve0jTRRRH7OOxXSFgvQCmcbKrEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBokJRfvwFauOgO7myrcA%2B8%2B6qxKoXmE2M24HYO5EXR6ZfVAkTaot2LC2x2sR%2FXKAbQcI1bO9UoK8QwQqVWFipuuBCJBeMsyiRclCL6i7IQ4TuLpZicukXVBeaPrulWAhUDgXVGvZLxsi3M7RKG6KczsU5K4yMKbj20BoBIOwDxOz8XLSTpYZYBClu%2BE6GfA1j8Em1btyCc6waYiNB6PST2Q2vqEu8FtPO6UTDwSh6eZ4qsV2itYcXgvOwzzFf4cagGssH%2BYVT%2F5QMq9L5FWdsArbb59OX00J0fdsusaFjRd6EQdGhuIxafZaqsTG9zju1UJhI9p8SlFIzEcNZx1jPEpmn3n9YGEGOYGipm%2Bk6xpCPm3NfuarWdFy%2BiEpSUOTTpZzb3sovdR%2F9NOocKv%2BMGZj%2F7zrfIwRJtirztdlxojlB9ZnAedZa5Bq%2FOFVVsq%2F9%2F6xcmbE5CY2obWhsmw%2FZz3ZJTBj8KVvZMd2idfSaNtrshQXbRc%2BXK9ozhUClnpm3iUubzuRF3Lim8os3bX25hu4A64%2BCwnt8%2FQ7WuaXWP9MpvBAgnrjvOrS9ovbyztXgvWbrpOFhji9JTw5yR63%2B3a9Z7DXt6ohmFPmVMSxCljz6reScxuVlpZso7e2pn5mGnoNdmFMUCWNmKtMMX4gtQGOqUB%2Bm2CVnFGUOKM9ZVNEkA0yxxudbbE9hSB%2FCf%2BO7MroLJIvio5dGJ2iG%2FbwLE0PUXH3LLoQ3uyS3xZNBC3M%2FXWcYJuFk1tzxPW7DeQZcm8KEnA9Sz1pEeC9nOs%2BG8gcXi4q6PRMuNvnNGG%2BOTNelKzyeMS9NSGwpoMWuya%2BkuBTjElSW7HbpyoiLiADLnxW%2FKvt2GcRKld0lFREJDofUBgZHDjphL2&X-Amz-Signature=a79237bb3cb91cebcd1166e7679a3d231ed08c92eb400bd11947d503393f58c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

