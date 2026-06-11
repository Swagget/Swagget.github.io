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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HBAOBL%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T200637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAv%2F1rwP2p%2FEwjFEvUgPyLejH0CEv7tufnqk8pb5H9BhAiAtRUhg9XLOLcYmpHREuMaZ%2Bzaz3eoSix3roHYRYKuNKSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMACnQymKJqMFFP4bqKtwDPGLWljLCmIpgxkqiKpXKeJYbgHKVvKiLlyJS54kb9iM344MrhzMKaH1dNEevKhQpsfR8P7vtlfO7vvpMXiexLXIXOIq9snRH1sN0AdcGCPcdYkBg%2FDWzVv7iuZaupdpT5Wm%2BW20EkjvFNenvwzTqJU7LJ5GfzMLggLRccX%2Bn9znffDixaukeSOxkJzYENIErFSSoXZLgi4ZXXZhq8EcR8ltjTLnpCy8r%2BtkjXRAsc1jQ%2F%2FyzgvHZdEpiv21xA1clBTo6Sai9HxjcGJRt%2B8FRCs%2FV9gs8QW3%2BpCXtTqrAob0cV4KXOohF5hMXtQUQo52ZDRVjDJMRdqco6v3ejee7XzWREqHwzw8QJW7Ah7aVTnOcwPNboCEZh5B0TtINZV%2BuGRkRgKis404oZmmnrnp5%2FsZriYSH8JOg0zXefSrewX4cn%2Fu2XyEzq%2Bjhth5VrH7usBIZGEN1PEXoGpUv5BQgI0tgzu1uVlQW5YOzTPNNuIyHMaWUQgdKG1d5nsGBRV0jSOODwviWC7VkaFCwSormba341rejPezGrJRHHU1lJzfOFF9xJMKo%2F4UHYAfUtKzNbQIFRo6I%2FGJ18mWxGkeCK03IzM2msnESMgc2CD5GGypw00iGBzlyU0gUmkcwuoOs0QY6pgEGYcdsGNpdzpRz8o%2Fkr%2BYXesAZVJ8P5SxkcthgWGW550iEMOu1eyYF8UbVfsusMq%2B%2Bd99e1b8pou65D4A0lf2G%2BzkHo4P2877vuLPLg1vqFFc02fDqHbRB4VkdIQQ%2Fa2epa%2FpkNyNr10d5NKNhTAgbNKMb891BlVxIkdK9RsdSwK%2FmHdFxS%2BVbHHU68ZrVbNMsO9pWJPZFJWoSzcrwjPJRh0beids7&X-Amz-Signature=82462e4bc9b73bbaac9e1a6d3220922b635c2f8f3c034f11c3fc468e1c52db79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

