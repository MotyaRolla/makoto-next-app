import Head from "next/head";
import client from "../contentful";
import MainText from "../components/MainText/MainText";
import TimerLine from "../components/TimerLine/TimerLine";
import About from "../components/About/About";
import Guide from "../components/Guide/Guide";
import Donate from "../components/Donate/Donate";

export default function Home({
  home,
  serverData,
  guide,
  articles,
  eternalPlus,
}) {
  return (
    <>
      <Head>
        <title>{home ? home.fields.title : "Makoto"}</title>
      </Head>
      <div className="container">
        <MainText pageData={home} serverData={serverData} />
      </div>
      <TimerLine />
      <About articles={articles} />
      <Guide
        guideTitleEmoji={home.fields.guideEmoji}
        guideTitleText={home.fields.guideTitle}
        guideSteps={guide}
      />
      <Donate eternalPlus={eternalPlus} />
    </>
  );
}

export const getServerSideProps = async () => {
  const home = await client.getEntries({
    content_type: "homePage",
    limit: 1,
  });

  const articles = await client.getEntries({
    content_type: "aboutArticle",
  });

  const guide = await client.getEntries({
    content_type: "guide",
  });

  const eternalPlus = await client.getEntries({
    content_type: "eternalPlus",
  });
  const data = await fetch(
    "https://eu.mc-api.net/v3/server/ping/mars.minecraft.rent:25572"
  );
  const dataJson = await data.json();

  const [homePage] = home.items;
  return {
    props: {
      home: homePage,
      articles: articles.items,
      guide: guide.items,
      serverData: dataJson,
      eternalPlus: eternalPlus.items,
    },
  };
};
