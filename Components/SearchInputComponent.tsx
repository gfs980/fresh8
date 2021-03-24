import React from "react";

interface SearchInputComponentInt {
    searchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => Promise<boolean>
    searchValue: string
}

const SearchInputComponent:React.FC<SearchInputComponentInt> = ({searchInputHandler, searchValue}) => {
    return (
        <div className="cover">
            <input onChange={searchInputHandler} value={searchValue} placeholder="Search by name"/>
            <style jsx>{`
                input, button {
                    color: #fff;
                    font-family: Nunito;
                    padding: 0;
                    margin: 0;
                    border: 0;
                    background-color: transparent;
                    height: 3rem;
                    width: 100%;
                    font-size: 2rem;
                }
                
                input[type="text"]::placeholder {
                    color: #e16868;
                }
                
                .cover {
                    padding: 35px;
                    background-color: #ff7575;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
                    transform: scale(0.6);
                }
            `}</style>
        </div>
    );
};

export default SearchInputComponent;
