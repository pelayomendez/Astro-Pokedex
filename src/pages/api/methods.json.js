
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GOOGLE_API_KEY } from 'astro:env/server';

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export const GET = async ({ params, request }) => {
  const prompt = "Give me just one made up pokemon, following the json schema of PokeAPI.";
  const result = await model.generateContent(prompt);
  const resultJSON = await result.response.text();
  const responseJSON = JSON.parse(resultJSON);

  return new Response(JSON.stringify(responseJSON), {
    headers: { 'Content-Type': 'application/json' },
  });
}

/*
export const GET = ({ params, request }) => {
    return new Response(JSON.stringify({
        message: "This was a GET!"
      })
    )
  }
    */