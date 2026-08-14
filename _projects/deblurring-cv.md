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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTH2AG3%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T220955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDUUUcj8oZHNz4j2GlrNOr6AwB4VNOMVANbU5RTjoYNVwIgKP71DX72k2iezS2DYsAfNMExHFLY9fd2ukeXH2y3u1wq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDFlYDgWN3FzTkUoTEyrcAwXJSnuVXIpQTXfzpyNVbmP38J0yeetwponKYJGbPvoxLHAJuAHCj2r9tMXG6hg01TTAx38bkMJ54w4mWPwat%2Fsx0mvlOypvukXuz1nkL%2F8ODXTAxagUh4maoo7k8HKBBm7of%2B%2B6z4tFZKitMqs2JIapv3%2F3pvgoWkcLEGtwzTlBeAoU96GMo%2FJ9Gp7%2FZbiofNGyzg0Iyz5ir9iQ%2F%2Bc1Hx0jZCKtzJGFy8Cj%2BE5kIUCcSRXRKVu1DRIzXyMD0Oi9TVyM9RrzjALXQX1yZitjsz820Ol5CLKDdxMxFL3QXI5Qkhm6EdHiYcS0%2BsokEivD3ogFxuPPLjeHmODzG3NkKIanFECDdybXG%2FRb%2FimxeW4BZk%2F0OqHKS8999x9P4bhiDVTRQeLFf3AORiw874smRnnosccPRuYOKjRrIn5bgNptK7iD2qpwE69fnCxeJDAmqV%2BEJDd1%2FG3k48zgWTRYlfj9ICYt4%2FSmYPofr5YDkJX%2B0OjJK2VXy9Db2X8Z5DsqRcKuB7ohv%2BwM0t98GY9iH6FgptOFIRyaLIpGPO%2FFloUoPo0AOJS8JMRVahcMNqp8%2BAd1pyvGTpOj4tuGvbxr%2Fp6oAkzbgqCn4UmsXVACHN2xz57g9NfiDLFThFHxMI%2Fw%2FdMGOqUB6ZJaNzx0HigK8DacbOFRwrbw64FWGu7AwSjq%2BvbbfQay8iYyjm2fTUN8yf6Oh21d7vi7lxmBsOMVRjwpvJaaviAgE3ESI0w0GtjN2ibRRM77qbouh2ziTkpYIw2kWwZ%2BWvS%2Fj9fXlx74VBogb%2B0Y7ADurgyEMVKZw6yyz8kpYucLMPpgpO2XiciTK1M%2Blabuep3lh2OqtX19eSrlgFzsXyaQID2k&X-Amz-Signature=d5cf9e63b7156d29ecc4cf6479cea1bbf9aa5470109a64efd9d90e9eb47ada18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

