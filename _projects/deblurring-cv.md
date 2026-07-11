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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMFTZBN%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T070318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGa%2B5f%2FFcpWkWCRUpI%2Fl%2BdM48%2BhhhuAFr2iKRY%2BWPZKgIhAN3QTpEcYlpA2jLVddLwOmsJG%2FdfpSiAZnh6Edpm5e%2F%2BKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbrMBl60HcZwuYKtoq3APlcaH8uNcG6NVv0CiKSHwH%2Bahrn9NwkWowFMiuzAxi5%2Fve%2BRn8fSgW1gg3qWN054SsLXOzhLtc1lAg5cAQyMWKd6ExCKmYvQjT66DpnP0ho5kmFwiYRcxcqWRfcEevHxc%2B0wTLaaR2X3WA9JCwzM%2FSXD2BlLPungZ8D66FsHeFtM5HHOca5yzounEXlhjJUAuACeWpAXJcXIDoK0NvuBWihBe9NffJBwZ9UvONwXAc1DzGafYGt9rrvPyLVHV6nF9h1fSGWdKI556vY6V009kHlC1rT7vsjEKhJjRe7xV8Gi6U3fGMkZtW%2FckwU0G2UXy7VklSDjx17zXnHQOzP2vxB08v1b%2BJAWAQeo7hW7sGnF39nhoMG5XN%2BDlErD%2FXNB9SmndneTdi52o4E7V0hesrT553xpNZn%2FGT2lDYnXy9NUSJDzJaebR%2BymgxpKz%2BYxyeWboynjm%2B7P0xaKAOai2pKWRMJG%2BUya55VQv56GTZapiLhBL43qqUPO7igkL74yPIprkw40XPXMU3KBoefx0SEgVlAAV1wtHJjm2%2BBUf0J3dSZeIbOz6padmoSMyQ3SkkhG6nsD41%2F4K15uFDgt5rOpXWB0JDdLWU%2BVbSFq1O3nHLpCR8qSfuwYpYojC9v8fSBjqkAdIiiEg7iT2eQwI%2F6mWYBv75jGmzcZByWeuxRyjbPNjDLNiMcbHxMEh0mQVnrodOUGXySF39w7JvJbTvIy4OOY27H6bdFu7C1GSy3qcVL%2BpY2PFWZzV59kDomVeg2SdDIl52MFBVKxyFQNwXD0rfuCDWyR16CunF2xfHY6hjJfVdM4dSsGdfwOEW4AnOOY6FznD2Be9qd78JTm7Hw%2FHeVlCQfKrl&X-Amz-Signature=a2fa80a19ffb2fd0981ec6a600d50c1da295b3ebf4a84312cb4b0c2220fa30ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

