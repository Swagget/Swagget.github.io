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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZP6V2C%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T111351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCscsQ50v%2BwgcJUN0dkXYe0ygGVKcekHZjV59sG2ad7gwIgUc%2B6DvT7ByxomtDIGhk3oh4yry4Oq9TPEWhcA7h%2FYdUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDM9FcI%2BK3nJtVY2yySrcA4rmP4%2FV4bnY1sQuTqAeRmJw1loAdSryidNAEbxUrWHYhV1CthLiFq4yvFcPwqZXcUMZ%2FzaLskMffg4yJ8RH693fGdEDNW1VKunbswQ%2Bjgot5sx8IyILhVA4DLerGqxLIku70OWIRBDz6l0JKAL5A00xE8141zgMYLY7TtpjMVPuqHHccIF3deDwN1tuF6lZr61tkEy7d%2B6pYOMUlOqHJyoyipPnl%2BEAiANdiEtIoQz866yVLbmBQjH0UpBeT45x6RpGpR3Kfmy0sQ9O7HQrlSCvhoYWTJMjQlmRgyWdQzhMwrp5a2QRTs2uuEW%2FB4jNVa3SICMQmhQA%2B4EqZmF0FTrvU7D2w3XNkDgzf4VS%2FaYZETfb8cK2%2FXjH%2BtxVlWdNJr28o9X3D3HgPFBHkazuV8Xih3NmZtk2WeyB3gJBCM2wL7wE%2F1%2FepleqQtkn7G8%2Bbmqkw7aAdUGCqn2mDgt8CmG%2F2ZaAHHtmzwQVfzLJTbSDJyBR%2FnesVQqxXMyUS%2BN7RKd4LA9nHTjZ3aCT0EmdAimr3lNlXpCosLhEfvBB%2FNyX8J7mx0kZ33lN4K7iQkJyiZDEHacOWfF9ifgL6XQJqmgxiH8PgJWvi2y6V8BX5ejh3LuT%2B28eGf6%2F%2BEq8MMW%2Bi9QGOqUBodGER18B6FQlYUKXBF%2FWwTU%2FSjSK1Vq%2BTCiGaS1x5LXuJ7d1QxAnEqbpE0Rsc6T5z76MoP5QrdfJN9D5GRaiab3UIuPsFn3UTY6NWqQ4lGuYaoaBLrThz3RLrrG%2FFb2ZDTfiu8JKtY6pfE1uWwbdmGEDyRR8y7WgS0DmLKofppsqK07Yybnd0R%2BMonvAWeEg3Bs4%2BmSXM65U4ES%2FmBiATr4KerWB&X-Amz-Signature=3858c2976a0e9b04f4fa3cdb47d314627fc08ec17fca7effe1225d90408e1f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

