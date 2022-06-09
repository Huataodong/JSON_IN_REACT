import './App.css';

import { Button, Card, CardContent, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import getQuotes from './getQuotes';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function handleClick() {
    getQuotes().then((data) => {

      console.log(data.data[0]);
      setQuote(data.data[0].first_name)
      setAuthor(data.data[0].last_name)
    })
  }

  return (
    <div className="app" >
      <Typography variant="h2">Random quote generator</Typography>
      <Card className="card">
        <CardContent>
          <Typography variant="h5">{quote}</Typography>
          <Typography className="margin-top" color="textSecondary">{author}</Typography>
          <hr />
          <Button className="margin-top" color="primary" variant="outlined" onClick={() => handleClick()}>Click for quotes</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
