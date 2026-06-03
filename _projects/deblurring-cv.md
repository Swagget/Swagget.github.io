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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4TBVJB%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T055334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAFz7Z2PVM%2BQdh9KInU8uB3v%2F8tIOoHt8pQ0IM0nErEQAiABgS9eLDRbfv6xGPt8BAO0bjE%2F8W4BW8sdMtoKnZoOsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMlKoNRJJvD1H0ITADKtwDbMabdjn9IJAoMxKf3%2FYwdgG4J%2B8GlYeLzDGl%2FjucrtYVRnQPB%2B88uTN0sQvMmw%2FAInglnBbC1pDhYG2IR5DTRo7AgInXEymWABI5vXY%2BFk%2BBTJmP47XLyNLT6k7St7JYx1iYYVJ7L2gWmTS4pUcHZf4BGouX6ucgUv%2BBmCWGvyi4tYUTuZvkOacSSTbo9GoEhEtTNlPAyV2tnLeXF5kQKJTvyLtVMXUtt%2F1xaj9pl0SHXIgjf%2BdBAmtRS1bGsVRuM5dIeAlPVIpD%2F4VnxG2J%2FZeXFfURfAbHjjYVsFir1A8UXqxr89n3CP1x9GVe8ECZJJlHodvN5EuWFyYZBFAbKeEV7x4Z0fD115kLljvcXcdKOKML1RmQ5%2BjPijLudqg%2F2MuLAt48Kz0tS4%2BAlmJJQ%2F929H2YFFZ1KYaXE%2B4F44kdPfJd84HsKwfgL5f7bwK6XR1X9FYeicPXjltRwrCoUNfbkwFtxa1tn85ieFzmHoX%2FPv5p%2BjAPxgRcfSwl%2B8kErkBbltolgajmEwUuEpVgmEe8XZkTbAKSpQBoM6%2FdJf7u%2BSj6F3ign9FrX6UpaVadXfvqcODlE%2BbS9FbKdb1CKR9vY3K53%2F5TD1lnfUN%2Bf%2BafekTRwrouHpt7Lpcwsc%2F%2B0AY6pgGFHNwvkddugDzIGxkvZjaW2BQCNg2Sk3x4PUu5TYN9xOWdNrZQ279m8z7QdH8RRzf5pXrHz4V%2FwzVMtBFG59dgBYziq%2FvxIW4ndR%2FlccW%2FJrufed7n8sv747EMjgS4qTjpkGl805ZXS9nRfxhz3Yd%2FsnmCukPmtpmVVIENroYXmtAwhIBiFmPJVgp0p8FqByJ7vTWgVSlNBxGA%2F8U2YeW6aHTQGsbH&X-Amz-Signature=5c1735924a1e91d585d87d419aab5313790ab7e4ce26595cc74a60b766a0e76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

