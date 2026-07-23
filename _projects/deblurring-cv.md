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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHSCLDM%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T215333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDbGZxqTXRr8m34qEcGjWRGmFPWYbFKOVSYbXtJFVym%2BAiEAk369MjpzhaGRckZ9QtL2tYoXtMhtLP9RYpxTG6mCtQoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtPIqNDGg7Y2OWymircA8q4kWaQK7Ma9GeOWDndJd7Y4521K3TN2PHIypdG48unxF6TE2dcTcDpIRjCtPEdwx6SJZIyWMU6nGl28PvjCSXiY2%2FYGWSdlQsXw6RnWRe1IQHezu2E8M7Q5d5hGcaDqyTu4RqbsceXK7hd0hIGqBt2jHcsODC2HmS2lYqGdEcSyvucZWqmrRG9WmqAlO1m3l0kGTS238b4TDTVR%2BuHZQcboq7JGTK1AKOpAF1xCKE2yp4zM4j6ojCd9x8gdJM2yM0IEybz1s1d3y7i0QU7WQ8hzXwfosSy9%2BEPkT4whaDmNkwA6l2DYlkvkyayyoK9lbnZYCXXEed7SR%2BOKysdjujxfdTAdHDt%2F1Yo0bYP%2FRVNoiGw236mmjXP0ivX9ULlsoSszbvC8tmtOKLrbp7%2BSf6Gpkzco2N6kZ9RaP96%2BfpdTA6dH4PE%2BxcnHS5iysy2bbQnDjOEtIeIDwfUOUkJ7ivpLzbgysOne2ThKz284eplncqofKuRnE6Y%2Bvd9FUVJyEC4hi3BV8We96BFLnzJIlX6yGafxUF0ITCJlqh0w%2BCqvRT%2Fu1JXbYSK5cfzT%2FHdhbNu3a0cKB6wacSkJBmNWTsx1E7iv4WDN5F5%2B66xBt6YmeqoNo3lLmqokjOYML%2BXitMGOqUBmHc%2BJ30nsjy3CxjtKsL5wQDA3ofZHbmSZdM8lX%2BrXqkqUx9xW3zlgluYisnD2eeBRUhMBARp8lBN7UxDARCyYlX2c7udnw49dzjg2om2MnYJDqgJtJMxWfjOU53FTlb8pLpEAliWVQaRw0P9DzRNq56l1N0mTwjagPsSv6NZrcog0mxwVCaqeXvqxK4hyGLk8y%2BZMSDAnbPgOm%2F%2Fz3NB8141giYP&X-Amz-Signature=9b054588dba8014105c629e146829377444b8ba9ce967b3aa26f9b365a32b374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

