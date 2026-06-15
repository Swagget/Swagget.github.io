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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2QQWIO%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T193621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZzFDJNaNbUcOZlNjZgwxJBqzoKflGglcVGBiW7hwVMAiEAgfa5HbRPAhzyVUwHB86Qe0L92w1tcUhFW5XhMMuewZ8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLvOz5c4bLDEd1Ph3yrcA04DnUvOAKgRExfDIipJoiLU4pVn065r%2F6YkUADp8z02DmG7ks6inrQ5alN%2B4jXCWRW53xpYSj3t%2Brm74BBEFrY1t%2Fg%2BViA6D9%2Bp9IP%2B2dxeww%2BamirBv6QtsGVWAZKeN9fPSHDaWDI3J2kfhkG6V9h%2BBcU%2FIMTn9cxAqs8%2BIvaQhjpqM1FsPWob4EjtEyDKKrIAC0iZkAdMjzlwVmdymswYdQAojHWDBRpOB4ogCbXXhGhroFtAdmmgj%2FgfsCcm4nsqmEKdmN3Yhkc2tA%2FhNafRpWB%2FwSTZcq20ml1y38a3MAB79qQSarJg99rgnZBengwLcMgKDEMFEe4%2Fe0L8l4nkTU1V3D2VGzuH5gSVHVpvSjNV4W60zzINOn4hlCsfpPtBxnNfkzAqVJJ1hs0QX13CBBnge59MfzFsQqyAngk1Fp59jf3mjDnnp2htNbmsn7cHM9yUtpf3aQhJUQcm199PJp4dAs7dGE%2BhSOs22NHsMqkGa5WMO%2F8oLNROA2uLlGMjVbERxJRsGEn60VE8h8DZEVc%2F3UZ8GenGuPwWPBMBVqE6A1jY%2BF%2BGNcpELICvUYk%2F21dko9xaNaOEBT0bjvqKreRs%2BahDXHe2OBGc5Wmq88Na%2B4Eb1lgDw9TbMMaGwdEGOqUBgqu8WknxqYAV%2FBFuitkuRMX%2Fklm9E5yONo5aDHGvJbJsfMwGT6VwMSWfj1PgFEspqsrg51X1QIYF6byfueqMfuXUSYEAStxS2Uv8vhiZoRUYAWuuBIlR%2BaWllUfLz0ZId6tCrJeYZtkhCDlrXmDALsoPkdcdb7RYfw5buJCSOOdPbOEDChupP7K3Q6H%2Fl9xwzDtfSppTAnCsBw1DipobW%2FHeVqHu&X-Amz-Signature=934630ac9108df7aefcb077398e8de44531ef9a7f16499111c942fe902d065fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

