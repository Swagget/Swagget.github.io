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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SNRMQKX%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T093916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvcBXmmdFkpxhd3xQ44LbL5ERqSrWU71BiJpHRCEMWeAiEA5Txt1Hm0wfqQICofMIwCPdNYVD95Vzm37t4Uxsxs1Hgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDN5r2XqsU4Mi2xNP6ircA%2Bdgt8O9uP4vqxCTLPmVoHgYtwhn9tWYgiZs%2BOwq6Is5UxcxZ59hmbj7ItGm7PJpA%2BugCmjejRmDoAeZwHHR7G%2Bs1jyn2L3GtUXJdddAeGpg3o3VDr62SUkz%2Bd2OhnGSJCyZxSiVrmp2%2BgOzAnM%2Fae5m%2FeVv9VtjJh8irpGJrFMvW2q7U8Gr6Y1qwqlEN16Kd%2Fv4RY%2FE3uu34%2FIiwWoK2YtIpoCg7jFuSagKxHxVni%2FFZi3e6ItpP3htGIxIJeIMg2E%2BN0CMjG1fUh9dJrhkaxki58%2FrLo9haxcJh30U8VhVCTOoDQfNrqAf3rkgBZPevAV2%2B9OdidU0YiIK%2FvaURJOJVUch1sm8Nh8SAMWwD8vtSJv1hcPZTzclbzeE9ZkwODoLDChvT7EyXEQZw4kk8djrPBjdaDLpeWyqnEoG3M32Dhux0az5cidbyJqYdTVB5j157vGBNIP66ZrQsxXzm%2FDnmYrsup7kZjEESuIc5Y4zb%2B8q8NBybil0XH%2FlHCLX%2FAt%2BaGa9Fk52SvpRxYvUDcAmnfP3TzOucDclw7rHuQVRE73y0vGXnQ4OieiFc5pospGp9izUf6k0KhtwRtonzJ69OhdCk6nrshJc0%2FRHfId5XkjnbIMAGsAt3u%2FOMP%2BChdEGOqUBOAxij7YQjOsW%2B1DjoXQFPrC8JlSi21MNr3KZuv86StH1AT4a4g7dxxb6Mi3%2BOZHQihZSHrBORLFt1aXGpD7VEMVawDG1sYDOls%2BJBwGBJFNuyhqNuU7pNinz2m5Ra6Ezq1HMj9dBF15YLqr4ugJHmEgz2HYX4h96dCm46VOSnOz3v3bw658XiuzU8nLaDDNbRBZ3%2BYu2d%2BiPDZmdNsZ9xLZfDVph&X-Amz-Signature=c289a33084df1a4c4a529e3920c12ec70bf68e2f7668b94f185dbefca29488bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

