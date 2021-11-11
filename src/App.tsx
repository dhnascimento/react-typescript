import logo from './logo.svg';
import Message from './Message';
import './App.css';

const initialState = {
  name: 'Daniel',
  message: 'TypeScript is cool!'
}

type State = Readonly<typeof initialState>

function App():React.FC<State, initialState> {
  // let firstValue: string = 'Manny';
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 4];
  // let firstValue: Array<string> = ['true', '3', 'Manny'];

  //tuple
  let aTuple: [string, number] = ['Daniel', 5];
  // enum
  enum Codes {first = 1, second = 2};
  // any
  let firstName: any = 3;
  // void
  const warning = (): void => {
    console.log('Warning');
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name="Daniel" message='this is a simple message' />
      </header>
    </div>
  );
}

export default App;
