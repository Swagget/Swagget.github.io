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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HPTP2Z%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T073459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICsAS2%2BOO3OdzXQUp6ZIhQhZSNFpzNppH6AeihETarnAAiBl%2BuFp%2FqrZ3%2F9xal11eJRkYrpx%2BBctlN6GzXd2MEtiAir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMg47dBDKmGVSlFnMIKtwDZZ5l0jo0pDEUEq94NY50PJnjAkfBbUUq9oz7PWOOfucCq7cey9brMCZvpAMfIT%2FR3DIPXpc5dY4FJlTlNW113HKBM%2F4k7Qk%2FlbmIXY42TZj%2FaeMbSrJ9QL9Yy%2FQl6Vh6YStOWUJGEyDeDgPkUKOVOq9dvQ14civ7PpivwwEOXyHaWoJS1zfZ0MsG%2FGb0%2FJFZeIL454r2Zx1oKggqYxtbAKzVEP2rYhlxnHKmd3sv7nLirFucQxX2PWcmFWRxR8LyRIMW%2FMBR9OwZX9v9KQCLBCReCt9TKwtdRmQDFSFDNJ%2BLQgNYqn3XOO%2BV3l8q5yjO79heAMc3fWHDawnmo5Nxdwn825ractBOOiflfeNkcszdIiF0lOJDDknFAKHlhJW%2B5mrCcOlFSmLbssYOn0cO4arV3Kr3KR%2BUsSLtkD3BoofUN4YJ0lLNo8KZygKn0pHfN6fay5nnmKkHV%2FPTlVnVbH%2B9tTZFqu9JIb%2F1i2U3uO5rvb%2Fx9ZwLWRT%2FAPLni2aPJNGL9tYzxruj%2FVdy34C1cwAs8j%2FsJLEu3gSk0RmjwpySBuFbRuCI6Vni9XMOpl762dpAYm4tt7bKSapXwXLmrTFK3rFBxQZjNPXFa0FhuA0mVTEMs7GDv7d%2BI5Qwloa61AY6pgFkXYYQTq%2BJCd8grx1j1NvQ5H3VUt2a89jRNDwu6UaDnpg%2BnDREjj6lT5NbpLVmQgJYPT%2Bma4N5LGogv01uRtZPD5UWDY1lcexR7DEKSw4HwV4sir7ZjV3haDUM0n2QDNRmImMvfVVbR%2BDFMLnFWR5jHMq5sTPTmaJYYyvQOF0oPYWrXIN%2BGxYyHxg4qiflubqSU3TJdeB4gQAc2inY2TgyujHBo9sh&X-Amz-Signature=8b66c8589c2fec2b0cf2d2fde732fac010d5149c7f60e28928d29be353c0fbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

