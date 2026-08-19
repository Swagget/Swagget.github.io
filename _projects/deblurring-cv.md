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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GNHFWO%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T092009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH85jlhEBJa%2BsAn%2BVjPvN1VjcVF4dBq0YMNRT2dciON5AiEA1yEwotElpLvNMXptzoghHyfhNYnzz7oq9ifa5R4AtPEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCcSY2oxHPXe3tPb6SrcA6cxYH%2BpbPxEp2faYWNH4f9crplNMmy8aF79Q%2F18KGLjQZjRd14o%2BkCHpgibSuI9oArMBfrWsYphsK%2Bn0EN3HopNsSAkXdRG8PkieZoH8CScqLUjFYxngEpAffk20zZ%2BMMMTRlua2k46H3MauSNCtcrK1%2B2nTARR1elfqsPaluNU2W6gFLfCN7kepq6AVjJRAF4kTN60Q8g1Toz2lFqv1QgCcNwBHcdCACcQoA3qtOvmtCsvzzKuUtMbF5iXws3R96UoVMImBaII%2BLzBnlABUE%2Bhahgvz%2FjkeTueeTotsIZcXcdrYX3QFA1SnalUXxNzrCGKB7VRMeLVqmdCMkvWb7VSru4n2Rq%2FHb%2BBF0cqjj197PVUpcjXYWwxU02w3CUw1LFd1saEi50PSlVQQA771jkLhg%2ByMqE6Vzy0pNVU%2FBVGR2QB3STv0Tj7sni2QR%2Bv7os241ER8WnCEHkH4XDj79A%2Bltzi8OZ7DH7NAIBP53AGFC1QsdiMPs5DUtR897A7KpUEJ9d%2FhOrOSn9tBy71RZK5qC9HQF6sYqO7QZohrRdCRBqxVnFUnr76v0VKfGa03uMcdXHtjdtqfdO6ZlMdjB8gcfGBEdXa3uSvpO9MyEED%2BjpKBF27kqT%2Bwz4rMLTjldQGOqUBj6fV31om1lS%2FrE3DuFPSAOuUWkYcRzAbTC%2F7%2BNBGOQEWJkI9p46k4kWjeqyHdabbBBI2EE3LB24EZjUN5AW5yP9i%2BmP05%2FXTPYvB5lRxEhCkMVb9xvAfYRtM8fzdLV%2BAX9hZQ1gVRGO7Um50jTjQscL6%2FCWiDCoxAQGzpgVaqduh%2FLZHdVYNGSpIbk%2Feq%2B7%2BdXtFsi0pvhNAAMCdJeOzDlW84cRW&X-Amz-Signature=65b16eee98437c1c3529a037eba19f6d799b933241042d94f181aa632ce874e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

