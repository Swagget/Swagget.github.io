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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQCK44E%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T100234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZApBafrnXTF7%2BIHOD%2BY2eKc2QLnChOT2i07Gp%2BrUdwIhAJ5ZglsWE9QwaLrLH7x0rK%2F9%2FQRzv9dGKKpBMpAhlktXKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK1NF4ZOC7NhJXWREq3ANxv3poJlcNPNiihRBEHEanZD7rhrdWxjnq%2FyFHPK7SaCLrnL77hfkpjazdizONT40oRpTdKdXZaAiYIpNct7nUo%2FHHyelQkWzGucQedzZPSzeTnTBiy%2BmDixbdKc8t1gZBGKJ7zP5bnSvYP4ocb7MIBJM38jwL13z9%2Blv5yIXMak8z7iHVujdXmaN%2F%2BtqRAb6oIrVz3UlIB6nzeKubiMgQ7bAs9Zs4Ayc9U%2BPa57hexfHUKujAkNW%2B0IKic1y%2BGHLwk3NRbJ63MIv8zlfVR9sTMGIBrtOFam2%2BAkZCwMzPbFjh05KAHFqtGNI7KIlDi5XAUXnpsqsZtrLRRQ1ZAPmVqtKyiztCDn1o2bXqb%2BNisbQuXwr%2BytaxQN%2FDpX9JyRIpaEBCQCXFn8dU%2FipDa%2BKvTvhG0Vel2vn%2FxfwIMWoirBl5srymivB7muk72ZriW4qIAh4wTopHZe69z7Y9UceOnPjRmGKtuypCIZZ7TzsPEUMFpme38c1JtLd9VfUmWU8q2gjRKwlMGjaRJ2GoARkVs7M1L0lxJl1kqYnZrKMP5cGWCf7T2yn4np%2Fj6FnMslmfDdvIGwtdRo5Voqv0aH0vQ7jFbP7ddGCdQJzTjWl3mPHgD1kYHukMyMknYTD9st%2FUBjqkAYs73K9XCIVHj9l0C2ln32BDmLjzpzM%2FMpGpV8vOV7Utcm2awWDCHobKWFX%2BIh6i%2BFO%2BRiCdur2wYsC%2F7At4wxFn%2FNrsKjNjYhldhD%2BC6uLudoEX6Q05WTxeQ7VIHfHBUNwXiiiMSfyBU9iEhj6HkPNKLQl0HZDAgt2T86wjjMdQ02a4mVFbq%2B4fBXdNqHvLJEyUBuDBD98apygvCIimobjL7oKk&X-Amz-Signature=8a3620b7acba1a07437def7efb5f08ec26445bbca6bdfe1cd8f12573ff99df14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

