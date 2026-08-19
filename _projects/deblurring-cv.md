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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKDCSLD%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T181459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETgjuU3WUJq7QYYrVFPXBONRy9J%2BvTCwTJiKRdvcetSAiBesbcV50kJRrZWqM3%2B0xQD%2BzpBcBZ6kMAJfL4nK%2BmULyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMVZNwrYzjSErIF2sKtwDG0jhf7VACEgTM8pQD66V5Jk4sclruWCLwPq991CSQjThN3N8UPEzYndCvZlMQqqwrwXkmAQ0syjy%2F8JAA%2B8JPBNiFWfhYWgipbMhl622HcgXiZPYQLazfjK7i%2FboRKVAqNaY2k8pOVCLVaF2iM2VO0axAy%2Fj7RX1kdR1wYJP98H9nVqL7cHe4oVDaSVd0baEdjqKf2BO4Hftqb575ficWzZ%2FwJHfxzzhYAlJKqNyHgKnHsUJzgdWBZy6e7PMoH%2FR%2BE7T8n3nJ%2FVFfnC4czLVASYVPH%2BYGZsG09jVgOfvlB0hJrQvdHQbkLdyrblAExUyGFBih%2FL07U0RQ0YEKqErP3p2PMTFoB%2B%2FOIoZT18AX9BobY1nJuMfCG2TlTLUyUbAfuKLrblhWxYZlJwX7YqznthBpZg7m8DfPDsc%2B5nfZk5FC2OaNtmJJgYIKuO5YNmPXJVXu8OGHqL4kcZKzJFjSpQFoIC7pOwCHPAEdD2qGQ1oiVKkbhTgAZMgnrZJHyztXtbxKGUsNssDaWe6P9yxG4AyYamgjPyVK2UPJctRMClMeRpnlTBf7GwirBixTTFlnNxpML112Hu%2Bvb8dvdy8NdOp1GW7N%2BVtsNR8MeBIdwVyhzM2CNDWSR6MKlgwjNWX1AY6pgFjJt%2BlFPQRlbKN0dqWC9ipob7288KRnYVirlHa08QGsBM6ZmCZSvKox%2F9IQpBie3Sql2106trGibLVdZjIZlZYDBFKhOhDoi9rhqw3QnAu0dfBBokuhJzVd9ygpgLuL1sRF9LFkudo7Tpwe1iMkEQyvXn2NLeMRej3Pj2mGjHf0ecHuotXFzhy012FggpfsclgmlYw9XqdVLcqcy8JEg8Yfyq4diV%2F&X-Amz-Signature=f1fd3db499efc82c74b1f1eb441c5dd2eea03d651335b99726ede798abab9ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

