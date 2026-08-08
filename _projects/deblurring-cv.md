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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQM5W6I%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T053306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4A%2Fq2oDVvGxG2hUD3b6%2FTp2JqqDW53JVQLHrYv8OJ%2BAIgfqlGYFm5BNMCvPOuRGjzWLHQmoCJqsNDJjGiyTq6mooq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDrjFmSsa4DP5%2F8coCrcAzQb1cVoNfn76hZEnHKfczkdLim83kQPb73GDQL%2BSmGeflzNhB5VyBRDrJ%2Bf2qjTdX7em0Wwx2lLWlu5ECasfXH49BsgMqVhUmAVg0O5jJqCGiLfzPw8%2BQDcS49PxM3PzY58veyx7W2QQIsgR2IL%2BVEc2427Zspo%2FcOxZPzTsvyTHD2rGziY9khm0eoV%2Bi8ie3QHZMSb96QmrsrS9rjfoE4W6UlDYnrR2pNCceKXc4Ha6gfViBO5ExIgzIuIyw1uGPttA9hv5i8dCLkXFWX%2F1RFWlC0KZWBU8Q56wCg05b22PcEGXlQNECQVcVma9mXaA4duAJ0MWvCxpT%2F2Eq%2F3ml4hqc3%2F2c3X4kz8OPjGjqSdqyMfPfUP28uTKU2sySRk3vR3rtrpOIThrJ25DGbRZGNSfjupDzG7HIdJ1Y33YiXG6W5gw1WbG%2FohBG%2Fyzl3RmOci0J6wLFmsj1uWgXL8rGdNvBlOPP0Id6SiUkyy9K5pFv7TgmyfQXPcKvKSPg1aQJl26Uf2pweuKoRJShpHNcSiClt8e%2BvSxg616GMjTRVOOq%2FZ4%2Fz2wucJzhIgpNdL3DZAInbestPfieLAbrBZRqfS5UsCg%2Btoo3mmecLbvA0deNckHesMyQ%2BXVQkYMMXx2tMGOqUBHQdKXXNO%2B%2Bg9U%2FA3MHBM6YXLy%2FhPIbi2DwWK%2B2lCsyH81L3GZhzHCJg7pMZAs%2Bbgnf6cGzG4k1hhk%2FYZHllh2lCKYgnUrSq0mg1Zh%2Fj4J4BVeL0l8ugteD%2FFO2iQ4g8f2rNKP7JEv133d7FJJzSeWgKGuLUTuHcYt7B58JYujRrLclI3rlTgubC3wAxSP%2FcEc76QqxoYzo6%2FYe5fjSKfGMKbtxyA&X-Amz-Signature=689b0e8aef539b217444fc17e0d38b31ec5c37a3e1b6794a62ce2df82043f2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

