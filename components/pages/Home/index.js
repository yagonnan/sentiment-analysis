import { useState } from 'react';
import DefaultLayout from "layouts/Default";
import { Box, Image } from "@chakra-ui/core";
import FormikComponent from 'layouts/FormikComponent'
import clientConfig from 'configs/envs'

function Home() {
  const [analysis, setAnalysis] = useState('https://img.icons8.com/officel/80/000000/neutral-emoticon.png');

  const handleChangeHandler = (e) => {
    e.preventDefault();
    const reviewInput  = e.target.value.trim();
    if (!reviewInput) {
      return false;
    }

    // call nlp api
    fetch(`${process.env.nextBaseUrl}/api/v1/nlp/s-analyzer`, {
      method: 'POST',
      body: JSON.stringify({ review: reviewInput }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then (({ analysis }) => {
      if (analysis < 0) {
        setAnalysis("https://img.icons8.com/emoji/96/000000/angry-face.png");
      };
      if (analysis === 0) {
        setAnalysis("https://img.icons8.com/officel/80/000000/neutral-emoticon.png");
      }
      if (analysis > 0) {
        setAnalysis("https://img.icons8.com/color/96/000000/happy.png");
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <DefaultLayout>
      <Box maxW="sm" d="flex" rounded="lg" overflow="hidden">
        <Box justifyContent="center" p="6" maxW="sm">
          <FormikComponent 
            handleChange={handleChangeHandler} 
            title={'Please review product'}
          /> 
          <Box size="sm">
            <Image src={analysis} alt="Emotion Not Detected" />
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default Home;
