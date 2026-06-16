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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCY53YH%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T224544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ1TvOVrPbxpmxYyZ1F23CDa9xBRTroALtzDOTB3JMkAIgLGRJQo3rro44QVwt6CLR4R8gpPtHFSOHT2ENsuwyMr4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8OBGXEOO3F3SZztCrcA1tTBxAl3W%2BhxxPjtjs6zCNNuMD104dXO4EBJ8FpirBF7ZDLgy5X7jllQMwHj7JzRMAkfjDJq6veIBvH2E%2B99NeZsyoF%2Fy%2Fxcqgen%2BE%2FFga8X1e5RLHJ63puZDsDDFBprY77seB18hnFauWMbvIYDvoaqHCoG3YZORGuTmPjEYiX7PhIEhNKNxplOkZ%2Fhf2JSuemvjQAuYa5gE6PFsAEQfJhAoRExcS6iDVsWzAytabSNKZkGwVsl0Xkf7OE9id73EjRdBDnZ%2FTfuiECdi28MUG6xLpRLTKEsyzYDAvFJAyx9CiiBr1v7PHYZQastaXhIVJNe%2Bi9s6OSlvPjm9%2B7y%2BxNMncsudey3LchQ74fv60h8TrD%2BIGnzu%2FSXcDe5jXAATocGUswY%2BFUjHc%2B19UyyVyk1lfpUkMO6PvCjt9LXueGsJpv%2Bupu2PYIcrUK1QyJiUqCdBDiesQA%2FZwDmsoU%2F4IuognL6kaiLTzQWi%2BzPJB1OJ0kI171SW2P%2F6p%2BPWTu9C819oBDecQ4bhpyDQLiI7H6uL0VXZ2bIfTsKX8y0LEfL5HcG%2FOAfcs3gWpw0%2F8wPo%2FE9dz7YChXRBaDcc8sfMFh%2FvAZF7DKp3W4%2F5hdyMvgoSHeU5eLYP6luO8AMPiax9EGOqUBS0x8LjR3crG%2By9uzQao7QjKNy8boFF3S72W69jZMgLQ6m72rXFcMqeKw3uKIL%2BN6TLAskL%2Fi6vI8qPhEYGzNuFEmjYzFTjrBR35R463%2FSs209M5kOe2nWP%2BlhkU9qIFZ%2Bgk6sy7F2rKUWxTMnskU6k0copezEr3LGx6QE6tHABBisPJZezcYn8%2BYjG%2FpFgDctObl0BDe3aYmIM982RipPg9kZARU&X-Amz-Signature=cae48fc224155c61a264c56bb36b02becd71b78425bfe5b290f3edc2e53296e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

