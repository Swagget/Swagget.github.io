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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O23EGLL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T065601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZh20pcreHa1JyA6olFuyiNHAIEJToCX%2FLkoPNQPdBfAiEAj4QzJEn1sPpbl5fFHvex%2BEtdBrCRjUHTP8%2BxZ1J2iucqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGJRqpuRzTMJbN2QircAyT%2BFus5hf8ccacCt%2Ft9vPZ5JJMElXrrb6vvmAkgcfCc%2FAN%2B6eAT1N2Hhi671GwCg5suvwdo4rA3%2FpIE6yL%2BN0AyH6v2ftMFRh%2BTTfIAxMpuWpq%2BRr5ON2yPs7zBbOiV6DGoRPmeZSNGbqwPmXr%2FrkEwCT62zOxn5UAZdcn9EyJ%2B1jcIlNrBGlQ%2FukVqxGXyEbDk1jsYCtv%2B7w5aclrqKjtRNqJrW8TAmTEGe9VmmQPi7APurUjpLXXWsNUZFK407IHMMxTqKZJhC34mYbvmPYirOVmH6ZucTwpSXdUr%2FXlQV7jzOiet7T3HssgjfNE2lcK4uTcLmE21rDLsKOE2yVpF2jBM82%2BjIJLYf%2BEdUVC0ox5CWwt1UKOlkeUiPxq971jFIarab1f7%2FVnvyjSfhD49nUJvXDM%2BCs8rfNddfft3Q%2F7c7kucTeJM5BpQEhfXIjDo9Wvc%2FGeOzNiq5cyvQl5JtRIFUrYf1lvpEeWMeS%2Bo00w9xLX%2F8w6Sk12JBiJV4HkEju3Jp9GHgeGOO1Vh%2FOkXNGgDyNmR852kY9yNElkQbwUFOv8L4ldwGfJHfwaoskc8L%2B1xxOrqdS2N9bj3NyqTUcXZqzftRi1EJqfldcGKMXtpuxvPK4QIepi9MMOalNEGOqUBFT%2FEwj0h6UQsr9TFSPtMDaZVguCN8sURUwN7d2BqlRFC7XNicI3sVCe1ATxD8WF9At%2BtEk8JRmGODpzt35CHHOKDmjjbOnTZP4mZsE8BXBISnpNJQS%2BbiKQynuu0zzFAVDkAHRu7Hw2pPekEReKXFV%2FhTfoE8OaJ7EhJT8s0%2B5B3t%2FIHbDMCTIkdd5vZnuNoJZN6wmLvnwTIAsSNZv%2FI4qqvq4Xe&X-Amz-Signature=140201af6ff673f36f6217fb65121690a027696bd9cca9d7956199f749ef1fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

