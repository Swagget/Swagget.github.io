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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSD5D5EA%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T043705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDD7VHA58o6MClIlo5x2vGzRxdSL8W40aywL%2FO0rWl4wAiEAgByY6pZU4DZ%2BFpW6k5ycgyz8eB3ID42qUj0gsMuWTWwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGmL6yibUXYVMnLB6yrcA0Hy5fHVHaLShVBJQbRvmxVDqtsrCRsDB3sc8tqANPLjdLLy7MZDKMxsjHhS1P9%2FZtdk0ocE3h9PJ%2F%2B1aq6qYWlZZmE0mhEF74Qf7Gu%2FseaKqUluiL1BcSP9u5HyMbEhOlr5c2G9692rx3S3lo3uyCAzUp2IcTODgUY08w8DqxFCOtwPnwriUq5WOtV91piFFy58rPRYueFeDGAIyNJntU2WJ%2BSg24SRq9Gccjape7Fj3CwaO5cA8xXFzUA4L%2F3ac17rM1iDHF8xPYGPeqO2b965t6iWliCafDh4AOtGk9fne641UvSaLBD%2Bnx1bmYKuEJANpvimu7ce5owCpjKeITR1QDoG5HPwf%2BiXtDHQbDhZqvKvcVhzdXdr9jNncVuBPbJIMRsJwthas84e7EeTK9z5iVWymIAOtk5FHir4v3X0FceEzm7c9EmOVdgv0gPNCFYjj9grVUCg%2FVPTNJMLVjc0c5K8sl9GCFodpZDWlFxmhlghU%2FYbxRILxqbJWl6nyrsw1ApHqN8wVTrmuq7ZZCpolmq0AMzKapXNbNPCLccYdzrNVlVCj7BCiqbdM40J00BkmjydCMLeK4K5%2FJpQHN19v1r1xpf8NUIUvBZZHKE9zAOeuGJwXmQGLuKUMND729IGOqUBSUfa1X8lmzKiybTLXPo0wfAdBugtSZ4CBLh9%2FWobtD8Zr6Ybve%2Fgu%2ByfCribpG5wVq0zY%2FrMwNqQVNDCgDaB%2BUHxm%2FzgNV4Le02THQL3zNzcV0VrvlILbi8GpMSCz2ifMIr3sa35yqe2OF8MwP39SymXxpf51OIk3TrOZoHZVsjlB6p3G5OzkFBVtD%2FLN6WsuLqb%2FDdegkAGQYzdEtHg4RaRYZ0%2F&X-Amz-Signature=ff757d183e58c90f5a3ea0b37f44d794c06049f301da4a4b3a721379301858b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

