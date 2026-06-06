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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2JOJPZ%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T091535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtG%2FvYdrMS2DEYGyndN07Z3WHOmq8MGTfdDZsbv2D7rAiBh2CXr9fc4%2BN42LV8EJnfiavyNW61YgP%2FyPVHKUKJLjSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHQQPxprBGfc%2FcDyKtwDd7q5SpLIA6Y5qGxjuyo5JwyhqLLVudxrKESKLvfD2uZc3aECPufgjT79x9pwlQkxyI3Txj%2BYxvwNOBliGam657qujePWNgCOJOzsqMd4yV5LBy9mY6P9d0qyM%2FyWq%2FiuwksrnK4nRKeHyxtBW9dAiUcH%2BB1DTzDfv0Ec1oBgf%2F3Fchkz1vDYJBcEwWcGiF0EbXBdCfiYoJTgpXn%2FyVutC9sLhUu8gR0qKHnTrpgPc3vO9qxearISMBUig1PtS9%2F3%2Bt55Tfe6WiTbqbOaYrJcg70KlslgBpAQW7rfrOF0Fo0fP7aw6Mcl5S4YSiZF9dV3KiQVNzWnDVBHsDUE9JdHpBfKgGPS7NciGKkq1l%2BFQJbQVjQdSnVDse2%2BmHzT%2B3311EFoqSVSX2TPcc82rGj4nnt%2F0XVLVy0QOZ0966oY%2BYfItks3UvkBIDxCPZwd%2BHIyX8dMDDbus1s6T%2FkQh5POQ8SGKfFDtf6nB530IWRcvMH5StRPW6VhlEY9Hp%2F%2BQZ%2FKJPXWxKouql5iMbmxEeHfr56RZ%2FnwiK5dQl%2B%2Bs5r%2F%2FGiiHZcis3V3Ji%2Bu05%2B85hp5v13Ryj5xR37zVU1NNHIxht8c6E0PyBtHfhmVSsDXDpb%2FpEDttW9WM0OPXvcw0byP0QY6pgFxCS0qPR0385sweDBwj%2FcMTsd3%2FDsphBhJrqobPnggMIERIcKft6yuToIdULDaaOtl1TPEt7GbPUO%2FNAUOi%2FynnKl6DJ2cyXpW6NWGatNPaOojsUgMBUbyLRy4LvicwDFbF61xvRCwelnyt%2Bu3uTh8zU4O5wh86xmYqphG1IhQo7hD2L2Lj59aZQDHyWFJDPQr%2FD2ZWEM8VFD4SYuWxcsTDN%2BV%2BC7x&X-Amz-Signature=9a5ef97101bde7fd6788e8fbc7d947cb82909e53733037d213aed1e9290fbc5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

