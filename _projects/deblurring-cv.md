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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVFSLSW%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T045022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyvymXhBfHOdmNVxtIz3L8P%2BwhuKdkzdL7VzX35bQINAiEAx%2FdL5y12jBZ3U006fs2QNEQEHSnrRPNo7ypdhgxraHIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHRMUu69eV%2FCI1%2FgSrcA1cit4x%2FeQKoFp2L0JC5ZLYUqvQec47a2HDOe3ZJpRrM%2BPIaJjqoWPjYc4hEgS194759mV%2FdoP%2FVGDgs9oUEiPG5acLydUxSY%2FGogJAvshTDZB9PbfiziDAXLrU9e6rPW%2BXSUeFY2lKs8Pi4BBb1sZmBgUZ2HG07zIMEh1%2BIe6vy2rSHkn24gEPKnJCLDfBSCV8XbHp8onFYv%2FBUmF0S7nfVtD7dmXpRnVhYUkL0BBjBDg6CV%2FIH7Rx2hqNNRWsyvCpdYtC63JhK3r42wNw7QGc6tpzd%2FeyeP3zcGtB7D84Eqvb%2BScB4MLBNqnKaLsWEadOduJMpRl8U7AQ3sFvT2fjd2IUmxcUmuSFCFZPzWUvRwRAoaIkTxZSvNqR7N%2B4Pm7JWV0a9ykNDwUU4%2Fw10kTrGL0nOb%2BHRx6eKAXYoW%2BTPO5h6NQDr2X4RzzjQfIEBQb7owvOLEA7A53ob6HsKDFX0hroN3isiu9U9sJ5QPDyJVc3KNNZKBUKPlCE6gDA6fHuLZPTflLj0oSX5xw60yGcTFW9g8VtwtRv%2BnuKuDrVAprmmw3YkJusrbQqk9NbaxDu4pOdIiUbpmtjb40e1ok8loQTXgkuREO%2FQ7kDBeSjwVy8rhOpVW9iVx1dtMLXKxtIGOqUB6pvUWDuT9oaSO6j3o6P7EaEEy7%2FdIR6wYuZDOS0s3E7Cnl%2BKO2zztmPfkHTjS%2Bf3IZ9iFR9vkEobW6FTcGQwFoWIvJfUrDdFUvhspdhl7PpnPSjtIysD2w2y7NKyr%2FV7t5wD7rzcHtCjWzh%2BXoh0GtTHy70LwDgyM43JSv%2FQpqozn1Y9cC8EhyWsAb7ncWhUeSFdcvE%2BmnnBlGetSFxeJ1fKvtwr&X-Amz-Signature=65ac9785674489731f8130679a229a7dadb6ded0f3786b197292ee05fe17ec64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

