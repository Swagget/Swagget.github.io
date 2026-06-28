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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOQGS5Z%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T235745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKzyo92i24fr6WH00VBDMapD3cZSmFEmU5%2F84fvJswYAiA3FnQ%2BU9biRdgQftAVW%2BExrUj5ODrUXi32adfprTg1jCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNzeMA9Hc3Ch3QllKtwDAUZSd3gahL%2BZq2LkLuSx1y9LsVsYM0ZKJU89dSklFLce%2B%2Fm87wOUXBsMJkUGbZGMOI0kgMqSj%2FvOBnfiYM9M41tdF69uRvsPeBRJXsP%2FtH511v6vTXRdxbGtZAKm42yjBONzRxzL%2B1fNhHd%2BOUcW30GVEtfUP8x2gxO49P0Y8sklVWaP%2BoSH%2F%2FdGSVrfZd0x4bkan%2BNWA5Dd6BYamR%2FQjCrI%2Ff%2BuWve3rbOHtqTKh0Q8UG%2FWk8yufiT%2F7m%2Fqi0kLglRg33x7bh4mjUJcmiau51hz2kZqj7PCAQqK%2FmWjET%2BD4YU9HjrhPVoBKp7s1TXjt8Qg7MSyLTjIR4BKKrpJDtI8iscw%2Fwecf%2F%2BIfs5UvU36b0AoXDC7kRlN%2BWF3DVImDC78hA6n66AtrOcJALsiqrUqxQL%2FYcu%2Bp9uGZlHhepFl6ksBCLZrj9lmRtx3eoufyIpvu7mtXXsY6L4QgNfqwoRgwXj7%2Bec%2FafmsD%2FnBkLsN3tCvvi7DBNQdhpTczkiMPQlN23SM4mpfK7PoH%2Boidc1RSubgCS1vzrR8vru6BqhjrrNnUd5kRd8ndBpNtoEcYIUB1l0KQ63mYIqKb96To9MJlUklc2Auxwy6jxGB8pU5TprUP%2B%2BH3NAPfnAw3d2G0gY6pgFnXHvQnkoPTzElKTKGxcdmNRanDmG9O2EIyMG%2BDMGIx%2FozZShMekoM0KO2drVQAeJIz5dECoO47fzHgpBDrbSdatNhdlns6AvO%2B%2BK6HKoBVljKt1AummB6mgujUQPbC1ys46q5doaOVPqgZinWwRnPqNO1Cpt90C0ERyM%2FcCJyvpi98SE%2FqygFv8weRHgRRpo%2F2TCMqQN7v2aP7hV%2Fy%2BTtjoumOwYC&X-Amz-Signature=5d74fef888712554bdb00438dfb74325525a6ddf1a7899ca0fe4993996107579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

