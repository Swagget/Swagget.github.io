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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNAOJCM%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T111759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD3fOBfVBx5BrvkIL1v%2BCDIopdgDcjS1FoMs34nN0mkVwIgDQWt7Z%2FDk8iAKW7xR7cCq6a%2Fad64gMcBwlaWF8lCv34q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHfaiYwCob1nmciXECrcA%2BGsW3iHZvbthexhmsXevFL8Dp4zqAPTPSr4tSCEdrJOTiMi26WtpJr29pbTekX7dMQZl%2BWRbU3qun9HkC2Lvjty3XZXDDhyDGZUPvx9YUhGFkKu%2F5BkFER%2F4QNd6cMy5FxajB0YjtUU6DUuSRAYsftSPdVY0J0BqG2jt%2Bw5ze7CbhIhiQWWvfzpk%2BwTe%2FoknLu%2Bxo%2FD06jCz9%2FeZURrMdVXYYZAWmAcDMBaEKFDaftx9jZckoKZauswFMPDSBTwEhF%2FEOSZd9kpgNvyVhTnjQHzejJGpyWLNMbWXepNOisC3%2BEVF%2BzyaJsSB2nqklMmig%2BdXq17vjA5svO6%2FWWJAHPV4iqHtVt3eUqkn0o8HsONSFiIX7zf6q5%2FapKleCeyzDqVL6oKiozTnMauzn6%2FzINUInTUIJlazphVADHc4%2F4%2F4d%2FKd8402FtEo8w26MghKyvyunX70z5imqCWeyjouGQqAfh2ITwu76NHxLmqrLXNzdE7FY0hSPepG1RvVfNSPe66B%2FF10M%2FbFm8olZUxzwhKxwdVkd42jGQP%2F5OREGpx6A6tiIzLLjX%2BPZV263a6QalxICf55ImQYiMBw7YrkJNLfEQIVA7zsOkAutQ4XxmFAzlt75WDYECkiYnaMK78utQGOqUBAEVbiswiw4KvPreegC8ZnaIwa53wymI8kVY5lrH0risLt1WjR9dS858NfILIn37m6F%2FUKr6dmc5dpcvSVffOIUQKFQACKMqu9yjJG7prNW3CpyGOEY%2FTldU5r8JbxD5W91Gfqa8%2FlFrA0YpvpLmBDOE5ZKFqhg50hSWmllQjsjt%2B%2BvFPnD08L%2BvhMgF3i7WbFe2KUwV%2Bx86LQT4gr1kdob2Y%2BuGL&X-Amz-Signature=9843a56477449b93a7218b9f21f4ca8073b895988f490d4609b1f4e4ee458974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

