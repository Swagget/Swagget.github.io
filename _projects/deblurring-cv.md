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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUD554K%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY7m%2BGwBbVzVZzay1D93oH4dg5fqoeymdTjXZ6sRxuXAiATQik%2B8uG5K0LNdSZ0rwCEVlLfEVcRh9mJhTbuCgHbqCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rVlpbs%2B8Si1zpkIKtwDlfN9r%2BIHz12J%2FmKdpbH80tRPDXjHPB7RZKy8Dewgr2MjDWz1DEyeXH%2FGKrz32t2Ek%2FBFMTpNZ%2BodUvP6DrqAGOLqH4nKCmRJcDK0PeGEBMsU0%2FuTZvUHxuZtRlpBOolrF%2Faxqu5r2iyWF6qVmiZ%2FnYp0BtaToNueIo%2B7Kv1kvF%2Bq5BEeGKvlaqidanA4kiloarEEEV7hzQt59DlCOZsBf0ILLm8BKZcbDcHa8Oo%2BLTIKjmn9Brszrxb7EmXkqFWyUbwash56fltXI2bpPiePAx4dASqGpIH8Wjg6Ogy%2FTTNalnCVNC%2B3hlL4%2FBjA2YarkhreGr6UcgHAysLQFkIhlpT7Md9pqcPL%2FffTjl1KRv%2Fw65q6%2B54X3WDF0x0cQitNzRENGT30gI0QK1hMbovWEBbmOBGHorrPpwxUKv5SLa9HMqQlO%2FlXV5dYrlTGan%2BijTmIvJ6%2F0c5in1M%2F5QPkJwYhdWknIGIqp2SbQQ7ovI6A3LjMv3REhGCNrIl5%2BKzzOAWtjOc9pnIznAt6hI8i9QXGavTI9Zu6E3c%2B86db59I6Bo%2FSdjLAC60BBfWLGgOchgSoKFmEDoi6El5qQGhqjBveQPndV3ZUgZry9gR99EXfsFm67QoJDDeEa%2BowyfPj0AY6pgHgCakBvm8b7nABi8GyGUjXwx54HYSUF1LIDgF4Pv5%2BpB4vGh3n%2B01apFJ95TmtEsMV6PR%2BH2HVMRMVxaJc914HK0DRZaks7zZCIWPTycMasapcfKIg0XOMY03SyFm4lScsXpyIUt%2BcIWvpIGMbAnUYxCblwWJ4Vz6mMDDiXSCM5vPaf%2FhZ%2FiP8w2eWET32AN0%2F6ANta0KFuQqk3PANWUhLgE8bPHnu&X-Amz-Signature=df6a754fced18c8d9da6afa59687bb8f4505728255935bf1339cccf05a17a454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

