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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ3B7WHW%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T235758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAWgHr4mI4%2BD3MIiDBXJstORn%2BS93BTT1pFtGtiDuMSIAiEApB4aW%2B64rfbB%2BZ5GsWgfqpE5l%2FLsMrAl2QqTmu0CEW0q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDM3tv1S30OXwbyQcdircAyXeVZb7iGxv1%2Bj0ifOo5yOP9xopaODled8PyZ7Upfiq0y85UjiXoxK5CqnyQa5uJMDwoJ5mm%2FMUEYGVRoOQblQZ0oWUCfLLBAGgjKZw7rgdzG3tYYv%2BEqo%2Bv2Ejh9XvRnqyDwYeqr6YCgMHJaUpZ0JDzatzJuOurgGL6lfcr1djj4oEv4UHW1EP2qNXtl35DzWgU4JjdLwcljfEQtLWBLwbxyx0NftgYSY0wRN1IUf%2BWsjgZUSFZFBQML9Dn47weisK2Sw2E4ECOovMVWyDJ%2BXDpryjWS9ZgTa8A5TPM8d9GJ5nj7jicNlUQ6V8LlggfF01NfLGzg9FPO75gGnsAF0ns%2FgUqBDisCrKYCPdPUx1SC698SBerGx6qXdSJN6z3ZMexGDjRbL3In%2FwjJC6izSoVqesDOrz%2Bswp7T6%2FtgHePbCnmxddlH7%2FQb562eYCENLEC4CT41FyhKfTnnSpTLAOAbFXrqL18xZbd5SgS85Y5sVr98aQkBXmyHKfh0pYOFjOJzR0H5zETOhBWmGcInjEunVkjqaobCU5WjT75vhAbLz3lwiyx128muJpA0yEVby5Rq02W7%2BkPvMDzDoxZbVeFuxsOf0yQo%2BTJ%2FvqX44AAA9FTXTKCQ8MxR1QMJ6K5tEGOqUBdnwFD8RHzGh8ToMj31FB5N3vSQt15fu3HUzojXtpcmIj76LF8F3JV51e0z4UUtFxh18Tdrp4iu7Dljq2frwSLWivo8p%2BKMhQN%2F68xVSFUDpR9x0QZFzcuBitMIrvHLQfCZIB2yvVLGunSOy7DgLrvRvRFO20q5DwDHniGqiJdTCn4jSLQUGI4qjacN0n360m4Zn4Yiv19LaJHLQ1APo5vlE7ffqh&X-Amz-Signature=71b0267e2c2d9b069e246e7bcef0412d40154bed2edf41807a67ab6388ef79a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

