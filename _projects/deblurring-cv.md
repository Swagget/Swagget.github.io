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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCF2EHF%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQj98pyTVDfjGYJhjSVJAjGoz%2F1OeybNQKhlXDWhXCAiAI2RRMvi%2FlNfzVBSx3c2LbGd0lVdK2o43vuJAkrPD%2BNyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcKfGnOKTRma8n4%2FfKtwDa9hvtmcmrk3jTD3b%2BGseD3Ht6QDt3il%2BGM%2B%2BJ1Y%2FA3E4ZggdUuizlfHOwhYzCB1HjtjOy0AqeKKeGUjEpDyJkwAtAXyUJVGwJUd7b0zXm0khmROQwYRiWQsgOxBq50SgE44YNgyz2H0sDxHnbdEpXjKmwT68LVrO%2Bpv4qluccmJvpRfkK0X5kvrPal0XU1Fm531tK5fZhhsRJjM0bKpPasrsfvFinixHC1sRwWZmXpPlFoC%2FEwKPfaFEjBnANcCM2IC%2FLjLnj5Xt3xlaMNMQmDRMMCxnJQ9LaegwsiCe%2BeC2lhfLTrQD2aardXapYzUOZp6U3aKyxeSJsMhdB%2BCcRvQvReehXEPmt%2Fa9yTkXALWM1BHTsDQmd9qoAcZnLTDN6TpxnesKg%2F9TcIcK%2F1vHq%2FbDQDbIs257IdH0K1nkXuekEqRkSMXF1vAkJpvCMc%2Ft1QZGKoxApoPVFlD6unJDmvNG9nHE%2FaGJ71b5kIEBvNdKPmOdT7RtAOJ5Y3hQMSi0IavbpYQel%2F1nWxTsQ%2FojX1aOK4HJKP48ZR1ZFMbutGVunLXQ6aWeI%2BdkK9DKElJ6%2FRbwj%2Fd3Jimf%2BcduroQxWLSFjJERRb5MJ7LtJgsnITqPAP1BWZGWOhCa74UwwK7k0wY6pgEfR%2FTMku0O7wuhcrIrn7K4h9crnoLwF%2FjOmRLmRDaBWdw8YhB2UwwrFNsKssV%2FSeHTIqeZEOFnHe6g%2BMgTtTzHWOHVBAB01Q4fDjzncr9dOuvLdn0QZ3%2BVtgBPUg8fPJCqFRpzkfu6AXRWve%2Fx3uOicRgBDpUtjTeywldmEdj39nD9TZ0vT7PJvcAt6Q3r6GHXJ%2FDpooXL2hgG2VEZlpclEkmTfnDu&X-Amz-Signature=346996028d68feb479580b88df55d193aaadd5dfd4940dce5417f0a0def1035f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

