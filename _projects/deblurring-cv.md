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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJRALHH%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T100244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAFjF8qZ%2BLnuZrdz8MFdlko0PGLT7icaEXDRwikft90BAiABpzJkeRKUCnL%2FYBDd8EGtmkfu4dYFJquXKqLFylYV8yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QQN9asjfXCt%2B%2BnAKtwDaJ%2FuXBKNhCPgC43woPEdnAfqE0lvtni98u%2BZi2%2FAt0SxnC0WY%2FXObGYJ8RBauFI764HnUkgzQRewhzn1nFVEbwSCesspdmMP5WQPjeEnv1d91oT1yixE4M0rfMAlVzXOILMZ3XIXilifxd%2Br%2BjZ8hFNavqsWXcHtQEXQ99YwtWs6yzkrGwtbh76h9KYq%2BkwQV6tbQ7Bbh5eFGYbPMlTuAcYMdnKcZ4jbbU%2FqwimoN9dbUqAJ6zMudZtsNAGBc1ubSfEX70FZ5GQljNebmLL44DMfOqCi2XN7aR74eeMB4gBo%2FRFfUQVfgSDj8BbpaiJVsak2SowyZwUpsQurM5YmIzE2v7%2BWwlBe%2F2f9wLQ60NgbU%2FZle87E30Lp8OU68JT1fb9ouyD%2F7G7Cjie7DQRzPueDKSF7snOkWmMx4EGi5msxTgaB7R%2B1RJORhu8GA%2FXoXeBjnsBLAcRv3ZF8oXi3MjOHEFAouz63hb%2Bjky14gBIaWuo%2Ba1OokuCfgHoUgvis%2FtsxO90BKvTbCTDrtfRSt1ew2hTnfinaa%2BvIKRqZOuwXHWpNX3t4RoPMTjQ74KObqX8UoL2zsOr%2Bt1XJF%2Bw0bI8HV%2FO6fQ7H14tlg2AmWNINMe8au2aNQgkFgaMwupf20wY6pgGD6aQPLTfywcTNg%2FEM42tQhbYh5LCybmC9g81SdNJwvBBOw%2BAf2iz9a1lo5eJcg3S4GAAz7c14UrxGkfapf4oNMS56cKvsGAYdBI1cRAm49KUuDTj%2Bd00MoIOIxSaO09BDqKZmaYYQF5%2Brw0aV7JV3RJHaO9JGw8jHAo81BKveLrhmQ9RoaCLHFiKnkrp9535aI2gEu9S%2FwL1E5q4Soygtepriy9Bq&X-Amz-Signature=0a1dbeafacd79a9115216fbe8fc880602598d29f7cad54abb8caaffba8179214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

