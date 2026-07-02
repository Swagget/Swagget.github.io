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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7EGYA6A%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T235513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIC6FIbROSoo8ppBbeeN0a20hMMnnq3DCnwEgIy7iynsHAiEAmmqXSdzDwyyA6LZS%2BwCCeAv5P6x2dP3f1miZij7zsSAq%2FwMIABAAGgw2Mzc0MjMxODM4MDUiDJkGgJOgFPlhOLExXSrcA%2FLsCgTH%2Fnn1OTYAshbbs3Ujx1pZCSKCRokmqd5oseeOkqp9jHKvjGndd8EW9sQBYWvMvjLdMEH%2FbGq5P3RgmpTnYWJ9zuGQm6eQ7hsrhnNIdO9XffcoLV7u%2F8YSdsmuRKcOMbogDyQlm5bkBw3sbctwhm1z2MHAluxRfdVAKIpx8hB0ZURpmYLgnBeT%2BfZ5fTYp5nDpQ2sUixOCsDM6TVPo3G5sBuiNWI%2BeT9B7DkuxIE3ILikmhjDI3i45Ur4nC2akuFNgm0Ttzmbn7pCMfnkO9XYneNFCrPlZ0R8TVpkIIrbN21zjjESAtk5y3suH5xUxs9VxcWKNaIDM4yZBCqAOOWnw3CQCgnLi2v0%2BzxHwNDtGLOFMCBFFOEfwEbsdRvDyZ3xKUIEA3pcaRwK14gGJvlWwLedZ%2BRQVZo0feeoHtsHu5aiv9L8R8gPkjubCV9AKtVloaapxlZ3QubURZoNh75Xq9VsetqkhYNrva9QyCis4HENBqs0a0E5seuqYtFDRYJRokeaKJ2O%2BZdc23mB6uNrriQiyDb7k9CP4y8xFP%2BjF6oGo4N6M8dGe96SCp4lgsSySYOm0wFkYTP0yrnR%2BTFlOkilVX6gnbLfCGJkHUQfFTuMbVSaFQc5rMKHUm9IGOqUByjba7EhIpmvUbbwW%2FrgUsdQV77fa9ofIdsEBK21zvJ1x6g7%2FaZ9N86lJ2X9Qu7v8fkVcq%2F8JzbZ%2FbnL2jO0R4NP0hDksbHNOHuAGZshZM9BZTUPy48qNfXsmaF2aR1Bfgi7QuF4JZ787%2FpjLnEZe3JI12Mc6JV3gRj1ApoBs3pAGXJ3cY4qhyBF%2FQuiCGTckIugPRE%2FOsRYZVgQeQdSa%2FuS3isCx&X-Amz-Signature=2d8725c1003cda3066b999e140f7b28dfb49feb0ca16589624915b41b461c20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

