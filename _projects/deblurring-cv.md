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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACEMEJK%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T053317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCoU9sS0wpBV1Fb%2FvPb6sILBn8%2Fa%2Fw%2BA9zh1JC1WGzreAIgUVSQ7pzrMIgqE7CNh2GPDBcCdeXl8aJna6%2FTkcGu%2BlQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMf%2BzlSjbZwooRvxPyrcA3ltJMQcfEjEKTxoxJvrp0idtllGej%2BQQD5hByq8izqzYQWdcTzYxf6hWqKMMEQhxMTchnK1eX5p7L2eox0C1EujrfGk1jauWyGimM8SmiXgSWQ6FDF3k5L2OKUc85SgLhbYphrS8l%2BPt2F4X6l0tqXzk38I9V1MoaxqPKKTRGsbsvUjuZfJ8dHfndx6qIIROOxtLqNIJXcVuigspEXY12Q2FUPeT%2F1vE5leOLiyyMElT5ToY%2BNwmj2MszLCwCHpfOFph31cG1%2BlVX6%2BHI1pstNKsL%2BwOXZO14jztwvic8%2FfBjJ2tIjrdMbTi%2FlLftB9v1SQcSc2h3bktJiiKiKNrZybZyTXOWGNT4bJ9DnmEsT3l9mJoyAhjCkW4YDsKr10W%2B5HV5kdY8lminGIUYaFeJvBvGklIVI3biZrRZkn7c%2BekgwPcSWiccVHzfJEkQQdyXxQOCSbQI3BsOUTaWGpa7SbuCXRXlRIk6XpnxxiHw1laLVA4f6O%2BIb8a6MMqkoCQrEGeVgjFN%2B3H%2FdWUlcyd%2BeH8uMm6%2F%2FHyNY4cW%2FwUeHIpuUoBh%2FGLYaZO0cNrckCaYZzGETrebPcJh6wCWVuTTFroRoGomuwbeA0szYIrXp2MACEwXZ3GW4coy%2FvMOCaotIGOqUB63%2FvIZE6%2BPDlVa4LHi7Bf60E9cLYdkSMjFgK5PE2vw3wLJ%2FA6KDFiT1WUIh8MneYX7kYyUPShqnkkjndWcivs67u%2B4a9CdkOxjJ8t4lrtZb677mybaC5HZabviD%2FPjPTHyIxcwpcJo5Nn5hBS1EQ4kvvq60OuNZbQdtf9VLjk64LNuKf9%2FoZNO8iJ0Zg7Ayq4yo1bdfnNGdCb1uItIz8j9EQ4vr1&X-Amz-Signature=53dbaff785ba76c98f2a620fe2dc4f29282b9b99bc0707a81458dd07a3f4da5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

