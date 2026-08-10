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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T6BFR5%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T163946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDM9dIPEcTweJNMhpidh72NmVZLFfd7tz%2FSs4MFVXkmAIhALK2rWTuhVOZkQNdgtJw3Viu1Iah6Hys2U%2FjUjVEp8dLKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcjPIENp2k0zh2LdYq3ANDrHU7zW%2Be62Q3oI69RYKr5Geaf28MB85U0JiSg4MSAS2CufyukeoaRWAGgUqb95HbCcj1Lh8xgOWuQg4adzApQkMOTsGxXBzBDP1wsGBEFGOwCa71j%2BFKYIxtgmm0%2FswTyV7f5jHnjHvgC32%2BTwEx49C1KkNmhuKyFUSpGgTdJLSOC6sWo0TH8yzmR%2BXJJJke34oxWgfMF1QCFXeI3S932Yf9AshojKzC6ACb6qgxQ8kLP53bn0JlrGl47pmfuCs5mDox7onnKDXDs5wPDzMMO8AweH7TxwOCDUs2PiyEzojYXuwJqRax2%2FZhXrNf8FuYg7M88mB8SLs0R%2BaVdCk12KYn3f1TS7%2FofeshCju%2Bnkq6LMvgRgNlwNeNNYtT5ivDm46E%2F2bDRP2HdLEjI9NZIMuDJ0IBFpaR3S9sl9KKWr0ckvWqEYrjo2k%2BG1WwQmolTYGhf%2FzBjUU%2Fs0iD2vCUeK5ITK2gMAJlCy1jA3H%2Flg64VCO1fBro2AKCfXnjIvH4ZDTp3ygBPGiePgqOJaiFS8z5UL0EKmHnQALjGLiUtu1GPUWXB7%2Fia5AK5S9BM%2BqOBVS3gSkYxI9GP96OhSmJqrG5LjLDAHe8E%2Fv4d8iuC8cvZgcJdsk9BENVQDDV9OfTBjqkAbQsJnRJEA1rrPHwZRRZqtcvw0NWdRImH5mv2LdILORgWLqok4YfNXgaZLlMjBCYYeEvDNyfxEVDUuGzG0aQsAViat9tuHE1WsxDoUjRhqwAb629P4VijztSGrazqlvmRalta5U5PsXqNrsTsTO%2Fti2TqLo0MqZ9gRf4amkhLmgrlCYqbrU4aDBH%2F2YN1gB3PcQrRTKtGHu1fJnmV%2BRmsw%2BVHloF&X-Amz-Signature=d271238c87fe179ffeb0e0217ad16936ab42920519014ec553e0840d386ef849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

