import React from "react";
import {useRouter} from "next/router";
import {UserInterface} from "../data/types/UserTypes";
import Axios, {AxiosResponse} from "axios";
import UserDetailsComponent from "./UserDetailsComponent";
import SearchInputComponent from './SearchInputComponent';

const IndexPageComponent:React.FC = () => {
    const router = useRouter();
    const nameSearchParam: string = router.query.name ? router.query.name.toString() : '';
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [usersData, setUsersData] = React.useState<UserInterface[]>([]);

    const getUsersData = async (): Promise<void> => {
        const usersReq:AxiosResponse<UserInterface[]> = await Axios.get('/api/users');
        setUsersData(usersReq.data);
    };

    const searchUserByKey = async (searchKey): Promise<void> => {
        const usersReq:AxiosResponse<UserInterface[]> = await Axios.get('/api/users', {params: { name: searchKey }});
        setUsersData(usersReq.data);
    };

    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>):Promise<boolean> => {
        const {value} = event.target;
        setSearchQuery(value);
        return router.push({pathname: '/',query: { name: value }});
    };

    React.useEffect(() => {
        if(!searchQuery) {
            nameSearchParam ? searchUserByKey(nameSearchParam) : getUsersData();
        }
        const timer = searchQuery && setTimeout(() => searchUserByKey(searchQuery), 500);
        return () => {
            clearTimeout(timer);
        };
    }, [nameSearchParam]);

    return (
        <div className="container">
            <main>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <SearchInputComponent searchInputHandler={searchInputHandler} searchValue={searchQuery||nameSearchParam} />
                <div>
                    <h3>Results: {usersData.length}</h3>
                </div>
                <div className="userDetails__list">
                    {usersData.map(user => <UserDetailsComponent key={`${user.name}_${user.email}`} user={user} />)}
                </div>
            </main>

            <style jsx>{`
                .container {
                  min-height: 100vh;
                  padding: 0 0.5rem;
                }
                
                .userDetails__list {
                    display: grid;
                    grid-template-columns: repeat( auto-fit, minmax(20rem, 1fr) );
                }
            
            `}</style>

            <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                
                * {
                  box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

export default IndexPageComponent;
