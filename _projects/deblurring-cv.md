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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCVUHLU%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T185034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDwP4AF7%2B0WSp2S9tra%2BfoPkX29Vff3wjMBlPnm%2FRUCgwIgPgc3ip3vzGZ%2B%2FKn6zSSKjCnDqG3uNARrLI9v8f0bsMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDALILynj3hchCUip1ircAw8JL%2BMDdcQNZOqkj9eg5Eh%2FMjSp%2FXCk4%2F%2FqFsIufypLnwvqlBE%2ByI6KHbvS2d8EIelPAN7WkZSYRCL6hLdgP0Z0fsB8x5un0QRWkcNOL9ADun03ejSigFEnBRU1WLzZicBAtjUFhIbBmmKBUkH79rj%2FtpUi9zPe3wrCPUSPWhPHcQVmWqBpYCMMWnp8sgN5HV0mP4iQImOkj7em8dHcsSRxiAONdaTtdiG9om1FcIp8AeSxLuzD%2Bx9KF3rFTe4mNEUn78JdDRsjLstZja0pkElMBD075bNl%2FY9A6dHW9lQT9dOoCxues7izry0p1wCUSVYPpBdkNfTslOjS9ezUhAhuW31W7PvMwDoyJ0dAcxBzk6av9Qb%2BNCAOL04D0YAx1j%2Bbe27rCZIfp7555k5ofI5f51JzaGOLpL9JqxWtZz5BCDnkkOJkZWEFd4%2Bub%2BAW%2BmMy6rP%2FXOPHR8WoLb7Ahr9UPdiY7CCB4PvshAhPjm67yq%2BuUhBKlsZEu0vNh7yO1dfSYB5pScSshJRGDh4zdyIk6tC%2FMxTU5mIiYfIfygQeRJtnfS63ksgbfEApyaihy16n0LwJJf44Yg0drCau8WIhGHAXsZWO2rjGfEKO0ofPTMQWCwaHDYAMXfgXMPGd39IGOqUB2uvPZjxlfeeC9Mc8%2BvpW1ANd13ZHIcqTet1UiSulnnJFWF%2F5FXO3fYiV%2BYIy8sZ7JlKu7Ak2cW6SNWiKsHz1AsL%2BTEKOWVxJavg2UwJi4lO%2BpTbTUnODPrqh8J2x%2FMdftacr0cELXNuSDeh4tT2O3VEAuCFvCQjM282aFXODZysUxu2xssx7eDuLlwhuwCVBiiYtyWgT6qaIemm2l%2BnX1vjwFqIS&X-Amz-Signature=0978c7d5f5b4ae323b8278fea5eb9a95974ca4bbebb612211f6afaaa6d601404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

