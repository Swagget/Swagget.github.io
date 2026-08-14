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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RHK74L%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIC4CcZ56Aw1KDeu0dsUa0gbiTemq7d7Ci0a%2B1uhSyxXZAiBkSR4G5DwCSb8XR%2BJfkDCeUlmroaxayIST5S2sehLGmyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM11sRodFMuR95hcUJKtwDLSWlxOQaJZORDbZ%2FEWXioKrDChuw8ouDSxqHPwuC%2F8AGk32FEe096TJHzT4QeYnT6%2FVzLqcAR9umqMKx%2BBDvzcnHBr4FNU2sL6bT%2Bv%2BEqYQtKozSgYXXmY2E434xY4oGDmf1oM6JsPPYVxRdAlWi%2Bh0OSZLRAyiLkxU%2FqBceozZzmBlsA7MaXpU3mwGLsTapPKJraplQKaVkMfqrYF%2BZIe1v7UwdEAFKSSMRQ38xnrYsF9BH4G8mmYch5tOvhJvZ%2FzmJtAn%2BRjxibWZBYm%2BPfJYsN45jmzJyGBvJ%2Bi9W%2BkN1RyiTO5Zh53jVsL5C4F%2BR1eyrDy9sbDAIa70XeH9nlHOIuvx8RF401KcaqWxXJ%2BbfaGaXcyjb0S4Sp0jQTP7bMgeJwMVlBbUqUWvaD4Mlox66%2FZuvhboFhBe7K6bfrL3j5S0U1WLCpqQXfS5eHisiIaiL3m6pLoGWrdPM4dOdnwKkscy39cOSuqW5ZdA2BQaz9GQ0UCvJ1DhbuPgTFRQgpK9Dl3CkPnVFSBt1XcF3io8%2F%2BNrMaKbewOlfpozWUlco1Wz3p3GCc2nHHOp7BNCmf7c6CdO%2BT4PDno0s6ZL4txiXtuFif%2B2fI%2FLbj1U0vtB%2BKmqFRgy2VgiR0W4w6vL90wY6pgG2VFBBJWwo31zJlz5XB%2B94dvbITQODhvQDI9w7H8kJowIRAQNEX1BQ%2Bo1zBoo2RaVPzGB%2BCzP1itTy6wRFEtT7AzxdzH8iJyBOFXEAD8AGMt5D%2F9z86Fge%2Fai0y%2FToeb9cL%2BcFy8mG543m2gV99f%2F3YsuRATR65sEUwDSc6pNVF8jcJxOpGJ694RZMiOTUbBTQOJfy%2F2SUUndFuSoCyNS7qoKCYgHk&X-Amz-Signature=c896573c8c209bea0fdb0fba4d7baff0a294a49fce690d697ab00636093c7769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

