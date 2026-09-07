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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PNMQ5B%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCW267eSKWG8Pr1GWAhJH12Qa%2FnZtdyDQmOyMn0G3pH7QIgA1zRaEhlyuwqJtM%2BHA3VkMHK0g37Il%2BOohaJJEx8O3Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHmC98R6H7U%2BTxYKUircA44%2BFvjdtmHInXY4nb9TM%2F5UDpjKPbzX7vXwHL6QCRBQs%2B%2FD4d%2FRVuubYNgk6viEXyJYtOkVan2KBg2h7BjmNfB2xhzZYUFeSuRoKzyNjhNsHo87He3fb7wdUq2ysHw%2FyPKODGARg1qwm19J4q3jGr1mnJ3DK9DdUoAas53b0NDQFpFLa7YuwVFNhehJZOJnW7Ts3YrZvPgpDopWdm1VoLCK9pM%2BgHWiupIZ4P7neXjDNmpYKLE4we6%2FmYev4dnLY9Nqpg8BK47S1OlZcpL7z6Fk4fl6oLlDWO7mqnt%2BysRDdp1pcJrQbTJkUJgj9W1D6taAAPOnIRXXPvJFoel3BSLEj8VOsOb36fWrS77K4Pu%2BaN7fakcipU8D9DNxUIBrC6hLufVD%2FLpqXXSvEX%2BDgbC%2FulaUvbVfK%2FImNq5AOJ6dEd98Iz1i90UyrOA37l0I%2FXIrQcq6j6YjeSRA9uiUQUTT%2BwKIRcrZn%2FAiH34WzOsY%2BDyzcvPAm4ytqE%2BY3k8RUIU2LDGZN9MbUgEYXMXrs2Mv8pzTmfnWOCDj7vNadOicHsKj6vNvmI1%2FkhwFXrgv%2BG2yGOP80tlvmspDTOi4cCYE6OIUmuuNpe5lUBpI5WDcio75PoB1iDuM5n4nMOaT%2B9QGOqUB21TSHsQb%2BSnuNrbQOiJPjaKJgb6dRmOYDGW4DdIB8NJ%2FL4VPIuiN2LIJz5cdpb%2Ffey0yAbPEPLfy94nKcrmmmsp%2Fy83S0xtu%2BhcZutrE9lKwbe8SFJRLUndo25RgfCGgSdp6Lz0WKx5fp2e33NJepVIrhcOhSaUgPlLk%2B69vM31%2FVCzJCtMjygW0nU%2FvNeYwfIKPuIFVpWp5mYOiu3a2X%2FVKVQ9h&X-Amz-Signature=9d5b288f2ad4882fe18c941e69fdb91f8a5bea423e77bfb4018cd3b63ddfed77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

