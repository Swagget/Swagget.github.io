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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CPLSKQ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T214447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDrnDir7gw0GvXXKLxkzsRBlo1r4wCeHtIxTV%2Bk3XveIQIhAPY42kWrpT8jFSeYO9%2F0OL%2FQcQul5nWsnl0U235OegPVKv8DCC4QABoMNjM3NDIzMTgzODA1IgxyQlMku20Q7D0zuS0q3AODQUDiLrTgBponXzooqLiu8CQP3tvcZh7uIqye9HRozzShwaoYHSuaRSu1S7eejVinTrwjzrI222zsjAkwydW%2BPl0wghO5%2FNohMmafML5VN6NWDDInI45LiNTzlFKirYZUk6fsuWTere2orXSXqRQTo%2BeXjfxh0oI%2Bfgm8FSS6A0fldgalqM4Z3qyxv%2FHgmj%2FnesciofvVuM9Tti7zaw5x7whyBATCtBpNkJ0L9oLlvIMuS%2FlsOYIdB%2FzfkraKrOCugMPapIqQelw3b69j0LWvrG47uigm1cYHwIsz4cTZ%2FI%2FAwd3JRi879dt6%2F%2BJaEn3WKdp4ybA6HayF4Ncb0h1NeEB4VyGBoi1Q%2BO%2BEbw274To9QucFYQbdt828%2FyyACoK6%2B98kq8KLpq0m6lBFWzcEQTjoD1i05QXnTnUWvzp8KYjB52rvN7GrzMko%2B45lp5Uab0fP2%2F9gTzyxW9%2BqZ9oGJaMUyZ%2Brl8v79hatCIIwwiBVm11PQhiGQGubF%2BFk9Gt3O7%2F09kQT2pdprYszcBSnfIaXoO8inWY0TYHHJ3N4z6YEGlxdxbxev1uCIAzY3Mhs5O6Dl5prCScIh6k0U1tL78CMMiqXV9FLsDVv3LDuJRZt7Y6rgBv82BABQjDs8qXSBjqkATs9HSB%2BKeanpvyO26coDUh6m8MAw%2B3DP1Wy6xBi2u0KO%2BWQ1Qd8Ucq2rLsHePZNsGzhiMn17Kg7J3sgQYl4hidIsENqhtAnf10n8NWAimaFzJsJAERbQxQgDpo5yxsIjSaAZmeVHbpqw7ZKQo1qFXcEq6kkIr5rXYeVRvFavqJMOyoKn%2FpmWP%2FbNi0D%2FHLpVpg1cTeeRs9v4IChi1zpBRHUhse3&X-Amz-Signature=fcf633e83085e34dfa518f39c656a49a2e2fd2e00fd3223d8a1dd16e95aad9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

