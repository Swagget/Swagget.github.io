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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNEOOCU%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T163121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEmAI0wPAz5fRNRubh%2B1yJHPYX8sOSPveATzJbv2chmAIgJsQA2llRAuLNcGpE4gEvBOf3%2FtTEs0E0Z55CFEqMZ2UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK74RyBHrWqybYLQZyrcAwEzvbmCRgTKMsGMeYwquvBc7DIZCdo1rDddaMf2zLH8lpPxHqDFpRprrflviKEY8We7FQyYrpoqU%2FuQTUMGOL0SAPtu66tqndrQwN05HExWk2dfXoNudE8EzocwD00OsyyYRvjqwPHSWasa2nLZDXFZCkD9L2Bjw15PdpLMr5xHi7ItgHOhPpwdr9ZPE0mLLnqy8jcdNwLF86WIZsDC2ATVbI8cUWBYisvmrm9tz1W%2FxN4%2BIeyp0Ru8wfcbKfRIFPA40JIPEzEYw2We5O%2Bz3RPsUDTGcWBG4yQ2BFUOYJ%2F1sqK5seWhoeImi1gQp4349uNIsDa4yFuvvEjIZltbdLHFOBVse%2Flrt%2Ffe0M8gl%2B2TlYmBC%2B0DleMeUs3zmXdMC3IqQBITU7ZyTr7B30SP8r%2BGoAFMCsUNvsVqj9QIlxClAKInNLJYrw%2B%2BSa3tTOU0PDGnWx9sG1JvTeLKLZe%2FVrK%2Ff2OV%2FDveIXdOvCZU0VG1cueDv7df8MWUF0Aw4Ca2wSIMr60My5Qr7TIHxtKitOMIMdw7hOXry4PPx%2BXLp8VzAPgR8arzCVsa6%2FJzcghspQuPEqQD3za48rQqwVK8Mgwzykx%2BnzTGUNoDGjiPUxRDAAo4N5%2F1td%2F7m3sqMOisitIGOqUBGnyZTxr2XhnweprwD9NMHyR5gRWYZsfQ4N%2BuDV0Zs%2FoLVM8LoP0sp5ciHwQQ0Xz0VBR5ZfYKZjuP2ZaxzeTR7ZlyrWfqdvxflbsXosX4ENvB72YPR3s3MuwkbL2wg0yXk9Lu%2FfJ8n0j7Pr4U4IhoTpBv1B6qaEXvL3hU9IdKi3uIBLd94M5ErJ6USVw7EA1tzxZqOzSVO9XNfd1Y6jkoLBJzo5h8&X-Amz-Signature=62dfcecc2bc8c79faadffd0e5d3ae129f724848901a89a66f91e593306c7b479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

