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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXBW6ZG%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T213057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDru8%2FYUQBamwauztq%2FPtG2hagqjQerezOChAdVvfRTawIgX7kRaW%2B2iJL2ewg10Cjbk8Ozsvfeo1aSS4DWRDHJSHQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOmOV7lGAA91r4R2CrcAxIB5USPznQpofd6lmE%2FWcZanhFsQaGVzGlQ0sEvswV%2FAx3zjNMYr%2BP5B4dyf2%2F5f2zVg1S0DtbPXOZBLNl9eKxtbkP22w1VqChaEpGSEh15KJsOycf7O9mDgVlFG3BiGCciqtACH4mEQxGMpdrIA%2Bo0amffUlx6NaPQrBEB0yxcMqasY3gBQXJtewwwcCE9Il0Quaidhlry7kk5HrXYThV%2Fkh6tFgVxoE%2BTQtsb2sDXG1uWFeZAmzNTmlD9aG5WrVtGOXlEsqgUSkwreYKpkDO%2Fh03URD1dx1cMWmGyQcc9aKrJKatdgOM828dDtsTQ42sPgDrcJwgImnXF2cBKi806E4PKqxaZe%2F4yfLugQ6EmXP5qWh96%2BzHDsxnDgjYGbcEEx4Rbi%2FXjNJ%2BqHKHmCKTy%2BGrpJA7YzFt8%2F49Y3AITSaOlE89lZWqqDB3KwGj9cvipRC3fJkKTrqgo2WSHW%2FkQfRwabji2ycv07DhukA%2FHN0ZNEoR6yFY3MI%2BDhhrwZnDAE87NqT4w%2BF5J6bP%2FFCLRbn6e4JUhtIvQ7kazWCUPaBqQ%2BONrCpGqaxa05FNorVtl2kjyryd5sxJU7qKTwbS%2FbWJQvAPRkRp4SUf40hBAUChzdqsCW8l%2BOtGwMK2959QGOqUBkF9jH7EvxCOy4WMK2aOh0aQEHCeDotDGM9wgPNtD42B8U8Se7RT0Yex2cat8W52kun5jS76tlp2OkuRZi%2Bvl%2BZ0DrJNfYn0KKm30nA5CujaHgQKU0p5YeS%2Fy%2Bd5ttSX%2FNAXV1G8j29NxJFOSC5kdOZni8YFVRW0slT1gd6dDphwUfch3et4Moiu7JV3PR7dB3bxcXXzcFRq0mKHBhAKtY1q3QPCP&X-Amz-Signature=bb02643b2926d7f40c0d1c6b390b83749b7fdda15d2da0899235a926e30a15c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

