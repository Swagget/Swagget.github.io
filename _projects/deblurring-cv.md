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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6HUGKS%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDkNla3%2Fm9ph1b2M1hfVOEs5cLrdMDlp7B0mzdDdQDhUAIgNvCdL3AqQBrpuHkS9Oz6mhBkiSLUHIQ3kdnm6r3Fqs4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrGnqIS0QbyXl7B8CrcA%2FseAP1D1ZOieyNCVDr8unC3N8AmB%2FuVMvJZKPMv5yAwPRxjJ9AajGbh2puCYQ5LfYbvs8WLSBUKrgyl0MSrIhO3c0ee4lZT9DpcKoywS9JIAJn3Mr8Z8bNHBYdlj7VxQZjOxzYrLyLkp5nLAdWmH0mhKtrTjeEGNUWvw9fRiZFY%2BaflUB%2BglwZRbiWNqqUhjjyibFewetqyfhZNo7rWHri1FB77kMXVelV22zRKt5%2FZg3I8nhoSNbLDB2xipmXq4AXAE0sIe6pyoG%2FibV5yxWU8I21%2FcWLomNBhE%2FMOtg%2B%2FbMh9osD44%2BgYCV%2FqGhUbL3bTfrM5muXWrBniQSeXmeoAmIlx2gMPnUSyERzTY%2F%2F3AOh2%2BKkh%2BEEu9tFGqlaqG%2FHUho7wus2ffv5Dx5A2MG2cXTj8RJHuuzOBv06Mc%2FL9W0%2BETeTwVTagUvb4htsog%2FWUMJbaLqmHWafhHIP6owx%2FbdgDf3RKpismKagZla%2ByJ27ZlaUitukosXTRH4iYfIhnsNMulumzu9coFZRFGy3KvRwh5o1pgifwtLOJzotGzr4Z0ktvMheiPlcc7Dv4sa%2FCEEtdY3XW58Eg5wfXkUUQSi0qDARZ4sg1DkLNVR5SIhfub8BbWayCtGTdMJzt8dMGOqUB7XR8F9udexjeolUhr6%2F9Id8NE1Haq5MaX1ORorq8zzthWli1ecfIG1f2JaOj2fi2By1dlbQ6wThlk8OiFRHqBNACZez5XpThdHanaeZyl7t0bMoCBvt2Ytr1qCXatYSLbrObxyGaBy8T9J7h%2FQgzmL75N8aIakBgTp%2B6IpFvWT%2FTIph0gwB1LNscibRIaLjYWzKYm2OcdUtcMpHy7HuOIcP3ztbu&X-Amz-Signature=08d4496cf9a71862887c62aa1d75ae7d5b8679080ee52e4f3cf00402a6ac54c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

