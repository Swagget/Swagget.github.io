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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEW2IKJ%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFdeSiNEc9oBuUbnazneg7HC5ZVKA%2FE5fkJC3WxPAgWkAiBl41Ht6g3hQ8CEhUJh2ZLD%2B4nrQdFJJi%2BlSiNpiT2pUir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMjaWSN6gKSzk0PCauKtwDsJfVuSkWYzfp%2Bs8oW2Q%2FtTBB9iHvL3n1IDekoiARBWhIbhqe1hYZPlnvV8zcyi0rCzNzwURBmv1frQs7VprMQF%2FAXjV7W0CeAvvQpOORO7TCV7P65rVnTR%2BEPL2nTG4Fo7Ym5i91Wo1pRTDPS39M3Pf3YMd%2BRFX6DoF9tIBy6HFeWy%2BCc3yXGBFKu6gVIaNtFg46yQlNxOGUiD2Uj2UgZL3ESr5pl35xnrC5N1sNUyGjnzztSXeZ9a%2BALaUI0enG2z%2FO5Llc1veahbEdl%2FAFNPzj3F784h6kDlJ3xuyxCnSEkxQJoo5sAghF%2BTG3WtLzGK1pMmsNi%2FHSrHqSsn3u4NTgwaOpM3g0a89xc%2Fcd%2FeOTe13ksRweDN%2FmV%2FDRDifsLA6WaCREdon%2F5RC5VpgiCWeI2ANdWO2YOpP%2FtWmmpO5fFs7PNotOgxYXL77cEdpu3PIju2dXN7Q0Hi1X40HF0ypTIqZFhGnv9Sw1hxK847j56r%2FaoeGL1xy9iYcGvxUA9b6Px55kKy4BpB70a96z6HA2T88NJsilE2JsgHBFqpZpEA4z1%2F8f2SsS1BcP7BPcxTiGK4vKkwSQY0DOVcDchcBo6afAoxCSxN86bcPlLMDM9n7GIxBaJi5OXJEwpZyB1AY6pgH%2BBqJJeOBelKbQ9DIBBXIqgagoQR24uNc6yMoVGWXBxqTwtbqzD8RfT7CWwTvmhnylEskLaWH1c9j361DM4pz5d3c8%2FwFkkSkfBRcJPIr60MxepL3b9tskstyu7%2FfsN26r1HfwqwyzRRi6MYWUhkzm96ATL21siTp5wPAl5idBPN8uya4RF802cc3dDxQDXz0JgKYedBO4zQb691EAdyRAJpnCc9kD&X-Amz-Signature=220b35a4a52595ced0ecd1fcbb49b92c6bcae7bd98aedd74cab5d5208e36d187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

