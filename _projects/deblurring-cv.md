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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSH5MWF%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T072746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBel%2BGe8Reic5drIFr%2BgOzACUmiDpUA%2BRwVkt61nFgtfAiEAi9xDBwyBBnLAIfBDvTLYoz7wcrSSo5pQ7STBWnXplz8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwnndSmTx5z2ni04CrcA0g2sFpgC4MmdhUEZ7tscxUhtoqvdQsBMIb6SGyNhoPV7PAMnZqMXX06zpwYyRmP0QMPzX6PL%2B7dKh%2B%2FdkGP4dVDHOsW0qRnh5SLuwHwFYbu8NjPQL%2FBBZ513wCCWJgXR7q41wfsvAlNaYp6hw34Ge%2B0nsIkGnydap4gymxZuYyeHQOR364UxpK34ECP1qeRfq%2BUPtILmuy9nHq7w%2BTUfHrN%2F%2BXK%2BkX6tr%2BjlYTjIIaaRl1xVpQttKL%2B6Ug3vz3fXJalnFofF%2BOtCw253vxkK12lgJPNwnXraGWjoKzs1Zh0Fppjgalu%2BnsI%2BoA5avi8iWCFnXXQ1zDkxjJcsygTmQ5Hfxn8RNN2VelOiz3HulfoYXV4fG19Mfgb2GJL6dkIi2LNdajwYGQJg4nH03WTxmGuqQE0yJT1C%2FLjBNf6VAFbXTd8tPkXasQkP%2FcmRdIxa6I%2BRW04dRoLL%2F9jgi3RMk78FfqHpxl6Xwxg6bWpMU1Fu2PJ%2BSX3wtvPVc34QbuKgTEvmUQuaeYjY%2Fk1tMJwIDvPj0xBwlYcmUOjEyotHoG%2FoC1ajxFB0EUFWIPa1GoaOxkb%2FO4oogQZuQDSimk6huQnhMgnprTr7jH0I2JRXB48v03Nqq44zx3F3T5EMO%2FZgdMGOqUBE%2FNfcXPW8MnEO9im%2Bn1xmr%2BE1r7Qb1M8MvYJL1lfH0TJf0CW3c0NHeJfHV7CK4pJXtuIhwWut6dHnsobTgePliDT0Bg%2BjnJ%2ByQVNAK068cXFk2cY9Hc53MMOradHXPUqhHiJf%2FxPya1RIZyrI0wA3z7J9VTUsWjS4uTNe3d%2FaXZ%2B3SUuneDnc6gNZPlRe3Wx42J6z64QbrFSy1Tf%2BnbT07HW7HBU&X-Amz-Signature=29b51de278ea29c00da7e8351387e73c9e8856c22f23e0539d3be1f03eccc80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

