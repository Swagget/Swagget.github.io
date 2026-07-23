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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNAB3CN%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T051138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAYUBxlfXg5%2Fdoeo7fMbcRr0lD83YO3chMtHLfKGMZoaAiEAiVJe2eDzDibN1Ec8P28c5uOydwllJcuoUJ8kY1iEIzYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdAfAQaugAdOBF5bircA5snzfV5ofVlL%2BH%2Fj9PotqScSnnDVDxzyEelZB6879yofvuLMP9aiW5MrQoR4AVUUdtx59NrWTEXz4FIcALYIOPMKbMk1WAyXEjWoFRUno0YPyCVCuEP%2FY7JtfdgM7Vn6jcexsIVIDy%2FbYm8QUYSpPloXExJK%2Fb7%2FHYb7FUPYiTSVKd7HcJZ%2Bm9LD0LnyefllcxswDKUwEqW9bx57ik9uDcf3VpzQVaYnU0QT0sX6SCKPT2w22I4qkSAwCoOShExAxP%2BQoUVmgFBF7BVB8pYxOh9DcvMbeZ0GcNj9fVUNE5pf1koNoELFZPEB803TxJCfB3OT3M6EhovrWukqPDXm88plLyBZ0Zm1iEDOOpnx%2FsxC7FJWUe43U6tfoR%2FLQJHET3I%2Fb%2Bi22lP2zwmUcyvJHtHY84oOdA%2BSw8%2FMlqOl8LDq%2B5AywA3A8XzaDIyYUIq3ug4ztD75zQyFq0Ss2gQQZATzrdHa6gwS0HaaOYQHYmFL6t5YxYppetRBJvByF%2B%2Bi2jUL2nXEb2Ym95kmzLg%2ByjFUvzdfvLo5ID%2BRdPOp77u3SqxLVFlBQH9%2FoLSEUbT%2FnXErOVbD13crcMwBCWOKaWnlrKGG91ARw2137oDuR8%2BwivuoDmbPLuIGbRRMLK9htMGOqUB35Dg8r%2BGonGHQi2I79GQTioi4MzgKen6HEO9GduuR8Fe1iR672XDLmNxfven%2B0wncYcYXcaekNLiqDB5vOg9aafjQHJasiWNj99f1Mw6uBAuAMuWRv0Jk1YxL2B0PooJLEeDK7TZ4jvI%2FtSJC9P7bdijntqKeVKE1Pj7sv7WfW6APS%2BXc6IkaHjKq5uuTsIcYUs17Nim7%2FXnwsx9OlCmHcHU0CqJ&X-Amz-Signature=6d28acc7fdb9282ebd597e081576eaa1c2a73fe0da0a62b0270af50c65c19bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

