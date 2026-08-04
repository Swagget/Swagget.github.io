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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP25V4I%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T102435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCMNAqClpfenrIyX%2F9GPwfQFo3Zb1E5A1d%2B8eHn411YnwIhAPdUc7Rp4nYbbQFpkFjQ%2FQ9iMKUjcP9URfOxD7mrJOS5Kv8DCAsQABoMNjM3NDIzMTgzODA1IgymNDCaRrleqoub0Jkq3AMfIrtfpR0F11rOHIiAcRs3zsqKUIUypmsIk%2FqXDBgPfhl4fdwVPVhnfB1yNCGzuCOw4wyIkCYrKfDA32nV%2BrzKkJEtlUov7zfB0g0CJ4vuzwZQS49SguuQCRjcwjs0f%2Bx2yitX0oBPJvIY75nMxrzpw8Ybi6w5wjHJVyZ3gZNYxFpbtwXCSEo12cDgxI07DYTwg8WLENEaRBaTUI2A6SuXE9pkIHWd0NK3EiwrIEp7P6qy1SkdcDldB33S3VGizCgzZ6D8aKGfLIbJQJVRX96iFmKaLc5HRMxn7YavwF6cvS%2BKWOAC18uNeB%2FF7gcik1S0Fu7LX%2BdVwDKdtJjP2yiouysWvq74WbhQYrkfMibXiTENCrTJpvQmK8zl48R4FfOghJOchLLPDUEzucScFmjp3KmXf%2FnMiCqvDIReu4V3dX2Q5X11hmRS7sz2s1dkYDhAsm8aAHbgxsMCfqO0eqVRcyjJow8kol3rNrVe1qKoW9U31YdgZLOeunPJ61TB%2FUMKWMq%2FH%2FvsIeIz%2FhbCQDesLyLphEH%2Fa6U1zF1xhR6Zq8umOi%2FdrHAbPQqWAui5giEJ8HhJ6351enmof0EO30fTfyeUVUGeikQV%2BAhH2FkxJoFoguTuqEWtsaFdxzCl68bTBjqkAcO4lmnJMjZkESEVvjrwx9OUuw8%2FWgz%2FEgfZPT0yqgpJ8EaxIfkRywvp6%2FsacqhdV2MeBSW1G2uaENfgsBlF2iLUFQ%2Bd4aI6PqRx%2FtXYGpWeAXTW6PFw%2FpRsomzG0Xy6gDFINWdrxMXVW%2Bwcc4cnEpD8I8TpAwTVt1%2BSZv%2BJ9kLQfTH0BnhkJRFDpp6hww1xdKXe%2FBZldjBA3gwfehboeXDy2JmW&X-Amz-Signature=e0b66a190c38b5086d79d9369ce50b9c979d2be26cb6bda12af764d1a21d053c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

