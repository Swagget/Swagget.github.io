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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HES53C%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T212930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyEX4zUW8goAPlTu9RBd0i12T6BLY2UXwJu0O7ehRWkAiAcqUbnvQPO2t%2BVcJuqkhhj5g3PZULeq8KaY2UmafFXOiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT0I8mBJVQZiuRoqNKtwDGKOseh0es0tHgb%2BOm2PjmW5%2B8sT65nNPdLJcevT5Hrx1TqczNHaxgMvSd0XqdNe4%2F%2B%2F%2BmAh81ADB%2FwdXpGU%2FcMMqQBEi%2Fcs%2B%2Bx6biN4MyfuF7VzjcDnoI9bdfIzwmGNWK72bBxNi6mnE7nHmhJvxnW7G2WdznnZDpyl%2FR629DEWxVuJwA4U5IJgTGRQ8Vk2b0U2QUjG6O006dix0s1ROmcpcIWmW62hj%2BZQIa5UNkn%2BNISqSLufo2tkfG44v8C5nveavQEI0UV4Fm5IE3Wcw5hrArHPVvXW2tSEozrHyjPJniv5SNwUYMnHZtgxElRHwHYIJcQ%2Bu1v11Y48eC3B9aMFEmdCgkdNHIyNOgysykLz%2FOrO%2F8F5sH8t3K%2Fi38fvYCpIW96GbppN4T010o6V6GA86HzrfvVMnouJdCb6rezzflItiShy9rvguvtiAXB2jD%2BxolietFv03vydyp4O%2B0wr9sYHVw%2BI2rUNBJefeQS4Qgy5QmWzJIKnmcsy3VXYHXS03QusZIg9qg3hye8yXqbI%2Fos4Maqj0mQuwmogfUS8o%2FdzArCXUmQPrX0m5cKXZUlYkvmLn8Lu%2Bm6HHfUydKD4dVqTEdnumrWajk2%2BrisPejEhEQeozNr2NYfYw7fPo0wY6pgFaKNo1y6iBgo61NSVaW3MZWxoOTHJr7jBUitEU8j2%2F4EjXYovfA4Wl%2BnAf0OJqGDXrm7Vl5cRplS9tgedn3zvodnGSL34unmr3OFcuFfH7qT7gtW4Uw4BHFhA377IzWoNSLu85H7EC%2BuR9tbG2OUs5N1VjwQuYG6mZGTkz6WtWIMNaLO4fZounFESy0bFBBH6yogTcwWlU0%2B8xmnCqy1UjIHz0tqsI&X-Amz-Signature=9de5f6c71d500b47b8954b208a1715dd66c22664845dbcc5fb1aa95623d6ab8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

