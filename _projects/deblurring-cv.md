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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO7VGAE%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T181921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2BOHcWR3ajOLERHJL11xhlVwxqG8dTNZuIdpgrszAWwIgNiWpv%2F0rep4I8lHHOCEO6pofhJF5nqrhQ3CL97y%2BUVoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMJkhPG4SplqN1k4CrcA%2FPNZcbdJtbusVhgSIRVV4B%2BC6CGUKJ7QWkFY%2FtIkdXOAUX%2Be%2BbwMpNtCzpXB8U%2BOQ0rQNGU8WdGryOZM6Paf1eWrmf%2BQAEX%2BPiKHIhUw6%2FU5AnO5%2B41Mbp%2FYHXi%2BNRe%2FYMgGeQTu2EZtKUBgJbGe1MRDB09a974FQjJkh4vQKkwT4V6lOPf37Qvw0s4aJ6%2B281BgAK2PpCOmSBTpjGgtqM2pVZu7iKYbVVexkg6HJenmLF5iqATOb9n9aFh%2Bhse%2BLsZ%2FGTwWV1D1FxIg%2BpExJw5qDdu9cFUF72ggkCdTIvloHhNhcVfNfJ8VpPNQlbyjuBDmvfmD3rTVfTMD3Vb6Nz0afUnva9mcs4fW0z6cY7E74HmV7%2BvR%2FQy%2FQ3vvHrvFFKOu6MBG5UcMWGi339HEqe1mPULSNMbs2%2FzLCobSoYlAGq3t3pVqgzdoRUm3L2wQorJw1EWKpQU3%2FaxUTLAjrLtDhxgU9d5gIJOp2uNQfi6asdX1wFEYgZv5f1iZc5p9lkRvEchJCZeg7bjJmDlwMtc0zSewaidrfFkdfyt%2FBB8bzK%2BU0dbiK%2F%2B7G0SFu9xNcpMZnhqvOeW%2Bv89oFvbjSYD7wehIn01TquEbVvFAcl242j%2BJgBk5zCq4M0IMLjjnNQGOqUBcNknljY1UrSuMNxGqrhegilow%2BwkE5oREXgsXYCr5a2ZG42F%2BfvSDziGKvLzb5%2BvE%2FphFiKSy97sDJlFXnMUvAo8A2Amm5JytRcuj31fCfU6%2BNosUSkxs5f%2BVpay2aVvV2b2aHzsqH6VTHwITbRHtuGFTSeNW5KYeSgiPW5MGUFlxRfi7M1cuqWcswMNld46DgiqgehYJu9mPrZBUidTwQAA1qsm&X-Amz-Signature=6cb7b45aebf2a6605dcdec4fc240a142ed2f8c2d4215726fcf576d3135744ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

