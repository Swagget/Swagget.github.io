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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3CJI5I%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T191727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXjGwDWgeloGOdBa%2BMp0XsC%2BorRRt15OisM96JSXJltgIgL%2BL2Oeg7rebVIw1dqDhQEQoT8fqwZmlYEdd0g1SlE0MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuHkbihDv0uN1v3yrcA1DFmFnvV2gtmXRwjVYAy4ntUSKmNnPaa2ps%2Fqzf3Az%2Fui3R19dorcSLyeHKi5LkTo3zZexDQBwllB0Tmfl2KbRW0BbZdswmIU6sQ%2Bvxk92noXj1DD47jTjwRMcaI6hfJWqg%2FmrhWjl5e5TQK%2Boyjhku84hdvTiBh%2FnpSoXW8oVm%2BajufW5ria268biGcXzOwvv3qO%2BeihbafYBARGN0fllM4lJxWy3rmCYI8gBfk5RWZR5%2BqTVXEJYK%2F0KRb%2FNv1x8TOd19F%2FIMNZ2KPZS%2FtO%2BrlDJwSlXfa1%2BwDAl%2FT%2Fzvy1%2BVUuWzHlQZ9CzufQNRAZtlQFbif8RUoADrA62wj%2FTOmg%2FCNcMp11%2FFxbO24WZC7v49nMFJ2Fusb0j053nlfUpYz3Umg%2B8RoM2668IOZJmKVE3zgI83Wn1a99FMbpqDFhnxXPd%2FQsT0YcmkhAlKZZJqZwsBAjguGRdu3D05ltIzSUGa3NE6zPuBDv10MEh7eWwooKgvI6iQ3psGMCGrb%2FoEHSoaXKzFp1USXEFveYmYx95OmZ5i%2FAKlMXp5Q2zTv6JwWOg%2BbD%2FRs1B8JHDMUef5gDL%2BieOdT9WWo8sq20bP%2Bc5%2B6kDk9BRrWGlUlM4hB4kh4AgkX5r7ukV0MLHGotQGOqUBuFLsamWU707qo9RHzjmeKkTISJSeP%2Bkkgav%2BcIc7wMOYFPfbOSkNxVQTvSSpSG%2BDjqbsU8SFnm28RhV%2F3eBdodtBwkYwmQmQOuVBqAVFJwomWGdPGaZR9A31Pf4aDuMKl1I0EKbIGxnvyZRHYdgO9PyLoV%2BZIsyNCj0ykEO8K9hIZHwquQX8Fgb3uLbxYKg4kQT6qPNQ7Y42oLe1REs9gIun6G4P&X-Amz-Signature=5cdcbd7a29ffa292ac7a98c453ab10bbe56a4f2b52a4d741695ebf8cb225be9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

