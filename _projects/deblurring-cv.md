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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFDQMCX%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDMIVMvNlEraRnIUwlBaQxKllqu6Uh8BdCaU%2B4DRJA1oAIhALgoQhHfV63CzC13v%2FZoq0vATYQZ4b17YdgvL%2FaXnRlAKv8DCBEQABoMNjM3NDIzMTgzODA1IgzblPP%2Bt3OI0V2iPvkq3AOkuPrLRTeclH9gQsj7nLkMZTIdfX9wtuXpKPG%2Bx%2FHwhXRFPeaYzDEps8Hli%2BUwRwS%2BBuH2mIJDYQQ7nBy3zudqQ%2BIxcg7uetJN8qa%2BngBh%2FrDlya1Hvb6jC8w3VFFPhU9DBDWBK1i6RgWP6xUADIdAtt94c6Jup2iXbCsBYy6jsE8Nxm%2BMvlO7Z2O2JlJ0x6uQJOZFzaDwFTOFI%2FMDKh7op%2Bp5pcBcHwy1tkfOWc2oIZ%2FEU4KFcuBEV7LwwDe6XSAPIXbJfIxv1AkMyrEqDvMmOaf9c0JHwzY1AnbqRU7xDAHZzO3fAYVXMrNR251sKLHq8WLPBUBd573jDuTTmVtFzU9UQ3xrAtFdIsTZ7rJSunLV%2BxLwzsgSnuTZlPE6fNGAvUvnu707PO0sepKrfv39%2Bd5l9bcR1Q%2FOJ6n2rDcnkW8epX%2F5C6J09SV9La%2BGx1w48jbZ%2FGY5trTsuM8jCoqpqIWdbb9p0UZBzFjA7Wz%2B7XY75KV9BQUSlqUqpshZrp3qtCxBTUuH4fRUxgpS%2BM6myMqiQ54cjGvFnUM%2BaTYhjilT29OsE8dFFMVG5dxxKoaSLW%2BPfJW2%2BoVg4r72U%2B3Nb%2Bj8k5%2Bo8wtuLYVQ4i98hb4504gyoeBweXleUjCXuIDUBjqkAddzlNN0NKUgb%2BcEAYFU1LoWpTWn6nmFqldeeOgPjk%2FC%2FBzkE9rXEpcUmwXMVIe4pZ9w%2BqXtnyIxuHgHrLQ9Ytp2whgls16zkpJKtk%2Fr0LdJI%2BWA%2F%2ByHOxp%2FfpUrrky0IfSveOBLBIodHkidi4JuHpQOhyn%2BhOu4VHaMctYaoZ22pdZHvEVU3lUinuBlei4nMymXcVuqqsgbRWKyPPEG2AOFMHxv&X-Amz-Signature=96d35aaf74939008f892a2e6a5b9b7403d22961a079004a92e6bc40dc400b71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

