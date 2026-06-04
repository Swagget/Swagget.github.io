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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWGWW6V%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T161505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwpdGc5P8v%2FwyUpqxZERtxVjVeVBj6pHC%2F1uOO36pefAiEAsnug5K80QVQQJBIRvBR%2FJAdaqlMiP73OdPhJRIWPFUQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDNqNCFv4DeLllKEuircA5CYcQ4gyRVXtDvBiul69Na9NdmZy13xs9rDIXLPWO5agrovWNTCXsRDd2ELMN5Svg9zLbqbaNE7oNGVHRlmJ5T2XWIpVS2b36PqBxtZl3TlnuLSwwHeBrZIZSVnWop9tM13%2F4a7aIiIca6GmeSDTdzr%2FImTZr6%2BZDySyspvcWShammx9ji8IqyjaBQFFSpe28hHTz6HJEK0SVNaqHOCleHWySwEqPRqJNnt80KkE8d00YC4XB7FHnI7LHD4xM4zfZaSEAeDhvBsv4EymHN%2B4Tew3%2FhDcDda5ZHbd4yIAvKAY3KO1lj%2Buu9vyokJIUTBI9A0qTU5cM5ZDXK7HYvv5kTJKKAbhpUzeHjk9x8N0M1I0PfH1CNtxxWwHmnq8oOYKAGD415Pt%2B%2FZRVghTiDCcJowsj2StxeMZ1a76eTj84506Yz4MDtb8QInPQ%2Fh1E%2BKEe9mJB4W%2B%2BbVqpnEEduhHN5mcgPehEEHlHJegWfdjSvHqsgjnyTDeireQYEs2KCvi9xmw1OPeQWInk4R9gibzzOCzIju613oWOYyHKM57%2F44cnQlb2EytSuwN9QoPr4BoMFP%2BsNrc%2BJwW0Jx8ue17gCuflX%2FIQNJvd0bhve3rTSW9pvXGS%2FurnuFweP4MN%2BLhtEGOqUBsTD34iVsAx5knQ%2B8KLUC7KeU3Oofzc3q%2FSALFbUI%2Fw8q%2Fo31PvupicRBeAOA3dedxnnP6QowaA7wPo0d0qa6uv%2B5r4tspP22fKyDlxHy8MKPkccuDECGhOVlyx4cejxiXQx%2FOmMurGo6UUwJVJ44irMTy2EmN%2FpkR7EXyWxzVFiGObElRWNNrJOHvxUD2ZXcqH65o9o9qPX7xcu2vjBN%2BUVZiYnj&X-Amz-Signature=62924d01e64ac4d98ff3401163a37466a0546cb71decc62f73061882d4a3fd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

