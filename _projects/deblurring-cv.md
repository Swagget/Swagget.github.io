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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWKIX4J%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T055714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe%2FdjPn67So9QMGnHoVHtRZDtuv51UU35c9s4Zogh%2FFwIgZ0FDBUWdh01MkKsl5%2FCk4a2UiAeP7V2Sbjjr9BfGlf4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF%2BwAM15FaZZlkz%2FCrcA%2Bi1Yylgx8434WGtLIwTz4IFcpP%2FaANg%2Frjt45zO5hIXgEdi%2FoqLIPOMV3C74J8L50SdjfQvb26haJDTTIEvdyaelkL8OD1kdP%2Bzt0kP1wvp4YQRmqxmiOWJgmFNz65UZiegBt%2FC1ttezrzwNUfWh6RE0yfaKvt4hSxoe4aIJywlQR7%2FGds4DWx4EqH3XapLnIAvU6kIvVApZQ4a6qqQHT4dsP9zuyd7ZUzIsasTUyk5WSGiPqpxRB1K7QWRT4h0%2BrSBYSAEPrJUbS6zBdCevWWpgR2TEn%2Bjn6cPRd6TF8RUZXJ61ltFDCyxAtW9r%2B1ieWn1endsAySPU4dgDfQLbbBnQGyqN8bTZQOqFyamzPsU3rzQ48TK4vmQPUXWhPvJ%2F8Lm3G%2BHPseP%2BmyvY3PX4PJQpNlJGwNbRs5UUlCWNOeaG8LpExD1m%2FLUnXZ5vVU%2BK%2BE8NGkcKQyFL5emcgoZq1Eqw0wvNKiDNLKTK5c%2F8hPVVp%2FfkMdhTL6d%2BKsKHhVBvSybZn6FoaR8%2FPJtYikYmP6DYSehlXcwQi%2BmRiru1UI5jK96hYHbmksVjnQdu0E2KwrA%2FWl1Ed3qqebbQbXsVydsAaENYyveQZxGtgrJ3ebdO1ccCP9evHPhYKCKMPTrwdIGOqUBD9AVTJ7kgtcku0gIouVOQeFNgR6lgb2G6f8OZDnu24j1M5eh35jxBSfgwSLoMDCWtF1J6KLZTzeqL8uLjf2BrPa7370lJQAFIppQuMwqyT8YL9O0IUOYbD1%2BfqKG2tBboeeaOuqrhvZSwYDJrWrBp4eHDjNZtDuN4f1HkdfoqQBk7xSIDZ2xOsBB2ZtAf4ZLxgQtZgzNmXbmcezJzOCoJEgfK5hg&X-Amz-Signature=a9c68fd4b8d19293e799ee2f1a009e1470d98a5e0e9cf0202131776c09da1079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

