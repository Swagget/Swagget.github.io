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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6JBVJXA%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBPeNCICCtgM%2BlVnj77IpcZ4iuED1%2FYz58D9vot66D3LAiEAlIn7IG6rFv6cUrqaWiAiHTAPdLSVqHyUAJZl%2ByzYbDcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzqw4IZGMfk%2B37GeyrcA%2BYwYHccCmTDAlnYxIXBv1ZiRHTsPjZEH1vazKnDvndgCkM3j5tBVglamzGxbOpZN7vOi2WgiJfbCk93xqAYv0BbBKnpudceIYQV3Mp2dJErfAzYtHGS5vOzT5Adjw0FlF6obAuJp7Op5LCzJLFJuldjhqQZ7a2Iiuz2F7KSdc%2BHXmxMm85yYH%2BaTclOPhMmv8GQBKKFJUz1o3SabPKplWijx3yQT2A2%2F%2B1Ax7u%2BotQsWYrgPA3deIbpWdlXmgG3ejtU8HwSlbg8KNhsvdmB2Nf34c5WTzA6q%2FkdfjbO02bOJsh49FHNcdYFeHbkpL38u%2FcZmrfmTboQ9sd43r2vP1i%2B3yV95J2B8BdbRIoDbHYk5xCh5m48ifgDrWByenotsEZpQVoRkkn2VbUaBd9ZigcBJxEfsKC%2FBteqruW4UgDIr4eI7nvHO3mSHx%2BQ8CrmH2B5tBNT3XWzV6Y7%2FVqYhdbtLlWM%2F2wIUbmsQEhsUFakQ5eVPWCFXSIUIoigxR8hf%2F5caO%2Fow4utFt3a9aNQPl49EhDzWwrUpGiHAKmnDVzF0DIhrUnQAUlzjm4bdV17b48zpOcx51OyVx903e8aNC%2FmpA84gXMb2hIPpMiE8TmcXv67nHwjLepetv4zMOqI2tEGOqUBO1mpcOWZNaIyJ7iyxknSVysd%2FwuZrj4AGfRPNcEUb61CjrnhRl2%2BXeKMBWLIr5kLiF2B05AahGuImrRE7zKT4DGnNpTCvR1Ico5Han4Fy1lxFQMuwS7ygZGOklzOqHSkjHoHX4vk7nQ%2BcJ6Nzhhl1LRx0AuLAjsW0AoCqNv1kv6tcOdpTi%2FA3UxQo%2BnylpfbFnksPLHRSqEDfLKQE6bz5I9ePv98&X-Amz-Signature=900158d348f0368c0fff756b35c3c104869268431b9c61c66b99abf4459fa215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

