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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BATSYX%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T192321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAji0%2BtfAVYi8gBtYA3Qne6CwwLepZDJBRiz%2BVzrc4kPAiBpNmyazpRx%2B7%2Ba4IFVaOVxfDW21pLD%2Bgcs%2BFAEMx8p%2Fir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMP69HJVVTcgMd9ZqRKtwD4GDBDw1y0aSdlPsPjCXydExGFmXNi7IXNuxWdXUIDz8M9536TsRX0ijyveAo6uudDJ8tU9K0wFMvEabSE00sA7i8AyxILg%2BAxvJ6bodYJC%2F2BrfR48ElRKg%2Fu1MOBKhrUGrHyTihmgU%2FzpGI0I5Xj3rywrmF6gil0S2hsV2%2BMNMVoOPFKSJUD8XYfxiGyJO3dOWZTe%2B7XULOmCAqahj%2Fr9kafT4RC%2B8g9VSqLc0CpmlS0F5MAXw968yay0Dh6KeAaeabmLfqLmr%2BW3%2B%2FXUZP3RfoAo8BuaWlwcBP22Zsp7Y8sq%2BWnl1MvSPXEfBppcRJ4lPye8G2oIIrmaQ6aA1Siw%2Fp3GeD9iP6EAhXHn%2Fe64wrB%2BmMdQlcRArGUAFOL2SSWE1v9CWGV9ky5wwNsGGyqps2zWSFUXD7Rkeb3TTjIOoKO0%2B7bpEbW%2FvjUFs9pdX2ng3yuzOBPd9jg58rgRGMIyrqyjmCbFfWIrRVrYyjd%2FmL7t3iaza7StLdr%2BZibpdpUcppe%2FfWsh23g8GpkpjztmM5lyQp7jJhT9DcNdIbMPR7d42tHyEd2H4WSAwVlKmkSNp3Kbhj3p1RUWA31fTSppM99BDmlKSJS8jv42QlgXD57fwQGZHF5iO3WAIw4%2FXv0QY6pgENW8%2B4QREAAoAq6dB2nKU4NOeZaoViYodn0q8b8K4ndMPpu2pw5D%2Bzu%2BMfAKLog41qK6wmvBz7Lr0ViYGjGeGM28cUMep6CI%2Fn8AWxNZ5L4%2FGSIUDfJ0pdL4UKPX9OZC8nNTXj8I1jbzTBj5IYcWQwgUsSf3ddudjISqfjBYMXRW6pww3frB4CTjhCJi5j44el%2BdRKkRAJiH1rfq0WDF82Kew7LbAv&X-Amz-Signature=2abdd4323d1f1b045791ae9e17afe484e78dd6bbbe4b0eb3031718a1430e9a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

