const express = require('express');
const aposToLexForm = require('apos-to-lex-form');
const natural = require('natural');
const SpellCorrector = require('spelling-corrector');
const SW = require('stopword');

const router = express.Router();

const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

router.post('/s-analyzer', function(req, res, next) {
  const { review } = req.body;
  /* NORMALIZATION */

  const alphaOnlyReview = dataPreProcessing(review);
  const tokenizedReview = tokenization(alphaOnlyReview);
  const filteredReview = filterNoise(tokenizedReview);

  // sentiment review by using natural SentimentAnalyzer
  const { SentimentAnalyzer, PorterStemmer } = natural;
  const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');

  const analysis = analyzer.getSentiment(filteredReview);

  res.status(200).json({ analysis });
});

const dataPreProcessing = (review) => {
  // negation handling
  // convert apostrophe=connecting words to lex form
  const lexedReview = aposToLexForm(review);

  // casing
  const casedReview = lexedReview.toLowerCase();

  // removing
  return casedReview.replace(/[^a-zA-Z\s]+/g, '');
}

const tokenization = (alphaOnlyReview) => {
  // tokenize review
  const { WordTokenizer } = natural;
  const tokenizer = new WordTokenizer();

  return tokenizer.tokenize(alphaOnlyReview);
}

const filterNoise = (tokenizedReview) => {
  // spell correction
  tokenizedReview.forEach((word, index) => {
    tokenizedReview[index] = spellCorrector.correct(word);
  })

  // remove stopwords
  return SW.removeStopwords(tokenizedReview);
}

module.exports = router;
