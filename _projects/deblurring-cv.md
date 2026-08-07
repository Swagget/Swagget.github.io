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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K467ST6%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T094653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu6JOlJQUXHQ53sCduQwci7jZRor6tAPYX4iqkpS9t%2BAiAKMCIChx3y0gb3TgOeYpiQu6FNBaAbzMkqN1IBE2gXkyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMsX7tiE925ZkO6kjCKtwDPXY2Yk%2FXQCwC%2BPZ2SXOuaGbMGYUZprYAh6teHVUGVU7dEH5zQr7QDxmahGhTdoYq83amNH%2BJTQ9sULZf5DI1Utt%2BSu6cP%2BvA2WFPgWT0pPPS4v3fsBWu51c3OtRW0VeXmjq%2FaFvRo%2BOGpve9uDOFAEn1udZpMqdrwmhQDepdklHT8nyY7%2FGkfx2HTPcmr%2FLH7lBg4yxKUtKd0WhOLmURQLS4mTzgBv%2F6YySZG%2Bjr00KW%2FW7%2FAuhGOcILWiXHnY4ktkrNAlLaoEBlfrrNe3XKGtiL5SQg0EDU5B56lLMYp9G6p2syv45gCt7XT07BkCgEt0EzYCytp50QfTF5H6ZzQlNC5M%2F%2FImsIUgV2sJ5BBuKrlMdmqkF4DrgQoI4KGSflUGPVavWtv3a7nW8dwB1vjzP36jucYW2J%2BEtWFe7muPaGa4GbSnmd%2FOFBVq4B0mVspRaxN7mpZ2vscD4O4uYs0RjCpqaKV5qAFQTKFscY0G7Nhv%2Bb6ScWENVcwrhGln1qbeKPmmQla81Pp066fDvxwT8Bopz61hnGihOizltX4pFfRhtBwfc5Nr6n14wM8YSzJ2Wy15oQL4jemD2qMP1wDWRhNCr5UPvxyT68rlp0Y9lTKDeSfKIL8TFVdw8wq8fW0wY6pgFHHbTTg8o9UB4bAkGsZ%2BcL%2FUa6zHpL8sCKKL4RXDmRQAwnXJJD1%2FyyB7qzPlqJtSr8uaPEgwGfK3c72SiQXduFEsv%2BvycIPfSNPOCLWYLdWLn%2BLe4%2FFVSRh%2FqF%2BSVt%2B1YGbgRt8h6Nt5zqvI5qKpxoLujL4K8oc0Qxj%2F6%2BZkDKOKBSeaHcddBGMfpyCgVYNIEe7KnI1WA33TUkhrVzxzb5IsaIuNH5&X-Amz-Signature=eea62043218a99a9a498215ee185af89193ba70c85daa76f06957ca0c35d2d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

