// import Router from 'next/router';
import Link from 'next/link';

const UsersList = ({ users }) => {
  return (
    <div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={user.id}
            // onClick={() => Router.push(`/users/[id]`, `/users/${user.id}`)}
          >
            <div>
              <h4>{user.title}</h4>
              <p>{user.body}</p>
              <Link href={`/users/[id]`} as={`/users/${user.id}`}>
                <a>
                  <button className="btn btn-primary">View more</button>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
