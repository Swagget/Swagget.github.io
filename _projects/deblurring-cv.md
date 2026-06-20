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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7HX4VP%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T065209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCBkgqOqiouyrNxJEJ42AI7PduP%2BXP%2FY5XULhp6s9uIIAIgbARyXEmZS%2FIUj4QVhkSx%2BkpOD1FIqkflRt%2BaXOlQdMYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5Ei5uzp%2BSIol5pGircA580CEoRVpywlWnt1jvf3guZwvDdzMpLa71%2BnDJymjQTX6z4VMH253qhAKFFzcST5P0Zt0q%2B42zi07vQU6K%2FZ7drcgZ77L%2FHcvsDh4kF57dJWgz0yAs9suWZQ%2B0UPaU%2BXJf78bRTcu1Z7PcU3MSMOOeyQv8TlNWC7ltiJUDBsGM%2BFOw0fvWkVhOHh3lrBH8jRq0G78f5z3b1PfEBaL%2Bykgv669CHEsGWEH4xjeb72ABe286xfiyE22Oefo5MucVWjUFvwyiU529fwq55gL1aT87dSB8nLxsZpXIPEjdIOTIKU69HnWnehpBRktBfPsgwbsLHbg8qd5H1sKD2pc6Fl64A0M2br7zxVdNDeuCXSd0UD1qYx997Zgwfm4bdJ3RkVaT5nNhzosOaj5%2Fe%2By7mKWBcGi79ekgs5gCwNVPk%2BWh1n0hwFQ4jBYGkFDOIBWhZNPjkbryLEfNwx2m8UWAtOJ7gHhgqfhTnh9MtgDf7A0e8gle6wIz8AhGBOseSQ2eodGDQaqAEQs8xQuHIHi3D8Qbk3Rz7yiQS3em9groSafbFbBHq1g%2BRYleZYFVkOoocBSuJi7EfdLayRZiXUOqUYYMxyEGtbxLGHC7F1i1ZJRYdmGTLOy8UyxHOelgnMNjb2NEGOqUBqSkL79a5RG8g9Kro52sTh5NWPxqLrqJYTRd%2BUP8DYSu4xjn9%2B1KoL3FagYmYo84A2tDv2hPgp%2BGYrlYNtyyhkeobas7vGZbcpH%2Bedcz5YjF9EOLCqSnhRAG%2Bz1w%2BR4wCgYTsyhr4sNVO6iT8LONVW0nemp8G2G0pyd9TxkXcEuc%2BnLLMxu10mbKVAyKyckuUIWmbzjv0l9TJpfeCn6HpyyTGf5S%2F&X-Amz-Signature=348eb8b0fea68760d1f739e4e0a2b50fdafe83d66b2ba5066f7c8a3d0c3ead0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

