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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6TRXV5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T220026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZrBVgUDvH%2B8iUJjLtVzt5GZFOelflS%2BM%2B%2Bflqfll1ZAiAveMcLzhrMHOwbUh5laEgbjJbaIh7KKZyvNIgFXS4RBiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg%2ByiFUZ3Osg%2B1NP5KtwD0p8kBxo6aJSEvmOKW9ak%2FnHeH9Yz2PFzVtj6eC9CxqV3YRbLknK3uBSIjpyB5gxTXqmB5l%2Fw7J%2FhYzxqUIWUXlaHBr%2BAHPG%2BFqtSQk3JVgUn80%2BBlpkD6kyqR038VXXTdwPXtakKwQ0ttcirCQMHmBuvvx16suAkbF75QbcmmgtUS%2FTUTMH1SjFBCIVwerPs2%2BL7F6biHAm0bCDhkTaCYwleUwXLF5e9Dn97jYChud8JFe0mvJM%2BgiWUqAwiw%2Bi9guLvQgVHP5J%2Fs3Ryeic3yK%2BOKjoYR%2Fm%2BhwN2uZOyT3cTMjLv%2Bu0l96nutVCs%2Bri4UA7s6UlP7Sc4WAsgZcORiRkcNeQ5jg7w5VQbgRvhVHcnmy7zGQO5jxX8vkKw%2F2GF9tAHNozipa5suuvRmFNa%2FPNZTM2nva2TpAxcK2D6CpcrFzcXT3Aqpv5pSWejZPjzTO0J%2FKooTH9l5WBmpUNJihogs1zQAQ85Npe%2B2lfUoy6597Nb2FpBwe1GebP005XzHsgN%2FKtgM47fXKjV4sZLV33IlCp%2BKbXdVrHjGqxsSOF%2FsllgEfXUOAUw4NiPHuvEw4rbAFZMncZsIcK%2BOjWOE24vaIdBPPCa4AaK1P6SCalCceoASsf1ej4gYQkw5q2X0QY6pgGpt87Z6N95KA8kblSOW02pjY%2B%2FZz6bbyZxex7tsBzvWZAHN8FHJsDETE44xteKGelPE%2B%2FRMF5WUVqX8k0%2B423w4MWf4BkyVMNj%2FTo8eo43mUC1b5Zj0cE6yKKLjwjyaDCnPO0IRqnsTzMmJXbsNyMvsqN0%2BU%2B%2B%2Fm%2FTC8hAgdrAka%2FAmiBJo4FWTnscStuwfvl92rtLPPJJd%2B%2BZi1yRUov2rNHH6pGt&X-Amz-Signature=2b230e13c84897e740eef150a414799e8e9d453bb6649eb4fd2ab8c82f399b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

