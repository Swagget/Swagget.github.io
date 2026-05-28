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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWEIV7Z%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T222436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60g4SG33UpBvtnfLqVlHVwG40u8RaE94fYyGK8spxgQIhAK3%2BgEXvaTmhbpveCR7U62ehRT0SpSONCuQ4C2hVpK00KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk5ey6x4vscoLkavsq3AMeCS56OAx0ktXIcLBzZQVeiugbfTx%2FS%2FaW4bXvsFaNn%2B93UKC2vxsqOUK2hVO%2FECK6ISSg9rgfv2P2JgbySvom9pVIKG6b7UsuGO8qlHh3BK1g4vYyBiodPBv7ggFN4X0%2FtqH3iesl6xwjl0fBk4%2B3Y900JYDIh6Qic7kv%2Fn6LgH0HDzOjNithqBlRCZ1YKjkgjhK9Iv1D5nXjStaIFqQDzbVxT77mpJt6IJsBFDEApsxZ7TE%2FKL6NwQuNFQ7fqesbRJ3jE9XFu%2Fr%2FjG3C7SsZTjJ700kKKysg%2BFzAsAJCeelhGoUP93HXfe9z1%2FZEZkR7V%2F7%2F9RsSjJFXyLoeV6XAtyVku87vvqnYksiG%2FDEFjuAl0nomndkN4l0mdau0%2BO4r2iRDX3pdvDRg9n4VUXT2FuA%2BTvhj0E8qTu0Jms2Xr9u2GdqqgR8qzs7MFTodRWvCBPsSMM007KYGB95TvU4VNwtuCCJ7R5oG%2BK4WSusVL5q2wIkP1THr8jz4v9M%2BqneNindRuqg8ldaXtxW3ffBgCst4QdLdg7mnVskspVTQHQRHDdXICe2TuYR1OoMUZUywKFNFVyO7dVO3eYgVsOyDU2OXOymgaTlWP%2Bv6wP8g6mcrO4ipcdPJ4an9LTC8seLQBjqkAdclcRtrMtNtVb5ic7HhKmfib7%2FMV%2BBw%2Fy9fL7nlf5vKvICFYK7UHHkTX6VWoJaJ72tHanT5bZeMKhqbnjUr148as%2Fbi3c6pz6RZ5AviEtBFfbHgrMDVOj0Bm81lE38V59JGugTN3K8dLqw%2FXGggEZsk5F2bQ%2F8vEoMjDR4yLg%2F%2F7v04gC9kWIT4YuCMyYDccTz8GLqBMUFZxiIwDyjD60BaM1W1&X-Amz-Signature=5c18e0c4431fe5443b098fa2bc666f445fda780966aef1253ded58d87601bc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

