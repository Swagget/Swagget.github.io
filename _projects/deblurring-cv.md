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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5M52AQ%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T012226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIF6EVd7L5Bx%2FVOcONKiSPRW30DIAuMDKaisYgzcQGYkaAiEAgMUarpLFSKItw9l1TrOUNVmvkOMiCWCVltemgNGnWXYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPLlIBwYzLH8D%2BcY4CrcA6sHYXH%2F%2BasStwANTUM3qN7MyuOmnqHTIsaL6m8N5wU2nWl5uGKO0KmFGdFKf7i9yP8Ien8Oc6jpDs7%2FeWTsXw412wMUeWfb4Z1o%2FZulK0TUDOAYRAOk%2BIWaKAhLygI%2BcdUmKS30gN4f4aeO4Q1yE38kmz74wqMnt7VDS%2BOHki%2BhznEpaOwyxjXf6%2BCJRnigYcldjDqfv8rZ%2Fhq789zd%2FVNlHptFPaAK2PygYNozFBnx7bKGCRIPUTLlG9rzuN5OeRPes11tqIWJn%2BfLqMsW7Ahp2DqxqoPtLsx1q1HmBGDJ3wn%2Fz3MBjreS6sxR4ReRGx63s1zPYrmnXTLeRQbXbxzuAIhn7ltbYpmYaqc%2BjKLM18cklkfkQBVDWtbRl%2BUP%2FB8yCYI%2FS6g%2Ft4PuzER%2BBFuoYpuMfrySt0hutsTHkUdOuXEkJNuu3E2mpbB36Tj8aj%2FpylvreZs2hno8%2BvYWFD1wACfi67%2BJ8KuV%2FDU61xgf%2FgYu4OE1qBC7FT2h5NGtYX2eEDw0OQ%2F6EDxlXkr0ht6zgHPzKFWgQVeze5SKVvb3R4OivIKCMz0CmrYQRZ3gJNDvI5pnCvoEVhY8E1%2BgvhHfUgtFCAuVVU1mIF3e0jNz9BKhk7KUvHfzlBj6MM%2Fnj9MGOqUBTeiSMM%2FQSgjSBJOjXvxAmxRwmS5i1L4G6RNIqcvwW9FN7OkNtlNRKuuRXapTx6q20tDVXPMSZQPht6ItSdW6L5%2BWDID26w5L%2B1waUhWOYg9AbwEirr34nVNmCMqsZGNaiOw4%2F6G40AOvK%2BQONvlyKWcmicuwM2FaWfz%2Fst5S4w182p4QM%2BnEr%2BCyjzJ49Q%2Fe2Ae4Ntwg8z7sRAqqrQG52PWEdwNz&X-Amz-Signature=4e438a1e6faa453674410468908c48971a225a09d4f9b32c5e7b0f1ed2bdc8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

