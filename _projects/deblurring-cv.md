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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5FI5LH%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T072005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVu7gUNkg12j1kZiz71yj2s5GW67X3SW1OoOrGhCF8AIhAOP7aGRIt%2F7bO5vxzgeCjyF52PHTW24s9YTmD7aLSOvrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysEkgjl0K32WgHZRUq3ANcLzK0QDPpxLI1tWdOh4bquMBoRc%2Fr2HozvEnEYJ57OGvwzCRLJR0kDuVfbe1a1%2BJnSXa5UO9tME%2Bsk5ypLttxIfSAMaslQpPS0oEpFJBF%2BzGvhpCF%2BN7iNGjfUWepGBv9it%2BXTn0%2F2b0K2C5WFuCakrZKyJp1lrgEw%2FNdA9dk%2FyJwx2andqKe6IfSrAQ9WL50T2%2B8IlULkVk2thsEYn3nJEDNeZ8cBWBTVFGDGzff2KMcD1vHKdxeQ%2FAqJEMrNfgowXYaI%2Bhpuygj9WX3RUQ03M31q%2B36wFeFNMMhtUsQGSMa4Nqi9HE545rZYZFjyrjhqDFRwG3ji9Ud47vmDJvgPFr5%2FDf9%2BMspkyHV881FH%2Byep0IvL8S7KlIUYFScUDnsYDWmIFH0v8SWeeKLLCi29ckJbKTpnNcjNYEIGpOGdi8d9A3tukT5UUgRkNNQthfvloWAv3DyKPBhhY0SNLAhECpFC3CJtt39DDj%2Bmv%2F9WOv50Icx0c7uqFITQM4jUbKSEuzInl2sBstC7%2Bfmby4AAMNtB9LiQdpLFqQradMepOX0udUmMj3nPHEWUaOPXxgNwAKhv2UDhAEnNkFSJgqY6CqMobDErGG3B6zXS1kcz15oqA71QY0VDFI6vzDctpnRBjqkAZhcKHNCpho9qBeWH6cujO9gA%2FAnALY%2F4YgWkY1kJEAkxZusMTM1jxl44wCOc8cgeiu%2B%2FrkzESnZMedRpDBh2bafsrC1ujyaDDV%2FWkpd7hZJsA%2BkktwRKnLXHlzr9NUyEbr4gngqpmL0ppOtEXZAwahelb9i4XHaDLYO%2FKCO0%2BJcb93%2F3jjpsm9SbWiA%2BApnMeJVuBYn7VNjqMWd4hlxQE64UONF&X-Amz-Signature=817da3b454fa37efe4cc71eb5a382b6635e724001cc5c05f3f244688cd68d891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

