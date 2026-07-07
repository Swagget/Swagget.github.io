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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EABTMC%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T211216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHay0SJ%2FFOyYz8v%2B7gd6R8tZjnZpnKRNisCp1018pjB5AiAAgewgeAvsYxT8Se9YqPPcJJW7MSeOqmAiL%2FKieFMplir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMOcGN6RODgIOJu%2BLWKtwDixVvA0P5MiHcTUB72n9lXqQdS%2BPqkusNNsgolrGwKk6RJ1f0vk87mjaeNQyyyQxSpvfR%2Fe9ErvpyZSZ8ags3QnWKg%2FQ6V1eB9KBB%2FtEB0mrxwHPvfzY4g0PMhQzt4sGGFANcbSLcPM4HCOz0%2B3sSITI5JUfZ%2FgCvmc5HUd%2BsW7UPGWOARJu2qifOEJLfQB%2BGl7R7OwmSslzNA9kd2aFzLfPJwKIAlaYaUnoKeNe47wWfBs2GJuWVeb2Ih%2FUzc3Q5e%2BkSuR%2B0VI4%2Bu1Id9yjO6hPNJg5P18vOj2ET9LrNq%2BHwg3Kzy4XmKOzljiP6PeOrgk3oQB2bFdTQsycIN0b2fqkbU6QBtd87xXbofZyJnTn7zStvn3bup7p4OAA8L2FczlkpTz%2FMgsyPWLPoHEXbJyFaErDUEH88qcOBvihv2%2FaezeKBZDtVNxro29bYLjl8C6QVzeXRqBaZgxxhYU%2FNngYlOq4z4UJPmmXHL1e%2BpyTyiT7t%2FKuqU4ew%2BY060C7XURWfsI6evLUloaJ9GCda82RXSAsnQZIUG4lmCZRLJAL0u5JOvEC1uT97%2BPT1iX%2BhR36lgZddZDeYE%2BJRCvKB3%2BpYKnULHvPBVhKoqyTSAXzLGkGyfYXWGDb7w1owgtK10gY6pgFW%2FTwbGSBe%2FaH%2Fe4x2FM8jtTlFWsp%2FzpltSiY79ip8ueJY8ZM7o4NmudtF7vm6%2FdUPF1oP%2FhFWEq22Hh9btAkeGODMRwFu28oZ6cY6dU0kVU%2BfEXq0qj%2BYfqSxjmBLfGXyEesKecq9F%2FyAZzTWLYtPZObQXk4N91v3CBA%2FOskBu3CN38jWdTVq1wRFYNrJ%2FZYyIFAvW6htnjCKGzRGKOfc%2Fn5RadxA&X-Amz-Signature=a2ac6cc64395dd6a7fdbd7b83bce034c4b5c92138c316c98b0f3bd480925d9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

