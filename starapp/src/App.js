import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm.js";
import { Checkbox } from "./Checkbox.js";
import { useEffect } from "react";
import { WordCount } from "./WordCount.js";
import { NewsFeed } from "./NewsFeed.js"
import User from "./User.js";
import { useState } from "react";
import { memo } from "react";
import SearchForm from "./SearchForm.js";
import { faker } from '@faker-js/faker';
import { FixedSizeList } from "react-window";
import GithubUser from "./GithubUser.js";
import {query, client} from "./GraphQLTest.js"
import UserDetails from "./UserDetails.js";

const bigList = [...Array(5000)].map(() => ({
    person: faker.person.firstName("female"),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
}));

const testArray = ["Vasya", "Petya", "Masha", "Ivan", "Sharik"]



console.log(typeof bigList)

const Cat = memo(({ name, meow = f => f }) => {
    console.log(`rendering ${name}`);
    return <p onClick={() => meow(name)}>{name}</p>;
});

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);
const PureCat = memo(
    Cat,
    (prevProps, nextProps) => prevProps.name === nextProps.name
);
export default function App() {
    const [login, setLogin] = useState("SuperDimaROZOVII");
    const [repo, setRepo] = useState("learning-react");
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex" }, ...{ border: "1px black dashed" } }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} — {bigList[index].email}
            </p>
        </div>
    );

    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

    const [userData, setUserData] = useState();
    useEffect(() => {
        client
            .request(query, { login })
            .then(({ user }) => user)
            .then(setUserData)
            .catch(console.error);
    }, [client, query, login]);
    if (!userData) return <p>loading...</p>;
    console.log(userData)
    return (
        <div>
            <Checkbox />
            <AddColorForm />
            <ColorList />
            <WordCount>You are not a a a a a going to believe this a a a a but...</WordCount>
            {/* <NewsFeed/> */}
            <User />


            {cats.map((name, i) => <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)} />)}
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add a Cat
            </button>
            <SearchForm
                value={login}
                onSearch={testArray}
            />
            <br />

            <FixedSizeList
                height={window.innerHeight - 500}
                width={window.innerWidth - 1400}
                itemCount={bigList.length}
                itemSize={50}
                style={{ border: "5px black solid" }}
            >
                {renderRow}
            </FixedSizeList>
            <GithubUser login='MoonTahoe' />
            {/* SuperDimaROZOVII */}

            {/* <SearchForm value={login} onSearch={setLogin} /> */}
            <UserDetails data={userData} />
            <p>{userData.repositories.totalCount} — repos</p>
            {/* <List
                data={userData.repositories.nodes}
                renderItem={repo => <span>{repo.name}</span>}
            /> */}
        </div>
    );
}

