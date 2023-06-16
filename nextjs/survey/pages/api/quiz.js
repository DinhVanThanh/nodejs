// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    currentStep: 1,
    tests : [
    {
        step : 1,
        active: true,
        options :
            {
                question : 'how old are you ?',
                answer: [
                    {
                        text : '12'
                    },
                    {
                        text : '23'
                    },
                    {
                        text : '56'
                    }
                ]
            }
    },
    {
        step : 2,
        active: false,
        options :
            {
                question : 'what your name ?',
                answer: [
                    {
                        text : 'Matt'
                    },
                    {
                        text : 'Lisa'
                    },
                    {
                        text : 'Josh'
                    }
                ]
            }
    }
]})
}
