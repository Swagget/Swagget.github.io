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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ITPDMOU%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T002217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDUS9eXAAICWSUPfsWxu0kVPw65zxGSdlKrLE1cFJ2N4AiEAmRvXP4hgCsysMuj76GnXt4SbkOiyNyxUE1Zq%2BAErON8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLD5YFTsKpsSj5%2BbJCrcA4NWuau5JzujPUiHcbKSoF4zShb4p2Hl7t7aJwQMXhNDz5LdrFvqHgBNU4tYbNMw0Gz4KJvm8l5MaBxMKPTbm6xM6Z3lLq8%2B6rVDUrfPUK7X4%2B1OhACelCtJ9i1M5IHS0KHl0YlHMcBQHJN6xCQ2vhGpOZLx1uVW4MqPsrax8Qxyt1RJ9UKk0RdYiUfV5K%2Bape8iVjoSy0%2F8YGFJldTZQfvG3CWdJzRwg5MG0Y1gHHyt4AJJ99Qpcyjx2WQH4H6NfOrETdmgnWgudT3mbEdH5GisRCfa9dSnBeczahmU9b4mMLcgWPPnVCLmkoSOl8OAQZL6ejodXAt%2F%2FGRk14rgbxf%2FGFOwCwus25XrYbQiOx6RDwjAPJjjBOrlmDIJXEKnWktrFId4ghLyKhbM7H1vwaFiXTvaPnss7792I49vFZ3hOPTNV%2Bivgktwkz1wYqxxol6W309Zg%2F8rA5F2X8CPb%2F7AnLZGg%2FR6quAfZiYw6LK5g4bzghYMCcX2%2FU156BdfzzFymDC6Afzi%2FqNGwhKmcH%2FTNzPOeiIXS0YcsrKZBnu%2Fb6WqPQ%2BnCFZry4EkCa9n9dWYCDjBQzCbKFj%2F%2Bb6HvN3x34yeHj11ocdOhpuJ4CTL6KWsTP7yII67gzR5MOHP%2FdAGOqUBnE6xzUvERrS%2BTOgwu8X5%2BNQ%2BUCcEi3YxKQAZ8Da5ECm7LTHgSLvkr9Pfr%2FQrWHE6v%2B1ROCtgEc5TOVylZSCMyphMUNFjx2n0zVvjM3kAXTePhqKFbc4ltyThA0n8%2FKlnjTq3x%2Fw%2BoGTRI0B4KPig67LSGWRWSWTSjFMLe5LJqSiRCa%2BJAoZcq%2FL9EmcZZniNB3zEVAullg3v5LFGdQDPKU%2B4BxBJ&X-Amz-Signature=298092938d51cd53d86a526a2c07265c65af323290aa5d12fa1fc2a53c3ac13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

