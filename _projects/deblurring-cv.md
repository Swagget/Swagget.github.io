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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDJFBVK%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T111504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwiRYknLsuAg9bQcGIL8a9NBridMsr0VXznKPZ0fG%2BuwIhAPm6drdbSGBYv4xQ3PKjcNAvFfYSF6vHymRq%2ByUZKYZnKv8DCAMQABoMNjM3NDIzMTgzODA1IgxG16dYL9zqw0%2B1AM4q3AORXsx47QnJEhfJfkJIYTL0u7U%2BPvHarth3tXmgIwQr%2F2zgTqxIjPmctWWDm%2BuOFwOTOfKLvCeUYng2IYOYePHR5VjcIkvIzkPeyaQMRgtDiD%2B6CrbTqcJeWB9TBXY08a2rHdXmn7JNirFCV9PCS2aiJcjwEbXNnzfydmqLIjjTHBH%2FFVA%2FR6Dzw%2FIcoNKtPTPEnX942K4vOYrL%2Bhx8%2BztM3qNVAuq9KveKCG2BA4FSDCCFvK%2Bjy2SKELacU1%2F5AlGFTOy5IKMf8CvW2VjiihyRnkYWOj%2FSuycQmtQis8J5w7ksH8F5qmVmtr9baVREmc21WkHK4RUegt7znKwErpZ6vpQ%2FAiqw9fm%2BBnu2UVPaRlYStS5GoEvEY8I5tAwzDguMjdII13a6cQsTqbtLLP4GUfOTo%2FKY7NxQtNhNqoN%2FNDmw2dHV28sd1dU140uJ1dfcl6iPkSEwItdZsi5OOx4aP0wgr3qaE6oekpzSX94xkETBPSZ1ueDLqd3J6gM8RWDSQrcgqLTdnzZ2FZ6RyCWEipgQr3GFmNqtDfYMF9JTDKYqmK4QQvgc3XP7erxqU%2BRMsNDxeFFIFk4XSIN045XOeJgMVgU42bUi%2FgqG0pg%2FYupIS6Wt91dpwCpC1jCA1LXUBjqkATi5IgHTTMyDBirpHG%2BWz25HDYX8EgEZBidsW33M8gwftkLuZPv2bSDiXz%2BIzl8ZS4e%2F6VYcchcgtoE2BCdZxdg9swXvtkodUr2IgsSXbmz2kTvrlAjRPXvzk3GVJ24ChRUXf40o7tpp9gq1RiIrbRmOjzDVmZkaKlneC9x9J%2BORRItH%2Bo5RlX2DAQuyJZuAsl06CcOTjkoQvrcxIO0YNbEVeR8m&X-Amz-Signature=3c1ec12990d6f84de6f2287b4a8f87ae58ac739241a2fa8c7adc91bce6a5d240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

