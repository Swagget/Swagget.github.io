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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362QMR6Q%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T095542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAa2sUTUfpCCT1ltI%2BE2F6sWligvpAISysh55QkoY9r%2FAiBN7HseGlrpc7ETmU5lwBmytqDj5nNNxeNCclWhDsRNdyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56o7WrTnI8j2yWdYKtwDTySFjnTHcoP3K%2BsmRQAY2tD6%2FXVsHXFjw7fH%2Brif4MVxZN9u2C7dAbcBAY5dZM3Ewo0nC2W%2FUhJgcp1nzvvWxBTjh4UoXC0WPdZq84L1xocqUcrrfzHf1JUNf2z497ifWq1wPX4fLG2Siyy2QtX1%2FSc1%2F6kjGLmp8Rl51RibUtnlxVvn00ABKKxSA2tSyMcW0SuIRhr%2FCKMvpfQBJCuP8BL2icpaBUAX1GcYGaSgc2YLcIOYZeY%2FNT2Y0bES5sdbkK0ocn%2BCIhuwOLEnbiSJ1qdkS1%2BdIdXzt6BIYWIQsd3jzFroua4jHcE64zyvK3NYhRODvXRnSrsKHRdrF8C0h1iNiOVVhuwvzTGSYkzhC9KUB5rJGfe3zyfXwDct7cq1Iaul3j5tRewEfarBzPsBNp3XMayO9tEYUtaXI9ulxqXKUosvIMKsBZYT0Pt0r9bu4tCevJGUDm0YDKVa8AovbAOcGl%2B3HSgGKmke5yrC7O5aarvFS%2BLS9q9oLUnoWh%2FSF4KbqILOCLURqhncuOBn1cZHvVOTwiF7BXrn%2FOtMc8g%2BIlHfHutXzf94u%2FwmWo3Baclr7%2FL65w%2BGFBiCM4s6%2F2gtzPsbJL%2BKxMU%2FbeI86aQyP%2BFUJWIN4DDUjiow4qjZ0QY6pgFJw8qSGOH0RYgAs8hWsuWrT6keFND0bNhaZRj2MjDC%2BxBHVN51hNJiG4OKJ9m%2BXR8L3O5T0TEnikz7ZXvUxHUoa8WB1bpfC%2F9SfMnjp%2F%2BGIOuCuZW0Xx9o10%2FJkCe%2BipqSOPZEZdOlVEZtLcQUW4sB%2BYzXOjoOrDD4Tpix0X1hqhEdImD1RNpqqa4mxvYZoDUaADhIoehAn1JcxwsulJal2C2k7BYu&X-Amz-Signature=13834c27378289d9da768cb999d05223411f11a4ceae6115606f723db6659f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

