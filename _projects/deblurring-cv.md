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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7DHDE4%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T211405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZbzxf1opGGEs5ZQnp1ghaKVcHfCaOFs5%2Fi1LLYsRglAiAy29Djai1QaOV4SrkTdc96Lp%2FHOZBHlR85IXSAeeiAmyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMvcfIt2Lr9xhVAHjuKtwDKbFqaONBRTwyfkK655%2BDbNcgbbVyFczykSfP%2BWrPU0N%2BCMRby3uGdDSaP26uGpouBJLheIB3dTiO9HmO96vGvtA9jol80EfvBlDl8%2BSsl7seBNKrYLqItjkDmEYGf2gDqr0v9ieIR0VHz%2FeYGGm6dg4RqcjGvHgZL1qBgxD5WefwDQboZ2VD%2BnZxZYSwHX7Rt5ddPUIV80FU7p%2FUTw14OJRAXz9GH1lbZS%2BA%2FYN2mgw6sb57p%2BhqeAIRLeJohrASVPnL%2BEzL05kvYjB1AAOXNF7XtBdRQ%2BP8rd6zsDXK0LCjXYyvU84n4fqE4e0BOBx1TCkfhVPbaTMreCmGEtpfA4Y0wkYz2OY7ZJ5nOxRLZkY6RyMGYFEw2VukYY6HpDplAeuKlsKojOugvIzMIl1rMB1UrcPbOnSj4%2F2Z8WNUBBPvN557I0ONcpgn6c0dGPfzQhVT9QooGcptcsbc1NiQJwUccs5vLR44CtMgYbfYGqX6mk9fbqs2rEXLXfO7EOPW9j%2Bo5zGtx%2B%2Bkrg0gYdQCejnOmYj6gBAVLtWbXj3Ggi0GsG%2BTcJsIlj6ZIBtGeUC6hCz%2FMbwdV7E06Gfb5T%2B923m05MsjZd5bDE5y9q9y5t3g8h8QLp0lyudxXHYwzq%2BY1AY6pgF4xHrdqp3yMrYbIUvQFm7JDAg3Ws8GcQUfSY2E6diRh1EDkf5hAhhhQ6YZ%2FD3Meyw92L5KjiGSbHTpYAuUe1Plf5mOHBHT%2BSSShVf%2Fk3s1KgXN1Ldwx%2BwpsDLTOsIP74CxatGIqOmQfrZP3uEIFljqHL8qXEvZ7T%2BGRp9b81gWwiZoXcLpmsXZle0cQYLWBboltqzPAM3L4kQjRiz1dWIKS%2FONrG%2FY&X-Amz-Signature=aef190289e783a8746a2fdca030231eea6043724716ca20ddbd11850357dc8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

