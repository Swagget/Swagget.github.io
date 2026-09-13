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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHWUTL6%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T164155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICsSAnYtIgUB308O4Xae5ConNuZ5uQz4dk5WhKn%2B4qeMAiB3kR8S1t7JefeIrq8K9C%2FDLZAANJxviB92YHIbc15FbSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLSZD6hgArhTp5UAKtwD3F%2B7%2F%2FmnQLzPWb06E2%2F8Xb7FOjxqoPKGtqQhEoo1MeVOV5HANMLM1Pcqftp4ifFEBcogPiNyRtKr1BKH0FvpxkVyi3RXL5Kc4FylMl9m56a8wyPciHUPOG0i%2FeqeCgCYZNG68FszPbo6TkaqEU1FFgXEWm6P1zzBRnb1BtBMHdc5nNDkfY%2F1kwOz8paVEPqimdfPY2ioSq%2BfrKDQ1siOsJVwNpvbkSBLVGzwHUppXLnKGsAXY2W%2B7q2pY1maHIrYtiB%2Bw3QU5KufGmXs0qAL%2FgXahGuHjJZhSVzOkc68Q8jYOUN%2BDfKS1HOYKuhEAZCN0V076j33Uo7xD0QvhIPTHR7IogMlbyunx9xwCvNkAdwGyB%2BdQCObt2kt9Zo84XWGzsIfiNkIpBLl6hVcyA4KqhvE0hRH2mLiy86wLw6hyMCRYhdpuNLiI4Wo%2FZOlvPMpztqggsVNwgLdoX6gF00skhyrv6MG0WQWkEcGsmf8Fh996QNP%2FsfZ5g9iOcpUbjgmGkJVwx%2Frpp14STztAfFFpuG8qwT%2F0bgHZfrCQxSutQzx5C7q8wwrvFKrcJHC9P09cPHkfr3h%2FHKWh1lKAFnicenQwksGn4nIAU0hPYomK%2FIFXhgLfjyCfNDCHZow3eaa1QY6pgFbUjmNfj8p7O1Otd5sssq8H7Bi5t%2BShyij3Rf9Q5ZADVLiz9Wt4pUsordzuJjLD7fmsY%2B249SwtaPUvIaI8NJzhv5GzvYHz5%2BGsckSSlz5Ynwbf38X8So4qUQDmr%2F7GRVLNtor%2F5MimB6DPDNc3cg1yD41u1dDCZyRlkCG7oHfTcJ5EYOEtUo3ojX1PdsPgsPtQXhq%2BNOSpSwVxzqlJbIKcw9W6UFf&X-Amz-Signature=cc88fae2c7e041d85e5dbb5cdc2ac6a20b9cf6a6074c5e9ee5a78e1cc311115d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

