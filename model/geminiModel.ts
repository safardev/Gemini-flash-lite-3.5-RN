import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { Config } from 'react-native-config';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

//model
const model = new ChatGoogleGenerativeAI({
  model: 'gemini-3.5-flash-lite',
  apiKey: Config.GEMINI_KEY,
  temperature: 0.7,
  maxOutputTokens: 1024,
  topK: 5,
});

//prompt
const prompt = ChatPromptTemplate.fromMessages([
  [
    'system',
    `You are a helpful AI assistant.
Give clear, useful and well-structured answers.`,
  ],
  ['human', '{userInput}'],
]);

//chain
const chain = prompt.pipe(model).pipe(new StringOutputParser());

//run chain with user input
export const askGemini = async (userInput: String) => {
  try {
    const result = await chain.invoke({
      userInput,
    });

    return result;
  } catch (error) {
    console.error('Gemini error:', error);
    throw error;
  }
};
