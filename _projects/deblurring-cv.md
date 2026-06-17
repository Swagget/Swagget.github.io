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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7UFGCU%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T000654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzpU2h9dpoOsvD1ivYDHas5ZwbYdiM7rp76vZpIYEmgIhAJHTZ77AZ2hKWuhLjS9pptTMWn3iydUDTenuF%2FKopYSdKv8DCH8QABoMNjM3NDIzMTgzODA1IgxSHTW%2Bi5D5kqVCaZ0q3AN5WgLMB1O1QJYkXPwq35sFM83H1Cql%2BJ0q7h%2Bgbx1IhmWcCs53IBVma8RpDrocJrYm17h0MIatG%2B1u5%2FQcBUqz%2FLcJTwT%2B4WemXTzP15PmQDfmwphrOH8B3frZZ9Ptc7I818p0KeczAX9%2F%2Bja3c%2BPD19NXLDKwrSWOSDPw32LYPgQNylb1CvbXtSD%2BsS3wCiwJB%2BRMTxOMCXCAp3XOVubJSFkaV0YduFMDMORIJe7x9Z5JyG6t5Tf0lDYYkc4wqoKZZZQ1nhKad6%2FwuDierj%2B7ELFbZ3%2FJipK8tee2BfpdYZ7Wk8pta0SyeapN9NTRyz8bTW3w4VFlJn2ZcZJYCkhyFmejqaxrg%2FD17uSmDh2N9iCQGI9Wh6MSw8JRoZ%2FxKaM%2FWFlDpQmd49EQiuSrgDXPU%2BaJRepVeYT8jO%2Fjdx%2FrbAdQaMQmyjDES0UdAjpFzcsejK7c98T9gsyBLBzsPgCCAsP8ORcrcOAZ5%2By9qA%2BFWXMVnEQfABcDjYrUYkhlVuL%2BmgjOE7f4ZcG%2FeXyMNr4%2BcAKipA6UOyqO6tYIA8qCLserxBSF8DAWuWt9VVeNsWOjxQiFvC%2BIsJDz8Cr8Ta3MGlIS6TOyJ9COoyKqzVXe162OzvQg%2BP2brSQvUTCTmcfRBjqkAeQ5OZQk16WzPKo8K%2FkrPOYiQb2InSUl5saSkvrF7bT7UzcHPOgsqqI39IOEg1aoPF0yQTfdviwLMwbWk28kxzZA5u0jW39uG%2FlOzX1QMxyfLUbBoJZdRsYDO%2F74sDZwgHq7hFc%2ByUHUte0u3RKsk0rwNOSy0s1sAkWnGj8BuviQNUiII5CfYa4vb0NT%2FdKN31NQKtfc9eKyBZuWSf1E3O3i7oWm&X-Amz-Signature=5f48860dcb5e3e67a78e01e8e7539d2a7aa164146fef88e0d74832cdacbbe187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

