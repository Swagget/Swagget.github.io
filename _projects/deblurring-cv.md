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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXZSHXS%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T062123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF0HmCZcTugsXsLcAufiAwVzxSXUU1AEe36mBi0J1fEAiEAhr0qhoBRcKXRWQVpxxHLmDL%2FrqLyAGJdQvdRfVrLgVEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKvOF39ZUI%2Bk4EioECrcAwEaPwApj5sax%2BIg1MVoq06K1X8iShizMMdPz%2BWjGNuG4AQ04oU93DZU%2BGyvBrmCCCxaWCl7XbQ8IgYJTmeqgd9jAtLYZZLlVRq4MuHDTdJDtPS0v0vsPB035QelQTjf0JbcB3IfXQCjzPgkG6QbGNjNiFRRzmbSAYmUXGb63MaABsWxszYRzgY5Q4EoakV8NGoegZ2er4hQhno36dd6MflLa64qfQisS8AYAjuu6jkft3QqQEm7G%2B7fcjqKrOBkJkoU0LZguC2A%2B%2BM%2FSclaAVPYK4ThZnUfidR0BxFkTax6rUI12daHpcpiRBhCOx3Y9rtmiYN6KpDU63d17lb3B3BG0Fb4JqOiSoXMZksVO4KjpJ0oSMOsjBCgoB8kfPhxGFN5a%2BGqcYrrpMZPvUde2NPl2uQT8q1PhP7eE2XaRS4tlSZXZ1rGAk%2F%2B5xxnNSUNlXDzVzjBZruDXxuhhRc6BpvaXqi4H3OyKuzfwlBlEU8sPM2ZpsdrOsgk%2Bj7C5fO8LgctHQKEAIEqYsgJSlqFllRfZYUIjYyt3HKbLvqbEvJUhwjAH8Iy7XEAao5PtfO6Ko4o7V3W47aWYeLdX9xLcvzpL9SOx8iS2Jw1UjLYeTgWh4A5t7mzFEC3%2BCkdMJzglNQGOqUBGarZz6FqVSKXeyZCqTyf%2FmA9NRux7zrNFF7GjDqInmA5hFmYCxvYjA%2F4UwHAdl6yDFvVaj7nHynIsc5QV0AlMybTwF2jyuziu6MMnzXKkqFt1IRH1FGJso5gamqFiYlsVqOnI2NLi7nGsA6Bh1s5Bizeo%2F4ZrB3HOqXvaz0vuvT2XTK2XDvhp9SKYA76o4UaSl7oB0P1Xo0CvOH6%2FvetrwcaQKxZ&X-Amz-Signature=73a82f23b17a78661af378a083f5736c53cee909cdd1d72c788e29f0738a0f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

