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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DSO7UP7%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T092149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Mfor1RIKxmGbI%2FtXh4dl6T%2Bq9ebjLtC9uMhKyV1zdQIgWp3uTyIyTNpgQ7sHs0odVcJMUU%2BMi%2Ft0b3oKtWEOCsEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBjn63NjpWWUiieGSircA4z7P2JN1ydWNB7NpMQh3TGwXc2MBWvtpQQRPdwIrjiR7Ttv%2Fu4lE6IzQW14o7Kge8c%2B4zSw4w9yve4msoC1S5ragC7k0tKqt%2Bmp%2BwNGCAOTKk0NvMvTuhqOTOrheq7upm6ufFo8Ph5JYHVenvTIbe8mtJqd9366X4BRZ7TWpYyShgImQhSx4becwQvJhxE4or3CxnTCscLb2MthqXxQ1MNLVkX9KW6ShKDYja6DK%2BqmcROivGS41g4UJRT8ZcuGaSiSeC2HB71GF1DHH6s918LIqdbB4EBwqCulpHubEAg83bj5TdN3%2FPf7Du3r7t5looSWQm7GT3Dv9IWeTB1r%2B0DNFYZKyKVYtkpEf85TkQ12hWi3J5Y%2Fm8Ie000KjmNUYhyuBkC5zLmIANU3oTQI0PMePZoIvR6Jw%2FI8SgHO1nDVZBcRGx1Z2sXRVWPbAGAGVd0f5P6lg4PMscCddk9rzVROozQ7aO%2FjCzZS%2FgIoulB1EAM6%2F9gwfjRMhI%2Fv%2B%2FEN8WwR6OzdAkbuNOC03V0kk%2FpjTM3BSdjSOtcuJGt9bTkoUYQKLuo0VK7Ufxasgy23AkuivPCHy48naL90%2FNdoNoEpdS8f6iZ2MgSegGXgTFUp%2BXum%2B6b1z54R6NjfMMm2nNMGOqUBxlJlFkHp6h6mgTf4qpctJ1F8WbuvkDTEVH2jupq4twJnWOdF5nLHs1BdgTgMMHU%2B%2BW9JiIi5o3bJnRuq4iNX%2BQWFF85Bj8V9d4YV%2B8GgsawiIMmpH5UNeYqg5RB4Pr6QyE8Yu4mz2gC5L%2F2ZNVkPAYi5byZCFjiK2nPtAzmTo07MtOh6UUWuYemeXhq1X8oGbZtTdSdjj0iNAmfWUDpbHRfaeETs&X-Amz-Signature=4b135385edafc8e467e17879cfb15b4ded6a5476800ab4834d9787db346ac82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

