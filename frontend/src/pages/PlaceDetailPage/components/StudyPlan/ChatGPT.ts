import axios from 'axios'

export const fetchPlacePlan = async (
  title: string,
  overview: string,
  age: number,
) => {
  const prompt = `대한민국의 장소인 ${title}에 대한 설명은 다음과 같습니다. ${overview} 해당 ${title}에 대한 교외체험학습계획을 역사적 관점에서 ${age}살에게 적합한 난이도와 내용으로 작성해 주세요. 활동 내용에 대해서만 '- ~~ 하기' 이 형식으로 3~5개 정도로 작성해주세요! 시작과 끝에 더하는 말들은 다 생략하고 '- ~하기' 형태만 제시해주세요!`

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 1000,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    },
  )

  return response.data.choices[0].message.content
}
