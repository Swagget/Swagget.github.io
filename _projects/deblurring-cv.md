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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM5GP5J%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T205347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDhiZG4p5pnRdrZe56hH2Guct4kZ5xpZi6FUgEbQjV2mQIhAKrS4E3Wwv6i75XxxJUU3ZcDv5GqMRqw3rmgNET3H6yUKv8DCC4QABoMNjM3NDIzMTgzODA1IgwJpYefAYOlrmzDm58q3APVigoKtVCnoQFUCRVHHSgcMvPtvc3Ajf0icQJR4GU9kfE%2FJfHck5yTng9mPgwcDE2CQ58SmVd1N1w0uWIf6saW%2BmVW14CKfcsboL48tear0vGPPGa23QYmzfOFvmtHuPER11KnZKEA%2FfuEC8B9UAASkZxRLcFd%2FZ%2FSPaoo1o8U7JTL88SBumJ854kJ%2B%2BgSrwBGTKzhVJPuAyCmMqGWIaRrHwLMe2xsIWQYI0%2F9xPaMOJxDJjIFHQIOR9ZbNa%2BHStcbq8SiEBLKA%2F8DZb69xv32kyiwG%2FRnHhT5Y9Mlewf1me%2F7da08hJ9BwKpmrP0mTbHrN%2FL2ulzBDdnc2lOZsOKhG5CoBDQTRtzAzAWdu1L3G7sjByWmErq%2F5hZRU5kOM0WR8CY5PmXR%2FjbaokqXajJOgziz3%2Fha%2BwV5nsCkUR5a883PADVF5d1OVNYfmk7TLULoFCdoUcMh57votPBtATWyGRFGEY9MuabF%2B4HKaxQxd93Yz9GVtYnfmLvoJFtTGMiBNx4sGgfy4FuyV3GV1SuQhbB9Zur8tMXSMtG%2BQ%2BRJ2E75zZZFjvq%2Bl3T5RaxJs7YoyGgoURJPituE0V8FSdXKFL%2BJXHrnS0XAGyIqU%2BUDi230qZs7dj2hCNwHQDDwoffUBjqkASMOu7nJFzCC0bJm5aA0XfR836syiMc4fSPDcn44EqoaypoUsy7KAWsluLXLUHQ8NHDn3L%2Fqo2GXK5nIwoSNcU6HzoBsVq5%2BQ%2B8Mz%2BnOqipJDr%2B9G35eu%2BVxPjSjtKgJYsuUFkk8mDPL3Y%2FBcVWr1t%2BHbE0xDqGSomI688rC3oEaW6Sic2ZHy79WUqnYavdaY%2BKHoujEe0v1s4KKtFY8FDAM7jxq&X-Amz-Signature=7b3221b1e57d061090b6d7d75dedf16ef453c3bc2072d5de3e28c7ca2c31f86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

