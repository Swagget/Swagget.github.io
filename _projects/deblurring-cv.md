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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3K4WZE%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T095521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4wrBN%2Bb6BMrhGYmguplsXTsZQYxywuPqqawt%2B4SWk4AiBjTWIwWMG1mF8NmkPpAiREFDTxnjEet3tp3SoPt7KLFSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fq44JRVtB20IlD1oKtwD2ZEw4jM6nCvMn1ZelR5h6EbcBgxmnVmmqeRRxi8JyagTMVSAw7if5TNFcQkz6oxzFdLy3JsvI4B8AydfDvkb3cQW9BV7BXGYrWUmM1DgJzZz%2B4RD5BKA%2FjMueXKZ7mDEk48nozibRRKrSnAj59S84oFCjMvpzswEc2Yod5R7rPk4llo5lADLlGXszwOm0aAzTUsRXcBE3WB76rOmrzm9x6dU8SKOf8Db%2Fw9abFreWTdKwqUktfMF7%2Fq5%2F3W1O40PL4gbkeZQqGi%2FBueltuVJDXZ0q%2BMz5p9eETV%2Fa%2Bewj3q1mmb7baWLRVK8fEpLnCXp%2FV5yXrwayKzUftDnwigYEp4M4VzV9h7LurzeVeN%2FRn9nhgiAUzH28UHzWhivKbR4ml%2F7oRONT8flfIzT7Yu9nCZ3oZ7uNaMib3scVGAiIG6%2BwxBhoEBN%2BmeVS32hFq8QbFcnBsoZqTHckkRQXm7mGdhK%2FWL2mQsGH2YmeLhP9GWXQ6H3DGI%2F2BxtK33%2BKte9uvB2reuxxV9MqGS%2FyYpC39LxFy5Vz5n3Pqd0YLQW%2FGzzJYNfI8DYI00cb3tazgZoM%2FDlxFZ9XapUH4wPC%2BrndiLZlq8rCVVPl8zzsWLhv1b2Dt80uI4w5tYVlJYw89%2BU0QY6pgHz7Zgvtbc5JiNWAck%2Fqx2SgFXEdm3wXj4irdd1qKYzS1qa0SZSn5whAGymUj5j7eamY3cRwiED8dXqkTmpI4j9pTWKv81cG4sv3XMD6%2Bt7ODz0EMUzmOoP%2FLXPZwwQ0iaNsJKVpQov8G%2FKMwN%2FAdBevdz01eqjUt63FJU769X%2BElgnjUrrfOf6HjXiaE96EUTs68CbcjuvT1bbCRHeq5w1776hyUzw&X-Amz-Signature=1f8d4eaa1da7bbd1332620326bbbc9d2f9f6bc599221c0c65fcc50f0b794b5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

