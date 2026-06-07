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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZBG3TN%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T020927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqiYxCKWaPdYxDIOkVvgRSu4UHgLeV%2BfcjmL0p788OiQIhAJ%2FEHxz7Qe6t4NZGrAtEtU73FtJ9PL6A2uOTX0qia3idKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnddBa4U3tfIKSmKQq3APjTBL7l3dB6deKVv79Qb1c1i05TZKYnoJD8zOQmKQ617tAdGNauGzP2huxR61oRPElrscOBxN2StfLmt6O0jBkEne0Bksc9RNIaDCS2CrQmS4dlR7YC8Y07ijsM11V%2BvK8jI6GyjTHQ9huGQLZWmpPO1qd2x613nJoo%2Brg%2FMEz%2BrDYW%2Fces%2Fk1Jn9XI%2BP4M3%2BrdwMel6Ex7lX5biywpEk9xBP3NDKeqgBMoDFTIAP3d%2B3hO626PUMev210wif3BLNT8Z1Ap4aMS8z2gQbJn%2Bb3h4U6mtgqbidvn7AuEk3SvUSf2JrynbldbMAAr6zBAmkObk%2FFQ9v3r9WNt1TKfo8hsbHlEscyw6s%2BQ%2FsEG%2BekjhNgi21n9CmLZucm9mAMaXEi55rH8pkbuRE5Zblwg4%2F69dwTPRJy%2Fm2ZJQV3iU8OdKpWlCnRO%2FxHTvL4%2FPhgrmxcUca0WqXhWLFd8CNE%2FsayWg%2BjlE0Ea8%2F5UmSvToiVDY8mJb8HhDNEXLoVnePgR5sfJiI%2FMvPa5aVB2qmSqRPLFaipKTELZp0HtjkkbUvFO%2BZ7yyO91CTkqWDBFejRwahJ%2B73Q5n%2F4ez%2FVWvpz8EL6HqR6WyGHdpm2NK1j0Bk5m0WKeVEtaZH2ohidJDCejZPRBjqkAaODjHiFHdT0v6xipw%2FFwpClIRAA8q9xnWYsj0vdtVADELxAIPoQYcWw0MIpj7xZ7z3vJS6mw2KKsCdmgukur%2Fob838iB%2FtZ4Y7pBqZY59fxN%2BihTViTplcgvLbaQKZqgxwCtyjaE5NoDUg6vLOzEtiSoTtk1wmpZS%2Fxy8r3HvwukmhvgyVvZ3T53wBYXTBMJIhzAShn1bNLnIUXYduVIy0KQbxt&X-Amz-Signature=c926b38c68173f2663ce50962ab2c8a6118c888fa877b103c120804ad19dc2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

