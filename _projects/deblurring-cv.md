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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBKSBZG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T200549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBRXxmCY8KL8a%2FPfr5VY4xmLvORrB5sEPlLCV%2FXF1xGQAiEA4WOQylF6EsUmMpF7pBm4i8UUg8AUY4dKiWLG2pYi%2BHgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPT7GYavuOmjnMNCnircA2stsW1HI6D9EwYXapcEhQVI3oNiUKY3LhFpwtJ%2BR7MiOR0fjs6HSGKjEeUcib64xBKLy6hUKg46ncGSmYn5vMsIKOG2MDl63IL0woEtIoksGgnuDudiXdSQKi%2FbHJNJT8MAUm6JAuPObMn1uICpCHyBcgNZPLm54skd0yDmj6%2Bn83gjJj57qlnX9743wX4%2F80IZt1tmV8Q%2BIP7SOfy%2BDiRAJDBC71FZ5%2BRAlctTT9veB%2BWjrAwfb2FqqU4aIV0OYQOj%2FC%2FckGwSFB1L4d0KvRPZtbEvcxb8hLfKT5kpOjRDUT0HPd36rQ23k5wbt9J8qKf4UbOliCF2cmfSXH%2FmySF2KQW0YW74qyshN2i7AU1eelo1Uf7Dzu%2BFf7gUBd9euTu46%2FqWRkuYOB5fYQdXetUCtN6E6tBagIzUNMh%2FR6hhcUOLFX6E2TGe7%2F96oXhPZGOw9yCzHJnt%2FaNmP3gpx70%2BWz6bQrvnYiLI3jp4PwZnBXenADiuZ7qvTBsOKwIPH7PrzbujrIsz%2B6XER4LX2mCSB4F0%2F1U%2Fv6vtAvEhWBTtPUiy2ZABlhdP4c%2BPRliKTY5V7ZWSHMsuZxVMTsLa6TrFxeVF9wjO3ZTjQA9l57D0iYhHsj0mCIFdLbkqMNXQqtIGOqUBx8qKCfsGeJJFtQN%2BwMPRfCH87ZB2p5qNrGp7%2FrbrlOG%2Bdlw0eJ1zE%2BdrRvg6r%2F%2BFCNwlZw8QNzDvtBooaLSFjln%2B43eGIrraF9nmQuQk9N2wMFcShwSj92PxwL170xTYRgs%2FSlBEZBudpfiAS13HUI1afkk3qEJdJk73LWAd1NKBX1EPvJtU1SMFKn6ObJwKgzkzihe0NcesTJG642nA61pZp%2BIn&X-Amz-Signature=80a51b79d49d25e8a30d6ebaa56a2b23f6fc5a69a46491ebaf2342194220e299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

