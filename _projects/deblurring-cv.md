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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITZFHCB%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIEDTyvog29OtiRkBJAaBsOnA2o3I%2FAtw9dhBh16waTR7AiEA6F9t6eERGlb0EEzTimVMkZRE8Rj7Xy6zXWnYehR1w2Aq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDB6DT2ddVc9S3ndgircA%2BE4nKKQ0eCqzeM9OsQgVNj5g%2FzUF51Jh%2Buan4wVNXm3nOIWSqXCyradz7iXJq%2BPugBGFLm1ssc4jdmpE4oP7eMzZz7eZQMdYYz3AduzRvE3pe7foHEOGjv1E1CIUuXzjk2GxOoExtngCXRSKc4ShfYR6Vei1PJVfu6p6SCXmhOhQoDb9sglVSxxJcl4mkOPUo1Gi3M8NfJpasx2BZL1PHo6IivSM3%2BdlYTB%2BR0p%2FbcMkNB7grfyiyudzv3hgSQH269mZ9zRc%2BTe1GEVAOu77blwaXET%2B4ghS9v1NvoF05bF1W0YNKWnr%2BNH4jq4jdlaSjscNobskgIsP3pbLx9vWcuJxlgQBpEUmy7yP5knt7Z70Vd6q24zbWoU2dYzpER3pDeknXWSTktqEmcekBjsU7bkA78G59DwtDoZNQyGjXIAycBTWyIfEiEFjeOVWcJRrO0l9H1x7YL%2F3hzdBR%2FWwvv%2BlQuACAW3UL2troPcX39%2F%2B%2BaE1CaIz%2BtQmVSSnTeQPRXhLIY5D0E%2BPyvIF8IcomxMwSE8A5KmuxJpsIDpF3oM2CJUdX9vhh8vNz8bs%2Faq2twDg7uBtXwNBB%2FVyyW0Aj0h%2BycXFsVjBlsjN8dSjwlJXmgUAv%2BebOiLbgZxMMGF0NMGOqUBK68%2FdJmV%2FUbO1jm3TCjEpi08wEdasKQ06pLc%2FSVXirHFteZ2F1gar00WhHYBEWR%2FBH3%2BHTfegrALCRcuNpAtFjAZOxOUiif6AMYdYMKRW0QSbdzsJZL6jwLYSYOSjWBTObavjbQ48vjas5Kkna6HHxmSQj%2FG938jIuzPAekNYYwYdLVWfvLBpT1fMVupPcyjLvQfkDnvnQNYDDA0APHGEgGTkUnY&X-Amz-Signature=3ead3559e53dcd6cc471f028c80c03b494918d5bcab4a3eba46075d0a4a044bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

