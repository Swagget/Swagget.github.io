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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEAZM737%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T005332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDoaJmHSFz6%2BBLJs33zsBtE3pmMObBkhpsssV%2BWP3S28QIhAPn%2FOzb7nl2jlCE8BIAhfj72rxW1PXZwFtQWQw318oD%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9N0LCWmPPmG2jZEkq3APIowq2OcXyf1jLxtN3FSHXvfSo18LIwzHeGdMaSAI9sspVmdRljlaV%2FiaBSnWCLfhkoJqGP%2Bxp9%2BntQZjyzYpjNowmn6Wy5WVy7aZp35cg1X9gwAcR%2Fpp7xl%2FPgwrbLs9tRENRJrj%2FID%2F6OOqVnJxNgRFq04%2BVLgXtC4%2BH5jW3%2BgV2Btr7%2BxmU3DLbP3HIhWoyuQHrLloGNvqemEeZQ890HEUBWGC2LhrSvStIt6OGAYaM1sqxMg5wE5lApm4Js1gQJFwtYJHjm9GUGsRrk6hH4m7M%2FLGeM4BHd%2FfDRI7yk5qVhwGo7ndjD95Y3FeFpI8VxoAovUbo2GjcEJ6dKdJ1Z1zP5OC9wdKeof8YAcOFWh4Bhlhge%2F%2B7S3bHGjcT3%2FVF%2Fjs%2FGNJZfhEkEBtUnjcTUXueLgGWR8L8RzY%2FNjJ4UFSqjTgUu8CDAXoY5TWaHavhj8VhkOXfmGJ69t3yasFOTa1Qvp%2BVyxctDcbgrbyfQcNAdARtM3goYaXb2AjAfg9Meile68lPtl7OjJjj1FjWc2FbWDmWoacySaH1mA4Y5aMgxXL6J%2F6p9JTy8ml%2BDl4Iuulx3IK4hwDZeXIGD45ITjHobGbc26aC3XwgWCeShdat82sGafxLHCSgajDvsfnTBjqkAaC6LMTEa024e%2B9bGl9q9SWfBZKBQJsrrb6uBE59Hgr%2FBG%2F5kJztZQ%2FnR%2Fasj%2F7%2FZCGE%2FYyJ1zkoqfQmspt7iVPdC9zY8i5nuZKRogADJOMAOVPMSOhcWMeTukpQj8W3XO7yhELh%2BTSzzwFc%2Fqz%2F4Qa0rdpjKyNsFzWlJcoROP%2FLNEXBwI8awO3equyUJj4NILE6H9oZCyPsnsIZ5b%2B6Ug7fJY6Y&X-Amz-Signature=44c60237045970fd05d59d0de52a4359006056249f77b7007e546b6dbfc61d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

