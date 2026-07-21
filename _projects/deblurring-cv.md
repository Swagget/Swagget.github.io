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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDCWJNF6%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T180608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7DElevAmXnocV7xowDyil7k0D%2FqmLwFKWkk6%2F9aZVNwIgWfVrXVC%2F1uFsX%2BhbN44MqQ79eT9ze6oUsP%2Fbguc047MqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKan79HDzvu2xcRpsyrcAygbk2fKymRG1n%2Fd90LyQkR0iY%2FVtjkuuJpDj9tefdFykjg4Gx%2FiEWfwqI48BLioJhfrAaBYqpbDu%2B9qPoAL1CrNM721WZ6GlQCPv0hLVumG4sqSDDmso4MD431ze71LDHsKdvXKuoiaFV4W1wHNilkLKWW3hhNSbYQ5On%2FUf7rHQRFllo%2F8NbDg0oE%2FZo%2BRNqugJfdbAMN3HioTXV88LRnbSxwF1LKxZLWekpxlANGxWPO0bvA1hTh7ZUHPM9qJpNpqiLkSCF%2FIr4OHJohJSUVK9sgjEjnYZH04sfCEhwvNNHn003z6sVJ1FAUf%2BGbVBvXXxTilt8WEZFJucNOB9Tw85xGenjlqD85VSV9ONl5eiJxo%2F3su6tyqrCm%2F4KL%2F%2FrH9etHiwSFLcqIYBiGzYU0q3LyWEJ7dg2eFU3tEm9ZJkPE0CJzqVtfxgU31p4pQ1zfEqlmMeW3FjxaAzelUsGNJWGIpt7G0KwIrHysW%2FdQiHs%2FiQg8L7AaopQffoAAiGKQG68AEzhC%2FDoyGgEraRwGqpPlWCzbX6gqFWY1jKvfNQgvxmZTlKtHczt46TCvscxvIxMIM6aUdpdd2urquI8P6nf3O7auB5u4eZLHG98Rnfc6ToZa71AvTnzMNMKyp%2FtIGOqUB4BbTd1fRJQXxUdA%2BF%2FTTKXGX0hnquZ9tKSuzNEJbSoU%2BV7s7uUzimfzXW9bvflyGHPgDPAGoDp%2FdoeF6przyC%2BTXJ2YzHb6gZv5wHoy0R%2FIWZMWn3mLedYbS29NKkEYX3Da9JaC2xMdxIKDBD%2Fd0E%2FZWnUndwSyZ7XBZngDG4GP%2FmqaPVCOxJRKbasacUyaQrxrYGNXgloSpiblvkplhKZXK5vzZ&X-Amz-Signature=a11b9920ff5d32b9fe174ad6ee6660cbbedd2a8f04b8cc44e130ccb25ba04202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

