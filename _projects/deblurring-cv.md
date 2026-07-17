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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPOCSCLM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T142531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpzkPnaDTrWSC54ggUOZgDez8j7E1CbqCGcBTHhSN8WAiBPSL7t19Sz5ePgoAmv7MxqEeg4YsvYnKz%2FGn1qH7URDyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMx%2Bn%2B8il3a822uK8WKtwDZmTO4gYU34uoe%2FMhfdtfrAZ1tPJ5%2BjUjlgZmiDDs9sPSDvNtemYFR%2Bj3w9p6jMOadIj90E77bUJ1XBGXVbjOhd9dQLTLCl%2B36bgWg8kqXuBiedEVxBc290B%2BvMp%2FU0BrGWpN3Ho9WkrPyZYY1MDH%2FKClNMbW8Wwi3ni5tP%2F%2Br3cRu6ARtNeSyn0uRQrmZ11%2BBUSqbcZIWMP1TkSLuSY2Vb%2F8UV1KY8ANeGmgJ%2B6G8EW3%2FVHPnr8lPvTTrBwd2ZKo7zQTqrNABvEYhPhtlRJZJMktS1XGaxcxKUl6Ab6ZAds%2FXcPQSwdzFMRQ2uUE7%2Bg9mDWrddJCX5LbizsNLmxtJsiijGqorh%2Fu9N4vJgxqeMFKjA5i0C74j9YOV4J%2BYt6Whkqh0HsQ69L26S%2FFFEtZO%2B6B7PEPaVS%2BuOL8yqe8XuGXixKNiTa8Xgwn5njWXMeVN%2Bv3alDDI9iHQI7BBw62TULbkdChKZu6uGk97xBaNOwwzv3cQDh3f0XUwrkfxnbV%2FaUkwk2%2F6uaW%2BrIaX1SHWEI5FnJmAbKZxeqivt9f99I2YFhk5s4t6Eomgm8DYIr6x60q%2FzjuuJIfkj0pgzMHH%2FQ26fYT7QaSJ5fKc2XV0u0wQ6pzruiSuzttE28wp7zo0gY6pgFuNVJtI8zyZSwjlXzzO%2FRhCKYk%2B8OsN0mFvxtUz6ZYu5lE8%2B7IbkDWOUaz90HqRjUb2%2FPrpDSs5pnW08hobG2rtuVERuMJ%2Bab%2BEoZVcf0aGb%2BO4mQwuOvwRzDBPLtwGp1f%2B0OvynlkvN9FFq8u7bv4fzIafZFMb9y2i38wS3%2BYj3MOeYwdq4foZ39X4mILFRrCcFP60zcvwdxazwYV7IegGhdhOU5p&X-Amz-Signature=165048558733d435675a6c84e86ce8ef77170cc3b3fc322d72f56445051944e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

