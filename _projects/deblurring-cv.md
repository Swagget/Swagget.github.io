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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWDTXBJ%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T202301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDiqB6TL1pjws5Lka4YUoEDmqYAr96vR0OCOhPQFb0YWAIhALOomwgqVd%2FkRAfEFdfGEeK%2FHMOq7g3%2F8HVnxO3KSqujKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FoC2ZkVMCJXXK7wUq3ANw0A%2BRe4MiyygWSmyjutYjmzj7K6%2FqY%2FL2jXoY2rVybhoNgZdV%2FaRZYUdLNnmF2XXDkWBTY%2FqZRt%2BHsjYJjM8LzOgiU3Te4%2F8f%2B6EG2dV%2Ba%2F5nEM3nAru9QKHL9pTmLw6Crq9CJpFJslTuAYtaKScwCfUAkZ6w3DNCWdwTVlyvhpwnQDA5mEZQ6m5bUQmxRqst3Con9DolynHbp3CCanhG93jkfL4tvslBcgCgm2YRzXN6AV9XJCRDUzs4%2BLE2qcWW1Mfmj0Dmh7TlgsFUm9EsC40Nj4MQYoKkttNexdtFEKKHVuX8fe4XKhGYmUM4RdNUM35NJ1%2BPvnLfSpRjG3STMUmkl26Y5hG0rHFtu3yWquwMbnlH9JVyFOmMxEtNeWOj1VxAYsIYRW%2BmEWhqSX%2FRLjTfv%2BCnkrc9Cux4REb4shx8C2T2RSPzNMb3uYNbD9RCPIUsqT37Ru053QC7DT4pMmD2NtSrjvnf6EW15sYY3GPsPa9k8g3ntnFXyeXucAmyYvZq5srxfbOuLtSPCFxI7BAIHE9vusL4h%2BoF%2Bh63px%2F6Y2aOImkozfGuKTIpIyo1VFRlfxAwfxN1yGQKAwLd4rtAxRw8WDEfdj0vmX4S8qtKmigPOXl3t4FIzDCDvefQBjqkAYLPc14yNp4oCqAHs0B5UYq9oAaKi9xWbsOU7KaBT%2FDB9LKPVMzyYTDVaxPk08voPQZ2MiQ8MotfkzNG0YCcc%2FEnhWAzzgwEIiW5hjRCBd6fgTQSrs%2Fd7OW2qrL4lSGXNaVpzf%2BpUqt7GKMvMSi%2FnAGy9jL3FpB8LBcDahRtS1XxaPYJE70YkioFScrZq4v7kMAea%2Fs%2F4uAqTjuYr3Fj%2FRUSNRoJ&X-Amz-Signature=2286cf23364af8ef5572fb4178803172c88781f566f82d3c55716b66b749933c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

