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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEVBMJM3%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T130645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGoXKrEUS2CyNjfBOzZx619H8c%2FrdvQ8AFKgON3APZ2rAiEA%2FGgNq5qxZWw7XJl%2B6aDffODt%2BsCco6NqItQysCRrKCkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGOhyozmePsb5NbyCrcAxleMPDnAY9LLOnZXE52oRZZKx0Uq9MDBOAhdCKEtVH%2FF0m2wTo04WBCNmAJbU%2Bo2jy%2F7YTne8i6u1P3uKPraXQEzO1FL5WuqXAP5e7K622W4FPtNcO6kvK8hgjQBvVaMA9AoVgpZmRpJENmAAaPoNpY5sBfdL4hqSuEFZXfhQeQXt7M6ujyXzfnBMyS7aMq35%2BLlZQKiiZOud4c02iambvHR9jnL9oeLOtosbrGghNMa9TPLZJu8xgr7%2Bn6dKA0t%2Fr8rVRUrO5NWPBrZ3R8MCkVM46LbNCGqZ5bHXPZpRhiBEtJQciCOiNQsSJb6TMyXrtUcHO3ANhvaadj7lh1kGOTeEc%2FXmNlLwfWUSi%2BjKEAprfZApD6BTOZ5YYyqae95PlRE1pgFqUMHTZ6%2BEN5TdQtS41B8cKLZXfmJzSJKjqVCkE53reW4a%2FJ6VT9aFFI3KpPQdT7C6j7CFKrS2GLAC2qOoeWaJ0ArAH8nrGg9YtmpLxyPyW435J3zH4s9Q6fWVSwehS9AQ%2F%2FGrl8iemn49oEwqD23lIRe5Hbodq%2FBac%2Bzhl84SRGYJxKUPnek7SRIDS6V6qjApwEPfDOCGRQhiIlqJjYBgq4HNiQxE3R5eCcIZ%2FGshFZH6GE6N6pMKPv79AGOqUBqb5NgoQVzV2XMuD%2B%2BviEp7eqbdUuokP87CzsJZi0Till1%2Fuu9127eYpn4hoNlyXExzYNiTaquY0m7D7FUKmYjfWGpnKob1URR9RIPM%2FCJEI7Wo9OaypQBCXURDsw9XdKeaq1U6yOB3fJphzm3k%2BU%2BXlXVu7zAhiIvpqLaed0dtsMQx%2BGgRL9Bt1jH9bLNQxaTYFwB9dJP8wuWBI7cZNWbE70eC2Z&X-Amz-Signature=b91baa28aac863c6df160d8d4c7109906481f04afa3766d98bb6114c7245bb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

