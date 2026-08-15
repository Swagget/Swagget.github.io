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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQIGO2Z%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T020549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCLd7HAtwMNf%2FNYYJZih8w5l7xOVk4l2Q9IlJuFEEvCVwIgbiF28ktmIenaAC491bdHdB9ub97pom8MAATrG%2FSgOnoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDL3CCLIGXbJ9CF4%2FEircA716cXxqa9ODlkuqazjWG%2BLE%2BvqZ0dwysO5VnU8syiW1UITrDX6oah24zB0jsGpm%2BhAqjEheBXo5UEAjipUXQpATC%2B5r%2Fjuc0L8FCtPnE%2BbfA39kpW%2FhxGqKwXYdkQH33L47E1BbNrsbn1V%2FTdqm6zpI0CWzj5Uoy4MJsAvSAzZEl7fnHPYxGoSO1C1wr1%2FXU3wtk%2BuSwm%2F%2FHH8kwnUic7n%2Fr%2BXnq2v1n%2BsCaaTOvxPnCJ6BSw4f%2BCjYfUQ%2BzgD9yz3KKU8mHXv9a4UNlAE7NDxKE6R8o6d2EuNkDb7uWfQlVVMqK6CeAjYA%2FCbPoTfdReVjGZJrCW5rscPaW28diEo6GbwEt3sn0r97akrt84twUB9ADOV1N%2BmeqUE7u%2Fhm1COFluFJMarbqVhECPy%2FcAzpo0LSo6QaHlH8RIvRcGdeHRkqqUrGjz2Xc7BF34rGyEDWxS3VPGNghWR4bYVheUMSqEnIg1OOmrPMTnfg7Zs4F3kvxnsj3beMfquIp%2B2%2Fh1i2H4RZfmJAu1XHyIuFpkbfNy8YBH7MDGuEpgWFC8L6aRiWo6TmkjDkdDHO5wZwQ0Jw%2FbnyOM7IXFmtDddKeOyFczW7EfN36rETFz9hLqO4YaN2XpYEnpIT7JKDML3%2B%2FtMGOqUB6EZksiHI%2B36Y99Ge4clKkDXEsWbkL7DWBGbjdKQQcbFOe1gW%2FBydtIb%2FREMmGL5DO35q4LiRbSpXoYJZ9MP%2FU3T%2BYLe6OktWu6CbYgfTLWWoD4FhStiCHrUiWInFnJRnmAE0l4GheSyc6sLJZZIk0EERoYF4pl107oBiGDPIEbeO36V9xPGZuvLqsiW5uj%2BJ7jqwfDEGO%2FiQ54%2B0Gwn2deZ3pKV4&X-Amz-Signature=6b6dd9a3aa604413b35fd5580036a95722a5ad5dbc76f68ac8b024a585c0347f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

