function Profile(props) {
  const { user, onClick } = props;
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center px-6 py-4">
        <img className="h-24 w-24 rounded-full" src={user?.avatar} alt="User avatar" />
        <div className="w-24 ml-4">
          <p className="text-xl leading-tight text-gray-800">{user?.name}</p>
          <p className="text-sm leading-tight text-gray-600">{user?.email}</p>
          <p className="text-sm leading-tight text-gray-600">{user?.phone}</p>
        </div>
      </div>
      <div className="flex items-center px-6 py-4">
        <button
          type="button"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          onClick={onClick}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
