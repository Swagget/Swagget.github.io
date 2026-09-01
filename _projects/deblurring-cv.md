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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUHD77JA%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T225227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAib9eRgB%2FHr9u%2BximyIl4PeFz6KOwAb6YJDrgB3KK8VAiAD2n60n4Yc5bhLtwLtDsX8vTPDLgLlURNSfcRrhh1h5yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvTTbOb5%2BnTWUASEKtwDTXP%2FZmpmQbpYxSWgtn3N5nDv31a5kWTURF9e5W7O2ijHKBkCR%2FmVFRl%2F1GO44ft7Ip8xn0VZXHDq%2FGrFATiHolfeXpOksLrsj1rl%2FXCo9xs6DzrfTaw%2F9WX%2FSc6YopBnYZZwWDxtm2q1tClHq9WBq6H8EooBNQbdJv9Qtqj0NJPlcY45KqgSLKPcyCmPxQS4oUbYpl9rytF%2FHUrmTVRh25X43HDVSDZTYQxFD8BBpqwujCw9JjY9NGuSZH8f4WFtndHXLySj2mPbdqjM9gsrc89yxWdJQzOpBFC90iYC1vEnXlnXPqxYVCsEm1hDY6ctUdoWQYBz5fUn7%2BKsbODDe3kMftvHb2w%2FvSveWy7phn%2BxANl4bB5YLnrteHgPXVlhVJTRoNwSY62nGNh9yPyycbs1VZ8oe0WoFZWMjkJ9VbRtXNtpvJd7fR4aMGBXIx0l%2FmMLbpmpZBuZjwEPvDpSaOH8HW4GqaQyNDFOvJp2gPQSeHmcIl9qpLNxoHi7%2B2jNtugp8iY7QTREQqWTWLpcO2xbtA8QRDfm%2BEYNLWJZzeU%2FqdoHRobsmxDjtM4zAaL0ykScccjNhR7cTNvrDEe7alXRWubAseNXYjrxeZAa6lb5GZd%2FLKMTenZAaJgwipzd1AY6pgEy05Dhjo0Wv4mFIdgGAtDVkrl9LAaZ0hOu1LzUSvFWgCQQ400W4qPeiL6JEmawf0vaz2t7%2BcTm3cpP2g13gmoq6uSGlPeGNGOXGtX%2BhccwzFMjAzK5JIKZLouonVKQSZ%2BQggI%2F6lTnNHA9YFCo5NVvTDjjijervsX3wT2UBDRra2QZEV3LQiWS6rALXUzKR8J7Q2MhR%2BVM9wiQ3TcS0rEYiOWpavYj&X-Amz-Signature=88940ddff4d493372aa1888050a462ed056972474ae136d90c83983ed8478edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

