import React from "react";
import {UserInterface} from "../data/types/UserTypes";

interface UserDetailsComponentsInt {
    user: UserInterface
}

const UserDetailsComponents:React.FC<UserDetailsComponentsInt> = ({user}) => {
    return (
        <div className="userDetails">
            <div>
                <span>Name: </span>
                {user.name}
            </div>
            <div>
                <span>Email: </span>
                {user.email}
            </div>
            <div>
                <span>Location: </span>
                {user.location}
            </div>
            <style jsx>{`
                .userDetails {
                  margin: 2rem;
                  background-color: #e7ffe7;
                }
                span {
                    font-weight: bold;
                }
        
              `}</style>
        </div>
    );
};

export default UserDetailsComponents;
