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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6V6DISK%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T170645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCJ400nv2Zu%2FgtDePLYdVMEk0mHZaqOMahsrDv3fBi2HAIhAK5xrvABxq06Fe7kvutdCbrwbSCWFB9SoS7Z5zLohE2YKv8DCDEQABoMNjM3NDIzMTgzODA1IgyeGM0RX4THaaigkGwq3AOmdKZtU5ZIhYW0DWTuDRP3%2B9Or0bDiiWLe7%2FbP%2FXpbkPc7kk1QGtAxXe0sHLB1iN8iGXaceshmMonXEEqksUXWZLIWpRCGmWMbmPDAqFwIOyjDU9MsiKY%2BzUG65LDYfvsAdOeBilTVotPWyeD8BlKWU%2FRTD4HOjT4jpKgkqI05yPgtTgGPbrqHBhIA2ZPW76WijV9jeuH0vXjm%2BC2SwGMN4hFDzlhUfEnlPygGc%2FSiGJbjBzOyg8XRHRyIbPkILWr69c9DeNHqZpIg3ffHknvmyB24doXk17wz0MFZhpEyQYYttC14mFuRBJY%2FrYdOoo9JIW8fAgpjmQYRt3AYr025KgRtRlZ3EiV4x%2FYj8nkHBHZotA6IzIDlzidb8XJAXgwa04DbkAYxyKDmXJlT0K4EUo439DN6Whb9dTx1%2B6mE4awfykEfjzLmSbFGrqinh5B9BkmQcmQEv8s%2F2EXxrvm1gvrglaxpBtro%2BDI9a73BBl47Sz0NhdLmZdYudA9pBZvBY3Uv1hPoBDJdVnLlksGewZ6zz83gH%2BfHd%2FMStSDvTTyLf77QjJvQ2pt2NLfnJ2DDF6sdsyISWOmg7C8Hros37kyZPmh555XOQ6h6EDSiP5FLqZ%2BKaLLNWoxfkTD7%2BLXRBjqkAcMItzeN8UeedwlxPWUqPbvm8myzcDzZ6yEi7E5J%2BRrDTwBBCq35gJKqPEA%2FMpoTIWrJhwTbOnYmWapdkI25ipAB5IyblVxP2RPf5w2FfNIOdKIXttYVMXFWPvODbgBtzJ37IOLXrnfUr1ahkiIpWTVAdobqNduwZzNZsCT7l67Lls7xNPlL1i0KWnM1BvoG9l0HXKtWOVASG4BVC9DlWnBcYAF8&X-Amz-Signature=d0743ef2df9500cad299b9ce337e9cf2f44455bb0f01fb162dc251b44e0f1e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

