---
title: "Sentence Embedding Search"
collection: projects
category: nlp
permalink: /projects/sentence-embedding-search
excerpt: 'Replaced keyword-based search in the Dell support system with embedding-based semantic search, deployed to dell.support.com.'
date: 2023-10-06
techstack: 'Python, TensorFlow, Universal Sentence Encoder, NLP'
---

Wanted a way to search across the Dell support system to guide customers directly to the relevant support articles. The problem was that the sentence search wasn't context aware and was keyword based.

The solution was to switch the approach to an embedding based approach. Used TensorFlow's Multilingual Universal Sentence Encoder Q&A Retrieval to generate embeddings out of questions that users ask and each sentence in the database.

This was then used to calculate the dot product between the question sentences and the sentences from the knowledge base.

This approach took too much time since there were too many sentences to compare on, so filters were created based on the language preference and the product type.

This solution was deployed to the customer support pipeline on dell.support.com.
