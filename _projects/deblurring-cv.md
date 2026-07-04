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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQU77ZG%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T175317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICB4UEj3HzWtMkIaikcyH%2B1DFpeDz03VFYY%2Bx39fKEIzAiEA%2BSelnzZu2Tnvu9%2Fl%2BX3QK3E37VADqLjxdoBLAWU%2FkEAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNQD6hpoONl7vwPtWCrcA12BgAR0ZTMY2Ii%2FOoAizaEP%2B91xezlUTJn7PkQIw9JXxFB5pbehNyHfgkgfPY7NSXrMrPDQny%2FvjCfgFtoX3F0LFOHJQW%2BANJ0lzyFVu%2BnBx%2FCmAYRWhcZovf0hj0DAhX65MQM0MjSugbEoLX%2FugVisEcsPzIktFbul%2F5trvRF%2B9KsOc7GQxT7NWoyxpjznCgees55WmukTNh8tG%2B%2BTX2O%2B3o0IK1IiOt9OJNIFG6FGM70JtrPZ1%2B0DwMi51YBhZjW0w8zbEigwPygaDJTWc1p3rIoK%2BGy2Clr%2BxLmcPM7ddKdd5Zn93FqVfTp9C048c7PhUYlUbe996SOjeeW2Acz%2BIp4ogxoKIh8SGJwqPgi6E1mPXiyJwRRaIGykhH1sBD1T0hBJwYw5gkUC1yoLBjDpS0vfhjNUREIAdZqPKh1ZAs2oXJ%2B4mOKUJb%2B1hBElQQsJA%2BPUvPqQtZr0nymSNHPUOAh2D%2BhEGMfb66OmsWFtkkNTgxunjR0RlgH4uKlFAD%2Bj%2BPAB9gq2uy0KKgLNCdgyBEHfIeczAUYA0n5ZQ2SWtO9%2B0t7KY0505TuMBpw%2BcwuY5mXACgt9bctI2ZLLyO1h2PDaCt6xFYYnIrWxR9llZB0PvyYtIHzbjxc7MPz8pNIGOqUBRC%2Bz1sIyCOy6sjcqS0r7CYeP%2FoOpMw%2BWFaNHorcnO2DOZPVWYu6wxfX6WMKQ4DRLJSUwFGrNCHrMivqDqFOf66bojBiegAj73aMI08jJd2NHicVdhyFjmxKmsZ1Z8CBnovSRYjcLiyGe7CkVq7tUaJk8lwgMjptlT%2Fzgr5Y70cZIqmm2HmPUkviJUWTuiW2a07SZ7FDbKPr0P%2F9h%2F%2FgKzSdGXFIV&X-Amz-Signature=6783061da0cbee80f6ec5d9ebb0465c755be01e58fa3ede644c2084f39f72869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

