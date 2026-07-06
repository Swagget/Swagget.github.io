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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCAB64L2%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T235513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa43K2P4sycf181SYUbl27P%2BTvWYYDme%2FgBlVK91gWYwIgdC0Ulf5fQ0GfZ3FsB32wp6RALCU%2B5UI8VTuExi9P8MUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLyzEQZTogNtRE%2F%2BjircA2xbkhBxw3M%2FbZU56FJZMWnky1O67hN2%2FNAxQ3EjUyC%2FHY8sSqz%2FrfQD36o3Lz3wesbJskOBIr1nsbCOZzlU8gQ9NPpYyGH5BXeTDJyGqsYpEE7d61Wekbt%2FG5nF2YagAVYprnliqIPqkWzTYRSBaChzcxUS5rP0Unjmrq6Sc5%2BZLGjtMy0lvfmVt2UmtOTMzLn7EGvX%2FneGrFyXJZmXRJUcWUlizedtCMhDohfkubEzRBKc1%2F4UDkOnbQHyAo0CBk81FAvPf5nH4g%2FlrvnYr5ytcuNjGuSBHOje1uhzr%2BudrgI9yyfYa3jkHfeJvEGnoTygh7WxCsCdfhtopXv8HHWCqyNP7a0GO92WDizSjab0lz6herETWKwDFiyBhvu1DziN24PrFO2j3u5H5Bfp9qoGdXk9DeqWINJ%2F8bxIvZCw3MwLyO1oHXvFu906RHk5dZq6Twh7H87sbdJvldkE%2FzDDRE5gc7BTG3htgWN%2Bn1K%2F8J59nMUopO%2BMeX3hd2QkEc7Q87G9QOnxhHg7fNlXKRnQuq01x1WC61Z%2B%2FKvTpd%2BHtQsqmSLG53guQiNjPhHwnSMRPdQxIDuQ1CTQsA94KYoqwhA0MzIcokf9Z1F06VdqcDFtlU366w1ajQd8MP6xsNIGOqUBHBF6mNI5v51KFSyTGfM1XTrWleWQ88hv1v7O75GQoLq8xQE02ICtg5D%2Fl6KELItUxMj%2FxwbsPGf0dXG8sV4H2PQiRs7SsXAgtYXfemy8Nt7DKOqnf8QX5PZQN29IG3p6tgedsbmQngji8hmCyMWj418tXAFvv8p2ZVncokr4q9ysiVVwkySnHSqLrA1ncnyoAFnVlkHG1sXf6z92camAbSGLn2R%2B&X-Amz-Signature=d752e695c3585086224dceef5bcbc0373ad9248a713318b76060184ef27bfe88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

