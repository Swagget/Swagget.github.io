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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOBC464%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T010837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYojpZg71oueH5XVLpp8Uv8HbWQ%2FEOQRfVzIftsC0%2BogIhAIb0vNR8EQZo4KNrBHRqEWm2afWcpkTyjpUrm2lTdbe6KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSWnpZmxoFp3lqSCoq3APte5a7KN5ODRffvnp21BQZ0OoWAw%2Fpjfkgc%2FwFqW5g44c0ejLDePf1a38dSPr7%2F36VpKaCoZkH%2F5BcIi1MBiWJ4gNzwA7d19z1amqZF02vh%2BirGMtzPBkWSCIfrbM26wPtC6LH1zKPLvjtvyQzeORpguhcDnrUPaYA4m01QUbMHLPRGWwke%2FsvbuMsL2WciB8GQPafdnyGTgxhuVpjDKi0S4U8CRMv4wtZeyDH8Dactf62Qwg9MIA2F6B40PWVnCz6UHRgieCcbBcUYK%2BSDDo6G%2FNfpVTsMobaP6GaFhmENebESBLLvPFWJp%2FaDPLPV%2Bm60jTc8zj1Pea17mRR24BuF7kzv9fYv8kq93bFOT4epIB8jqfTraytVFiq7k%2B2roPYpwsR7QeI441BKue3R8p8UYUYvWF%2BaFEL%2BwiAiDQ0lJLku4kDXS8m9qdD3G3sZxbISX7W1bBzO%2B%2Fi30jnShmdRC08MLu0Sa3EXympLfB62ycCViiE%2F7rzMz9QU5xyP0JhUO5Ub6dWZS1oiZmCX0GlBzwH%2Bjhsr3Cg4gspbZh6ihuDThI7WjugSY7Vz5VqQmT4N%2BojTpTi0gSh%2BwLzY8fzjyY8NJiZSGm9%2FbGDgr3CT8Qpza6KyRG6URHJDDCnn97QBjqkAeig%2B2pTHciFbI6sU1xVcef4zv%2ByUZH5Pe6i8A9ZSjeawnvpqCVFp0YWtAlHsgD2M5TTQi49WiIynETotQW01N%2BAPC6X9KX7rZX3xQDJ9VLLOhUlxNmJF1o1nw8n9fAb5qlaW8A%2BZXodDQxLkWuITLd2D0%2BMaeFBJUgM18ReULXbZIbVNB5k1OHTZB0It30LhBcI0NiKvC%2Fyd4gV8zhAdt1luvp1&X-Amz-Signature=917d9572f9c473d6468e1eb136ae14ca8a1e050ece7abc93438010a29295e371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

