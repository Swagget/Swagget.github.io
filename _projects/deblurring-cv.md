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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBUPCYA%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T015724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCH17U8nA%2FmVM%2FvOdqrOXrmsE7BnnXhYfHDrcQ2vELw40CIQCccvPPIJKQ4MyPEdCnMP1xTI50DoC8V8ai7A2LDxxuwCr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMWJCsJyrECH6JYx25KtwDHk4m0ZekyioOwE07PKlf4o6CRsAbrRViymqJah7pl7vE3e8Gr7Kp4a8wbA4jWPiiJuVKL7PN3zhLQepsxGbXcq1pfiJb61FjsZpeWdQhFvFlh4SXVoEdlErM9kY8T5oSofSLlolEHtMLd4cO9vLNOgki5Pe1c8gAkxIaBsQHIuz7MfeHylUDoDpFaZZI3ymw7eyOxK6H%2BsH1IvrqgPhWDE9IvVNrzuVpOu3XC6iLlH4igpO%2F%2FaxtMOPZFlkh30%2BetqUOyRfjJwsb4M%2FPZm6A7oOmbgGwbzykCN48Nva7WqemufvPLARPXpm5IDw9k9nV3TRPYHO2uMFwrCjkbzgZaflPr7QMtB6MYDC79aIf6fATvruPseqszvF5CqBmrPPiCxBv%2BQ3BE2NbivYR%2BYv7qo4un%2Bu%2BBFuxz%2FUlmHL5kSIsQzbzlwF0zTYCfhg7lqX5ngJ8WTsBy9z71QTptvxXhg4Or51aH%2FyJnz%2F6GD9hjh7tPntd9tMJvGor6u1fncoPckun4ofq9GLDfA6j0A0GKKlJpGSVOhbqMiozilP1GSw59ms8mXgBqrCbPf1fOjnjVUhUxNWCb9niaWZMq2OkR6RMYIx1a3YJO1ce7by1F2KCVtle%2FBwl0KFyc0Qwgcyn1QY6pgFxZEqW%2BTQiDxbMEO8hnOlOU2k6NwlN5U4Do4cY%2B5MpMaiL%2BcEvVjDQOGOlm2GSA99OVhlHSvnnoCYMeTQiepawmju0lsfE%2BCat1P%2FWUhRcg51H1DCcyB%2FS1Dbka8zhbEeuhNfWwaku13R0OdYh9YMt2YuPx6%2B%2FAMDI7%2Fqk1jSaiCSLaCyVrut3CsvlzGP386QuSpMZo3ZV31GKfFpAx2hMkbWUEY%2BD&X-Amz-Signature=b8c8125fa5b1f93769d046762a781923ec08ddcf2b9a4e64a6966165e161fd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

