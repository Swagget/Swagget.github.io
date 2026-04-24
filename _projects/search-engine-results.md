---
title: "Search Engine Results"
collection: projects
category: nlp
permalink: /projects/search-engine-results
excerpt: "Automated search engine rank tracking across Google, Bing, Chrome, Firefox, and IE with VPN-based country-specific result support."
date: 2023-10-06
techstack: 'Python, Selenium, Chrome, Firefox, Internet Explorer'
---

This program searches different search engines (Google and Bing) using different browsers (Chrome, Firefox, Internet Explorer). It searches for phrases and counts the number of ".com" URLs that appear before the client's URL in the results.

Using a VPN, this could be used to show results for each country.

The program was built specifically without using any packages that could be updated or lose support after deployment. It uses pip to install required packages at startup in case it is running on a new system that doesn't have them.
