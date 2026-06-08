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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6JQVLH%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T230533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFSIXtNjW3eVi5qXXHUobA3EytyCBVpIwTg69HbuFYEAiEA%2BX4p7k4WO2Q4OV26J3hgAkSgvfgmJsozZHi4V22geKEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhMB%2FaDUmkOlf8aSCrcA%2Bg7IgLutP6GkeU2Nk%2BqVHIO0fdMOKhxyQFYmzjcCzqccrv70D3Y1E5jOaBpUN3JMazyM4znzWZHUPVmp%2FpvukU5c7jgIYuGLulbwAeqTePX4RLpBlRhxFUc4SiFVvaRmrB2qwBzaE%2B%2FbAiWC1T1JrDViGB3AQ5snHT0mu0CHzT5QcEKH%2F%2FBb4S%2FqSAEIK6SdNOd4yxjzf%2B8NxHc9oOpJDuboM%2Bjwk1NNM%2BboRKBu7%2BkRTQeQE3UVqplxkxghvVVpC35VLljLB1gBq%2FctbvjEdAKX9NozHfwBaPCH5mPNw9i3cCGyVWXI5woz7if0ZWBnSEg%2FFpqLAqmmcSHDANMVmJBfk9ZOf8BOZVeRVljFpReO9xdxYA3tfXbONffWSixm6%2BfJuW3n20A0SdpLYHeIg5izjoGPHFi7aczlyJXbKJqqC3kD41z7iqEFwRPEyG7VttHZSvinHzpIofDWP68qnCdgVQZP%2BC46Kcsbb7KKP0n8eV2IGHVAtaBhbDKe1U7UJaJxhCQp0KtcE8Db1XvVF9zM2I0%2BOlOtH21NXAGDICnDdO%2BK0atwKfzjBG7xlgM0dlxcEwZF93L8YRfNKAb5OhJyuVjW4Rm72NsrHhhsKyTqzT1b7kV%2F%2BUSqvn1MICLndEGOqUBJW1OfMxbNN%2FrelKpFqvd%2B3epkQDl5bNvMZT33rn2dsaBtOlfqNnPOuxeZeRcVs%2BiwFc%2BLfuGgOGBCIJZp6x6XXQK%2BN70NsrTSkPbvXuZbFCWcOiaQrIL0bZVmuS76mZXA0GCJ%2FS9XNgMWfrqRRfTNepmdlJpqV1dy8H%2Bt%2Ful7kjWLVEt7sgD%2FShOzCSyyQHCMj%2BXP%2Bguy9qwSxwE8I2q3rTLTGeO&X-Amz-Signature=78d6b50311180dd0cc83e852808a02d9a3ba2101408156b8e0a12e7572b088c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

