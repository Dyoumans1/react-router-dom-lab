
import { useState } from "react";
import { Route, Routes } from 'react-router';
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from "./components/LetterForm/LetterForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([])

  const addBox = (formData) => {
    const newMailbox = { ...formData, _id: mailboxes.length + 1 }

    setMailboxes([...mailboxes, newMailbox]);

  };
    
  const addLetter = (formData) => {
    setLetters([...letters, formData]);
  };

  return ( 
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/new-letter" element={<LetterForm addLetter= {addLetter} mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
}

export default App;
