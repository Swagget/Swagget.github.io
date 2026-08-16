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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3WH3WL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T200735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFn3T31fZJoLSfGBToZD5jk9qK34z5r%2FImDUWfXLqgKXAiEAhmnd3%2BZAyux7uAkbqMz7ieu30eem0BpknFKgqb5RsMkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDK%2F979ZhzPyHDbhW0yrcA9ZV7mefBC5shPwThEVYXt2LdzPTCZeoPeoT0fobj9Duq3N%2FIWKoNZNKPvbWI0ciDjPyb%2BPZBlPsfPAtRndgWRFCBqDKWBaXVvR5gl2Pj%2BZZS59sq5ZjHOEcLw1vCAQIBiIM6wH0FwUuGk%2FiBaYojwdGIRZUDv2fBPGI79XoXnqW%2Fdk3G%2FfdmJSDCkke2V30rv7U%2F7dcx7HOFgMDpCh54rQqpIJCMQboBc3kKJDAT5XdQkjZyhGMg0aSoYLGidwOFGGIutsC6HWeEhZtqmp5H0UmEbLZqbEGaOTccwCcYOvIOESECKSFMDwYZll2nHXdvF6OMunyIB4tzLv99Uv8UW29du4tF2I1pj5UiXDYAUL8uD1ONm7Ekln2YR4KsmJzkQbKn%2B6zbwRKVi4cK4JRou3mSxnkDAVj4n6j5bZEQv0IC52wMgddhNGypWfDq3k3eLncOCaKW0%2BtaJloSaWcmVYjaKeNRp%2BfWlAbo8h8gbpYdVD788mdwHwKiQ8jISJnQMcOuCpX3i40B2Su5nMctB2e87EVKGlSD214wy9Z6mBEkAo8XXKDFoFbOLcpT1lsdcLBi7L99bZblwRwL4eg5WKzSlI5ntOVv2FcY904oQ0qy3fI71X9GNuxXWjqMNiFiNQGOqUBpAYj2Ddl7eKcWUmkYoBPv8bMPald4wdoM%2FlheD%2B%2BPv8S1sJg2ePnefpaXdS8rKL%2BwLteXNY4%2F3CNECyq%2Bk7jyftvFJvcAZO2M5w8qQXXG6%2BimdFaY57pbJntvQBNCpm7kQrPR518wWwD7MbZTVY5FVL2yxc7SaddUmn6PfOFTDpB9zc3VhUtftuUIY2J3L7zDlBaBY1MEPLL%2B6HKoLINZpyFGz6o&X-Amz-Signature=92d90336f8dbcefdd175076e233bdb38720c0a922a2838b7ed7ca3b4c75b365a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

