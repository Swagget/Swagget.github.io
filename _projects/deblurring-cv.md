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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCK63BP3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T191325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0z9CzF2oblxGJOTZxQQxzcT7Pg7iUf7AMjSQW4aVHoCIEzMTQ7up2H0pCeXQG3yvOSL6E8OWZcuqAhAQTZka%2FCrKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjS5s1WY9vUHAf%2Baoq3AOrjYi67KGa%2BY5QOG6GTJxLuv4qywlSuP7g2AA5NwZfYCvQZjAiN4E4%2BY740lAuNyEg2Vtg9n%2FnDlhplZXPXWhz8VN38ZKEAz4hEdzSmusMRXpkOUln%2BV4BnVDvsKQ1viYUfoxDbkDkeiJu1Z7aIf4WVq55Gcxwi%2BMsrg2WzD%2BVISowqUe2PRL6EOSZOmr5eSQBJBNCSL7FzoPLcvMHpSFs6cdJ9hQAB87YyddCSxWlIQ2kLzdJyJEIfINK4jLPhIlr7TOA6g4%2Bjh9fDwvn2MHUBnA2d%2B79R7ad%2BD1t%2BZ2JLmAkzS6GPonFGmtMJ%2FmyDAPaCnyN98Q3oZ7xojH6c4XdYHJu5CxkkpCa38NHzdk%2Fp5EeDsVhYEmvWa3m1WQp%2Fw%2BtW%2BwaTP0YJW3EKzgdfKuzHdM7Fzxlpc67O2n90Y3%2BsBxkyw1el%2F47jxeSdrXQXSdjTXA4by8tb4gAV8l20JtIkjwRTYGbDcl2g5qV3U76tZUph1K2BF%2FI6On3nRYUJSI7VqKJ55CL%2FiL926ZAFO0vpQAUgesm2OsdVQMSpqDMW%2B0nG62YFeXJTnumZ%2BkIYiOefMtLsU%2BCRkl0QXEx7EwVg9BcLvxpGy3F%2FpiB3fRUDWW3wpMVG%2BBtZdRCWzD3sKfUBjqnAcVz0aRgp%2FUhyfDXNMFPuR6ai1PF5sZtNgbbJ9AfrY%2B11MKY9fp8LzDwCl5VQqrYQ9xHki%2Ffcnkwn4FAxwHFV%2FXXTy%2B7YJV5zZIUKfeA3S1MiLmPskYsrEolHGu5cl2TzNrsT%2B9QeTx594Z%2F%2B6BjNHFHBOgiMRuw78m6ixFHtzcxMc9arQg2FYQD8Byj5bVuBlnM%2BE3GxjbkfU9SjTJ8HroDLqCORxwd&X-Amz-Signature=f437510f28d690b362fd34a45c441b811c895e83a45d19d380329a2d7af80070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

