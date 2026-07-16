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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLMPQWS%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T165926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCeZVeb93VRMWxhmHvsFdBPKENEsh5XSzPHywC%2F5Cl02QIgXDEHp%2FCWxWyxOHPCMxvLIYpmtIZXuaqlq42eKakEBowq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIbew3eplM%2Fe8jyp8SrcA5r%2BHtiy54G%2BIn7al70yyEbt%2FSE2lT2wU7wXX%2B8hKvL%2B3nIkTZqPFKA%2FgowANA6sM1lD%2BlJGB5xF5MEI0OSSqw5EJ7LdT5JbAQCSAXoQCM2mNxJ2buW8TGGxYu%2BF80KHKMtp1RN%2BTk4Mo2VBWOoysSqpRWmUG37zBbmru%2Bqylp08XQhd7%2FE2Nln8ezCBnXMqvj8ULxUObMifMSlq7zlf9v%2Fq21%2FGcoR1S%2BAfYfFeMSRQx39MXlSl%2FzLaMMVQT37u1OFXFGzVXcz3RX1yaqTHj%2FA2AsYPmI41AETxuvH2inJeTGfTYNQwSe2q4H1u9vCbpCvial7ZZjGcc4mqWAYvDrJaJMwBeJaJri5slv01xdbiISK1HApUUs7uXcb4kdXv%2FzW3J1KC%2FvqbOvFSK1jkUiEKOftzNJSv0FNwYl%2Bgldz3GnM6FqGDGnbAgLBXHCXNmPhWQj%2FEnMwKp7%2BIfxKgEEtEVs%2FXiZQG327dmjaV72Nlbqqu3kQ%2BXt%2BYPcDNOTVUZ0DD1pLjKVYCCu%2FbCltR%2F1aB5FHg2M6AuWt6QbpI9WFQt3MdA3%2BG0fCZ6W%2FDCFXoFatAlv5lYRv%2BSNQ4BDSiRkz6rNPcZKeyMYFtadf8H23X8OhYwXVAM02t0KcjMOHE49IGOqUBXoKsV1OvN5McBtLu7UM%2BnfFbep7GDIbEVXij0OylzR3hQEP29HNtN17LGMfDZj%2B1GXCQYGt7D5gA0AKPlZKhxV7LNn4Ih%2BQkO4CGnKuZ7tccfWidWALCX0JPl4BIiF1P9fU7PpaRWONqt9pHgs7%2FceEWhzEe5tdRkO%2B0bEYEOABpmdOFldZt4kvXv1NrA6X7Ho%2BBEPDFUfvNxPygiwOCyPBTQT0I&X-Amz-Signature=996ddee98d103f530824147d66e5efcc3d41125c22488d9f8ddff0f2e3d253f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

