---
title: "Sentence Embedding Search"
collection: projects
category: data-science
permalink: /projects/sentence-embedding-search
excerpt: "Wanted a way to search across dell support system. To guide customers directly to the relevant support articles. The problem was that the sentence search wasn’t context aware and keyword based."
date: 2022-07-15
techstack: "Data Science, Natural Language Processing"
source: notion
---

Wanted a way to search across dell support system. To guide customers directly to the relevant support articles. The problem was that the sentence search wasn’t context aware and keyword based.


The solution was to switch the approach to an embedding based approach. Used Tensorflow’s [**Multilingual Universal Sentence Encoder Q&A Retrieval**](https://www.tensorflow.org/hub/tutorials/retrieval_with_tf_hub_universal_encoder_qa) to generate embeddings out of questions that users ask and each sentence in the database. 


This was then used to calculate the dot product between the question sentences and the sentences from the knowledge base.


This approach took too much time since there were too many sentences to compare on, so I created filters based on the language preference and the product type.


This solution was deployed to the customer support pipeline on [dell.support.com](http://dell.support.com/) 

