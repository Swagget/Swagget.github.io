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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q742RJ2O%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqKcPIjLoOhVteiSgCwLwn%2FCK61uwMYoDTnbO41v%2FDYAiEAwwEENA93XvavVxUWeALKY2yhcsornjcIV7YDTQdLAwkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp21LQzSTfCKRL7eSrcA0cGSIfmzm6kY2CtltyzkQWjZVb87L8Zd%2Fj2TUHlQ12F4MM9lpMyHoxBFX43t3yTchBuawgiL5hEHju4CuQR8n8fZmhplzkrphREWnXQjNjCRkyOPZFQPPYY4XaiEUdIc3UuO9plMZd8Yd%2B4q9pv8DWyuEBzflYtk5nhk16iHXSmRIIRppUqJMlWCUBcPlpe8di3AYkqQmjceXmQyjWQgbLoqY8rwkVZHvtJnAzOM2CaNqHo5VOh5IB%2BetdzhTScwJ8H%2B%2Fk6chPy6LNQcLPZJmj0JruVxmfIo9zCXn%2BrbpIHisptkDrZ%2Bvr1WaeWmxvno8uqP7v05My%2FS1hZrbi2Eir7C8Y%2FptmILW79gsq1YSvzeiZETZGq692co0HWh1gDaQFy9SnD48qIrTIIgPoeK9g51sWwzVxh7Rcdephe7JYR5VUp4OtyKqrsGiQ0X3tEosLc0deJTzCwWmrG8aZltkl7C1CMbtECQRHTwYuW2EiO6XIELXnHJO1l4ojKEtmlgTx0Z6vViTVUXHugp1OwrSt8uDpZevDauinaONnFizueokMfE6uy49wiSKLamrt2RFcB3qRpg5x%2B4tY8oGIZQwBC%2BK4BjjYWBXoOpxpGS9JLofm69N1kBw10fsGhMPKn8tIGOqUBStp4EeS%2FbvZ2TS%2Fx%2BeSuzo2c6nKN4ytiKy7gnIRhiso6SfylKeD1FjptpK4nQuTEKwoEmSIrkSl%2FQmhn5fbkklENY9iX1fd%2B0dtfRWZjpcAAhVoMUERpd6xK5tUqZGcFHlmZLsrf4tLaG86Jp628SgeJ3N5rNzevUQatvrAOtDZ89Tkg4FxFey2uam7lIk1LimbbvQq1swyrUtTMHx2ABAmJDFcI&X-Amz-Signature=d51337720092a7dcbe7af95eef7b55b115a160cba9c50f6b21be24dd870b4498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

