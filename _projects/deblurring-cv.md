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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCHEA3O%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T002506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHG4fhM29sxzVGwl6o2Pvd%2BC551egrntoxbAfHnCDkXTAiEAmtbRMgQs%2BghB3MVb3wuQBqAokZZ9bthFZHfl0DzdI2oq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDrwctEG0hXee6iNJircA%2BlA9vg9ZFtPg0HD79FCIm0zSs4cfoNIb1NlhnD5i8w%2B8G0jeGhfVCyzwmSGoskIfRmnC1c9rDr7V4x843sjdYi1r170mv49lGOEZnkI7zJBdV%2FGZpTEuEToCYaIr%2F%2BxFxIIZYoH0Sxptxo9J7xvslubmxSbXmASSWy%2FlI3Nb04MBfiKSDWPqwxdSTwyekN%2Fut%2BPWndBvSwW27jDSaJJDDV2CbtPPBN3MNBlAucHWlWh%2FiroqkSpHMO%2BqbZr4kR%2BcRzQupPKu3Dj4IZ4tQtCfHaPe3syHyYLjj9ukoewtCzqf4u%2BqNNcJXPIcc%2FNuKevtcf8Y%2F3DhvIoaqpPq2nFLUTfP%2BZuQ4OvrQ%2F6ou2rh9m%2BeCNMsZoHbgl4fG0nbd37VNLZJoG05PbTM0ln5RPuwADOyzaLtgDlYxmS7JaPuhx0qF4KW0ly78C0Ve1u70j563Qq0XZUqjiQ6D%2BXc4%2B%2BfqO6VHGJ28RM1JLphsf3T1dKDK3hK5f0d5u1M%2B%2FzWzcQFBYI2umuqp8otQVNTSG5mlT5wkSbnmC9ZDyVmnUjytUMak21JCWmIZReaVx72VEveODQVLgGDFOrqM%2Bbs0BQELEDyNJr0GIQnn3fcSdjjxasGKiDQYF0gmpuvzqwMP%2FW99QGOqUBNwdcaHlVzB7BMEd1sZxotzo8ekLp9tIatARxz4nZDg11KpMctwxWt0PacFiZjfS1n7S2mmzb7%2F6GRPUL1BWtBPM9MjetQNnh9%2FQvuzMdgpe9vo5G3Qx7xMYLMiyCiWlIq5y67ech7zj9q5x8t%2FamEZKnCKG%2BVwJp%2FeIIJdrXtbyr40RzGRzmP4YzLGhiw3o%2BExlYKiTrlpMSCCyWTo%2Bbj9jvJbTl&X-Amz-Signature=b5109b0430eeda1a7f81f6d4ecf93653b36d47c7f75c887fdd204bddd47cf3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

