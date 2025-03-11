import { Link } from "react-router";


const MailboxList = (props) => {
    return (
        <main>
          <h2>All Mailboxes</h2>
          {props.mailboxes.length > 0 ? (
            <div>
              {props.mailboxes.map((mailbox) => (
                <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
                  <p>{mailbox._id}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p>No mailboxes yet. Create a new one!</p>
          )}
        </main>
      );
    }
  
  export default MailboxList;