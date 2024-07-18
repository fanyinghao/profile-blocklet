import { useEffect, useState } from 'react';
import { useSessionContext } from '../libs/session';

import Profile from '../components/profile';
import EditableProfile from '../components/edit';
import './home.css';

function Home() {
  const [user, setUser] = useState({
    avatar: 'https://via.placeholder.com/150',
    name: '',
    email: '',
    phone: '',
  });
  const [openEdit, setOpenEdit] = useState(false);
  const { api, connectApi } = useSessionContext();

  useEffect(() => {
    api.get(`/api/user?did=${'1234'}`).then((res) => {
      setUser(res.data);
    });
  }, [api]);

  const requestProfile = () => {
    const action = 'request-profile';
    connectApi.open({
      action,
    });
  };

  const handleSubmit = (ret) => {
    setUser({ ...user, ...ret });
    setOpenEdit(false);
    api.post('/api/profile', { ...user, ...ret, did: '1234' }).catch((e) => {
      logger.error('err', e);
    });
  };

  return (
    <>
      {!openEdit && (
        <Profile user={{ avatar: 'https://via.placeholder.com/150', ...user }} onClick={() => setOpenEdit(true)} />
      )}
      {openEdit && (
        <EditableProfile
          user={{ avatar: 'https://via.placeholder.com/150', ...user }}
          onSubmit={handleSubmit}
          onConnect={requestProfile}
        />
      )}
    </>
  );
}

export default Home;
