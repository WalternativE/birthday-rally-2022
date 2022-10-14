import './App.scss';

import { useState } from 'react';

import BirthdayRallyMap from './BirthdayRallyMap';
import FirstChallenge from './FirstChallenge';

function App() {
  const [isFirstChallengeMet, setIsFirstChallengeMet] = useState(false);

  return (
    <div className='main-container h-full w-full bg-gray-50'>
      {isFirstChallengeMet
        ? <BirthdayRallyMap />
        : <FirstChallenge onAttemptSuccess={() => setIsFirstChallengeMet(true)} />
      }
    </div>
  );
}

export default App;
