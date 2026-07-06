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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNWMPAW%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt8IbB9Ukuhk0QrLucYi%2BGy39jSSe4NbXhZsIakKaU%2FAIgJoT2pGwYAv6M5%2FGbjDNJ4H%2FSFsUW%2FkJTfO5VeUuYIUQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOmf3K5mEH1oPYsA3CrcA%2BNkeMEsL9Xh97MGiv%2BGc%2F0mP%2FhmB08UY5ogQdKCK1qF0JU9I9GnCDESfalbK0BTZi7z9w8QkTRPqFVCF7zCL6G%2BAbff5cHSQpmIf1498stgynUjViuIvWQQ9AjcZwc85Rfpv%2FcoXWmjggqXs%2FyzZ2uG4moevOLB35f9zvI1ARkdbRKNBXNnarJlkN8rT0NsQrvaM2TJZwpom5%2FgLoYc%2BedzI8kC4HjFYqlSl8zXSH9FgRPwal4DOBvUDcs219jc9pKucNX%2B%2ByRuGbGwQ%2BxduQUwSRkEERCLBGhbH1zRzQ9oiSi5g7kU29HZDUPlher7HaP69L1XI26IHV7b%2FGBP8k5TJI9uE10WsW44U2KwXpK%2FV5RhDWqIowz7s8wU9gH2NacUwyBoo4FLVzXC0tZLLamTGVlXo8ZWRWnWD79zaZuc%2Fk9CYCykWnxAr3N8z0zawBViwA1L8dYI6m0JRBfdvKDumAar38D414%2Bf2RzvYC3ntocyCR0q271yjmhPppRrhJ5ruDHYNyBQnwlDHHaV0m%2B3JMxCDb0bOZ26ftP6RaoF2eIPoWFlWdlXJZruJxrslQlSJ0vZ9jBvYcI%2F7aeMxRrh5PBLlpWpsX3T%2BOplCDD6MRqnktDIZ9hmb8EkMIPtrNIGOqUBxBBTS7Q27HMzidwLCBTp83r2XLXMfDZvNrYH6tncv4fdbJCrJmq51M1CQoNUeAXYRkVwnVjEy2604%2BcVRAY%2FsGRtUE3HvnEAQWklhdj9nyhWcW%2FPS1rCTGC1Mn9jca7KF14WOUAFbgMqONpFVTH6F2o%2B4XN6b6YOphuD%2FNLHHH39a02AmDZOFMMYXAdqWpZFfh%2B740t1Fe2hohEAjlDuPNZMJqQi&X-Amz-Signature=ad880eecf54b5c759546071674fdcff33aa852a6d21efd948b2bccc5155a9eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

