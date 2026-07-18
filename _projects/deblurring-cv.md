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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZIK444O%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T233940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB06SO9AKUK9Qpg9PeNNs4g9zlMzvaSRink5NNps3LMaAiBS3r32B%2Fn9RoUY8LdsOKvtnELSsWUdGQVmXkOclTLwtyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMW5FtrsPZax4PMBRkKtwDlCKYSG2aJ198zvgXPzZLTcdWLgdtXobTV%2B%2B4b1oEw5l%2FsdofVG67E23brAol8el9njM%2F0D4egKhShyVhBv80kSPOQz%2FJbvABUiL3FwCDH1OnDexLqYxqYdQTyO4hPqNBtBseavJWTZyAK7KxzKMn4eNBVceByDZdMKknW2xJH6BVUQaPVybBdX7HXJh7cqR3eVWNrm1ZPzEi26kr4QGHOQjCmgPWm22Be%2Fucabz5vXSilbthi%2B8xrLJSBXcl%2FsdiV6i02MRLmu4nEgDuwBG402G5wHp6q0UTF23oOytqaP4SZQ8Yeqo6TpPoPi3W8Z98tC9z28T97gDMdOnnglDEXFwxwz%2Bo7kPK6nQBpOMiThDLz%2BvTDF49Y0ZXptzPNMAnFcA731vawzwd%2Fw2ih6PtLROHYArL0%2FirxBD7raRl%2FcsBHfCYpMeCkX6u90oxL7HVdP1QzbHOm2uKsJ3EJPGtlXtrWxnkAGwmMBTUGRPFg%2Bbg36kLsQwwlrzhrnp0ZLFEdUGr50vDDs2Et7x5y0EivOzMCvgozf5Q2vT2gjaRNUgBXtlHFIPMT2TEstFLUO2y6N9Dttz1eMrdHnOE%2FJCjmJPlcVFobUjQI8b5yyqwjO9%2BCfB6GCmT0cuWWH8w3Pfv0gY6pgHI8fKjy5PKA7dRSWvz2F0jxNnjXUIiewi3QUAyUfhed5TwiVYcwAfoo%2BzSlh9iemL1kPBy9jSizQQMRZUpeLcTGI2iXaBRpZGveJvM3PBTFXgjMGdM3HbY4Yy9AEkRT5g6S6JgTaetLtboczVMi6mGnGq09%2FL04BHwQQM64tWomnl4zWrHJGyc5czOovxccCLbXXPfX47jo8DtMG5P1%2BkoYRAd5ktC&X-Amz-Signature=6218e32342f411f429f4f689fe612ae9cde549271a43fb302490de772c2cdc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

