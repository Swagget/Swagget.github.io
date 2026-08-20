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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPXACEA%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T082141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyOJxKfax%2FoP%2Bdvht8Ge5GrETAXxbf6pdqgOro1GHiaQIhAPZ6pk8bE4qSDbMJO9U1pN%2FNB%2BEoTuAnJZRVag6MCDDsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjiy1GO0kPVZcG4Z0q3AOfjo5f5lHjaOETAB0KVsfSSq%2BxFkMHpwdThDCWZL1HEtEiy8ForC4HHxkA9XtgYyupa%2BTpnliI4xOIQ2%2BbO0MPFTxAtr382dLK1%2FEWCkcTT79Ru6kd6eXOmrP%2FP0z7w9K%2FErr8qySfUHXFTE2w6WSRsQn9SabCsxU3tfGqWgGF8pOyUt7Gh6abzhrYK5qRFw320UBSgOnVwXfreEV%2B6U0l6%2BIwjeBIeG85z1kqhxmjNwsIvz7A9TLEEYRiX4KmfkWiUaahmX%2FyIgvclDlR%2BAO%2BvDh9Xt3WLQqwFv%2FOcjDnRIlZMIgkO574GtwooHobB2adcyHZQB9VHcz7J5p8etJXj1pPWfWWq1t7y9%2BN5qeDIX1e%2FsZnQjEPhHzFWC%2FEPod9JBuFieqO%2F6%2BJIss2Qfx0dBb1JpsgGxxzj%2FW9u6A1CPqprCvp%2FqmibvTEYroWzjiOBlpYb9HnVes%2BTjPGbbdsie0%2BK795iXd8nT2DuN9dPSwr5z%2FIN8gAY48erzzA%2F3ek4DABnaX4VOF1Ymryiht%2BETdodv0o%2F9NXquKg3wsghf5RkioTnwv81Z2ZAXU1hkYyda3B%2BC1HPTXjpmtjKWs5PbG%2FWriPay62WLBFcFA6RXyTbA0CvcICFMFzODC9rprUBjqkAZHCRuGJtmzA5HK3ITohfjyuPK27A5nOQwMeiHM8E4U0k3hJtxZi03F2ZOao2fRVnHrp5hYLB1crwUQY8Tf%2F%2BQVawxBgKrxOi7B0sw2aAjOU0diGYpr0vD%2FRaubp5XrmMLpLcPml1Ffs1LerzNQiLoM1T39f2VbNBBTlAVynTL4u92GF%2FStDoPCFDVb7bcOLXURt%2BXGg7KJ1fhGsH7%2BNmu%2FgI4LX&X-Amz-Signature=39fe01f100e1bf119419cd6bb1ed599e0a7fae924e03c70dc16bb44a4ee0f3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

