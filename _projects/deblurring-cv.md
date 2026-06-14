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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4TJ3DQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T021314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJFMEMCIB8ezlvQPwhbNLCbqTpZLw8LJ2DV88jpMV7rI4G35IbtAh8Vr5jW9x4pAEU8WODqDzlUufOoEj5WuFVNGNcLQDjSKv8DCDoQABoMNjM3NDIzMTgzODA1IgxWaY0hhlOEuOeEA%2FQq3APb2z7%2BU%2BRkJKrAkYJpk%2B92rva5g3p76K230ABJPZkYNGS2V40xIVgHofC9DFt3uXszZMBWTCoklGnJ6KdrfE%2Fg9HO6ptkzBN2kj1xEZI64AGl6QALkjIC4d9yyGNCjCkry9YRTRB4f8Qa81rsQDBqQ8Hetmgy4tDWYawBlIQRK%2FHLxy4FkMz7kcGnm6HBZLnmNc%2BVzmwJX51HdEG%2FvQOUc14ba4djbr%2FNdojxhHqS%2B0JDAqU2WSsW9rozSwBIyrT7Y5tlR5QzVfqGNxvGxPmxWaBz4sqPO0f59MBYhbiwHukOd0a5bTXhNjedt3bi6aGztCt3GmKEpSCcZCjTC%2FiZQLXGDaSEnV6KJQCBaDin1jpIzVBhWgrwb9GkO6LhV%2BLE7o%2B8y95quM6vzQK5BGcqoJV8%2FyHRwqVYj6t5IUMApIbpaVaKEpfTpmZsSyWzHOkslNuRhdLGbWA85uFt0uMr0pPDjIOMDLgRf95SLktIWDL1uzQ1UeGOl%2FY%2FEAPa2R2pU%2B%2Foo86RizUgS0uAnUqIVrQkPMuEKPJQSGJCkAqYEoeEQFbRL0OoLRPtY7KNNUfAxJIWX1BoymtMZ8aXcaOvjdKaGO%2FM%2BY6j0SnLkN7S%2Fqfy3BJmtsjWYhWin%2BDCigbjRBjqnAdAZVf3ijWqYB8pSzsNhWt2zBuxltp5G6g10F5Fbl0zvq2iTQOa2YldLdHC89Xfv8kv7BgGyR9aYgd6CbLRQKbUDJFoVXEzqNdojx0u9l%2Fyjz%2BS%2FJgf09nWcRAWxJ3fRe%2Fj6%2BwVfkHMGkRrVmZvqF6kWGAcZtnT9mUzDGTxrmLhuEvjmkz5VdQGfDdT%2FSPfxy%2Fj4dT%2BbRskXAKcRzQO9%2FKsk%2Frpgwgk8&X-Amz-Signature=a2aa3c4e61b517a3aaef6e2624c0db3cac48f5348d235868b4ed29d7b3001582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

