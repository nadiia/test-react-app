import React, {useState} from 'react';
import {PhoneInput, COUNTRIES} from 'baseui/phone-input';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';
import MuiButton from '@material-ui/core/Button';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [country, setCountry] = useState(COUNTRIES.US);
  return (
    <div className="App">
      <Block margin={'50px'}>
        <PhoneInput
          text={text}
          country={country}
          onTextChange={event => {
            setText(event.currentTarget.value);
          }}
          onCountryChange={(event) => {
            setCountry(event.option);
          }}
        />
        <br />
        <Button kind={'secondary'}>Default</Button>
        <MuiButton variant="contained">Default</MuiButton>
      </Block>
    </div>
  );
}

export default App;
