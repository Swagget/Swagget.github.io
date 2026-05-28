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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNHQERS%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T125608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1izKxDAqDVszTjjBDo5F5nx5sau6MYMot0pSFyu1WyAiEAr%2B0VxeZED7wcAPqOkA0X%2Fx7%2BJLc9K2cM4DaPnoqpA8EqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLH%2BFEE46izslo7pcircA4UZGIIF0zO1eApsKg3OjJXDehS72Z6Z5K3GrSanQ3N6r14SQlHi93JuHZeG8vnlSdZCF36UKlju4BHefQin0aUKX0X6Q8mgkE9qRbSQmVswEQQVDsVRYIp7yR0ge212Yuu%2BP51V8CefKGdzLrJNfLRheWqGAK%2FZezxL2wbAWhqPz7IlboaVhacvFDeRZ2wa4NgCcUyeHD9BbmGlT872gzYhHK3%2FZ6Ecg%2B9l03R6fW0pvRGmSI%2BTWydddibrebtAYf8rf74a06Fp%2F6kMkiEjxN%2B9nvpdpb4%2FPfT9bXqdnafuKgYQtr8jWqlgQtKPvijDLXx6eUzHGA7FOHzbgJcr3e55PHOJBqQ3cY%2BNHmVF9iKrAMtE%2BJrCgyz1wmAgr%2BYS8L9wACYJ3uFtrAeoean5qHBn3BzE5cbIcnOs7a6FJmliEsU73Ng817hRzkspl2r3x167a8SU%2BGSkjQRc5BRjRoRJU1kRkRnjOallubMyU%2F7YJdoMaN7cVftjUmG%2FJvNWQEYPJgYXeM1OTDari434zPDkDJTAauIRPCD88jnqZt6c7He%2FQom2V3fx9KrwBKuSXEs3Ny%2B3l4CLtY1Rxr%2BHSbz17KoHPuon35tumARpDMpY1XT5zGBhc3esPFH%2FMJrq4NAGOqUBx7NrJqDWBuPe%2ByoWVVdHR%2FMOP3mKmSvtoyt8uEBU75anJ5b7P5IyOZcAhC%2BEPaizSz5KO%2BbiIoPZyms77q1GTMWG3NRoIeInD61MYRYUOcdYRW2%2B4dHvtXE1fXrNH48KHVUpqeT1800DF3BLQcWWvU%2BRP2mlCgdxvEJawNkA4G96e7WJtvkbmq2CG2%2F4IBH0axiTiQEAFU6lzqwc4BnNqmWwoo%2By&X-Amz-Signature=8ca3fd426fbd01bbf8a7d89c943e5efac1367a73cb47a0d5e49f50ff9d728b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

