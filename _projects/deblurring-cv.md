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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FILT2N2%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T151524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH%2Fs7T0fK8N8nPys%2FaMVKbIycoL1KAdIp4FNPP1pKEclAiAhzQG57mHi5CNdxKrN7WxypxQBOaf6LAFaBxkrlTDaPir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMm2VyyIBi3AfrBoS6KtwDwP%2Fi3Etb905%2B5h43loDMRe7PhAtZsdr2iK4fgRAjf%2FY4bLr%2B6yxcOzOIFSqQ5ta5x9Ad8HjIQ%2F1o0F6pIJN03aCm0UCGgde5UbqR0Kl447ENJf2wXzCaP0ICKoMQsy8kEEh9I3byht9yqGPQbVdS7bWxa9y0oGg1zOXRc70i%2Bwp3kbakSXYbhWkATCZmmaOYRAjvv24CoxQbOA%2BrhTWv5w%2F1gklM7nJWUtWzpqFAhPu%2FUFDFhlP1zYLQt47VMCAUsh5VMMH5VsN6qJenqUm0hLDrPFp2XquthxKLn%2Fikk%2FI7LUppZP%2BIDtwti4Hb20RjcNbas6fOsi7SQu4NT7cebB6tkKeTy9jRYpoGot81nC8nwq%2BMix09JIXwIQR%2FdIql%2F4fLyc4I7qcGKp9exSeF0P1MgACLcNPzq54R7xwQDU9WTmoOygd1hZup4O%2BFPzPLTwPb%2FDHvzfcVsbnELpMuwwtHRHQSgrYBh8WygCUHTwP%2F9zEFdVLM%2BzNxBwob1rHoA7kUOJ7ruoM1msJT%2FrN%2FMQD%2FrPCVKdPUzL6yDknaIYdimp28Qajaxrr%2BwYQFiM9Qb9Bs8VU4I5PVZbypE97JwRLbsE5ke%2BnyJbwAOemWbxogpvgKP9Go6uDoY%2BYwo6je0gY6pgH828JRF1gfN2dqp7A4juhuwOmuXCrf8590ZoRbNHYigVVNACK1njVVnVFdykitgWCXtQmM9K%2BfCjhmsbKdznVedZsCpfhQjegDfRYcQonxsB65kATJq8lp8CB1FeMuBIqzqcbXKZ4uClNSCXR%2BA9%2B3rqiTchH21lsbwmkwe9Xx9ah%2BEtNCVvzhEU14l3v4g4uNusQJ1Jw2yv6QLkC28y%2FuYxxf552B&X-Amz-Signature=f05a0a7e0875c4cfc2b67892eeffe03a057661006307e5de76d1429d411b4197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

