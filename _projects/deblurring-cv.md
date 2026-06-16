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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIC3RVII%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T115952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFdjY9asjeHxMhHLQzb6RA9HbF0F5VOWH7ikua4gWSgIhAJCvl4DPBH2xgW94iRV6%2Fo0IrUe34pebGcW5DfgLiH1wKv8DCHUQABoMNjM3NDIzMTgzODA1Igw32E2X4g%2F2gad4Bxwq3AO15aSwYu6ao7I5x7G%2Fv%2FMuXHALib0ETOx%2BDpV5Svq%2BYFPZkogqhQ6Yj5Vqgt52vi4LMvqkRARWc1tP0Gv2qGQoAO2LwJmuuLdWObat9A7xFybdSj%2BdtOg%2Bsz3Wdf38eczrgZ4YQLjS3UNcWT13RIiZ%2BUMerB6CH5Vv4D2BUtd9uZmBuyio%2BGdWjkeLFcVzpvFIa6HbgTZCH%2B%2B8QiRq1c3Kbi5ofVChMLwMEb6xi7ES7lCSFtnN8VFde8J%2FIu8oddgQtMJdaMgvR6ei7RvIXz4lUiyOQ3lh7piIOES4G7GdWwFaJa73H62VzM%2FMCrURYzIlKyVf9J8KC2ukItiAFUVOWAyNstlSPdcj%2F5O9orvwLhTMi7pjnc7Fr7kGrzvfetORTKKIGe%2Bvh6g6gMid5pvGtxj5Zr6866fl5dBYtpMAhujImYK6zAWqQv8XevMESb0ZDDnJi1aUMkwZke1LVOqfffckLgAhpXxUY2hRrQX4AQ7rxoD1IJNF5OPX9%2Blf2gAgn7LjYebdFzk5vuwha5LD%2Fj3o4cntx8jbXQYDzl50bwu2%2FLZ8%2BSXgT3X3M6z%2FaICEC0cFzWrDql6cIBunEUcmjR1ib6oztF732Fp98%2F%2BgzsPSDjh4KsPW2HRGTjCO7MTRBjqkAcSdbDx8wm0NYRUmGe%2FzxdrqbyK2EYhYRdSis9GuD6chZC%2FJlZluGx0z5bp22K553PQz%2Fe2612kva5JESCFJrCDUIHvQOrYcVkFRFuMgRxVXop2NnMqIwQiQQuKi9XZ4A%2BAp4BJpBYT1WnpcFabk%2Ff8NK4%2FnsCH0r58tJIHPgs2Bk25LRRKPw65mSlN1Cpll5ZRrKyLwj7xva%2FrN1lJVYeCfebsB&X-Amz-Signature=cf7c2e977d3d149eac6b1e1d48a19ffd73ad9d6424e5f9e6cccd4367567fd15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

