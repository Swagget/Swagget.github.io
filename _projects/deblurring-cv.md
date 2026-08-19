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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5SAO6W%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T133439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADcpEsUWKFjzZlgkcXDWsafVYuisb2y98k9aYPwkhVMAiEA9yBBNvlPIybNaXNd2EbLo%2B5rDh9rgwMiyPJfhi8UXn8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXBxag2mL4HypOuxSrcAwltx%2FM3uMr6ZmgcvquSgQNFOClhLPqDZZ9GY9JhmSsj%2Bkr16KRn3qZRll3cspBgCz18O1qZrGVXCsv%2BeS7mbgE7gvGDCvH7OVMihWKUeVWPLT8C4mJ6hzMAw2vReM5F%2Fyseh3aWglQzrK8IfZy2CwsPHFDZ%2ByFbIqcz27kZOFhwYg9VZS%2FNmmCIlepVqk7pjhLJvF%2FowtZp4yNSOwMBqmLDEUrauLUucOcE4DQBaMjktZamTmuX9hevKwfvXC1gNDYKYy%2Bv7q2GL2SQ16aCPauSSuJ0G92TPpjeH%2F8uO4Cyxr4NY0mM1OCp%2BnQQeoH6JUzjkQE%2FqFvJIDmdd8TuJiqiYQ5jrLeVGKKdZz1E1NdcaKIrs2fto5Dxa6qDYxfsUQkk3upbyAFh5peXzd%2FlGEkkmPRB5Qg26WYv6TaPiVH%2FryD9nuQ3OAUPcKCh%2BFKrH8xIvSHwWs26RyNbCSfADkrd8VYEUoCaAl56DLTUfmCCUdEomvELCjk8bmXhflzusNIav4EBGgg6LVOyVkhrJtXS2EjYpKupW3KfpoUA0uDOIlMNl736p4dQjvoaTqcKsP5Wsddkqz5jMc8APr6gjMTBmC06q8Ic6hIRjDC8Ywh0v1iBuh03jdpgYmPXMOzeltQGOqUB%2FRUajt%2FoDN9g1qqf6jPcMtYuSkA7iH1uH8HvuRm5lCg55ktoz5CHvnNnsEyo7ysIFHarHKYOK%2Be%2FtoUzGKrWr%2B8xCO8M10M3UTylwBUeMFlff1oimQm9zxrjaIa2QeNg4p8J40amo3e0Z0CFZQyPShsDAH4NXAM2PDPHhWnqU6rzPz1gDlH2YsDjp12KVeJVHn%2BnwWsn0M1bkWb6z9yKQz2Ee2%2FT&X-Amz-Signature=dcb2673ffadb5455547ef7c56819933b547a513a5016db5295fb2ce716183ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

