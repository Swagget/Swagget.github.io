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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTII7O2L%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T171541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHn%2B6LUpdVVATnJrHdHlFhjV%2BKXiL7JHlA%2FKZWDVZvUiAiByLdj%2BQOQqITy9w2ZCbFrU1Oy%2FbW%2FJwhZB20XNpWkDeyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJiirqfcT983YcR6IKtwDmDiyI1YZcKUGsjMk%2BevvKNITTgu5fkziVyPzvb2Ht0T5L5HigljzEHZeJqegUNFn0qyH8HHOP%2BCII18XzMOtO0A5vZA0A%2Bv%2BVf2SKPiGR6Bb9g4MnL73TAMeeEtAABpmRDtc%2FeMSfCjPOD%2FgwzAI%2FdUTIEHi%2BHMKFRzg29VI%2Fsnm4%2FRWTPBp%2BcAM0BZSq4ofe8y%2BolnknTP0kiMEpaImnEH0A20r%2FLfH6cfjDXjjufUy4D9J0ewkOYxgcbiTvlx4ul%2FkV17%2FxpClKm4Sxz%2FOVXGS1q0bPff%2FK5LR7mb484MXVMpQLf7qPW40tPzLLX9ILmBdHGr2SWqedrtpFaL6k1hTuKfBPwocw214vVxBtv6phmoA0W5VROUyW9L7RTU%2FWVbi%2FUHk9RjlAGKYv8C3vD9o%2FlqSYk3rN0hgfmwopE7hQevtjtYmna6%2BRr2tfOPU53mmf0tA2rjkNBYP6YyulDUluDaxO98K%2FLPdUOkv89Z5DI7kGvFSbimptttxZzeZ%2FGSqg8w%2FmAOeSiwtIVj0o8%2BfZnzHfz6zXIxVryAxkJl21uqtnTFuVf%2FTfSBQQlpfEWpFG0UMPXBuxMTk7TDKeWc6AofQRi90xv0aa%2BMWzIOS6VuQGKQ%2B8Pl%2Bj5EwzNjN0wY6pgFgWiwQSLgjcgV8Ls%2Bu7yoECuhjgQ9D2P4dtl4uhPbNkfjiP82KQ%2FchczTKGZLmxRc%2BTmYwZgatthqZ3HileSeg%2BSmiseEBVer9u4pHs1ePnJ%2FR116z%2BfRW0lD%2BReKxggPgD3NSJnoZxfG%2Fiqw8%2FaiJQV1%2FrR0%2BmS8TgQPb01yoAWHPs3gDjUaUJbk7jQJpsziiUTsl6ZQI49PU5fQkNPXQ3UGkuZJR&X-Amz-Signature=02708c574e7adaed199c36434debc2fcc450116431d264094e8bc6fc7ce8c570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

