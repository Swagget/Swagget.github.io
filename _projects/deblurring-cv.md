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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCZ6JUW%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T152616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAKP7ld%2FcOdE0z9jVduAXoWHvN9xVjMyilqlUL9zJ5NeAiAf%2F0AOoKzVwE8u5g6lXxfy5zdpPd4h8sqz36n0UFCUYSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0MaR5AgBUS7feVosKtwDZN8SqP%2FIIhl58NWLmLKoTrIWO3Wx4lxVYBKXIwJzfUN50nawLa2T6OMjaQd0gVouIYwFxlAIHqDpLN4fIe3JdLn58li%2B6zLBY%2FgUB16p0KOh7Up4039vJzbLZ7F2BimSORme%2FXk0Uk3DBhbOEiJray9wPyXtxf6HYPn0pHfuBiVy4fyMKTfZMN6gurvVpsp95R04WDHKqMr47c9KqhOmBzpi6uuWCPrcXnPmvqYZ03g4%2FrIo%2Fv1mDyH%2FP0ZlEmqZSXQ6YGq6TK%2BB6%2FyRFgCj6iXgdXjUk4LCI7aglkKaORvlxv9fKuf5aFlXnDQiBjbj7UFtnBfDV6EFm0YycPGIuac%2FLfPHnfI5d5%2F8wUhIXzVudCGpnGx5RXazS9ZayrSztm0HNysrSYZ7ttdjtFU2wWDSGKtDDThreT3Gz%2BO6JcQEMgQ9N08jwqYQORXPJ1yf6cPls3llv%2B5NIAmUmouyVsDECmwQS2tJRvE65JlWURWgeSYCA5j%2FiIvU5qzctxCS7yky6AOpwHqSo6MmZZ9PPXHzQ2MEi5XHaKiynjMc2KV3IjRZo3A0teQEhhOjnDkewk9%2BXEjTpiyt8J5ZYKNRKg2BxkEmOogxl3wDUp7o%2B2xhoswstI3U%2FuyXY%2Bwwv6Ox1AY6pgEBeOw8akn6ROzpng6pYsll6tgPyVKwDVXtuhQUUATx6PYgWax5L7wDB%2BjUkLP33NmqI3%2BRJ%2BOvhXIzAYGb8WtQPTFqAE4MEkEYlOgLaKIVDNrBqwxOwH2n5NUyoSaZ38N6fd9Xi%2FABuDz6ooHBnDuiPyC%2FYrF6xAGa8QzjQK9NFOBrIG1GiHtcjs6qBfMswLKelYHyRYh34QI74%2BsbJfidgNIVMKSU&X-Amz-Signature=5a306121cba7d5a7978b5803b70a014edda9e2d29fc5799135cc8b748a1fa1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

