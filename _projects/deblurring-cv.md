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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VW5TCP%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T175915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEBBwi2sLN9mhjt9xCPk15GKW9LGHdgiQ7Z0xdgOmv%2BFAiEA4QCeqI4ImH6R3VIh1xxKPwa0infSqy0Mi4enNO1IK20qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORRfWWDWc2vDU53uyrcA54yUEeMAGYsQpfw3ePQS5mo7BB9XSgJlhDRw3bpAJICzOz7ch0b%2FaQQYT1jSAS3eJpcJ4xV7n2NegxX1FDWb0mGQeUST1aER5jkwqqRrDL0hUqwlernq11e27RISB19LqDeTZtad4iCkleEECm2%2FXu0ZqXhnQ6YLtNxM%2FrABFq4gg5qjlNpdPahan4sbWafvpNfVLyc0OViWWfs%2FV3ZTUBZsdeOHhnFULicwfV04962iuFHVi%2FcZ8uMLTTcln05z%2BOQuMqi6JRwWsa51yjsnWmewLAKNnWWbbgCIRdsrMCSd2TPRODVHWj3%2F4XEfCiatf9zOb0zXO0PlWcldJ99ckeNs5dvoXOW8rVgXj4BGJAoqwLw4xLb6%2FgHkHN5zcdbozLM%2FfoIoKuJYE8b4XExx396%2BdPw2Ljs7MP77gTrzs%2F%2BG4kb0VMS3u3adX7IiySfLuRxx2iOk8AFx4GatOHENHBl4aC%2FdOzIjewiQ0%2FMw9mSGgdpYF4OO6ggx8jkavO2lq92t6W2VgsfC4R48ns6uItE0s3IImJKAf%2FXtPQnCLGjrMZnr92tXc%2BYlym%2BGqOAkfqTHCQekTXoWyd9uOeZfzlyZCkkHCU%2Fp%2FdELHxC%2FGjfxcttMtkoUiRLsEqbMP2P59AGOqUBMhbTPiV0XfvEShcIVCrODL0I5saeRAm%2BxoM7K1kDtqK%2BfB12NCK%2FKRlEoVIw6xj5ZU2B8hPqPIw8JI3wDayTIZxo7C9jfdHwrrjG8sOAEiE9C%2FSPrVpYOwmGbq0MQsyx9ZfmpB6wrgLbXI1k%2BvUPhUbegw5DmjM5iKLgweVa5sBXlFo%2FWYkKvVEYTVdRbww1zciVr8p93cdGkWNLEERP3NH75VCp&X-Amz-Signature=fd456ab5f0063ae6fc9ab0f853bdd80482418ef05af076f5a02ed91959f4c73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

