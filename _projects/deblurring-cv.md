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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSJS7CT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T201417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5mxycy3JIuK1B%2FPMHvHk3nXUs8Siv8Zksn%2BaNi9e2wIhANYq36ZvOazcWyTSOTxO4f%2BmwLD7uPsrJOzteaRHG%2F0KKv8DCHUQABoMNjM3NDIzMTgzODA1Igxgz6IEO8G5lubp5yMq3AOdbaOsqlOVKOUOZHdfQe9j138Ch2xgQvznAx8ugwf3XDdb%2BI2EfD%2BVu%2FNUTawykbwxu59q1IGHmBLM7Vh3QxByyDEQUb2xSq2TELZSvFWLRMLF%2BJyUi%2BvfMroQFepsQW4H0qXQb%2FTvs6nSP4O1hmK3PHGHrxzMn1sNND%2BKQLoMkztxwagerS8AqInZKtxKxeA4VMs088YkP%2B087ejYIFI6e548t9bq1%2F7KjK9vZ92FN9ZsQO08Dzmmhnwyg%2BemKPcRkOstU141Jg%2FuAdMONn7OPqDEKmugTbjnL780QYEFouPjFJKIUZPRcfctv91D0p9fPY3GcDGuJH%2F6TF%2Ft1y%2B1y9dAlxR5DQ2N1GaHgFRHnX1VSNNR9u0xVY1YU4NLm76WOzOGLdjSzvveQopMI8xYKOiDdPfFSX13DgxgYu1LWUk3%2B7RwwwNeVf%2F9fAJDcMkAAoTFRb55suZdQkeAv%2BBIUclIiaIPtOgD3uYx5hPOaXmc268IgO3Yf8AapmN%2BJSd9wWdcgu8ouWeb%2BYWCdzG8fVckEYL4iLWparbHIX52%2F8Bu8GTRfhTK%2B0Ulorf%2BHXnvcp9NcRiOyJCIe8%2F7y271PliOwsW1TnKXm5GULeqViC7LoaSuQ0uYGI6wETCGh97TBjqkAaifkKknRHHXD7yaWyShdjouhCmJY%2BjyI%2BiC3Ss417UuwxW56HBD3zdSnf1tddpA9WPYUE4Tnxf7Xn%2Bc8jsy95%2BvrvmESI8WmzTpSXtjH9d0rQl%2BgK%2FdqJZsEPfiUhr0vwzBKDWoZIA8d0yYMqyt2uQQJyAKNWCO9ywfb695R3Qlc4PF7ZBNgRIQO2e3THcaqLFrObouIi1uL49wyf4ke5JvND4n&X-Amz-Signature=95dc20e67980a05ace285051cc7e5598bb7cd2c84cc245c04a0f12ff4980a2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

