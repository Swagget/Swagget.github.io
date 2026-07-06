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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKIL4PL%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T111926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUtpSjPxFeo9DshaN9gldmx3y1WntTwvYntZf8opHohAiEA%2B0O4w7Ce4sH62gCfLS%2BzZG2buBFEajR%2BmHKCfP8IFSEq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA391aGQb9eOen5M2yrcA2v2slg0X2QlMiUKgcPJkdWxNpOjUIx%2F%2FwwupXfZ3lmt3abPXkX%2FgP4OOzYnC6hI2mWG5Tbb2ghygxWiEc5H5R3g8TC0p2RZkpmWB1F%2BehT%2BRvBtRXThbuNeT9glDkjQ27JD7uTNTdT4v%2BSd6Q%2FpNBeA8ytECMhH%2FQC3%2BXEht6%2FmUfINRpVGzz9wTDXfXR3mSATCLspaK%2BkDgJDpblNAgEEtCvJhxFgsbcbZGFycS3SubZX%2BzRW8Jx8holuYGCehESivNNAFqhHpxk4%2Fa2ofXBUxv7Q1NvjLJGei0FBon3cQSjp8Wvo7G7VRTeYiYKFNNHCrqnXkXflQgeqKfvsgreYSABYCseRHDCHgOj%2BDg7V9o%2BbwygNz2H1ZQIVxqVmnN2lWz1SU3T31JGXhFVcGjrjZWc98kyOfBHhtnvDf58Qa8yyFuAMh%2Fq8TisXaK3QApRuKTIzcziQxqG6GmLhTd0Vw1TdRTDpK8MZI2rpThe0wjg1%2BNF692UBJM74HSXBb7JbsBeMMZDEGna7oamP%2Fkh56L9EovL2EuFCID547SKk0a6GN09Y2nuWwPhMrJnGtZ1iTWqvXtvecHAa%2BDDXSFSStuLz05TF%2FMnSsM23q1lwgF3Dxj%2BpvaeVKHh68MJX%2FrdIGOqUBZnagxikyT8aGhMBfC1lfASZU0BOZWXTRkAq2RSG7ZCT7TDRx%2FBoy9nhfXPTAj%2B5vrSPL9MZNutDNRwHqfOU7lu3zocp8dnjLQy4AiyB1jokQH39gCnD%2BUNeGTCAhfIxYYZFJ5iARQlm36rKs%2F7OSjWugBzzZ0fVSDqzT%2BYLAEHDFG8yXikqvmvcuRdQOxCSkQnYvHEIntK%2Fl4fffAgwoJ%2FGi7s9m&X-Amz-Signature=ba0d0e094fdd265aaa57ed451f66d720c1d165ed8d15ee87f3070929a66a2392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

