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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVRH5UU%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T130824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqywZ55Enoe7DgboHt8ZX44PunqfA6MKTb3UjiFdQmkAiB6ehslw7Z5%2FpHXb%2Bzb5ohsTpOhDus0Cl1w6eYJegeevSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzmQaVVF7aoB7tsu6KtwDsuvFdcCmb1i38kBHRU3lqPDQCZ2yzzaTyakAJBww6fH8X8jZrofZMOajLdGKTukhSbDACKaY4gzjMUS0%2Bck7XDNqAICn4waKB4nA5VCrqxslOdDMcKJ%2FMWiy3MiIZ2%2BLN8fFdEzQm%2FaE9CNCMvbWeL68Z2yiPhRSJYy2rlA5BETrTkLEccccxI%2F%2BvJsmt13HdWIhRahxJbQxCvbo5wISOC4kWPpkWGWOSB78l%2B6dqOudXn3oJHP0S67eapSh7FfsMiunJbXPQUMQi5THyFAjDVCNf%2BYcW6f6oSJW1i6oluxl%2FNe5Yy8OpTS5MvWCXn%2FtjS9ljA88cVMsKe0C3cwm3HSJyTIs8qrQ%2B0NLNym44XsaEH5dfw6tlR1f%2BRopfIkWeoZts%2BgfhcQC747Cxi6WOJ1x7ZrBt9M7Dw8fq6f4f4gHpkLP5DzR%2FpIIkZ3gQ6wQpq3ri%2B1mSl43aroEUx06em42f7l1eNYSUO54OgO4EfOaM4beXrm4QMlnorw8LaXRzC2cGyHz7tfcraMaxOTuSkMMX7D4%2BW33ckOvvnzmnTS7B6vsvQmx1R35HtJJTy%2BmHBrqh1NlWtZ%2FpImSAl0z%2FXfAXP8QyVaZq0UGh%2FJ40fQsqGDbWFTy6onhKRcw9rmD0gY6pgHML2GrYWQ3cR0nHXWx4iEubZp2Fh4xy%2BTO3VDspb0tUSdGPqPYnUHpLj7dX2%2B%2FxBwb3GwPzDOpO0Wd7V8v4pQsprZHXCw6XkvNOIbFlzcP7nWI%2F1rJPhkK1l%2FBAOGPHP3PFxwL5OLSAahHDdNtcg%2BlkwlU%2BXvbxXWF9ddE2p%2BEYP0NQtpX%2Fz58nRE%2Fb02IFqzk9S6r0HAmWroR%2Fq9ZPjbt%2FuS8MVvz&X-Amz-Signature=01b46d3c4814ba5d5b519f0c6dc403199f240816afaf3d13ae379440e42789c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

