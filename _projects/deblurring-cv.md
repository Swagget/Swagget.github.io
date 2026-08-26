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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCGB55J%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T134310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGckb%2FthaA3GH2G5AsAyo72jFnRdRbF7PJmh6qvk0MVTAiBAw2Qut4JtWAx3D4Iyi3cVOcUXF76bFrfOqBl6zYFzTir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMSe4%2Fa5E9Lgn5AU%2FZKtwDBISsIuNCjGVndEK5q2Ei5WnnVu0ssmGnYA4YKuJKRlNEbLbhhwtvqa%2BymIHEWt3Kvlq7Vl%2FJvifmckXw7DxTRGyZ5LBwRx9wIKzuOzBQZO7k51IPjyCA9SvDC1%2FmbNxpX%2BLNsm92F9ieHnow0b901jPtazPDdQLUzqWnSbz5mhYQLd6TTcPkBysRZuUzazFvfFTsReTn%2B7mj1pQG9kBNkDDBmfSKTvvd3hdXBOO%2B9NeS0eWGtVBsebxsVvzZI8OM9pyssPG%2FH%2FI3Hq2Xo3skISyO65V79SGQ6oadI0Mv8886rnOUfAhO0FqamOoaRCM3jKERhwtXIx55oYEMMomBHzMGxpSkZaNTjjI%2Bn7rPTxxt7C%2FE6Ai2uAG8DQRLajOOwIBb1TWH1Q4gCp5%2FgllIoFVQNhkybPJ8wzmmiGjHuNI7VJIR1iCCQ3Qo7YAJMVOHBJl01kdD2xWbmf2LjzAy6qgq3ssGCHdPeGWuERj9jvoTD0KHy6H4IsEm9Pzoc%2BigHOya0I27yyYY3D5VSeQmYkWtLrnrwcMrLzrjdjJoDtR9qYEmj3miDy6fzOPUXdQbhr3oyvsRTwWm8ik3byIamxjqu%2FyqQBa267%2BrohvTq7fmboB6LerbsxSB%2FF4wyqi71AY6pgFY4AFJ0UJZDbv644XMuTBRoTFjHuLlTWnRojhViO2NLqjP%2FtCtPY1zIqtK9r%2Brns6240RSqou7mvZWYu1NWaox3RAftboCXyXC1HqyBWFqWaNZHJjLUSBfdTWYCOWfZIiBFMiz6Qyp2AaH4%2Bm0KbBgq94F%2Fv4wfZn%2FqNK6CAQF1CK6tjvtrJDKZahtQuHKXYXMMoM3EKq9rye6sy9fehcNa%2FEmaa4f&X-Amz-Signature=c280205c7fc4af763a6d93fe6b33c50a97da4567299e6afe10ff8cd3fc44ab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

