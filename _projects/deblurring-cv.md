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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGWPQWR%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T211349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaFR6Dlythl3kYOPVYZvxet4c9no9CGBJp4RP8tGyWwIhAPZ%2BLUXJOLBrgqxaFOxzVvErCXEfMolyd7gHG3kqg7hSKv8DCE4QABoMNjM3NDIzMTgzODA1IgxN0%2B5OPSQtu12CyT8q3AMLOPNhiYUmdXFN0mi0yYY1WoZvfrfryxQRmN%2FAMigq8kYtDye6KthVl%2B8SRACGVlJZwwP%2BrNPLnrfZ5MHahJoqChGwZWTVQPNjKciVpvpX107dja%2B6Z6SZnb3YbhWk4cbRt8CpgR2QERGWMmvJ8NTmyGdSdeGxdmHiFGv6yD9RAfetUx%2Bxip5C9SKQ5PeqTvyvmhHbCtRqwNmoylJQGEao8sXkKqLqWrPWbQq1r5Rbje4uTayLjgTTJv1TqrD%2BrLuVkWWxaVTeO1%2BEvSUwOUWQgog6A%2Bt8Xh1yZtACKp890yB%2BuLLOoD9Ufk9DEXUJf%2Bcx7gsFHkCrD%2BBGbBVkRhNc68uh535zt6iNLVwcn5VgJE0zNL9cT57qZmqBIGoBb9emxBLNN2mZwBN9uExu6%2Final5euiHRB%2BPtWJl2rSH66o%2FB4Slo%2BeXwTR6jKvMkt6TtfPLA1pw%2B7sblggkz3xjuPuDoxHJjQRztsnJ4KaO2pZqeQ2E1B1nhjsPYJ63utaUuz9MVjM9C%2FsoJ9wTFpyfLgsxEcUGXMqE74W4nak0bqnTD4txUoi5f%2Bz5wH7EqNwEk0bONvOLI4VPPL5KzOeh6iizk9m5YrjcxTYC%2F5qIu1CNVRdM1Iu3R67g4QDCd643UBjqkATyN9zmJ1F%2BapTRGpLvP0CNY4gruTwudZEIqZ077F%2FVsR8XmSXxK0mYHcU5K9QLyalqYDhI4k1I9ARwzOQY9ts9QyIbb274R8rJwG3tAw3WDlUs4n%2BjrSgwuIArOyy46ilnaku0RqOIi8742S71R%2B%2F1f52c2P4ka32chABIZuivSSfi8WZxFK6t%2FsMIVKX1qfY%2BZuWrWunuBLXNtNZLPWgbPkUij&X-Amz-Signature=1b53b0afd3ec57dd034c826773636e6b11d05c0485b38f3f7c0495081c03afd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

