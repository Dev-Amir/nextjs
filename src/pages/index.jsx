import {
  Container,
  CircularProgress,
  Card,
  CardContent,
} from '@material-ui/core';
import { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <ListView />
      )}
    </Container>
  );
};

const ListView = ({ users }) => {
  return (
    <div>
      {users.map((user, key) => (
        <Card
          key={key}
          style={{ marginBottom: 25 }}
        >
          <CardContent>
            <ul>
              <li>id: {user.id}</li>
              <li>name: {user.name}</li>
              <li>email: {user.email}</li>
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

ListView.getInitialProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const usersData = await response.json();

  return {
    users: usersData,
  };
};

export default App;
