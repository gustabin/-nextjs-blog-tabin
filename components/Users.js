/* eslint-disable @next/next/no-img-element */
import Router from 'next/router';
import Image from 'next/image';

const Users = ({ users }) => {
  //   console.log(users);
  return (
    <div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={user.id.value}
            onClick={() =>
              Router.push(`/users/[id]`, `/users/${user.id.value}`)
            }
          >
            <div>
              <h4>
                {user.name.first} {user.name.last} - {user.nat}
              </h4>

              <p>Email: {user.email}</p>
              <p></p>
              <p>
                {user.location.street.name} {user.location.street.number}
                {user.location.city} {user.location.state}{' '}
                {user.location.country} {user.location.postcode}
              </p>

              <p>📱{user.phone}</p>
            </div>
            <img
              src={user.picture.large}
              alt={user.name.first + ' ' + user.name.last}
              style={{ borderRadius: '50%' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
