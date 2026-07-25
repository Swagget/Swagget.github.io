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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDBMBMG%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T155335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCd8ctWjxHgtBI7H3F4YSjOm67lwGf2X1BsSoG%2FDzYt2AIhAPpw4MGxWSoW04meDy4G2Tkpozhbj%2B3iiJXV5z4CpBikKv8DCCAQABoMNjM3NDIzMTgzODA1IgyCO0%2FjZZNEHRQOywkq3AN7Yp1E6rUn2G1cCWAZv%2FPXfvnOqzZsFdQESjCkXjpwrxaN4xcVbITWqF2naRREhd6kihcojupVwAzQJnQ2m5pU%2BjsYvdNzKkzzMlgPJm31ClNRXRf1zxibl1sKmOVqVFCmYmlo5QJJ%2FBAV5volZ7iSjT33e3sGqL6zMsjNn9lMHXrlE3lz99XmViwSAdqhDtctwk37fyFrTaHw%2B937LzKhlPQwidOCMXqEeLy3eILDoyMSDtTtZqxDAdJpupLqKXluqkGwvJ%2Fj7PdPtEqeTkiBSiL2eWWYS7H2Kaj6Ccw0ViTmOQee1wb7m7PkEUkCYr4UXbOyO83b9LMfxF2JkdsC2xyPn3wODewHGNAob1TDafchVogzcjKGB1frhnGf5j8ZtaTndodaVnPHA64uqPVXcdCD79L75MNSQh6yOcSaa7YC16p6eeTxEFY%2FqzUk2i8XKE6IGM%2FV56zVoiMFb9OrjvZ4pjIkKMGluHzotcemD%2FGgi53NV0osehQPPH4dt8yJmUY%2F4JGzkKEK%2BVFa9wirneOcvESofNtB%2FveFxHp8C44n0Y5WBRnDirr%2B2fDc8A7O%2FXoFDkdOxZmNbo5rElG3p8%2F%2BboU6XFNATTnekaNEajB5ctXc1v0HM4gLYDCOopPTBjqkAXafBxaDHFsLA0%2B9aojgpvP58svftRg8uSI%2BpRPnd2eyreiNBZvSzzw4C4IIdBBqWDxGYkgNpM62X5LreP2qMD0mn670dIFbrZJqXQ8luArGEJlb4B%2Fq5iJVvk6A%2B1hTrP%2B8%2BQJLFIZb%2FX0DvlHXvZd%2FP%2B%2B3eKZyiclnrviFy%2F%2FbbAazJjbnaiVxZjFIjB4vbgp2lNRH%2BhopKsMMI9ls2QfbrENw&X-Amz-Signature=fd570e09fc4cfca7dd6e2f95ed85c59346e8237c555b30c6e8555b2982ab0fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

