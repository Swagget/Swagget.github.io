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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZOTABW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T233952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKFHC2RFLiZ%2FdTLVw7r6rSHyCl%2BneacYuDy5shx9Q%2BqQIgR9aTFoqT2EEPXYlq1eiwvw5rgtecf00MKRRqzi2M4ycq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEFn%2BJb9NS2nbEFm1ircA1OhjtWlJgCGL%2FBjcFqY3LhThhMv3u4vMNJ%2BlL73AGIZSPcps%2BsIZZkhWYvoicdXcSoc%2BIsKd%2FVqRKT2EkaNHjmeaRe%2Bf12JfcB8mwA9uJl1tWGAKVdcXoFwOO3o%2FKOfWQL5sIYMyeU18cg00AKX1Bk1XDIZNagXqFu2eG6kGxRThIurUb7O7soaYdaApI6Bc1CHmHVNNTm2z21g4j%2B94J4LPi6EVbgNJjZlGb9aEQhlAjGPq7NPyw6MEtL3LIyX3GE6Fyv%2B4w5W0aZExdwOoD3t060ODXsFAmpXcrzngTwOSPQcIRN8KNyXV0AM6f92%2BmGDN8w3LHcP%2FBlDdyiuFdvBvjnvq3%2BtWaR%2Fo9w78EFLfgH9TAD4v8gaoCCtg47SPoQxTBwBj4HmJV%2BHrHVoRR6EBQJMFBY5SrqWsh%2FwTiwqAnbSR47E6er3cOfbSZ%2FNr7%2FlT54a3mGPYGwBZat1TBHt6wnOcMDAq8BHpH6vB2j%2B%2Bx4j%2BSvC6pdZSTHx3KDYK%2BI4cpza%2FAbD3pTq7WyALQJUsKd5739l2P6DvQhIdAL1MQycrM1HIpfeQ%2BuauW7uyeDoXL%2BV%2Bg%2BOV%2FpjaB6nVarkbD%2FanvuvdXs8gHZQBgDCtSx7yn1mt7hgXvCAMNDQ6tIGOqUBk8KQ87Pl%2FP%2BNlH7HFs6i%2BMx0%2Bp0Y%2F0w31KWtjtPK9hD9aUkqMjwqbqY2RFg9hzwAN89OY37%2Fa5cdlVd1UjkNavmhH%2B7T5FWHDn1cjEydQlvI9GtHFZmrvoDQm4O7coxiSExQPkGdh7ERdPsOQzoKrMDNlpFqEhmkIHRh0BNgSKiODM4FbuoCH92Cs%2BPR6pdzCsUoXzGyy8HMqZ6R8YXo1DS0JWUI&X-Amz-Signature=b191f57bc14526d99489058e5fc03614e57d521601955a0f7ec5739975d361cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

