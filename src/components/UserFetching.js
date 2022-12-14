import React, {useState, useEffect} from "react";
import axios from "axios";

function UserFetching() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/track-api/users/")
        .then(res => {setUsers(res.data);
        })
        .catch(err => {console.log(err);
        }
    ) }, []);

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
      );
    }

export default UserFetching;