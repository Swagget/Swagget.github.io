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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYQIS7F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T235336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIH4mB5ty1hmv9z3jRCIPPuIL8TLpywGbpkl9cSZO%2BDSmAiEAlTO%2BvvNs68TtJ%2BuWorZjBm6cDe7h%2BItDs4QrLxOa53Qq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAe8op6v%2FqrpCLP%2FJCrcA2rQUHcJvX8YrwdQqkPwPmReeIktefb1lpRuFF5fkKlEXygR144vVmye14k0SjJCu1KTzZpr%2Fg3o28hvs%2Bd94JO8FlSQ2RyOfZh%2BzUxlFDzjWFzF139SYUX4BDZ%2FSmVkUNMXbA888X6Mtjj7mc8mAov3n29iv2Iq7GnWUbSdfbIEfuUE0iHk6Ko9kWVFLxMOC4wEd0RE8%2FFY84QZJZoZyDqbYPki1yHW42l8V4w2gHmSLZmyMqzoWgrt2%2BO7BrzeJ7U4QTqxDtpVX90mPCs1NbSdyB80ovkvwO53OaVVY5Y83qexKrbH9kVqUIApmdhWW0jV8EPRl5db8NTmCRU3ai%2B6pjTKmlJazckaEgJQUhyRj%2FCmZntCvnybH6jNddO4ZEWmhAvSUiE8HGr%2BkXhTU05sMgwsHyHOs%2FDA04%2BCi6Cblna52CxwpforLaJeM7Vvs6FdsAP8qhrj%2FWA8rhZMFQukcjiTK1SG7q38%2FGWd2PBl8FuGz9kuqowZnucSMYdyTc9ZqtfCakbMg0gGi1mMG2sJfQ2rg1ZLPf4JtsRTkWpOBwd%2BKxMEb9mFVqrxaVaDuI7QoT63DUpf373EyMbCxy27y1G1MhWiiMNMtBO%2BzmH3VUz1B90DOTCO0bxsMJOPodIGOqUBxJ0iB4%2FcreakMCZOmJiQGQ5enh1j6Akem40p4yPZiF%2FrabIpi5lw1TDjH1ANe1QRKm8PVXXqhrm2ACkVtbXyGIEIlUIWuF%2B4NSAGE1BhR%2F4QtgPouwNaHBTGq%2FfIBKzgeF%2BH%2F9oD%2BOnI6BEC4GkOvnYBnsd7sOiEyvu08VJfL3zygcJS%2FqjBD380gpOOl3VMYTIURoqiG2NbGy5hwJJjRddWM%2Fs%2F&X-Amz-Signature=601461789c5f944393abc166b3b188d45db160dae7dcbcf13c2ee3be2381c172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

