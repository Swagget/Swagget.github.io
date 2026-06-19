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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XETBSF3%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg83IyyZpVyMf4iOqYMj97uMlhseP8jt0rfU%2BJnoBNvAIhAJoKoXqHhxhhHLniJ8rXL1QhzIsolGOWjtI7r8DULBspKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN%2FibTEg7%2F3KcjMfoq3ANmR1dH8aF%2Bftcmkd0ftDSmCDh%2FXMkMrrE6lFiZQ2aCSmncuAkdLyd8%2BLgIu700l5nPUaeDKme0JkEmxCPj%2B118p%2FXhHMnm98moUi1a%2BLfQhuLFqdhvveTWn4ErC38Sj%2FobHYNfo7a2FYgdga5Dg49W2eWxQyV7ZX7yqmz8%2B8kiIsDt8oi6Ee3nEbs%2F9UnIZ%2F%2BuLnRGmhBw3T7mKkA6RaINXSRvnOyZ0zbDRMrfXlOyjGQIGRwpbvCjbBoxKXh8UVznpcNN%2FG3QUkA7VPl8xR4H6MnIOFfg%2BihRTL6DJipRaBxvw6qskEewtxFDLe6otB7ZyysHCf6PMnHYeBUcUuSq7pNLYtH%2BEe26PFloVuM6DaLmMn8g%2F5JIc4lIg9ZwNRiBTw8M%2FhIHxkVXlSKiW6q06MOGjtwi85N7PknT9vIeB8qtu6%2Bu1rrJhdGIHdVf6qYqfQnTEMyR457T6SSno20zwMZy8hdkC%2FHSDUFk7djHU1nkhelCRcr9hFaZ0wwDuCL33yPzld6GYqlh01K2kKc2lyuBJ%2BifDvt3sYstmXR2lW7PRfuP14PNYqVP5f3n59RoGWpVeDdq%2FgGuKEmPltiIRLYxHSLMXguNfwbfUTwfQg28Wn%2FINctY8ExkfjDc5NXRBjqkAVceqQ8P4WOCDQheWYgwDb7%2FaIXPCF3cSGUWIe55n2TYmOc%2BRNuKcumpsQ3TDn8KvOETPWr7%2FSQH6frRkrYrwY9WR1kuDvUawdAyrRF2njeUi4TGzEhEmNun4EEg6KBHDmxnQKPAMAIljjzMqwllaM23W5smV48j5schoivrZmbKkubueCS9qxXTdHQxlRMpP%2Fp7PNHWJhexVi3IaGbdkvtuulUn&X-Amz-Signature=b60a68f0c0ad49765784e03bf01b270a27372894bc829c1c4e81464e5a9b92d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

