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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVG7UOM%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T165503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWIXME3ooVBNkX9636x%2F%2FVVLaWJzq6EUbJvFSmukwM7QIgfAAbKCfhlCQfThpZ7G6%2BfFxILsa9a9JLQwRmXvPtfUIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpgU%2BsrHS3lDbe2hSrcA3Qmbsy1dclUcKYre9Rq1gKlYNXV%2BMUnUN%2FCCrokipbCIhGOG6Fon7TAdbUszQmPi29i7l8SqII1cuApakqoURM40X%2Bj0K4LYtRU7I6N309%2BWw1H1VgraZvSJ%2F1mntf7MjdHJLLUlYZfTXOtalhlBAad%2BmJJFq0WJeKfYBIlCKj4bq4f5g0d2fuT9XJmvaF7jpQTC7YRCCS1MVoSmHMYPxlAj5CNvl417j3cbi6flkzvOXFjuAAbDPbTTHBAHe%2BqHhd92aiOy0eQsoQsbH74mQACT24iuwTI8rWCTjr9i%2FIPYz%2BlK8a90kxlPRbs2u0XU%2BR5Z1lA8cVdlCZntgNHOdLAFqU25kJhzn2T7XD%2BXrcSRFPwSSG817oNPs0Y%2FGyjrfPM5Y9XJm0g%2FTxz8pKljv1i1dziW0QLDWSpGMxv3%2FDSS3mCr24JCccCUUyNEQ4gOnQmBsxHzPZ%2FauHfwwvEG0IMjIRuIu9kWH%2BzSUjy7e7SPynyVOoDYhxGvUH6l9noHGzKlnjwMr8W7drujLfaewgys0k2hSvXMSN%2BnzLXIXQa079iXbfEZP7LmdnwoxKdnFI7HTjC4hac5oh6k9BAvFm0zfjPCEviX7guzTN6zN9ezQrRwsm6xU80ZIU7ML%2BchdIGOqUBNmF57v6sjx2h85iEF50vbVuRriQBUja%2FK9C50OST5Ue6C0mX19rmU%2FDnaXt%2F6z0WViiQTo2126AEFAPUm8JhFjGILVLM2XZibHmvjbd19hKEW8KkJ0I8xNoFC3Yof7%2BsSqge8ObjxQchFk%2FgMxUro%2FMFJenbUgaNwt7%2BSmYxsY3ty3sjrmz%2Bzie4tDUWGoaBXze%2FMLe2zgj8N1x0wZmwnk9ufHHb&X-Amz-Signature=3546a174be4487ecafecc1969f4ad0e43b2744c3af2227407873d288efa88fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

