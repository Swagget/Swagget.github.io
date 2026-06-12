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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIIWPR3K%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T205857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCVCh5ToXXrixxfP4xmeTQ5RI6xzDSzFXusgTUdLzJwoAIhAPFt181Yifn0ihlikyWNd%2BdKkiRJaybaR0NZSIVUsTJBKv8DCBwQABoMNjM3NDIzMTgzODA1IgzumVDz5hvgbERuwmcq3ANdxGD0uhqIOPnfHVAdg9zv7Wq9VKmHIbrx43xIJAkxhVGnKUZ%2FlKJUJnyc%2BD5LxHDQ9Yi0MKZChD6kLecIGwCSOPrraLiZQhbM6%2Bloy9GQVpRVcP3F%2F8QDbGGBmnkSoCC%2BvecuslE1zNoexMF970moURtr%2B8hqWBGBMtTiMNCnCcRtnCuEaSDWCUu8X4V434UI03cH6L32LxtUH2vs7Ek3eUUX5cMi6JGD1cvv1nmXnQvYGUBD5NVZGMUTiRZ6KsWc80YcmKqUSSOYhu6LsqdIgfaBm1lRbr38F8Ceo4YQ%2FyDsJJ%2F0R0CQi%2Fzt5g2qgsQ42hte2b1RJTi7ADExBOGfU7Mwd0EdeQ9cJ9ivAwJxkb0t89p6qAJVWVgTdwCIEnNxSkS90DlRxw6GZ6fZLRQZLu4W%2FYfjyLpBKLVF8zoX6CFYTB9a4Tq4Naqbu9PhEa84GiFUpm2SXTUfQ2G2c%2Fb195K7fJkmE24K4PnLUejHnTTQT1qP40b%2BOl0fEm4SqK3VIjWGUWOq0JNkTi52u1aOeNLnng5YmXTReM1F59n9m36g0B%2FQnYwn2zEo4KEakPN2dv4OmIkMvlUqTbtLE4v9FYlakVr%2BGvsIwy%2BZLjGErdlyLb%2F2YncuDw%2Bw2zDap7HRBjqkAResdts3F81iQY9D8b6QfAMXP4c9TfLbqG4bhl0WW72JP2Soz8aKdekNsR7lt1KOkiGh22IfjLVWrWeV3n%2FyLYGMSSGgeJlxjU9ap53cgTd0YlYd1TKqj%2FVtJqbT0hr%2FoWRp3qE5OMFck4CSDpG3naf9W47Y%2F192EoBZ7pJ4jUb1fYiKZc1w3%2BfTdemBChvpFrDltKRSmg6%2BbfQblJ9Eg6bZTshn&X-Amz-Signature=f5d54e165bf20778c9a43655ec71aa7cfabeb0b6f611b9ef34387464a857c102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

