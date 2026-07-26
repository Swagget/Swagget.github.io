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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPF5KNN%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T115219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGIq7AiG7uxE5dGkFJ4vjRv9Up4PNGJm9qxJZiOjUsZIAiBpQXuhBL52ze9kIJ129aDjwRKe2PKYyh%2BOm%2BeTNbrC3Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxQ0Ds8%2FB0Io%2FUk6BKtwDIHqLHi3FDNYTLpYtJs3Tj35eHmsmYlJoVqmK8tu6Pk2a1pTMoAsP0L4oitRV2FYudpL4ANrQuRnL0%2FwH2B0EkpR4t8VVtGVUK4gNOVdp7SBRW3WVC8nsA2DorevXX7lKz0eug6W1wVKJdaAE6xbWUn%2BEq9%2BPlyCQsLzvqqauUGp2G%2BVr%2F5vjZ6rG92CK1rdE6YeJ149pESb7%2F%2FIInMKsyd2eoBmGTonm3L0mTiyed%2FgKTp6cAlAi18w2lsvVA%2BxP%2B1ZAumy19NdhRuF6gAXQQxeGutnA80%2BbCT0tHjxLAJAP9b52sPLnI6UBo63KuQQtDLutqERBvq4bVHCulwLkRfYfQnN%2BtQlnsxi5%2FaWMPjpAP2svCZGrwislrEQjlbFnfOPJV1%2BrxD1ocoqnU1kunz%2FZ3wiDNW9ynFja58x4iQcP34AH7KLPyXzsRLUH9xi0rnN%2F23FxBwZgnHe4j2htyfYR8yh5jVexUhWUTrttCmIfuqfdZpj90EFmkOQtbNeq1pYhvG6pZ7qnCpbfc7kyz2EQUO0Pc0ytBbdjke331ZYqpzCKVAPt9dgbgyVd4qUf7upkAyXNfJJ74%2BU6t2lyQL%2BkCXou0UQfLiPyUjdi9qesKhh9J8ms8TAtQm4wt8mX0wY6pgF4T2s8d80mmQP8a4E6OQ%2B%2BT8n%2BlLqVjHPzhKcfuog5ROhVe4EP%2FAEEdWKFjwD3RR9WV2UejE%2B2UK0eKEzxer9gKCOdXBXGQjjVI3K1cXnUflILmSbv5K25HokM%2ByCAqEo9O9JYnYRuk%2FlAlLsAjhKXCPovz3BUAKnzoQIVs1GtDz%2FEzj%2Fofyjj1QmWDkMixO6ybetyDtWyyeNxrG0vnVn%2BbFpj9Pta&X-Amz-Signature=7dc9f389966b7a3e85590e7efe93c8d777d4cfae5cbc13f1e40d459f6f1d2f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

