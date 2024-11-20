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









const bigList = [...Array(5000)].map(() => ({
    person: faker.person.firstName("female"),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
}));

const testArray = ["Vasya", "Petya", "Masha", "Ivan", "Sharik"]



console.log(typeof bigList)
// const tahoe_peaks = [
//     { name: "Freel Peak", elevation: 10891 },
//     { name: "Monument Peak", elevation: 10067 },
//     { name: "Pyramid Peak", elevation: 9983 },
//     { name: "Mt. Tallac", elevation: 9735 }
// ];



const Cat = memo(({ name, meow = f => f }) => {
    console.log(`rendering ${name}`);
    return <p onClick={() => meow(name)}>{name}</p>;
});

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);
//const PureCat = memo(Cat);
const PureCat = memo(
    Cat,
    (prevProps, nextProps) => prevProps.name === nextProps.name
);
export default function App() {
    const [login, setLogin] = useState("moonhighway");
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
                // array={bigList}
                value={login}
                onSearch={testArray}
            />
            {/* <RepositoryReadme login={login} repo={"SuperDimaROZOVII.github.io"}/> */}
            <br />

            {/* <List
                renderEmpty={<p>This list is empty</p>}
                data={tahoe_peaks}
                renderItem={item => (
                    <>
                        {item.name} — {item.elevation.toLocaleString()}ft
                    </>
                )}
            /> */}


            {/* <List data={bigList} renderItem={renderItem} /> */}

            <FixedSizeList
                height={window.innerHeight - 500}
                width={window.innerWidth - 1400}
                itemCount={bigList.length}
                itemSize={50}
                style={{ border: "5px black solid" }}
            >
                {renderRow}
            </FixedSizeList>
            <GithubUser login='SuperDimaROZOVII'/>
        </div>
    );
}

