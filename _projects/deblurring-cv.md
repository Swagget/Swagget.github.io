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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRNQCFR%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T165605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhgd4RlHkD%2Fqbs7YFCelJ9fJ5Wm7YzxHgL1Z3iER9evAIgYNUFj9j0YALQVU8KCwx0wwlpB8Z25c97rJtkHBknYmsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSnVSnauS3AzTbA9ircAwSNK%2B5wDdtC3Z2HQukQyZeNl%2FNh2B4MKNTUUtCqHn04p%2FkntF%2BL%2FvSOpSLmlR4rmm2ByT6u8YsD6NX%2B0MsLkjvc%2BaM1FhFOhln1frZYswsHmYCA1%2FUhjy7Aj9IcqJQttIq6e3amdmCFuqlylFGXic7m2OElQhff4gfLoBk5QUI2RIMfyeQatO32OXcIrngcfKZXrJYIQkfkdKgOqfFIaIuhdYxftnZBS6vPs%2Bj8hvIRvkK2F6vbETqJnVjI6bv9XHde7xTFTIj1yJElkYx3FBFB3xLwb%2FjKzY3jJeRS1v7BzqnVTHA0UvT83RxZr9%2Fn49ZFgvn1XaRUV%2FctG7wqAn%2B5CxlEBZE%2BnktvHh3GUuMnj1HNwmVGGV%2BArBHkToyUHsmhR3zptcfpLWfIZXhsJYJq3vaSMctC6ELtwuhMlucrZQKxSR8fWTTrDb10TXaZJEtH6qiT0a0c06drh6JDEpW%2BJ4wiYYwdUC9h%2BGDtYNYVIJN35A%2BaSiZNOZ8g%2BKRVuwUMV3wiXBopa8%2B1tG%2FG3LvgNy4oSMjrwhSoIGXLVyjkruk9i%2Bt3JsXyIcMI%2FrzgvvTuiSFdq7ZpuR18PWHzJOoaTwx29ptbf35kklJj5fQeu%2BT7EdXRzjEaCqS4MLn2kNEGOqUBA7mlO00fTr%2FRJs0dB6kcEmAflhOL%2BOMtCUDcew3uHAlswdTjCgitbjZWbypXUBKeAlOpiffkLjoKbxin%2BAzIKO1ysPNhTyJnq4rGAQfD8BiP9C%2FUOMJIeAEhitG9OaIElPoPiKx3wt2Tjz0kz9KEEE%2BRUPGR17qUWS3aiHEtjJtS6aDCzevBXtVi4C%2F9%2Fl0AbkZxSzt%2Bjuc0khICZ1BAx7bWllmZ&X-Amz-Signature=c192ad0bd7f7b9b8dda02e61b6cb307cb63f5b6c81b3e6cad4ec07100142816c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

