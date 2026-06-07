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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBIATWWB%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhocudfeKxaxdUgpPHMYV1x63SjGvwQytG5Lf7sMz3pAiEAodujNbhYehNG9qFz6RDt7x25bR%2B6SoyGOn8rKTQceuIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUD0NmjSX2hmL680yrcAytpMyKaG1GqiBcIRqcS7%2FNvhwdknXykQhISINL1ZAdyfg80v6AipOZ%2Fya4gBcoe1PLyMM26mOkVfSDJa09kz2dItjM67j37K96%2FZLJDd4WIbXwPFWlJSqjji2ohhS9ZrgYhuw2BWnnknks0hYTU24BSKXZoBMbvtW1QAePvFID%2FX4amrvCTpO868Gop%2BpYjFs%2BXeOGj3oB7DwWX%2F69SxvmlgZvedYWHrhub6WPfBqgKCRBDAFJkqn5wbDNr8hqmRZ4pb%2FpyyCKE0%2FFFEQXvi3VbiXf2q%2FAckWs00JtWDbNgBWoodfhRs9tb8uLNKYCY7eaWKyXn2a8VwDL5eThWlwatTrmw%2FYdy3O9zCCN79eKS5Imz7Jc7m8bh2LKBlnHfmfGeqZEslRjlg1F%2FzXtf14cuuy9sHDmNRmwvsTi%2BNk%2Bj84kXWGYEQkc0OkMhSFduBecH1kcuVqqcNjjY4sMMI8CUxFxAgbh%2FjXlxzOW2ipaEZQsUDJ3N%2FpKLJoTb%2B8BvsuKIsgajeThb%2FnQnWbS7tqvkIuH%2BurCyItGscp2ndRZjT1aviJmJ6%2BdilO65VXt8DZpxsuOPHPpJ%2BoREAykoowLF1ZxLvat5obd6c%2F4HVw3YZgTX0Dv0YTVBGHcJMLCPldEGOqUBKKipmvdHcnJh1iwyqmu5ulntTHzH8mL3DdHNvK8PF7k2u16pL%2BTbV2y9BfSqbbqxighgrmI%2B5InJsUdAIrxlkU1mlG24uonDZm9nPIdcTXSuYU5OZYX5UYp%2BINViR57YPeN97f6eufA81kInEujvCBwK%2F3ybh41GvVG%2FgrIp1CLz1CqGupnI%2FI8r1DYmUY4SCY%2BViqHABa5yiFOBO%2Fyq3tlbKKK9&X-Amz-Signature=bd74f6cfd71c3aa05c645a2100f8e4ce5975a6e4f26d58cae27113de96ba3c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

