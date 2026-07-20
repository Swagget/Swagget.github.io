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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLRHEU7%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T215644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOwPNOpg6M4X8MkC%2Fr8CFrzFa6FJRFVWBa%2BmMooFI0gIhAJ%2BR4S74cx08cKIIqfINOynm28TKu9piADYZNeuz2kvrKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykfSr2myl%2BN1me75gq3AOQGOFYm%2Fcg2%2BLPEKdd2GvvbWrkJjz8CO4NP3ONGGMp668xRp%2Bcx5%2FrStHlVhvRFTHjWoyEsSUrguFXEbsGAmn9Q2Ta88bWTgV6DllANolTlbWGFPzzhl1JNBlZEaay92gAEM8AkgA6AJ%2B%2Bxd%2FcmjlPtZVtm3LmugzxIUCL4MZY5i%2Fupsp2lWrFNv6wsN1jZetxGbMiBm%2BEqOwocarm53R%2FJEKact1Nfl%2FTwV9oXyfprb5G8lAfdO1AiNRt%2BsHxAbEuwQCJlXS65tQN%2FdLhFrJ1Q%2BtV0Okvj7F3w4eQIGwkdMduE1dsYSSaEUeLZcLasAqcn5BKKJeWRE1PzWNay1q1eE0oGV%2BoRGvoobp4wan62rAW5KwY%2F%2FSzUIugm20nIG%2BaklXhASOlDK%2FoStHzVc%2BnVBqibeCvhwELE3S2uJGpBb9pes2J6dJbST2FNCo33nzwCfOPAmV%2B9%2FtfT6AXA%2B9ALx%2FOlBnuEqbzOUUCiDcNZjwo9Q1h%2BhMPOaeCoNQKFWCmbVhoWfkatCqVCNE4TBnYZV8dXPJdtZwoi9W%2Bz5Spc80xZXz2mDRyLMt9%2FUl%2FpXnRJBjdiRum9rQGDFOpc0dtKW0dPgy5KWH4jD8thdnyzZ2T1OGc5VG0UPyN4jCtiPrSBjqkAVfdf%2BUldojLulvBh5LOaNS7GGccLq7X9XFWlq9xh8sb4KfsdAZXiiZR8mQs1%2FLYuQFsMyvfKd7RLjolSf9fsldL%2FQGbMk%2BRq1x6ZtiYLStqVquyBUuzhSiWjXml832uIkRr67wD4cu%2BamcNFzAY8N1bPnL%2BNYAvQefve27%2BTepxhmO1yCbMRBUXF0EKvGd%2Fk0c7jNryaZGZTofXu1TF22nkezyc&X-Amz-Signature=eb42e1d14a505fd2560fd3d7b59c04b6580510eda52d55a673aaf20099651e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

