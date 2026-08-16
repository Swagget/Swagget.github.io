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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UJRGQR%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T091505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG0jFqV9awubuYcfhK%2F20NtLIjGJousqm1q5Eq2UudiOAiAFby4wxbM0GGWHQdjNh1YMZTjicAFukVaKaDvN5Lm4eSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM5Yhj41ITZrQ0vc79KtwDAYt8S6MbWKFGReh%2FwdPwPFxQ2ld3VpHlTnOW6fNeSl4%2BQOTilSUrI6%2F%2B6vMjviULSXYf2WmLYEnZpaD0v59Nj6Rx0VGvuHirj6ST2Wff%2BKNVzgcsMUS44StmSZFxzYteOTDlIRqZyD%2FULdtNCXbb7hPVxtuWsC06NXAA9yPVNVrDBp%2FVcK2Hud0cm8kz4zMZmcRvj3aG76by7PsIjon57dQWQno1z7dKEJ2rz7PVS2GYTnLS0jOolaEcAc4N0Ml6aXJ1EEZB6sqJ3f2d4eyaDEPmsXs6W4qt4TCS0ZWrY4lM1wtPR%2B1bjqnRMZ%2FHw8DX4OfOGy1QctCHPUZ9NUZyfm4b67wZtma2O6zhDGhdNLD%2BkiGyrXkiGPM7F7PrEJPTFJYQKgB%2FNG8t1wJqTJ2T%2FpCSVVSkJiUCJlvcVOx8tdgf6d%2FL1h%2B9aykuHhIRs4EZk8cjDr%2FEadyCivX%2FgSKqVY4VY%2Fx3AdOP2izSueAYbg582ZriyLqyjC6Icq9wmSVyw3QStsIEk00dWmjbhFgaauNplWDRO0DcQ%2BID%2BWoqDd1fCI1fOTU%2BF9WwJWkHNc3ZIR9rstHK71DirU8ettdKlgITOKBpe3V%2FEboWN%2BDBDq41bJSBdej3MNPSEzEwqoKF1AY6pgH3Pl7AB67qK29WkFyuPdhvmyJaodM1O4meWeyj%2FcBeYTogt%2BXtKTME2YCOaKk9w60xjquyfUjQFkBgq5dydWFGuC5qn1%2FOOuGpp0fSDGZSnmAZvCb3Q8rzwIZTQcqzt7OtLZ0aU0O6qOdI2e0IFAxrURkYlR1ucuHV1pY9kFxiQbRXTOK4YpaFr08vrHzBdRrOSUE7hfx7YkB9bRchG%2BKhq%2F45tr5Y&X-Amz-Signature=eae240d1e9a2ba574d6aafd8bb1fb49c4770443a9d4240552c16aa0f5642c119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

