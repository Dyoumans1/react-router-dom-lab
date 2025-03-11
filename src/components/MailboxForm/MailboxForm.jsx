import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';


const initialState = {
    boxOwner: '',
    boxSize: 'Small'
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };
    
    return (
        <>
          <h2>Create New Mailbox</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Box Owner:
              <input
                type="text"
                name="boxOwner"
                value={formData.boxOwner}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Box Size:
              <select
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
                required
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </label>
            <button type="submit">Create Mailbox</button>
          </form>
        </>
      );
    }
  
  export default MailboxForm;