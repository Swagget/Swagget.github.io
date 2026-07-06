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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVEN7QI5%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T145110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2C3Qj9T3tuqnXHXx0jIu7lBZe50jfhcfjpb%2BjWdqwHAiAqCSQtRcLCoQOA2yS9HyPvpoJW0KZtpxVJvcN2no4Uqyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWyecTQlWS%2BHWt8zqKtwDdxHp3vV5vnGhixK6k%2BTfPQUqbWk%2BW5LWF351GPk9595OiilhfBlwByNODIHkPqsoRZgYT1NGSvt8LYzvHkR1jDdC6Yi3SZaOQVVOxiGHaYFALqz%2BP%2F3hdLnAgGKs0C4wIf82dp7tmCBF0T3CxoajnK%2B4x8RWvZrV4RFPfqJXeSRtB2Spfd03rLy%2FfXi9BmX%2BmYZijrOz%2BGOC4gvAoT6zL5yCO2IV%2Bi%2BdvyulipKLfMFlp8NsPiWOvqzmXg3RpfFq42ddFPIxBOQ71Cp85g1JtCifzIKflwcszBxA6D7s3A4SqzhVj%2Fnf7RXQDZqzsBLcavy197T3%2Fj3RZe%2Fagye9iV8bsb7ariMdtO9zFEyGxAXAr4%2Fs6pOihHgCJ28pHyl8haBtE3wgAB1nP95re12CX1Q%2FjIviYFgVaYMvA3pNRGl%2FsRrZ4HcmBm3qNVN7fq57PUmfzraQBck24e2P%2FIArZ5Bwk8D9r%2B2m0EuCdvrS3OG21wdYfHL3WTuZkQvChjs64VoJtNfYt6j%2FBzgmmQp1nXmkpyz%2BrKaGJbz8AzhPQXu8943qzi7I7gFrucXHeDvbZdwPYpg4GincrjN7pwa7SHzAdFbYUiKTCEoERpZJi%2By3Sg1em%2B2oa3DLiVAwkvWu0gY6pgFJpeTGfRlNb3QDHyH0CaN%2B3oIrJ6immoKDzcxeA6PNb6iyIWaQjdzEcUTqpiQWN4UfN72D8lEhvYSLWKXM3Ubn22PGb74uzKljRUNY80ifp5zf8Do6fm1i6Hghyw%2BdWGW4PLc6JWq972FHh%2BS1mqFmVO0MCbQ%2FNnI3jzdaQQ0M%2Bgs2iutXJWPwtQvW7Y2o0zT3D2GeEns%2Bj7XvFn1oBb9ebLIqfAno&X-Amz-Signature=bb259c856a49cb6d61913dd103cf265bcccb3dac576e684ee23232d7e44995fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

