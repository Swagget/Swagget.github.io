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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI6YMQCM%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T012942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCKEhDBCVpir5EgfvcZ4Fi41syZfCERz3xLyxaxyuHfYgIgJVdACTI0RlkuSWLS6xjLZr1GWrCZzFsseBg37NrftAEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOXQW7m5yQkWcJECTCrcA2wLQOOEHflzm01dcvGOfI8Wo2ydFlcarPXvlcLp8aTfxuGC%2B5rro7kvawBe3mwWiVW74ixf71MY8%2FI154iA46AQQg1Uws2u5OURHjX43q5AOcbmh874ysaCISsU0E5RD%2BoJTGETST5FThdDsADFlue4q4DrRHI9IrQFMmWswtX3tOM0sQGfFhLA88qarbmard5EUddI%2BbLqEQPO%2B8mu1pMGR%2FvKCGkgIamY3yBN4tjHHmgsbNblXNm0ZVIOsTr%2Bb6Yyho06%2BBHSqdrGzbya3nLwrrkhlvUi68PqPtZahCiFu6iD9tTnTp6X5ztd4cGqhTYjXj0Jo0jX2PK2cRwVKpqSlP1tOLmnqra0Agc2hVg1KFJFVqPWB9GhOGJqMkV1IZJNVUqKNNmDKQR8cT%2BydWKjL1w2v6jCuL%2BGgH9uoXq4ZIbNe20Gl4Cs9isPjUIBFtFllySTjibOobDnagOwBVron7%2B6P9WqjrptBjpwZfGHhfpcwTVKqkG%2B5x2Z9yMN6CXGgP%2Bef445lkvqKFktNlprXSJwH9kHDwyhRyU6dS3w%2FNS5C0EPJRN%2ByewRencP2LI6n9sYFhYeYVWsxtGrRiHN4srilJR6kpDsvuWDSOc2WD6C%2B4bidpyA0W%2BxMOfGmtMGOqUB84UdnbXKer9Gb5gT1eIO7we6zTjbmWxJQ%2FbscPAVb5rwSSL47l4vZa1%2Ffl%2BuaefdLxHh4VR4q%2FjnkgdZ%2F%2FMIzZ0hxgE5FBUrtKU9NR9S4i%2BRBZEkd8D%2BfL4Dnc9KUaD2NeMiUfmHNU%2FPn82AhobmzfRUge5JXTCHhEVbSHO36hHArhjdfgpfeJ%2BviL9pRjd7vSht0nCvgJwQV5Z8cXO0mCLnf5S3&X-Amz-Signature=75fc4c0717eaaee0aff72186d0587ad9943ea8aa813f982085741ae52505ca30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

