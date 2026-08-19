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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DGBYIM%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T221151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhYKGJFtNKLg6ae6xtDFUzy%2FkdlsJaRkbQCJDdPec19AiAS9hY6UKeRpA8PE0hzensBLirYPyS1ikcHinng5PDWHyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMGhNGqYUzkYBl8hyIKtwDCqTKdxnUzug9eMzI5g5%2FtuBoBNOc4e%2BDox1S62ZoZL1JkGiZMNlB9LkZ%2BiCTn4mnZEbV1u8yZnLDkKNl2PnLrKIkeIS06%2By0ptjwwdrAMMgZXuSPngOQ6feErH9xfLlJXlQrqVyOv90WH5ZoG8yfdlFRnea69dxnRvj38lSj8T6%2FVabvx%2BpkZRR6PMaQYoJQ0VvfVu1A1N9Dgb0kC6zYvJs7BU5CNota60UKme56p3ovE5DzvshZ8K%2FbSNAnBlrfH1O3XUNewVPE0m1z7SMWzYsdXahLw9%2BduKbiWY3cTj3zUJyXRWTzXP7bDJ6%2Bq7Mw4%2Bk5ciUbguaglD0uLE3DolxNlVTqhQi%2F3zl8QBbQaf5ayvQsVLLb%2BB77ePK56mbzXqmNwK6luiOzpTOENKFSF6pbzklN7ydfQ7pyT4AhUz0cXuqb6IfFENZMoyo7dwURd2k6Kbbk0UptirW2j%2BCsYQpSJA%2FthLCAE8SK14WBkOvXqGMRr9OyZlt35EOgHBWXzBSsPQCyt8JmskFNrfePjaK9fl9m%2BGp4rp3iUaNziRYqRuW4Sb6mc5xdN7nfOE6oQFh6w6eM6mnaLEJFq2p3swmZsA9307EsPUmKONIrQlsKhaHupG4UXCT8ELswuK%2BY1AY6pgGW8zXKE8UTkFEcLJRGcTpJYuIohfnGzPe29DFU36IcKdsHWfwQZn0kmNqoYLObyVfDgZGfF98yNjuMkSgjPRWFUj2HoAcsfl5c4RvxNEQIPAqwLg5i3zl%2BaVjJGot0cYZZNGMLMaFdH2Jd3u9tCyj8wg5tzaqZQj9o%2BSDaXKAEMImE0JGlCrQ9E6%2BaUATNor5Iw1HT%2BfpZsN0lfcxnJAI%2FnQi%2FdPvV&X-Amz-Signature=2c228f19bf4733009798df3ce32e166c88db53d4d130028eb02b1497137489e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

