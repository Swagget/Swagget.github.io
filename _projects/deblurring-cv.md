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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD737FV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T211710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiJfSdN01LdU5%2B0hDLgDcT4G8CmdGjg3VTUICfxWEVeAiEAp81GcPykMhOkBK8fwzXuZ21OqtbPd2%2BafKC5XRUFIAYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHSq5pwO1%2B0yQjKegCrcA0lI%2F09KUgpT7Mt%2BfCJOKhlVLHmz83slb0vLYwD55apzbEoLan5ka2qOVX%2FshlVf6c3oPDRVtGbTI34qfoiGI9PUxmYRvvZ%2FCEKl%2BXo8FSg8AMHYmNe1oD9nwy%2FZ4XFIj6rG0scrpNGToZJu%2FiB14v8IAhmzT%2FvCbrpT8PABRz6AlhuyvrIE17Dr%2BXbNMo1juyVDUJkUSLpzR93dY5jfbHgtDX%2BiMUPrQsF0TUsM1r79t4lwhF7sJ6rFUEMX63h19aIJ8ZhTqjSbPYtccDx%2BS2aupHNrxjleXOA0XKGsDbDJ8ZBI8nLmwJ0Y6PMh1P0lsPLqymDyT%2F1nDpF%2FG%2BgyyqfsHFH%2FnF%2FNUpoXYxQ6sq9UcmWZV5mSpUHnHcFx1LnjAzGQgra57jvbdRZF2IMknAZgHicsbOaAlcM3MZYBDjMk%2Flds2voDG%2FlfKCKFB4iFwytnB7Zupe8C%2B7B%2B0fSNv0x4Z9ufwzFVq3qfdUoL4tpVCnGlmWA84QxVN5FG03aGH1u%2Fl3eoGtYSLr1kuiwWYuB8HUTBWxi6KE3r261K6FtHzNfOQgKdV8FXQ8nNK%2BcrMh8Q%2BNZc%2B%2BHGBGTBk5wKSmhGcBH%2Fd%2FFBhDkjC4SIMnpuDP2q8pFYx4j5QvUwMMGF3tMGOqUBlKBCs1%2BT1Jq0nTShLcb0%2FnBBhTl%2BvmPuTqt%2FHLViOzVlB%2FH%2FAZ0750mVeBy54n0%2BXzssOg%2FtHO5C9amyKxYPUKBXmKLUjclh%2Fw%2BW8PWYP82deuXb3qBOXIb8VaUY8461osxxSNOwa%2FrkRQReETg36o20OThjT1C27pXWs450PkIwzSolaEmTYbxfYClH43cG3Pmpq7kGvC20Vo%2FnCY6rEhP%2FqUS3&X-Amz-Signature=22beff6656963495d610a9eef51dcab0dc2668383fc7a7209cc5b8659229518d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

