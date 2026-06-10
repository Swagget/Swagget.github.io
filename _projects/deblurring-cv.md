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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466442VD64F%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T224510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGKbchsNEphL%2Ba7ww7Ce%2BykwJ7sqcBk6UaTjwRdwzagoAiEAw6sOTBWQc9%2BBUsxxc4Co17zBHZ8vrpTxMYseFKWQahAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITgrFAF%2B7SDLVNMwyrcA6A3cNemwzc2LrAb90bCKJ6gy1rwSeV%2Fy145D5QKuXBLlX3f8%2FRDQXy7hrQblKZzTUCxaFZHF0E5MkjBCG0dRd5ajYZhO5ZgFfgdr8ZEQpUIgmC8eBjDTGDm6XpXjjYSQ1%2FMQXaytH8LDSCG9wLvfys2M3jnS3jWM4sqEZ7cRDGUSpbXjyTZ7CcggQUpmPt8IFEqvaX5SzwqAVwEHmqxQszwwdYEv01F%2BNVkYUkZlIpl7qJ0wM%2FMnBgh%2Fv1xNZubnSNcM3ngGZwGWN1Fnkx3NrbLRa02728zWSTe1HJAOmwPrAnVpO1j0%2F9TjniwDxtTGd63Qh8iian%2Fkrlg1Huc1aQ2WRZEmSUW6Bgq3ogQYaFTc7vKKJnM%2Bg%2FutuqbJnj3lH7x7ELBOJMRzYeCDt6Fcg%2B8TYBWXJ0X8sqKbxcs3i3bFW21cW%2BM%2BmDZ%2Bx2olwvTRKzEfbt6sbHF%2B0QcfZUVme3j6b70wvJjtocc8Zlr3nzhkqKFBMwVOCnC2Tvq3b848CF97wLnaJ7OzL3oEn4V7CimOwykPiW4cOcygpv%2ByWjfYTgqbWiPVqFVXjtHCXMf5OmiTLOciKK133Lg3vJsyfcX5g2lYkZzi%2Fx9K1Ugm%2BMnsiBbmSZLO1N5MGJJMLjEp9EGOqUBdRRJFVxnloMY96i96YtEBkmR9nRjqsocOc3e4Mc7a3g63VplBpMQQpposYZDy2t9XKWlxRUHqTwCikK5U1S4uFvs7AqGG7JRja7C61I0CTKezaQSPYutKgTRKAzzEp%2BW4NPmlm23ExpKmgJvOXgV0Wlxl5wqzDaeP%2FZVTnhIa1ZEE82kN6059kboF6BWQTookxSaoGO6rSkF3i%2FD3dBxM7hGY%2Bbd&X-Amz-Signature=808414088608efc8f2036a3cd2659d43638945cfbd84af1ee225b971cfc2ce73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

