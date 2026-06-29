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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2CNQST%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T025502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs32k5JCgYp3MpBq%2FOK3TEuCYKYUiz%2Bi3%2BhcSvETPopAiA0kYuzAei5Kk2A0ftt15kb2h4nqy%2F65%2FXSPCUnG5Q0FSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj6Lh7ul6vO3VQk72KtwDyo3Ojo8Dqjlt%2FPLvfnply3GaKEyJoB2TcizmKx5%2FvcWbDqyhhl21lseBC3r1A2%2B8QX%2Fgm3lG%2Fcp0ZSVoxNnc%2BARDLrF56mqdFL23XYn3MYmKx2wd9J9qYhVtDUnfoa6QPcJKsbrB9lM%2FAV%2FC6RNtkjAXQbCTnjfJzuBMYEDtJQihFQIpLnm57hU0%2FlK90fL5YNqO56NQ8UnG4RTrNI80ND9ivSVwJk3G0WmlxwCxpIbNs%2BrCcWtODwao7n85DCvIdtHbGXMB6rqX9TP5VdfMQ2foTzIRmA4lEfuclJ2cToxoBNQe9T7ptr0bBtIucvXSC8ODqS8hxLnbc49g%2BqyuA%2Bi6S1KJ1Xd71IN19Mgw1SvcC22Y9YNaIYiIxATHOs4O7KQI0%2Fsm3iRukQO3rOnH8ezyPUTsiiLdD%2FRNGngIC%2FztvhQs0%2Bw%2FDYO34ULWD82OXx9t6lM0fykHcD%2BgeZvb7RcIqsczKk29S0JlfaKtjRdrm8YBWPrKldhgxg14SeXChdrxVy%2BcXTBQ4qpx3CXojzTzYFdz6cdrYDwD6mR6VC%2FoyLF%2FmINAXga4iGpP%2BQVuuD%2Bjd3%2FoFnl97bwHQz475HuPUA9hPCKVMEzCIzBGBbksU15sJzugT8hOf6kwr6GH0gY6pgFLDAVmMLiEooefWbFktUZbySJohq6sGj5ecEIo1jPSWpnNIARBB8Pg7L4C6ylbBLIbpAPqRgfwYaqWOi8Og5xHNhIZA8zJ%2Bxe%2BqKNpNkpMPTXnte30Pp3hHyfUx0ZRfv%2BqwQIVMqu1cXcpjeI1nObhn53iWCzi8C3ZjHG2k8MPfljt%2Fx5Z%2Bs5zyrVh88q%2FuiqZjnYvQYr7A6Zgmx6ytR3IJpIeH5sL&X-Amz-Signature=bdfdee81a1c951552e38364784dc05c3e23a0efc88e81b8c80fb6bc4526b0196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

