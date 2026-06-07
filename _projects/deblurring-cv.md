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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSOSAQOE%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuLjhHCiBOY2Kx%2BMd4xMYczIPESlNbwqgjkYYX810FFAiEA3aHVMzHhVbAkve4%2FlAUfuuDun11c9xXgUTxP8%2B1FInMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhdp7OChhNf7RX7NSrcA%2BcKxWoBsrWE%2Bs3y2mFMZD7YE4G4hOsDy1ZApUKYD%2FIvW53540tByS27y7ZgiivlwsmDpUjqu2S1r2FszrjHCTE%2Fqt28ar3Sealh2PbCf0OlMRGt3LSaFOM5nsmXvSveDqpuyjvRzHzjj7oeaSao49IZcVl4pVgb5fcK8GM%2F0UeApMpSYzuyLgwFd6tIPksR%2F2TfbMkCuhHzboRsgt6QU29LljSKotDjGWsMNwWuHYu%2FOml41z450zHBMzKi1Lve%2FxdVuLmpJ0yS9uEkU5E5j2JJEGIc3f4V59icUoOinG4%2FrQVcRtZp%2B3hTGgrVwp2ABiosxo%2FztgDDXwi%2FsWvrDXlgxzjGadJVjlplheU0bVPerUCU52%2BDXGPiixiMJoJwanR1PbB2bmQvvbOHkCQ%2BvGb2%2B8UMClQu%2Bc%2BoaRdkCdyCT23Rm%2Bcc%2Fyl%2FIv5yrjYWh8ZSVR87ZxiBLcEKzFn%2FJFHhrllCtCFvQbdmAWGKt%2FCBPTJ%2B3hrRbiW59zzMx6L%2FZZ%2FUCqci4SksAIBohuA4M9BSQyyiVSczW902DRXA3QQHKCZdzuoyFyuofd0yJnKLS6O1kqZS2I53W4mecqQrLtvuDa%2BDzKqAmYg9pQlSGConWJISAkPSSCK5xhNoMNbEltEGOqUB%2FoAgzkc4D5tEhyy%2BC3uhqvfAqdoJLdYFqZVcUlh%2FlMivJLwXGY%2BOx5uFi8xkczGoNIiJy1htBoPiw6J2rAwuRpicBygzcm4VueEOAWFZVSBTXBgNvs%2BDZRzNZ5FilzfPCRGoBDaU3wbrGUGNptl61eJx1Ze7emcq%2Fs4B3uk1QH3ZQRhsv06cfrmUL46HLyIJSWz1dzGnD%2B5q5%2BFh7OmP%2Bi6R3JYJ&X-Amz-Signature=fdea5c5e75925862249a0b1f01b4271bc01cf582910607f8e3c3781222242bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

