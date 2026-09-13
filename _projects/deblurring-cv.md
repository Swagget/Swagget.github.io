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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXYHU7M%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T234253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFc69%2BZCJwSoc89SOKGelYp%2FtmjCTWzXEWESZzlhfyaCAiEAmwl2PVk3jqDvaE6JbZ2OhyAXv1NmuE4KAMM2Ym7d1bMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQo7hpjs8VnTksbRircA3Brvfn9B4chj%2FZTA9m5RMLxypcykg6II7Zso1Rlc1TQbcVQz1ssLd8KwoGaaGy67jSdPBTloyCJER2orCrFuMhjsgAC6pNEk%2BkXEXdgHgZB1u3l2gtDQsJDOtNZSNkFBb8rnlMcSCSf4MIdkGPPx2zTxMS9sNhYOTSrHGUutO7YG3fWwWj9sgRoQG2vdyT5PIY%2BcUfv6zhUqyebaMRykiD3yX7hK8UXgcSrZ06G42i7%2FGBe%2BYqf4G%2BoBbQBLDzKAkajEc0kDcYUU%2BmrkHtX6eSbKrEzRaWbzVjvqTNPZI0yQB67eYZIBUvUyLVcejzIC05xXbvJFITGO8yU0JQhrJFHdODlgCaNeWOAydKfRVRY25pB7%2BbtUbc6nDTQ8VCRYkehcxuOhQNQ6MTkmenLTQ7ptmZ%2BVMpZSXsXxx0bCdKxk4LzP4oosvxetUArEVYPhiwb%2Bbtk7c82xE189%2F1dZms%2F0yhLbY4UA3rF1zB%2BaVg4NkEeho2n0ToWf9VWj2oI4XLnyj8kpWz3LI%2BbcHs64Eq%2BzIO0R5%2B48JRR%2FFcx8iex4TRgFggrGP8do7wiIkqu%2B1qa%2BeDLTEWYLbogQhNrihluddltJD9NYBUSLgTngM8%2FsZ1N%2BS2RG7ASYy8NMNDnnNUGOqUB5bz%2BBSf8ag8PDWyaypJSTba7yaORMQQ0W6ED%2Fevq27XvkDz31hmQ8IyzzT5P7BwddRB%2BDhjli8hNWwxRQJebxj2JKQueZ%2F8a4Bw9v8B5JQUuVI37E%2FT%2FMVvqQqrVu%2F6zdw9rUxXN%2FmeNY6tuaq3j%2FgpwnB5he8Z%2FqqXUVuP1oHHvE2XcvLU4PwcnceO7ZwiJX62WtDemAvh4ploh%2BS5xSubyI8yI&X-Amz-Signature=17d8574fd4cd4cab72dd3f87e3d1d7423b775ece83b72a403510287a2da6ca6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

