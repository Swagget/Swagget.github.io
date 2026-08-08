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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRLTPNV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T181905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOWc7K%2FvY1x56NkJtVscKMNBxr%2BI0xXm%2BlDec5pQvefAiBAZ2%2By%2Bu1idqYmMedMPNOht8i2Mxne%2F8fXk6eeI7HTFyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmV4bll53BovMs4k5KtwDM%2FdW8fX%2BfB%2BU0mwiYTeo2TiMAb8Pnj1B3MLqQESL4a5JRkOrbbVOgrQLdZcv%2FdEE0piX%2FmDYkmK88FlXcviuNoIWn4AraH2skAV%2Bws7TSMCZ2U8nuMTHtW5vXEyifRj4KjdT%2FZSxDCKlFT4VkQMhX6UbomhDGbqmHmS5isJ6Egn97fVkdw5FHJI4uTb1Hi99woBvQbtFS3SHFqSMnWFClLj2wNfFLDY4CnwK58E3YaKuMcEGWN4UtbudjPwcebeD01uG9TCY6Imz6w8rcm56pM%2F%2FUabj3%2FyrVgQsajrYAe%2F8myRFfU7MZICG8%2BJMRR9duq5MoArO8Q37DLCEw6V4Z2LrBBV1a7w9y4Ye6FAtXQRaBRtrOTVMHISKXtRd0%2BewwHdZGuknyRw07gIsf4tZgIsyNCx3nIReaRAIKf3fqikhmq6LbI3x%2BsaQ863zriNv5s3ygBICrO2v4DWGcYqbwkhIpR%2BZH25SzoDnGOVc2ZomphiftRYHejyn5DQDDItB%2FsKxglI1OzlcdjWFNOHS%2FmZD4Rcxbx%2BvbXB%2BA3dK3JPhksOHowmpRpA5LaFXHeAB4n50ESqwIC4prVnHePsR%2BfauuCufS2rJHG5yNcGb0JC7B7ppuvVvlhldXYgwn9Pd0wY6pgG1CeKjEOJRCtQb%2Fe0BHnBU%2F78ijlRY%2FHfeeEfkgw8erOvr74BWpjG4%2B%2FU9FRQHH1L6RozKbRLvYnOQHtm81EE0dWPaidDJ5TmHnNUwik2mzMj9fjCJ6fNnw52gOejMuwXYSgUCbOVaM%2FUJnObp6%2Fe4bdntm183e404Cu0XHPXi02h9BgMjWqA4hL%2FJ1YZ%2BFU8UE8IJmgm3uJCrE1PUW5rxufpN4DRR&X-Amz-Signature=6bea07c474746d12d096424de5ea6fba0f9f112d86e5b9fe97c46b7a36699242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

