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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QB3MPS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T180726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FqqF%2B1gUop0DxwrbGVb1QrA7EGswAmDOS22klO1xRmAIgFkv3cat1XVThcoLxI2YS5XNtUD4o2SSmkmjW8ozz4vIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFFB0gd%2FlpBcRe8xCrcA1usRTkr1DoIeVeMczwwuhkIYcdi%2BGjpBbwIQGfoQMOJc4j988fhh7H%2Ba9nmp3t2rCtCUwULjzCSPXjPJEfwNMD%2FtuAoLbbZ5XMb78EiT4sQkSGt4lly24v8iescjgzJtQqv%2BePq%2BAwse%2B7q5St9akaIbWUCdg85QQ0qyX5uYHS1%2BsX%2FREvKPphU4pJKMi%2FbufiG1KZjOtSZyCOEMwds1MtpNKKlhKeN7nsLbhsOR5WMRkeJzNajFM58awA6SiApTSwJczsYB7%2FwJ14AkuV2iOmRTs%2FZCNcLf6D7bKwcvQnLLAzFv7pUFUY2A0HcoRwa0C7GOhyGL9uL4t%2FiFXAAcsCK%2BSQeicgXE%2FQDmEsVsGXl5s0fXGA%2F01ZwICSd0ikXEecBj9e7vFyXZYpkUlzsJSerJ3tA%2FxE31AXbpQ1WUDJ9b8QNu37BYckNJ4tcV%2BIIifeNIbyLfNl9eHwThuFktCgRReBfLBkLubZShuqMjhN2fNIFg9CbsxF%2F67psE6D8tJ1Gon1%2BDfTBoiYjpKS8GtXkaVXF0eDOpl4NE3j6vdQoPoD8Anr4XQ7LPSG1%2FmYwN%2BTwA2iupi9RMKFd6fthhLqrL3kHnB47UF4gC%2FloFTZaXBpEx9dTfXuCQxNkMMeQrtMGOqUBgneEfdamBT5CJdYAetcjMjIricz7bBSplmyW0wrIhr%2BPoqwlVGUXparCznqI%2F4eMTlHWUp4ZGzT%2BP1ZiHrgDaqaiSA7Gn2iZNw2QQfUxGP3XTVoy3ZXxTWEDfihwr6jd2htaogv1i9QCPuoOsAcKhHEs%2BcqjsMCKJge%2FczSPV%2BMjr0pmFg43qzEWwEfslZ67gQJWlsajPDGqAIVnB31Dq61ZF442&X-Amz-Signature=41e1df811b174ca6000aeeb7e90ec9c7958198c68b2e535a4899cbfcdd1a8b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

