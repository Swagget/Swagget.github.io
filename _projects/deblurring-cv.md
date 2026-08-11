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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYFLNED%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T080019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrLhed%2BSxQQkNfdJ6%2FJGfFRLS27hKkcNwbXIErO9Fa2gIgUobNtyREHxpk2ekp%2FLsxWGeYSQfwR0uhHgwmBYopd%2FYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY9O6ZBAuTpa2YIayrcAzkvjzbR8MMUPw%2B%2BTlonbAcfOB0aBYRO4KqZ3yT0VDHO5%2Bprau%2FT2oZaUjPtOlrkDo69P5I4MmiWnFp4dvsLc0%2BmhrG2kNQYlaqfGcYKMsMZgiwwPEoEPFU4HbYbWQakML5z7tSNLBx6E2uHGdyE9RvQAVuTh%2FTQM8WCcfnhRxd%2BMdDhEZydPlHk2xTj0ox%2B2GisjFqmP8GchUV%2Btd16v3hHUHTZttP7qNB7xadl%2FhkdjJ7y7tTQJyFrFtSz5nBjciox%2Fg3aDn1Rp8QtdFJdxmdDYhd2%2Bn%2FmUP4UxCyG%2FxHuGirQdZFwo6jO2LY9fS0Ks%2BQLymiSIsYrBqti%2B5Z%2BgqxznQOY3gIci5r47TbKrKQq4esE%2BA9EHrjpZvAHZhwpmSQzj8FFKHOfr84bYOYBbBxMoacuJEs7PCmDWOJM0D1iMqy8H9k%2F9pZwBTs2HzTsqcijaFULHtbHX5oCTaj1fyDKBs%2FhALFfJHsMDFFZrOyTdnE8Yuw7OaPmN6UdyAVP78mXsw21Uo781%2FQ1%2FrZM1p%2BESHMlMsri2f%2FH%2BPqeTWtQR1b7k9DdfwayU4bJI6t8DpQV7CIQSyntByzQG%2FIOEO9FrLjHjdyDbfTSlZzBvvUus4UI13yXBEdo8NhnML2T69MGOqUB8l9Nu1jYeBucf4RjcN6cy3n6fWJBtYMlZ%2B0WIZIBq0L4ss0CT3CyUrxSeQ%2FguBn4utCad23F3zHfFFTUMBu2Y%2BibEzoBubVyMrF%2FU%2B4PLU1WMyHwPVAyYrFdgUqgnP3OTbP8oOQF6YFHXYVCixPzh2pHu1XkLYPVK5pa9HZLJMOucEAm%2Buy%2F6y1E5gCoBku7ak%2F7PE%2Fa4p7CHNJv8%2FQTZ3835frm&X-Amz-Signature=55b02ccdade68795dd8bd8e5cb6c5c79a921d60f42313abdbb0c9e4a7663d88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

