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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RS5Y6V%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T172639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEmRaDFNVfmsgQzzEAPRZyWCH%2FAwrR%2FVodkQ21SWJMTZAiEA1ieS5iEREl1ezwLrEWKxBCHnQOAiU9qP%2FhVMmjxi9P4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDI%2F4TGUub1vTBCoJWCrcAyb3dkTMfJT6WZ9GE2kl8MZwsHd7HpBSkDaJkxGzdrstcHmg4or68hSUjrdX5lDeeyI2%2FYXKj%2BkoDT0BFFp9tv%2FESM85%2Fry33CbcbQSbdb6hnfR0jhmk5uUjW5IdXdvwOukUDB%2FvU6zUgpKsQBYxtZrOGQcoNhDpQph8M9GHYs10sG9vWE3MntT350nkwTyywjVhUISYeyxHz3JFTDYlGtdt%2BkHFj2OJCWU4Ii2Ba3P3IC675SLKgWoHJVabcbm2oywy64uWlnFAQoaGK1AufkaEdixjcey0fYkGTGv5MwSpPROC3lTnj83BQu%2BBMTTgvtURD1GFoyTzm3jbo%2BxGeq0X1jEKtrkhxMK1ENTcA3eoMWsAoro1YMpb1r5ZqSna%2FLEjZ52rnfvECeOrbSq749Q1tbrVIhZKXghZSX7tCdz5YycjF1GyokdzWQKHtTFwOKUyT4DquwoLAXI4k0kjRP7oOBK1OYiakUyZEU230VbqeeWEzHKedB5md5wkCOtsOlyVTnv6LHGmaNHNTNoaoEZARni2z7OC5dKTvrgYDTJiyKtsVcWCCEWT8LsEfCiG3f4uy8VW%2BCp18M7rGk2Ls6rcujEvZOQ8UjinTr%2FiNpHD2KwC9qqibaRithKMMPHw9tAGOqUBcZH2WXv%2B7G0dpkJHVPn6mcimoN5Hp28Dkc1dzhcB2Yz60BBIIghqS4jqxItSnFZJVsoZQfnRki2hF8jqdm56d6CayZSUJsp1Qr%2Fn3YT0UmNApMeEJix0ijphUN4qfMmJEPBdv4ksAkzDfrVcun8LrjjdrdawHHG8gBThcakSV4kHZe9To7t6b87KMWr15zfmi6a9GkX%2FI9m%2BnVpTwPFHrP2MbCEq&X-Amz-Signature=9efa13f4d80f3465aa02d01ea0ff9c36c42b393f32b35fba7b0dbe63e554a804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

