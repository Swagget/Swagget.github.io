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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L3JCT6%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T233933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGEtkYTvDjS3jUDiNLf4GHLVMGAQhZ4qgTXdj6jmh5vYAiACXkgRC668BsSvb1u3HnkbTJ4wiWPfN7BU9R29sshBaSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMf0%2BJ4KdMYjV5uOyUKtwDKy21NHjyt25H%2Fs2gvs2Ra9rKhMGXedXUkcqvQivvOw%2FL8u8eYJ9cf0ZH90GndTr%2Bdu3EK6RRhfvHuSozNSzCIkYetlZ85X%2BNoZTKRZcyQ1VdwQnJmjIUBnm1%2B7yI5NHy3RZpxElKnNM6cTtImOhsWWM7vTqQJNjsUbP2moWo6v6bxwa%2BsXMFe2I47K7PFLXIwBW06hn4YLN14wwtB1Uw4zH%2BpiGe47LS9wQKnKGx5hWTkFblzhre%2BmscMky18x0pTKwlDvKzgePr4lHCFzaHvqgczP7YmgtqYJLJbGq%2BB%2B4Wr04GbtJjtpJy%2BZLxaSwhnZ54ALbnjeebKnbuF1cUZCwwVRGy9wFEZHmYAVKq53nH0T0vTv3KmbPSzeZ0gX7Mwwks5yzynoVPt%2FfNH%2FQ1TVedcw1UDsRMdOM2xGP5YJHNA%2F7SyOpOLKB40gJHUI0673hdaw%2BJO1LmNwxrTZRmMOqO4is7vMHwJtTDh1Xw8XkcpBPlPQ1CsdvTQrqwHLA7q%2BS2HIM%2F5q2eo1KGJ24SAgLowLP78r4ET%2BlFWfuKYi2Qqe7k5iAOjrX3phGuXRJ0DdnPcmyN45AzGxf%2BBTpERcu6Dz8xplW5Q66emjeYWOD1ns%2Fjp2MxYYe1IrgwhIbb0gY6pgEDc38lhf%2FWiIbd98jQMIxi9lkqamuG5LIU0kfkmPSvPGRcqsEmux%2BIeKvg5pTVIGTzUAIzJhseolR%2FdPOWljjk6%2BsG2vAaB2NceeeArzopF29aLj1H8ZiszZ%2FXGRgIt90nh4UTa%2BR4P0f2FSahIXjepFvJvidHsraWoV%2BAMMQpu9mXoJW%2FV%2BrhYDMWmN4zth2rE2RNFf6HxMgDpUwHdrR8sxhh6tf1&X-Amz-Signature=cf24193c247b1cd48401baf17c5a518b91a413c53761a05384ea17ef274bf23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

