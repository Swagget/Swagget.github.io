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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5AUB6B%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T003221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0bXBIdK9YFpc7rCeG0ytB6N6cHEqMKlOaYms0lq1CCAiAYff9lA84Fkc%2F%2FoipTp8pgo99j8BqEQsFmtXsCXiEq2SqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR2Y6AtlpAaTi9E2IKtwD9NjYnNqqciw2hFSQXhDmiUv5Jt5zceVMUBPjuszrbNOQKrzE4ycqHvOqBMQG8NrkgXPCrsEEoIvM%2BaGG%2FzHIJFpeeGtcqtqGWQgAE1k8nY8O1mqL4%2BjHxFJbQ60gKGZ2j364C%2F3zw6RpcJlq2VltF6oIOwybBCZPd1wLi9wIo9uYV1pUyztMM8XwoENZj7wtN8zjW8j2KZaipYowz1l1yhwB7sBPjDDEcF3gNEchgfKbjlhcB1Xv9Y0uPDKFikJ0EwyoGA1BNLs0pB1BryP13IYZ5%2BHb%2F91tIy%2FAXOWmpQh3rQTKqx2Rv5Bab%2FqjJ%2Be0jJcMv2MREl2Pjy%2BrCu64OLrqVEbVPnk9go%2Bcd%2B%2B5r5LkCLkbNbJ6DUtrQkQLxt4fjiT7WS2zMXv38TfsIlWwj2WpRXGOn0RuoSOQqMHZ%2FrML1VVwvtzIzVc5kmaYqiMD12mvPCgtLnFNe%2FGVf5c9d6RPLkPKrxDkmywLupkqn66LuFmCTkQtlkII9j7fqn7V9bBjT9672xNlNlWdb%2B5za7i23RTjexuIcVq%2Bm2bdjygp1tzYVoB5t03QOMMX6BHFUYcYbWmhRa76xcBZqMpmE%2FMwHACCyi5bxbR4TyyAe6kxO0okHb5QJHDRIOgwtNOo1AY6pgHelJvL5ZPjaZEcuZfkgndww5VceQhw0v%2BoBzFuPX1xOQ334woKa85RvUwRRZWCHzY%2FvvRIV8SBwYx2cFpcP7LKvvuD5vOcAgG0KAPIA%2F056QQsZSaRBB8ExeHRZM2zLwdE0BunGVJ3r46RTBqOx6Rih1ECzbY4oRH38aRp2uOnUEUyjz%2FcYkQ86n019aggdimf9eNFpT8QTxAvoHm7xYlCGwwBdD42&X-Amz-Signature=dc06d67b208f199a9284f1548ebee041f70f4f5be1241269f17917b5cb4e8780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

