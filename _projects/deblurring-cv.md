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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDSHTK3%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T202609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmhKmidBbiIOQbDbVS8vN%2Bo7jikqWfIJVna0RC8fkNbAiEAtfBfODnwwqCzLKycxn%2FElLlGP9wcQIh0iOsPaew8eW8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC1yOJdDo%2BBdwRsIVSrcA9gaVD%2F3ZtgfLR1A36hHbz7AVe0cJs7izjv0Kb8cts0t6loXnCcTxmD26Yw2ngqI5T2ZxG3EU6kRn1CqTY5T2L%2BaoJ5XFvec65bBH8lOCBLEv2SWk7aT5QDVtjCLgh1T9nCCn4IUtZ6ij5sEbEF9aeEShm5a0PSU%2BJMK3yfOYtGZVGDUZS1B4Ha1zhdp%2FiTphP5lbyLJBTf0NZ9Qa7PzKHm3YPxZsAqgrDxLdXzIHWpQwlmlZc4kBqDCOErMFPeedNmhGom06GrKLFp2wcL%2BthLUIZ8O5eYgkMoTJb00vZI2ogQcDMransNOgG0diNtMoFiEeP4joTSOzOLoeIHCy%2BKRwA7d12B2a%2BufHXxhKleYpp8JPcZBnbKIJTqoWOwfqJAKtJIuisLk7kHxzCv2kr6mIBJzIq1hXqCUfADix8%2FhUsafviCnDKEbdFI42SpggeZIH7j5ld97pownYHVIsDfiVvyLrMLgcyVsu2CdXBg9F5drrl9YF%2BRdWuj5aDc5UdDt8IZ%2FzYlcjldS7WjijyfrDif1Z9y3EY5mHxyTqV3DMkRYTd1POQAReJUfOk2aopN6vNany3P0oGohFzAe5ZMGSqwYSB7mpFdJ5va4rZPuM%2BItmx1AE6rEH9SsMMT52NMGOqUBS9HH%2FnQfQkJEqO9ZE8E%2BS8Qrbkw0YFZrLUjbP424a5HoN81JmyXKkvsjiF0%2FFabHzzB7pf%2FtCVhyoDf0tQfW4yMUnG%2FfNKKWc866pdvkC8DVrSuTgCjVDDiZJcAFxk6phUfv0FBAv8Jkj2TQdJRA87LT8I2E34xCahDkyxuoF6vcHXiGqTkmaWlgDOdU3o%2Bwqpo%2FX3171zz6Am9f3%2Bdea95dthG8&X-Amz-Signature=e5a94c137269ce9a679e209e793ddec3b5151fdc05531e525ef395506a973ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

