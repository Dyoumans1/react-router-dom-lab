import { useParams, Link } from "react-router";

const MailboxDetails= (props) => {

    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
    );

    return (
        <main>
        {selectedBox ? (
          <>
            <h2>Mailbox Details</h2>
            <p><strong>Box Number:</strong> {selectedBox._id}</p>
            <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Size:</strong> {selectedBox.boxSize}</p>

            <h3>Letters</h3>

            {selectedLetters.map((letter, index) => (
                <div key={index}>
                <p><strong>To:</strong> {letter.recipient}</p>
                <p><strong>Message:</strong> {letter.message}</p>
                </div>
            ))
            }
            <Link to="/mailboxes">Back to All Mailboxes</Link>
          </>
        ) : (
          <>
            <h2>Mailbox Not Found!</h2>
            <Link to="/mailboxes">Back to All Mailboxes</Link>
          </>
        )}
      </main>
    );
  }
  
  export default MailboxDetails;