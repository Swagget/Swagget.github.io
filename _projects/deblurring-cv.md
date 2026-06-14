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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFCTIPX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T104205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCTWSmkIul%2F7QZ4gmabhfGwPzed5VeKYlJ%2FNf9se%2BQHRAIhAOcQ7YOjb%2F26Jf9RlSi43ELMHSulE9I4tNdj4irIPMOcKv8DCEAQABoMNjM3NDIzMTgzODA1Igxh11OikRXjgL18%2BMYq3APBmnW5O7jgNj8slqbSIzzyl9qT2fHSnHdYWkN8CiG%2Fqj5PYNxrxqpqAzrnaU8k6YWN6W8rNBR4pL0Xrm87p3w5c%2F%2BPAFaKbWSAcojB3oJaD0Q2LAKUtOGcEbkQ%2BKhU%2FEPNGxcYiFIhpfOnIWcf0%2FHJRYTF0qRDaN2oHZwv9NvWmRAQewu5PAgUMK5IATUbDs8vti1nP6Hx8OoQpQ%2BcFzH7OmJrz5YiRodcrn8BLCbGTW5sVTTPBvMHlcuiZ0N4C2RGXsqnNfpLwRG2QpdDt8Aqez22aKjp%2B8iX%2FI52X32uQQZfSoPkDK21lX9XTKcfTaS9NWGYoc42f1lQbN4QraZ5CBWr5w%2BRapB3FGWqIdZVNNOplaIVr4Dv3BoExAvX%2FVHS4it6IsVPofI8iaL%2FapXhn%2FCYLLIepjQsC048A91jUTcAWesBpJzmhfLTsRIwoNgp6t6k7AnI9RdE3E60icoePHTxyidkfM%2FOz4%2BlDkLqdJRPew2JIMqEVac7eJrI5fqHYdI26I0sa%2BQ90bkWsZ3RJYYxBBnFVsxAOqHYmhYM9uNSYmz4ir1caTQF2y3WcGw7026TKqUExxRYqshdlEK%2FkMTnPBuw6jm5eSDsklvOW%2FB44T%2FltBRUCbARTzCXnLnRBjqkAaw%2BbwAOIT9T%2FStWAXbuEOelw4Eq2%2BZdWPjh9dQd4n1z4uxTxiu6%2Fgaxg46gx6xTnfPH8tUqZdQ1O8SmrWxnLLevHpPLhgHMpLngBrzmTlaVrjy0P%2F80PA29L2c%2BT581qEJ%2F4ClyAFwq0DcYvdMqu9IVFJXYDxI8nf10feXLFf9nt0K%2FliUD0QGDF1yfHI8B8mRT%2FVHul8q7gIaIUYgh9U6uEG6I&X-Amz-Signature=853e6b3d186958037b4c89b9d61a788a4b361413605ea2e3dd3e4166a922021c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

