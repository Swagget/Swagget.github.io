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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ35PLU6%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T111359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKlJFqabMCoj7F%2FDfM9s6TqW8%2FJiXPmLanXoOeCMCfhAiEAuTTjzP2Ed7MXub2%2BH0fieyIw%2BHvHxInnucJ7YpSe2f0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsCzDncD4khhvP2uCrcAzu%2Bu%2FMj%2BxCucWER0rqTf%2FUoq79o%2FC5H1D7TwfC9CQ1hn%2BKtc8MBxZPWppy1v1kZfdgim5QSiL8ysvMfYQPW3rDvGE0vwTeiBskWK%2FBcAunvqvBCewtUxKyrGkZp%2FfZ9x1Xj7EBqfvapXQ1TmH1aL5kLuYxqWmuw7btPrRfW172DNcoPYznyl1igyp1wNO77MuWU1wVMhrM8Dl95C6ct9XbxqbyEDx1obKsDZMzEwGXsfSeLT%2Bm%2Fxuonzj5fXezxMG5SlPEWCZz%2FxMvD7%2F3%2FDKp739bKxxtWmFTmtO5ScC0zZounybYLZR5jKo1hHFu3SeKEOEUoDZm2gR2UwK4IFw66oes1jVClbOmPH3TtiQQxQ8HYWRNR7eDxvTB6AQBwskmR7qorJElEX2okTTuvZPsdjcc3AWOt8P671cczXlu%2BsRR6CMpVIAAajTfpFVddJZbDp0QsSAQARIh8tOLbVu8EkL0pCSd7%2FhtOtkhUPO1av5E4MT8KBrVIcu%2BXX8Kx0rcn7XcRpa0aB5fTGzHmM8PCcZgH%2BrW8dilumLrbBc3%2FSD8P3OP1%2F5uCaGXAvXqn%2FSrftAQ8HpoGE1q5en%2BH0I3jd7ScZHN20b8KfistKLbkHDqNr65ReQHju53ZMJHvj9EGOqUBeLlfqZq0TsglhSHH7OxtKd5tPKrBPenbbXaZP%2FoN1DEtr%2BMc3JHoTdRoKH2xSVlZVjGHhBZppEjI05VdqlXcrHmKr3%2F3b%2BYWLvbYnqyyaDbwQB9n5%2BIzF9rCBR7v%2BgJ17orrFSiRpFcYVzlcAow%2FNxpTVUBV0gAlFGs5QAs5KQFI3vWG4pO1kP9YMrSUD9UEsmiffFYXfH3xhHLW0xKz5EiOLhab&X-Amz-Signature=f31d41e1dcc5a9ad01379b51046901321ad08bf87d025db32099ccdb129d1ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

