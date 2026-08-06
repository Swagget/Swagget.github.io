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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD3GW7JR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T011559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD8dwhVj6hT4kEftJRBqibsM42X3uKywOSsK2iYOqx7%2FgIgbS2943OLIlcu33osUS7veBKau4hhLH%2F9bl%2BsIhJk28Aq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDsaVCURGwqMd2Vu7CrcAzc6KCqpq8w5phGQorjWhfRVPJcXzIHZG6C51CwEwiAqy0NYVbOPq6Cpj7nNkQcBzrEFOpB5pVoxPWeeuJ0jePl1yv8b4dh88ttNyp58bBAigxkxqwiDz66dnb%2BnBblwcGjBQItX0bqU6wrxF2eKBHoW2kfjT3gEh2D195DLBLj%2BRnpS8uOsPnRmS6hGHANK2vZb8jgf2sjkm%2FK1Jcx19uLAs47YnGaVixI4PD8sXT%2FjaCtUIvDQRggnX42B%2FMBjMZotJZRAPjEdOIXrCGi%2Bq9cvHmhmzNZ91eyTMJP0kJ%2BgFX076bTg8Gigk0egvEgdmPsLiCDV1Su58xavteuKCYy8Lk3BGDtyKaQlsQU3bMis2lheoAd%2Faekou9FktVTPzX9Hlg58cEN8hfMtJ3ul6UIiuZ2TCJrhoBNOcPROcx8rqSCBaJsfVeNLMB1XG1CfSHYVa%2Ft1ULx7W6DkI2zfRSAH7ZYZZcAGjtM8oTqG6kC8%2BVDZ6Y7eKdNzOkJHWBq6WzdCcnyfCGclXanUlMGnFnjPphMZ3D2sNcRor5jieihF86CfeFD180TkhzJqkmsH6aPWTGp7gsL0iazpeIsL90GWlcTKfrnLHhNAhNj2U6T3m3%2BqHrUNG%2FkTQVkgMK2lz9MGOqUBgOnjUYuH74Tw12omQ7oljj2XomnpOX3doDwcWK%2FEopPxcgng%2BQcXTRmOuYttpt7VRP40nHGy%2FXYQnegFeYnBONq3im6FQ3Sh29Nr4AfS2rer7UiCpLmUhC%2F%2FGVa2VkmX8mKUzpNez8whavnEZvLSsHler6H5%2F%2Beakj5oM%2FsZBV3O6JroeZI%2BgFgSvK4arTlWKCMGcuFuvLT2%2BFERnXeOnKDyvjEk&X-Amz-Signature=407df7a059c2b36bea7dd355d26861eaf34404d361a4a1ad8a73f3107db2ada5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

