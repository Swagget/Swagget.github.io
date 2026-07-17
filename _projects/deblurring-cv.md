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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOKCBMK%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T111200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Wy8yzXawCjdq1TZFm8jYwD84RCP7rK5RsK1xaZcBvAiB7ObXyK72kaYwI5bj7G95RSPCfv5D%2FaDfGbj8n8wX4%2FSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcZVzTJdgS1Q%2FVCmmKtwDs9GfyBpyd8qPz16YU9h8tnSfosWYUBE2fDldXsC31mulEuT9XWfDDpkNghl6fCF6K4sf7CQTWqRskkK9dFxfZ7SdLxrV7HWzKl%2FWyAUzYn99mzW%2FyA%2FR6SU0AXuKrcB66NQIxPVLmonlSNwSSEVKbkEdftfk%2F35KQ9ReJjNSatm%2FtMbXH1WDq%2BXcgZ6mp0X0xEqD2kjV3R4%2BJd34vwUI%2FAkhC0O192SOcWlmi7kondg5E7fgSXO4EuFt%2FPoZ82crNk28ge8wdPA5utQ3Kz0bTJ%2B6sl2WZCkRIZyNp0e6yzH05nDLeLCXI7Jj0Cd3M1AQmGTl0CgCJkXHJn9OHuf58dMrYQ47p87CFEW5nzwBplpXXLFGFhPip6V0BqGchiaQ2TG5xOBXv6YS4Xu3riXj7bMYmadV449UetuE5Ct0%2FtalRdVgEQXHw4bjeYpuk%2ButItj4NpPYsN0FmMPnC6Jd%2F1UMzIxnrySmrGY65ooX4LJCdxMA6toga6TqSbWEYQ3U2U2OiraddTxnqcawBzHTVUkH2R8lSC2jODhuccgJ5Qjdxhnb0IejUOBiC2qfFqmCloVRjIvobH6xUFbgDsTL8ZDZLrXmTBgx7bX0%2B6CkI7Zm8TDxK8gP%2BVNp5CIw9o7o0gY6pgHIIMECrQMXS2JkZEZSWvg1UZejPW7hMhcHQGC2tDM%2F88wCUS7nnLX06VNRxX2dmOFOH48M%2Ft8yrevqc%2BtukFg9tNQ8IgHJT0I0QuReBzlOlwAl0ploENmANJx5g0Js7LQz%2Bey2sO%2BoE1w9vzMLXb4paw8qWRDWwvNAJNPp%2FBcRD16L7m5Gqd6UmKfK1%2BLBfs4Bk8ISLD9mDRFn9w1cdaflhhXuDjs9&X-Amz-Signature=bdb38a2e35cbc8440e5a95c2c0519d788218f5d31a3783c9fb9b062560116bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

