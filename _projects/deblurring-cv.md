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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJILSJ5%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdkrACahIUX%2F3Bufa4e1OFJVmeDWpsy6A1xNAso74PqwIgFu1aOn0aHJBKGbvTnQEhkEk5LOcIxqXeQCTxu4hiQ%2B8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDL5GX%2FV73IsIkTJ2nSrcA1Hdl8Ot7wdYXcPwy6trZ%2BBYRJ3%2Fl8nvcbjbOurQAPMkRDRb%2BNoxc8nUSYbT8mGQcMUscBXn7fUu02bnFBFKjhHr3M0sCHrK%2FcAs20kLyy5b5h%2B959%2BWSnkCUrloW0lSbiLG6QILUIRubQqtul40fdxs2UUvXFYzugBIkVSaD8kljlyTly7YY%2B84BDnwPuv8ocjxUes6pLL58xkDiKpmNlB2v%2FrQvBBMMEUgu%2F86u9za0FbDRVppgYNNAejOPYbZwaKriRnpzaAiJgqZLVHMzZeGpFLVjnISkt0J9%2BBMLqxYh2wiZY5Goa9a8AFJISnzmjGdtaoRrcFQvGe3gxPmyjYKczJoV88LhrF2Jg%2BgYCbCt3HtakVowDVnZWNKIZ8h8BHJ13ul7Klj9YhSNAhGdO9a2fvd8825Z2alD1Oijk6rauTQFRMKf6plS1EEXXKheUa2eWfaVzAVe9FjcGCQxqfJk%2FuPynCMOV%2BMt2JvmHMZfvBTEMwsWGyqQmJ9ySEcs3aA0RqL9QgaiRG%2F0npjGo1k1h6XP2E8XztneQQJyXggnnjmTIHnZ4LhkB08B6KgkVCcts47itP9eemQlIzc7MFO3NYzLvw1KUjqMwLFLfQLMMRCW21%2BhPf8LE5TMKidlNQGOqUBQpz38gXNOKxvdwwKh8IDBXjpGxoc4z6RJcDr77QwNZN4J%2BHm6p1Hb9k3ub%2B4yI54jeOw%2F%2BOU18cfaUWU9TU7zecrns1US0uX8BpYTZEIPaohlZ4odcBYBDpASJqi7E5dNri8pG2zXGgRXDexZr6%2B6FKCkuxnm7oIIxsRwrr%2F30jkHJTbxKEIUDV5AVsVm3WCM4SOG82XIXGwg%2BskRcmBVztChuAb&X-Amz-Signature=3efcdfedfffd8642740912d83aa7b3f14b6b46b120ffe428289827518ed05bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

