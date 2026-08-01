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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRH3SWA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T124901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFC9d2hO9BJpkqyRew0yFW5wCjI8snoyAHdneTASqJHAiArsKUCrhpv%2FfdtBOgVEDetlv%2F40dqKCBnAD2%2BsFzPXDiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM73CZDHbwvxe1CVonKtwDEctbO8Ii2kN51NgzJQFUF3IAE7G9MiwWsxS3z8YFkY%2BVt9QzN9%2Fw76g2mGfpBeYbUHB%2FdAU%2FLOoMTv7ZDMlBzg0Kg%2Ftz%2B6P8hcnAqEeFVvgyHwxPnF%2F8jD8Tin6rFca%2FHwVcJqnlLtfJa37Dio8a0abjMNc9P9KBvRi2F2L%2B%2Fa18wvuBvioYimTWMs1Rxh9%2FA5WtArZwgkBRUNHLeNEXuTlrZa0T4MsunVfNa2vtXUQyIHsshwet3SwgdpErr19K4akY%2BtMvvNt6ZXYyL1my%2FaPmW0jEEoY%2Fatg0cyyQpl9Gsduf3oHApJypKBKThDbrdaTEyoicZgFIDi9LDwgdpDywZMXJifMZ5exyV9k1U%2F4DEEC9%2FBaEZF1blGYl30TyRup5F8BLfTTpOIFbcW9FwYTqVNGuuDtL6W%2FDcbURC3Y5FP4E66TBQSvwCWUOtkU716BTHJ3jUkHncy%2BTxkyE%2BwK%2BBJGHUmEozBBcyHZu9sE%2F2TJVSJ3HYYxovPPusBU47UWSqNTuRm8XXRQZ9j3UMf0R1Bfq6c9DJk3m5rziFhaLVpJAPNdJdWyXcsiK3fc0o5%2B3a0v0tu53EzrwqJXsegHYaDG%2BVgvgkDARo9uri5%2BhqQ3GzxlaEIQAosAwlPu20wY6pgGePyxqi0h2N%2BnQqLApTp0iswmx%2Ba7yIJhPpp8tsGtU4nDrLtdK6znuPtHQ4%2BbZdhgvAgw6UDRjI%2Fy%2FN%2BOoSL%2FaJbIims5RLrS2DTU46UHq9OPLJomssfPNTPZZ%2FQMz6uqOLWk%2FW%2FZHj4sVRAg4ChCWjeAMN32Nd3dHY5%2Br50EnwL6HhBb2RDy5RTRNWUqXuNWB1fdJelFhgaSeQiDxz%2FO5151fBXxg&X-Amz-Signature=11a35a6a2b742bbe5a6f029bf7d07dd9e2615f4ece8d575b17fb7cc8be96e8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

