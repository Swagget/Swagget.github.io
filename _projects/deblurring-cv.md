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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CRQBYM%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T133633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9woIn8Juv%2Flbqg4p5Zf9QsH%2BgZutcB77HZGQ7TLZC%2BAiBPFaUx0Zn7Fa2927qo2QNzhYRyZN6bvWdxG%2BKMxhduCCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf5LZHcZ17NbLob67KtwDMq8sg14iWS9UqeBvDLwuVbqJLC2pC9WpjPn1zu5GgkOI3mImPgK1RGSW2V32DrViMV%2FWMP8DEkLb15ef77PMVmVoKYetJVNIMVcZp5NMjOv%2FeVSYm%2B2hpoQE9GFYnSvmXK1AnRBhe94kGlGfl2oB4sBtC81p0tBpUWlaM5fEXH8Y6JVQ%2FDkCrLDGbGqlA1gFE53KpkCy4p9SnFod1otUl1wQrsgPivHOs9ko3f4O47wtoh0%2FinZVC462prcyvP5usnGQe7%2FwCbHkMyk1z9zsVSNBbOpBfCKyooyAJmDHO%2BNtGmgObUMnp9FFX048I8%2B5y2bSmHuohFVGP3zRKUI1h%2BuTRt9MkWHMSuNo4YakrmzZ0ar6SHZzc30YfQh9shMjE0mSkizjw2GBb8FOsy4kRBMS5l%2FogRn7E5ighSdsHLWB2IeYrnVhfyeMM6%2BhqWzRpz01Qi3PQ8kmMgcI%2B94xms3WpqIfQk1ujCZRAx2O%2F%2B2HZfjwlhwDw40BPY7QuawZmn%2Bprt2QNA2v0pNioNcuECBWR7dHplyZOvaROJwcnwYatT2hnE72lzEGgGCgkDCzuSZKfyRaDqZeJlj3U7303kyh%2FGob619WFPPgXU79N5SNlfx8rsXemKm6fwwwreib1AY6pgGOprHKA0arglS1XgGLfoOHtl03nh470ooamhiz7xNsmleyp94qM%2B5JXxhL58OJHB%2F%2BkFwvNDVjvyuRPPxt%2BRV5uu6UXpmk2VneOEwcRhZnpFIdjnMh9uOJL6nLlbkWvqo9BZy4yU%2B4tizGrqmM6JpmamYTntItEkXobuvjpCA5qhZ9luEBcbxpgHUnw1PFd9yviYB2slY9wdEIM8Q%2BQ7RmG9zgRAc2&X-Amz-Signature=ecbb3e72edf438fbbdbc886de7a35c8b82536ecc43355f37116a7f3bb3ce75b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

