import { useState } from 'react';
import Connect from './connect';

function EditableProfile(props) {
  const { user } = props;
  const { onSubmit } = props;
  const { onConnect } = props;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = () => {
    if (onSubmit) onSubmit({ name, email, phone });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <div className="flex items-center mb-6">
        <img className="h-24 w-24 rounded-full" src={user.avatar} alt="User avatar" />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="button"
        onClick={handleSave}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center">
        Save Profile
      </button>
      <div className="mt-6 mb-2">Or</div>
      <Connect onClick={onConnect} />
    </div>
  );
}

export default EditableProfile;
