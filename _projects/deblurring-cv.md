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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVQGMLD%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T193924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDSXNTBQv5v5cm2iI9LxveSzruDn6z3tUJ7JJIUisW1qAIgJaGITVUsBxrhfmZCJP68hJ1t6y%2BYDwnsl6ra9kpFbpQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgH8oby%2FJXi5mRakircA3g9o535ttqLzEBcrJLH2QSS%2BDGnDyvv5pCWT0g%2BL0d6XVDWkjDAgC3vjuAXdxj7JZ354dD96WNq1qv85cK6LL05ObsZdyLBgpow6pIZ51403MCXxzD0%2BYF9okQ6BHLVs8bZ3k41xF%2BeP9mzAbevEMRMTmI1PcfQbLXV1UTUFH%2BWShxvdUxj954k4IG9LV2rTsfuHnwTUOTMeiLBJlyzEV%2FXrjXAKulxtEncC9t2p6Ty6SEIzg9znmR%2FLJqK%2FTtMsZZwnlEBaiobeBKK3pab8xC6GcblAt%2FfmRU1P7IopLvFPoqfoQDF2QvqVS63ITXlFzz3T9%2Byc4s5m9E4sQDYATovwOk4TYT54siIbEAgYSfSQ9AZlMhI3HOYmLr2JRrIBQXDQWPsyIQB4QUl%2BZtVQqFNzhKrNyr2J1eX7ry6%2FOkQYQl1OMe%2F1JadPsV0Ufozxl2X1axN5os6B%2B95XyMLVfWCCjvInA95bckbUyQjy5FZ2obJmNXWhfG70yhywQVXxZw6Zq6JN9TpF6JEr1T4SPLj88ROR7Vpkh03IzaKVBnfNo2Rtt5A06bOkLVIj%2BKLMI2J6cviuVF8l7fczkXOfb94x%2Fic72QcOy%2Fz2z4eaNseNomwNJ0lL9VBkbkyML7foNUGOqUB15nrZ3vnQ4kFxKP84gfAUx68TtJUNYJURPUg6r%2FXP0kHlPTvYgV85%2FkKdQ3ukWc8vzp5XfvEsxusvVOWW88IbYLDQKaDOr5HAv317cJlLQ2FdgUUCzH0i92AtLRDC4GPvymC%2FpghspT46vpEbWXr0S3z9%2FrpfN7uB7WIE%2BIALdHikoBFYhEN3Bzvyxul%2Bh6f6FfGn95mAOmz8c4BBmVFr3nPdmRP&X-Amz-Signature=f9d43799c17586678d0ea0357e841ec32e81e2eed73692c1962e18adfdaa6bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

