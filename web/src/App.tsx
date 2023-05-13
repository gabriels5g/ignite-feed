import s from "./App.module.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";
import { Post } from "./components/Post";

const post = [
  {
    id: 1,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/102326117?v=4",
      name: "Gabriel Silva",
      role: "Student",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "link", content: "gabrieldev.design" },
    ],
    publishedAt: new Date("2023-05-12 01:59:00"),
  },

  {
    id: 2,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/89154785?v=4",
      name: "Karol Rezende",
      role: "Student",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "link", content: "karoldev.design" },
    ],
    publishedAt: new Date("2023-05-11 02:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <SideBar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
