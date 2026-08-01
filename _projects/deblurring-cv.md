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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FJYNUC%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T012652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhlHieSlR6Xv8dLFFK%2Fkf3Vlq3BOk3eNqQ%2FmuSFJgsZAiEAkJd67csQLTWsl%2Bn8Su9QyqXEOcUQ2DDs3jaAUO9%2BRrUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBy0vhv38v8mQ%2FeryrcA3JotkeWC3P7Iwl6JrgpVn84cmjntHW%2FhEE83y3%2Bc7uanjhqoHtjgz18mYSKS5EpnBX16GEpPxufOpnkoBVy8rhrHVjaphU4hZT73x6WOhXe9nRPQVGa3jaQspxT6qWdlu5O5Ck7e1xe6gaBBi%2F%2BtuMH3Ukk0ZditQ1eQjZu4gxtvboC%2BStcLLuXs74rsauRPpcR%2BblMMVfy7ehfdEt80C2RX%2B5FvRd3hX2EGh0y1m5oDUE7V0TVCPKPJE1O8uUKQ8sDDdGZjiLirhP34WR7Nmq4FYvsE8eDyVyOHPZyLa9tgpghJq2KZivlEw6Lkrogo9FSgOzdgYK8Svyi%2FpVeB5oDvEVJNrmrcg4UiHcNhwftj4BpH%2FMzeRty8F4OrHxsOMly9k7mqLtzxyAKtWULmjJrFpqQ5jeT83cZy99A6crQZCiyM9kP%2BcueTlj08BPBp93adGverT0sy5LZKrp3j0C9rQJ7V5ApGb3Eq5XO4QLOlyY3XAdWZhrEua9FytgxHm7S0Yhz7Sx%2BRcyMAzYSbXKm1BDaBnciWPWyaQPcoboomEebyQ9D9NIqQoQMOftTWF41lmB9X1E8sdeTFi2%2B9uAi66zSm3V4%2F5%2Bf57XhgSCaH%2BcCQP1Jtysj0zvtMMCNtdMGOqUBRok4ntyFGN2cUQtuMI1fpWypXrXocFW6lfQqDuiUl0GoKoueDVEd%2BLrfFe5nGXC097umJlpFOoC0Wg6N1apiEb3jo0N4VUFmEHxsCEcc%2Fm6NTs4dpxzsPxB1fTQtY2onNyGggP87WDK2kj073pz5gJqfhPKLjsPjyd3bZ7mdevQxfKRROvA2DaqOMIRZkadDjZ6mJBN4JS%2F%2FJqRGNUj7hZ1p2a1T&X-Amz-Signature=fd491ae6ca4a5882b34c261b86aeea2658c8d0d8e51a8b1ae56d44f429fa5919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

