import { Button as DidButton } from '@arcblock/did-connect/lib';

function Connect({ onClick }) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <div className="flex items-center">
        <div>
          <h2 className="text-gray-600 font-bold">One-click Request DID Profile</h2>
        </div>
      </div>
      <DidButton onClick={onClick} />
    </div>
  );
}

export default Connect;
