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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WM6G5V7%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T204808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCYXcmBR3S6rKQ1KkPvpaKquwVtLZY%2FOMUxyMrDL66t4gIgUrNsPDwa8fEmWxG15hKrlhtWF81SC%2B7BBNehc0VLQnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFkl%2FxQuzY4aH6MgfCrcA8xxlHeYu9gru6vkrrfAskkbRSmejZR0sVep%2Bt9ypM5zF68cFiFZeBG3aJgHc4dPeDLNTq5TpGmf9wf0ijBnB5em7AO3r4uVIduzV7bfaXJ5XY9pZ4ludZHpMH3SHnOvvvZEvg0moJXS9VN4xCafkoPxCc0eEwf6EUoshUZGySp5raOlAS04wNcjUh5Z1pvT%2BWBJD%2F8DJ9tl7y8ep%2BQ2SS%2Fyh2pSTIRiBlzVPP%2F5UIYqujCVTdeIWsPX0f21zXsWalif%2BnNccH3PCcFGC4Jt88EKa%2FJ9YfM3qohKGxdzkSL1QvPHE6TPd4Lk2uPvwzm1VsuOR1rWfsIJIsuCGp6QXQV3RMVagDf1M17hDTRsnhpKOIx1%2BpEwOZKoIWqFwWWLiDDAUDR0b%2FUmFJ53dxADY%2FlC6gKzqpLCvNgjFkr33IYnbflrpGgs4afoKacvuXt%2BA4relnPd4p5zUX789%2FRlvm1QN0ENJIoDe6hZSsMXeiVieQh0r7ymkw35D%2FK%2BIF2a6oNnMach0pVwahwIcsmMEQBRT%2BYBh3Ig85WLD0tL1NeZvjbTyTMUZ5yCeApftydX48PVtHVevIsib0oqwbQd7BdP2s8w4yuVx5rh7gBXvZ7ZEEIBTavVcSyHcd2cMKPj%2FNAGOqUB%2BdfAoJa0sf45ryn1vRjTPewwXV7j8f71iZbcvGqzxoGqZxKySm6ibF9jgU3FgusAHIjOyYx%2BipnXnNhgrJNJ46o%2B6m4J7LZmr3mKDo47RTcUQYn3t7zVcL60k141%2F%2BE3SIj2OzrjSrvK5OuLxBAsSpw5Zilake%2FVgPI84ikfQBt%2BKoUEnk%2FWwVhdgi2utJPjV5pDxXnTdSz8dWJ42p6nNP8n%2BnaR&X-Amz-Signature=cec39034322f0c5398f178d3ff3481776b14afc440fe145ee6ce4fe227b8de1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

