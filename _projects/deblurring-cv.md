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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5TTJKP%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXt0fQjWhUV8rsvYQGRM4f2EAraI8CjUBJ0%2Bu5i7v4AAiAV9pfMvAizk%2BPOKRdwQb0dEStF3dZM6hDT3Fe%2B0BSHXSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOBKUmxjM9qnIuyB1KtwDwbFoAq9HR0FtQoJInuhcVd1COSC7I6tgu0qjEMxKJHSupSHl1cp7aLX3RoNTM3U1mV6Fzmb7LonLvx%2BVjUWGYtSekConQz1FxAkvDKPmwoovmuWGVgjhLxxZqbHFSU%2Fuf4jVwjO2tCpen0eNzHXkvqomFfwblSdIDa1nGtESYt9Aaxt0dPYb7ToAWHJ9X6EBq%2BUpaYsD%2F7fSuXq4XfJbR%2B6AUYeI9uX63mLl1zlnxVOSs0XJx7OFjG4v9IRqFjMdHB7gM1nFH5YW9%2FjMNmvSxppliNhdi7FEGY2yiq%2BLm1KjYd59AU4oAizaot7MC%2B4YrCz%2FeegXMeb7SC%2Fh9bW%2F1ozZubGoAySkxQRxOlQ4YxjIb6rdaq4sFl%2Fizt3X9WZvgHcaASxlq8wk8hr3Vt5AlbsREgyAJ9sor%2F0gTUdZLZW5CzzBacEVMJcDXQXwaP4hzo7YwxJj71m%2FQ2vVWPjT97J4IsQlQPo5N23p%2BNLab7p11juqK01HyTHKVDZM6pVM7H56iAo7qFnSKtuFUxY8EbR6zyQOxJ5Xos8qoWAW0eHmIe%2BYZ0qeH3lo74qtI67NigVAYWkk5yGS8CNigGqUPDETwobXGRXizFuNqQ5gPVYJQvKMdQyjo3BVM9swsZn50gY6pgFfCfQqQPxD0oB9wa2zhO5S7IyQRou5SUD9v%2Fbe8nWAKYjmWq3YUdT45L1Mu9nlSoYlC9c7OPHEZxrZ0H%2BcBRuH8%2FYBIsM6dNr0ymKVCkJyXU7eOfhbVr7ZifP0YYIcg4Xr2IwGP1SGtuYZaDNw%2FMomrvBzo20XBOLxBGnDIHqhy8AHYxie88Dl4Me0WWBIhjqWrWSBSUoveU%2FAaP3KdIYHV1%2BOeflr&X-Amz-Signature=daba4480e2c968d7b8f2c53c0d2ea6abdf5daadcd498e615e357e0631eded4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

