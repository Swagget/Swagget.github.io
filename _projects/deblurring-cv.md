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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAXQUX6%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T005408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIEjB7tQiBw1smFE6FgJXZOgO0agMNH1PgiPMvkXc%2B8EaAiEA%2B2E39WIX%2FKdCus%2FQ98Bv%2Bbhg%2FANxlG5NW%2B5EpDqM%2FHUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe35lxhkNlfsVbwMircAxYT0J2zI0eeyR40kfUAxjAM8MVMzLY7iLo4j1cr29XoOtWlYleONiv7FLQEzRH5tyFKytNtHGZAJmPclZzU4VRFuxQScmte%2FrQSkKACc6wcGz0y9%2B2C%2FMqrVBxzBTznvxY1xj4ZS1ZaqBwy3b7vhczlgjI5RopVYy%2BDrH5cvRVAEESLIv4aZo3wKdImRo2sH2bViy%2Bm3PVF1xSZwHpux%2BwgxGIye1Dk13nBO6FCTqkeQT%2FC213VIq%2FY0EvS0yBklz0gxDPjlgPyGdd7rgt%2BuAWaqd9XAmLHsqkFmvnH5yCQwbHOah1GuaCTgzYrqjdDnX%2FW6PLQLhxZFrqc7zRekgy5QQ2K0lAMhzQcZ6HEkJsTKSD9BcH8gdBr93PoO45KAMeDyQExIR8YghMEdw912NTiLIknK20nBFRp4n61udopkodo5HkDkFLhyLdCSTMptIyqZ02CqPueOVO6Ps2YsGCCf7rE4PL6iaTq3HggkNDisLaouviXMBFWyd6TmwgsVbzPClpFInNFwv0s8%2BfwIkijDrK99rzxHPAkyMDtXVt4fauaH1KwZvYoMS5XQ2DmefJOwHA1oabgEamyC0OP7ymjmep4EWx%2FTgzC2Q1rHeaK3Ozw0%2FBiJVwqar1LMOXO89MGOqUBbYZR%2FCV454QjwpjHUryPdlsExMfwgU5y7pupzVAhYCMP34lLI8LWR9%2F5bDrXGG5xXImaWNhfn2jSdwvos5cs8fm0J4Kyb5hwlWHvf7MvXIyuy1PJdtGu%2Bojyk1usb2UVfGVpYASuSvG8yokI4YQSN9t%2BmyFzH1LdDq%2BIcqnstZLvl6NbSUSt0fZgwuW1sKJiVBsKMGeB8ESyz5wkWML%2BB5bvwn1I&X-Amz-Signature=697511e69e4eb15451660adef937e6338c8996208b363cc28cc6e8cd8d1c17d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

