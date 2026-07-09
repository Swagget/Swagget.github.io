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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAQWA6B%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxFqHURetkusVxOi0594boaOlZQkhO4V84cswKCRRHXQIhAMviVkp2EQMuhQNGuqUaotuln9Y7TdHQxyhdBmfyspFfKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIh5bdbYnUaRRJtNEq3AP6nxc4hlAVXhKqF9a0LsiS8l9UDyskcEqXwtZluYs4oOjuDRY6isiWE73br0o1UwjyzYsvjLQcvXIsHEF4giZ32e%2FuvYPYUf%2B9NDITahTMObwxhynOWak%2BPw6QzqbdQhzGmhOr6JvtvZwPYP6pAnN3zdtHSgJ9SUmRU%2BT3hg5f5dqCKrnmNrvGFC8KwijtNaRJBsYlVWRWqhs9w1onDFDVk1dFniu0n2L%2BaVnzlWt3wWVAB1EtiuXoKXbTXXBesNw2N25ISjBHslS7HEKQa7EASbjWHBRtfmwkli%2BiSQ%2BBxT0559iimJt1n3Z6Avl%2FHs3Tfl4IAJYsrmTE2ETiU%2BArrXFrattM0J4ooAEU0qahli9Vb1RBd8IPAtpSDA4RWz8ZJTL6UYIrj%2BVWesOLuozYOzbfLboiedsnOTh2u29uV8yMlaYFqNUJc74aS9YoqrCQEa304jD6pF3mYcGiGu0duAHZ0BbOu8wjOuxMEeLICALuMootTHmlkrIC4rUag1tq0QmoRBHzxsAvVYSKXnJzcOIUc5zPk0x2DPbb8vObZu9qedNBB6V0LwAqn0zQGyU8E9xXZttP%2BEBQJQKZXo0vIq5zbsgC%2F6fZH5NZn86fiN5GTtupTo6yntqP6TDggbzSBjqkASK6WfjSs0fS3XYEU%2Fi6ddsUyLfb4ebaAGH4V04FhMf%2BSQK9ReX8l4AaKSjByJJkCe%2FiBZ9BYphZZi8K8j%2FfW%2BTHpCUC%2BWLjSWAl6jOqUSaTOL6CL1KQGDttrY2XXbSv%2F7VwGh0dOWBo6YTL5nQUkj7iutq6mkCv5iAbKGY2VUoIQrtLxlFaX9bWsKIMtmo4%2BV2P7I0Anm2hPodNpTvGM20bknH0&X-Amz-Signature=2af468af865920b38124b3dd76a7e25d221b2e51ce10c9d6009d31004dae1a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

