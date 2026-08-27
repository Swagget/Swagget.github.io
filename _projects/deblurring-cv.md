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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VCQAV3I%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T021932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDoZHy1KNye5RRPwRaij0oBx92u4qEpzSBS7QjZvy6iewIhAPdgt3UbXr1nnbjvWB0cCufesOntsDtxJPOxkPLMvLy7Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzrrqSUkT6%2BcP%2FTI3Uq3APOF6BZU%2FqAkFf2tyiWJ04NYwQ9xAp0da8GaVU0lhmbDmzm8wGjt1KunTFXvuly5g4X4vAvodnhd5dd4v2s49irb9vFcQFRTAgiL%2FYgP5eGY1pbaQW7vfjVu9pMIuqHggPR8Mb38%2F81SYeEQu3UYx9Uyx6X02g5EEDvK9NgvItgWoHgy4TUSdb1EwHfKollEMRhY5M6ERasBZYetkyyT%2BrZuiC65cVeOKg1tmqNYybwiDTzGOv4BXjpeDW2L6M3La%2BYLnY7PdJLDXOG7k98rclOE8fwTKNM2%2BPVSZQZRJkTlgT8om3w4NoO%2BEQ82cgjWXwq%2FmnBz03jeLqARmFlifouPYvDb5%2FZrN3RTCDTiSbnVq5ddjbjkpfjJ2R67zvRcIYEkWEQTvTTQRDFq3Lq7muT5wtkogtbqUSXR8BFs6qnRm35z4brDcZgVWQ97miNzwE2p%2BR%2F3SBhs%2FaLYqV4GONxURcX78tqsPASrXPvEs%2FJDGxZbnMw%2BLTK%2BsESQxQTEH7VO1D8%2FHRf4%2BOCUhzt8Y31EtuKKwbYKbdE8FqPwHsFNbDbPTcDW8vQWyUyzeEZoJIlqMbh85rONa8DMH1jyC%2BRoc7Yw8coZL0DhoKKayAxsItX9Tl1I6C5oSZK5jDztL7UBjqkAXqP3rzXPOthi8zOt47lVTntYcBmU5ixIBmHdZwtv5XpD5Jf89B9Hz6jSUEb9lZJEwB52FC4ro0ehakIFZQ60zzepgGElDHetAbRdZJC7Z8IgLgl0kBertzu80OpOGNbWSIv5zbgY1ST0ukyS19%2B6%2BudJ4b4IRvJfzsQ5GuUGG0Geq83lEGUYaxPQk9d6VyFCNifSyvro4q4JD4Voto89bfAwnc8&X-Amz-Signature=ec317f501228cf788802403aa6d853c4bce1e5abc1714732b46b50a4f3efe997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

