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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHMP3C2%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T101858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIOwmDGGSh2bOL7MmEe0MH%2F5llahxG5%2BbhDQ%2FayaamWAiEAtdYNdWsYCLTy%2FRYz66OvJNsnzBujss4prf1b7iTkt3Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE%2BGJ%2BNJBkO9f2c3pSrcA6Gc4Nqmx%2BO8LgPF3a%2B1f0XoEhAmT%2FFit%2FPt0VqRPQ%2BwUBmvz30iMLRSJiGN3vWIeZrioGbCURxIO2GC6p8DpmjfaRbz%2F76seM2BM1mNCw3NV4LYlhY9YD9A8J6NNpSmvInWJoFk0BbIhmrYCDHMHTeyRaqUoEzO%2FaqE%2FhnLwLn%2FSCIjKMcxUrbeueoBqZAl6sIfADhcCYv%2F8t25gnXPH0Bjqz3NYnr3UwT%2BNB0v9FdbrHz0GB%2BP0vL%2FviIMo7qSSlxMz7a8N012YBKNYB0JJ09T4zVjdDD0zTixfOKXlFb857CNOI7INy1Bb0hjaP3dDk%2BpXpXp4JmfhaiSUFIUXGnCWuPtJl7E18EDOEqIHuSteFJEyvhZQXyRjsA7FkCrAc%2BKwi0BhhRbBOA7gfbX5ruTN4ZEQl%2BZWP4P%2BuxJ%2BjUc9nEzXy85RO7h8ZmeuuJ%2F2qTwLPPUAINXSW97tLFHvatkc58kWFKUId0IDNbDBje9586YorJMTSqm9%2BYxH8tImwqQ%2ByaWd3C2GAR5kv4Es9p3gGkPw7ED6wv3ImJw599zp2tI4%2FH4DXGHotvjGYpHLk5sjzd0sjRRMZ4fjJT56CEnrrWP12odCFeR5N5nsK5vATOssHWPncP2K%2FYkMP7zodMGOqUBNdacsObEehWE5n4qkmvTBJiCzzwBaPx79RXkcmO2C%2FWtbi40aHF9PVNEjM6uAIMC2Kd4dRA1PP7IKM6zkn97Qo78hI%2FJ2D7OHMtPLoKHTVjZuBIhD9%2BpuBl8lCN1z6mI6fUExzcDyBIsWIJdVJF%2FaIKN3rKoMExXcNM0fwLNejeTgYDgySHq3VL3R4OkfV%2FIpJy1RwLJlQwHEuu8wVNpGvovN58P&X-Amz-Signature=c804df9f4387db550f27df697d7214c0945c60eb66c858bf041ad5a1bc0b0090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

