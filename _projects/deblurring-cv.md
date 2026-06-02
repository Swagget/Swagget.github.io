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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSCV3AU%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T000343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDzPhiY%2BkhVROdZC3%2BwDyv4QUjKDcOeaQ1G2hWesL50lwIhAI9hkSygGTP0CUybTKCbiAtQ%2FyCPAX%2BXOLoB48RWfqqVKv8DCBYQABoMNjM3NDIzMTgzODA1IgwmouCipZ2fPgrmmigq3APhPcC6ZHaRcq22wMbxpbo8XAlFQB7HQQyJ%2BM7Wq%2BfsuuppP9efHagbDFKklULyQMqR36R0uqeeaS6j33MTTQysqGtnHs8D8ZPIrSZpUy443b3rUm3RvfAS4G0S4zhKvxHSKyQJuLWPjKtAO6n4FVJOp58xT6o9JC%2FvKE1i5bh5cWgCBGP7iOyX58wepnr2wxw3MUeq8ykuyGk5Zt95mkLv3yXdmZMlcDXitNreowPVUSLa1PcfQaxv%2B45EyJNsLBlSVopxCov%2FbrIr1PL%2FfD%2B5By3vUC8IX39%2FyC4UmTpB1vG2QoG8FuyDbkz%2F68FpbZxfa7wCox461yXSUD5KrSpKrorqnLbYA0iSYCDxUcpIQ6KAdJY5NoS3yBrkIbPePj7mZr08gP%2BBi8jjlypFlHGQ690xrlA4%2BkQPRfWJhgCBUNUFEdBZZ%2BfB1b4NY98zdr9wr%2Fw7uG0qloAa33oPGNuOO14ORJkKlh4D2UYdzgkYouOQPsiLPe2612nBerjOqlLTTjfcXPefdwptKj8RI8wYKpLB4Rm92Xfo6sPp7XgVLIsIqzxKaXAgjOELGGwxkZbYODAgDMwdszwd5QqZIH3EQ4OBZoOawhI9hb3ClQW5Aji7UI4Pz%2BcZfV2r%2FjCi6vfQBjqkAV%2BqsmJm2Ps6RDjsQERrEogCceZcR0N5waDY9QoHghxi4v0B0z%2Feron6gCrR6Z1CRDwzCf53urP73YBoz024S%2BZQ0v5nz6sueyWMvGxmP1YC0xNgMTOWZbe1U6ORG3YEmWzo0MEGdvrPp9nT584g9lvx%2FEdCPqKUvCckvVyj16uheDpWcXOfQLcVHIwPBgtLjGyP2kl1xRCmYrKRswYfRiZxfMMe&X-Amz-Signature=21b970e14fb8b08858376b5fdbda609456d42a1d70b049c676f7c5d6dcd22301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

