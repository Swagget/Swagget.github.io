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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISCJKGZ%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T164107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx4khkrhzm%2F0YQGID1e%2FPjuLYTSl4PrQoaPtB8EOPY1AiA%2FpvvlNjoqNiOzyX83TLgd7%2F3LNbgec8Q2UEIJ%2FPpURSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMTui7z6UFA7jBu8dRKtwDRVzIWjlM4ipyo%2FjtHjX79kh62OA563Txw99Fv43%2B2na3qWG%2FzsOok3tVEQmTjpJuN0W5hIWkvP8vZbMjHOIcqgETXKcpkGzc%2FKnj5PgkQ2Bh28deGW28j3%2FGZDgsfzP1XvAZkfa1iFCNP6w%2BHNvVPOV8H1%2Fe2z79i2kHcse8fyzGJiSUPV%2BsrvNcXBSaSm7SGMxSynN921egeEVvzOBDHEH8tNt5MmTiEmshZI9ictOw0s15t%2FFY3XSldrl4RNQo8xfJpwByYypv%2ByzOVIepUAojI64LNaUw2m1ZeZyCmZq6qtyR1l6rNH2eXIIx8f4NBU6Ku%2FhH2FUT620K6%2BfIKz14UO%2FkQvmCcGiv4iBUbhgblBQw2iQDs6yO8spHtAgAi%2FYqXGlKglqDxf%2FMNcCcKJid7e%2FMWZfoCvm5CuwWSrVXuUQnOEC4JGGgVxQqT%2FMoFhItiHv1Ck2s4t8JzoMp%2Fy90zhNcOTCGeqSsZpzj334u%2BljF5Iu%2FfimUxjIhsPyXeD%2F0UNK12khcvy3IuLocB4X8lTJpo0ILixu3bAvy6fTTOkrXRb%2FPFtANyKonDLRpVzhUSc8EFB2zx0y1ryifBB89IG3%2Fbig6gl7Q8zU8gjLQ2ukW%2F8q1WeAhf%2FIw%2F67u0gY6pgHBjTKAywa6QvdYAn4QWaQNVg9f81Zug%2Fg4Ujuu2j%2BeoJnH2N1G6kDsD%2BaEef%2B7Ll5Qz%2FfO8naBJmVvYvXfuULnKz76GlYtiMkKd%2FgjlDkiZWYEMAWM65j23OoSCYMREaA%2FK3uHPqjRSgq6OWcPkQRn%2BflcucZD3o2OiPNU%2FNfnzuCls7bNz6YecO1B7neDXXI4ARlixb%2Bp1GJhjKERimJU7vUjUcbV&X-Amz-Signature=459e9402e6d44e1db7deae8ae609eddf82ee385495a8f6a77925c9844e15f00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

