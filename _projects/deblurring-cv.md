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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADE64AD%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T222951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICFwgvvtbuN7L3kt0VjlgUDiwdLkFLa37UGx4W%2BZA56KAiAOyxPu2Qjovh44cHIX8SxdJ5GTEbgtC8etcRhuNqTS%2Fir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMNyqd8rHcxu0ZTrTYKtwDA0QIhp8fR286h4anx9UfRuGjLOSIh5LJdY5R3YDoTYjou1a%2FE6g9IFx0xDaq6cC44oAYWlGb254ZqyRVrr8iWccmlIf%2BiAdFm6rqINuUXcAbZN54HKTnainpV7bAqs%2BMMh%2F%2FII60y%2FZCBfprFcLe5swXUCGGxid%2B9B0hLSlxOYoMcL29dDvFbhhZ%2FY8GHW35GaCnnryW7mB%2FMzORdV7soRR%2FZ8Wm3kbteuzbUIJcFZZSuFwFKavLXW6AeYzvimnLGRVxxBFWBbGh462mDfrevurS%2FOR3rThpCWKrjwOKGXI%2FZkExgGrLZIihrNghbKDz3GMVla0Igs3PZ8pf2u6DnJW%2BtpF4HUqvLMtYWlpnuqQFH83aZBOXrU0CT9PFGKMZ9rQcee4ptas7a4lnCk2B7kNt6z%2FKh7wGnA%2BH8CDgmAB%2BM3f5zXOVL9DKvsVzR%2BmW7I2FuP%2BE%2FyxQWMF%2BSl1tvcikHN2%2FIamyWb2wJqeC%2FlSd9WtiKoAEXTBxUSdbRqsrGEx%2F%2FYbTU8BfaGSma5Mqi9Fy9A6%2BbbU%2BDEOA3%2BkBL1igea%2B4WArl8PQvGEJI6UHJ5SkEOeQ6%2BXccc14EZpKRi%2FaB8Xf%2FjZI8r0xxmbZ7aRRCxQ9BQ9qcaHrdorMwr6L31AY6pgFJg9VOwmVXqFNhMFPmTomc5Ofolco%2BqeaqM3fxhRsFKYHt340%2FQ51YZ72RkIpx4%2FgbilTADL6hn6qpnM%2FZvc%2BDyOQubf50Z2jPfPZFZtvfaWGT5poftVFWyKOxIHNVTiga5gYW1EG7lWZknMxbxAtkb5vpya%2Ffz0tNaDYdsb9qXJj4scydwYgchk62JbDpjHEi0ss5p4r3zpLTYQLsnUjpH56YxDZJ&X-Amz-Signature=119bb899a8809469a33e27c62aec788e692c1f837fe5081efebd95cb0365ea79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

