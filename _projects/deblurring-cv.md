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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISYP4BN%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T124701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDmRIZIsS60nDiWLlexAEzCejH775mTgElK5INNKGlQuQIhAIZGta6ATmLbku0cJU%2FXyeBEI8JoMZaHHEYB2zppvM%2FqKv8DCBUQABoMNjM3NDIzMTgzODA1IgxEvH46GlGzDtQnEioq3AOGdVV45O55F5oa1l3vzoYO%2FsMLK0GRYmAbb38kJMO5x4qw%2FT%2FHuJyX9edIhnwqihsF8cIpXnzyHotXSWM3j0HjLYuuezJD1vQqETFU4%2BxhIWkWSd%2B6aKBkDiql%2Fmv1bEZz6SMqO4xOubjYdWQXJ6GOdDtq2bvxsH3q9KYoa30clkw5V2cYTk7pJQuT5qEYsEqzmwnkVaMNC86eUoE6g2qTLB3masqki7f2Gs3K6%2BEVmPQfhTAI%2Ba3gXVntIRm8PDWEV55FY1NwMZtO5jgm7WFK8tYbP0YCQEssd1ZTs9ZhbnfWvR1743h51ahWVyq23eDxHD7JoGbzS5bEppf%2FdTBOGGU7oGQaW7xfTMgE4U8oxtSpCTDLH988qKUTtmC7Hl5FWcp2hUsQNJiYjwHF%2BipEP4%2FJUp%2F9GzMTgphJUL18yi1319s7Ry7ZJ8nqnJIwIc6VeIJeZ8yFTw2504dBqwIK9oBP3T5nmK2qBoS1ef0j3dtxAd%2B%2F9sjBz77%2FC6NUs5h8bFDuw%2BdeEkwQCHuHcFOv4qA44fRr8zWwVlx8sXfBoRNPruBLunayNXh%2B5U8oYyQ8kYMt5jI0fO8sZ4iWC1lpaO7%2FI7vUTcnL%2FyFJzsX7wDVzAfPlPVcqDiprRzCi4q%2FRBjqkAXKtAD6gahrc1bgIbPKo9NeNPngvSxVBEYlrSFQZerhnaPzGl%2BM8BnMQLce2xxHi5qTcHK9PpP2vDzCO0lwp9yi%2Fk4SWFXCtFzqL%2BB8gJO%2Ftn8szeUFEQOwkiPThJ7vV59R7clpRRkKR9Hxkohd72ramAqwYsQQu4gEKKMWb%2BHMtvZU5J5nPGKcuJq1Z0rpoSfl2UWVlTm%2BzJVRYwxJ2fDQ9l3oH&X-Amz-Signature=ec68075cca745da9c97edfdf6382d13c06bfe2d54b6a712bca0166a3e97b4549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

