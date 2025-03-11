import { useState } from "react";
import { useNavigate } from "react-router";

const letterInitialState = {
    mailboxId: 0,
    recipient: '',
    message: ''
}


const LetterForm = (props) => {
    const [formData, setFormData] = useState(letterInitialState);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const letterData = {...formData, mailboxId: Number(formData.mailboxId)};
        props.addLetter(letterData);
        navigate(`/mailboxes/${letterData.mailboxId}`)
    };



    return (
        <main>
            <h2>Send New Letter</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Select Mailbox:
            <select
              name="mailboxId"
              value={formData.mailboxId}
              onChange={handleChange}
              required
            >
              {props.mailboxes.map((mailbox) => (
                <option key={mailbox._id} value={mailbox._id}>
                  Box #{mailbox._id} - {mailbox.boxOwner}
                </option>
              ))}
            </select>
          </label>
          <label>
            Recipient Name:
            <input
              type="text"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Letter</button>
        </form>
        </main>
    )
}

export default LetterForm