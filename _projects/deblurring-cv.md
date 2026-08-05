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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAVMCBA%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T102045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDYvKJK4Pjrg3RQ4iWz%2BFNeW3CkPbIFDdvOMTEP3EoASgIhALNbMvbfciCGKqH60S9TiVPaLZk9jSOPSULhAvGKA4bFKv8DCCMQABoMNjM3NDIzMTgzODA1IgyKOFtsMfz8idnvF%2F4q3AMrYcXvamx%2BTr6nx30iBd1Dqfj6J7TjqtKYAPKqyzCJ7amEwKiXt8pc2ddqpjjDGe9JCXEMxohWaecZd%2FB7nEBX1ndaCyNTSjqBurCVN%2F0vJ%2FdR7QaBg0tAfMyB53DvQpbz0dIJRoc7X8IYAUtAMU0toklVdU%2Fttju5JdQrqxZ4vtZ%2FHwiJ46vKcQz%2Bu%2BsFOp1tJ2cLoouTW%2FxZRFWdygH1fHwHXZlFfppe%2B1Ml2n5nvKRBKb5ucgkV34HOVW9kLkFKKl5KI%2FnI1g%2BIBQWDE1bpK6aupIzdtHjKulP1PC793kqYJhLq7cPYqSlbP6N1YfnTCy79HuXRjDI5e%2BLqoHrj9HMpJUDg2%2BttSmo%2B%2BexO9wu6NrEWODApZZU34UKbUpp%2FipxImst1hrd7EWtmeb3yyCYnR8RzqArXXTLtzNgz2krnVTFc7DjQqEL%2FVlzvA%2FP5blg44EXSPS8vJ9XMJxDHGjakUbZQUyI020jhxummqTwQN5herT3%2FbGyouXgEz74%2BSAP4iDrbGOzC9JaxjO2X9cKbEgSm584P0G0waR8Dh0%2Fe%2BZ2PxUEH2D6vBEx5qBA%2FKyy%2BNanEa2OUL0BBUUAcxqyxG2EEXxwumuRm685VRnZpEYzLcA2l68JPSjD%2Fi8zTBjqkAdj2HDIQA4z9LJoRsrzNdwVjERGQjKtQEd16LA0Iqih1Zut5hMnLSy3bfxgQAeAXxUiFwrveqJVW4yK3cqUwI8VBlaFy3D3%2BBLnPS2lTVcYK6wJRfBhybzF7I0XkxxJpD8L5yacVwxQjnDi7xpB%2BwJMmTC6x3ApCcyZ2s41tXMwxeowbTehapsl5gujrbzt47r3zP4foAO5ZF0g%2BXnPA3b1rtIXf&X-Amz-Signature=a4d39d09565cabd68ade2be397508aec2ee2e339d3a3d4829930b328c653f23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

