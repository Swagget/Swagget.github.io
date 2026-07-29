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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJXFB7X%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T224505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwdewOQhTwEj999IrTHUsYudj%2FdFj3qZPb1nM7iUEPTAiBmwXQShGSFRzbmu%2FRe2UTwVn6oulG%2Fig6EpvxE62HlyiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDhfC8UtS9xPP1C3KtwD06nPU%2Bs2p4ZHHvoockl1FumW2hvCqUQd7rcmR1JMvCzBuSeCcBqymABOAUzy3aQNvAkiQfqPvhLCCf%2BPplbYe3dGqSB12UzNki3OsLmTxBJ3bTCeg%2F7jgwmIJ3jXAHve3Sh0fLvGBIV%2FQ4jonDfq%2Bjl0DOAf8v0QB%2BN8XvbgMvhY3HcqDyy3kVbGcxs2ysj6byr3ASZ8EB%2BGv%2Bsr4yUExA7YUU7dEqboBf5xEWFugLBN97rbgEEgE746llTdOu3tX3%2BSezvzpyHBWpKfHrdgXLaF4hIGwE2tI%2B2fr1gLS5LAZ8Ch3XUm7v8cmw6X80bBkD4%2B%2BRnDRFGNg5gIeCxmT%2BWGxs1QsREesFhSiDrYX%2FAcDeGtUTUKX%2FI%2F8tkLWHk1n2BzljP9l9%2FU6I5BoyM1XAqbw2CIqZeTOBKCXL1V2u%2FBhneItvAk51Y84lWfRkus2MWYp9y9zdNtZtMOT9yLaJHF%2FhmJVGMvsJ9ta08MQgyQh%2F%2FlwGei%2FpQfban%2BHmgVqHGh43IfQVwF57zHeUYEbKO%2B2mBXkEPRRkq4NfunKRMicHYfVIBE7Ce8nFBGkLxBgnCfVh1xUArpvtix1AmpKW9mTyOMNmERlYbf3FVGfzmZMC%2FcAop%2Bi9xm3Scw3fyp0wY6pgGFwNWBW%2Fy4mAs7SmSZyaU23ywxkQscdpEXZHWTpNEdY%2BIydpJ6QYTOvJsxFRcxpK77pZ2yigGK3f%2Fff6FvHqkH7ZeR9%2BB1WG0CTw8ULL2BzmDKgeNKPFi5z3x64FARq6%2FhgM7UWoKP%2Fdg0Yl2DUThve6lMryLHk5TKA16RLfnPRfs2BGKebXwYmWaa6D2zxEBYtL9eqsf%2BJJikRpbyeSU21N4Xca45&X-Amz-Signature=ac2daa6da9fe1bf89e38aa41347db461e8bef21ee772f54388a6e733b1744845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

