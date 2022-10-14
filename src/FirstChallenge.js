import { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

export default function FirstChallenge({ onAttemptSuccess }) {
  const [answer, setAnswer] = useState('');
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  const validAnswers = [
    '42',
    'zweiundvierzig',
    'fourtytwo',
    'zwei und vierzig'
  ];

  const isAnswerCorrect = (answ) => {
    const cleanedAnswer = answ.trim().toLowerCase();

    return validAnswers.includes(cleanedAnswer);
  };

  const handleSubmit = (e) => {
    if (isAnswerCorrect(answer)) {
      console.log('Well done.');
      setIsWrongAnswer(false);
      setAnswer('');
      onAttemptSuccess();
    } else {
      console.log('Try again.');
      setIsWrongAnswer(true);
      setAnswer('');
    }

    e.preventDefault();
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <QuestionMarkCircleIcon className="mx-auto h-12 w-auto" />
          <h3 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
            What is the answer to life, the world, to everything?
          </h3>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="the-answer" className="sr-only">
                The answer
              </label>
              <input
                id="the-answer"
                name="the-answer"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="The answer!"
                value={`${answer}`}
                onChange={(event) => setAnswer(event.target.value)}
              />
              <p className="text-red-700 font-light" hidden={!isWrongAnswer}>
                That's not it, chief. Try again.
              </p>
            </div>
          </div>

          <div>
            <input
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              value="Give it a go!"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
