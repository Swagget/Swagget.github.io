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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642M5VGMD%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T102622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDFl05Vf76ewyTIIp54RADXuOef25l1aov0NaigyhJc9wIgT9s5mAV6KBH75%2BI348x6MD1J1rAmD1bgLiEiC%2Fvide8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNb%2FVJO9UyJID9Gw2CrcA3n5O6XlhgGEGRey5tBSJ5b00qWg4FEu4uWJ3fZyugQ%2FH7IlULMrAchL%2FxKrTHBr5l2K0U55YDfIUHvBcsXsDKz0oDdYJn0giHyGvLQJiERNEWjYf7%2Bcu%2Bf5g4UvqK7uLfKG2Ohjo8%2FEO863wiBSPPembC3c3zmljoy660%2F7wcGHgMOK9E6u%2F5B9YfpqMVSxGGSNztaKCDP8ACKJHirHpntKQ0JPX57gtR66ry7BOtIeNMfY%2FpEPnJNBbo70dbx9NTxns9Bp5hKozuWLmqSdaoewdR4vM59zwlnfe3jc1dVLSYCTO7Td%2FDOswIfI15hFq8BwnJjekvpR5sGvL30ZVkYPOsTj6bfPfWG2LBokdtSEWFpyFfZBLmM6rmzLoz3%2BIc6ZrQVNaQ7CV9ZEys%2BrTb0TbKULMC%2FEoGpgJr0XIK%2FbRebsHd1UZypvriKHimo9%2BUopyofME7afdf7DGQ5KpPhQ1cY3rVqvOhTk6d5aBVSuD2628U0gG%2FsBxr%2FbAT%2FR%2F3JZDz6F1zlLUVKU4pddL1rxBTIWKiJxg06zB7Z7nF861XUU%2B1OX3P5doQB1gV6sawwQIPGjQcLfDCY%2BmrmqH2rzkoFXSMWUbOm6vVvsOo2CqypVN8BkfBsvzLttMKqql9MGOqUBg6l0LGcGzFkY9%2BUBT3nW4W81Ddcf5Ybur7TpFcPGHFQv1%2FCUXU7G4HypcBCHytFVdd5KlnYmwngj1RwtxmFvFKiJJSYwBzTDd1j9UU%2B6HFvkhH9Q%2BhpvB3eADYYUi3aKPQAd1sduFXws3r%2B481p%2BDFIuKVwcJSOoXzFY%2FaoFnLaQIN9mOlMBbVDxEZexsjYXEltq0bki9IodYNrvmWGzowLGlLVK&X-Amz-Signature=f785e0ba9048e8155c75124056af28bd120e36d5113116864f6fd55937aac7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

