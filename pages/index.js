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
  const data = '{"online":true,"status":true,"favicon_base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJNklEQVR4XuVbSYsUWRDun9A/QfCuPVc3+uR6cBz3iwhzEw+KIoIKpTAgonQfVHDB7qMKMi6oCGodXFBhbNxR1FRb293Wdl9j8nvZXxoZuXRmVWVPt/NB0F1V+eJFfC9exMuorKamOiAiLb4s9KXdlw5fqr54SnqlfkCH1y9dEszxty8VX373pcXaVSr8CVslcLgRzjUKngQLMMLa2zBI4HhVTTpUUZVGEuEra/alLTrHsABsbrb+FIKvYIQE4TVc4Umt0SBBghtK+7xWeFI0UWKA/BrOE/AlHwky/MM+DSBhhPU3AgkSnhcd90vBk6zEKMMz2xdFm/XbQYLQ/7+g1foPAqr2KuDHjx8R+fbtm3z//t0J3/uvkWZfho1V63xs9TkQSqD01atXcvnyZTlz5oz7++XLF/n69Ws4YcIkpYP20cZ79+7J6dOn5dKlS/L582dnX4aNrZqATv2JZhMOz58/X0aOHBmR8ePHy+7du+XTp0+OjJRJSgOdh4M7d+6UCRMmROxraWmRZcuWyZ07d0IySFY/2jUB3k/VgXI4tHfv3pjjVjZu3CgfPnxwk2DMYBBA5xGVSYujBQt18eJF+fjxY2ShfPTSeRx6IspxEULJKkuTgwcPOhIwwWBEAUN++fLlMVuSBNFw8+bNCAn9Nv4GAnBP7aDDyoZUlmCCN2/euAkYamWRQBs9z4vZkSVz5syRvr6+iI0+EQtBQEUrL7r6lPPnz8u7d+9cTlD7rOGgjadOnYrZMJA8ePDA2cjt6tvZDgLQXQmVg51NmzbFBmfJzJkz5cqVKyEBUF4WaOOzZ8/c/ra2ZMm+fftspHaG9Z+hBXaQ2OzgJJkxY4bs379fHj16JC9evHAhRgLK2gLc/3ACznR2dsq4ceNitiVJR0eHS5zv3793ucC3sQoC0GeLELBt27bYYC2jRo2SLVu2uBLT3d0tT548kd7eXhcBTIRlgVsARL99+1Zevnwpjx8/lnXr1sXstHL48GF3PcbBT99OLyyBVIwPbt26FRusnT969GjoPCbn6jO0oKusCABAMIhG5UEUPH/+3EVhW1tbzF4tqAQggHkgRgAjAAwha1oFEDiPDMyVR0jR+cE6C+jFQjiDBDgGe7Zv3x6zGbJ27Vrp6elx13ELkADX+CAB+AAXXLt2Lba3KpWKc/7hw4fy9OlTF/YgS58Gy3YeYIQh2hgJsAOLARJWrlwZsXvixIly//79cKuqM0svCAgBAqCUCQZn6sWLF8ukSZNk0aJFTglCDRn49evXYdbneXswnCdIgrYZ9sBBLM7kyZOd8ytWrJDr1687u7FVbKKOEKC3AaIAyjAIzGGvQ/AazuNzVU+1mkGFjlwmRtiNG7auri7nuLabx3baHCEAYGhBGRhFJCC0sHfwF6+182UnvLzIshuiI1ZHayIBDCs4idCCwxiMv0x2adme7+kQhej3BoIdy/Faj4W1m3mBom/YdMTGCACoDBcjtDAQgv91srOGcBxyBeoy7tT27NkTjkkbZwEdCGOUNehABse9vs41STr4PpMjbMaK03Y6r8cmEgBQGVdAD04ygNfCUHsjhaM1K4U1wIJz2Ts96NSlVq+iBW0h6dZ2jVQCikBPiBXXhkNwZkcY5rlbxGe4xuqAnDx5MpZ/0pC2UBYNIwAGwTC7+hQkpKQklKTn7t27sfGQ2bNnh0k4TzTlQcMIwKpl3aKiDPFODMZbw7laIOD27dux8ZRz586FJ880IougbgIY+ljZtNvT0aNHu7ME6zBXT4PbCETiWquDgihgNOl6XivqIoBGw6GsHgKOojiH81aUecCCuuAcukxWD2Xz5s0umtLILIKaCdArluU8ZMGCBY4AlLa0/avJBAFTp06N6dGydevW8FibRmge1EwAJsQJa968eTHjrKC/gOMoj9A8RFmQUFyzYcOGmB4rq1evDqvLQKUxDTURQEPRd7dGWRkzZoxcuHDB3aAwB6QlLyZTOHTjxo2YriRZs2ZN2OCA3qIoTABD1fPydWVxikPvQN+J2fDXYELFtatWrYrps4JcgdvztK01EAoTgAlgZFbJo2D1QRQbEXlaZjoP4EhtexJJcvXq1UgUFCUg95MgXH1MgpC2hmhB6wxfq3H1dTc2y0BuL7a7jh07FtOtBSUW/QnqL0iAa4h49t0scJ/CwLlz58YMovMwHCuI5GfrdpaBJBnXYgzG7tq1KzYHBQ0b5pc8BBt4NRGAEGWimjJlSsQg1HztPLuwLFd5jGMUYA7kAjRd8T3l2LFjI3OhvMKGOiKgNgJgHBMVjDty5Ij7hvbAgQPubhDfwCR1i5P2fpKxeA+OkGh2fpFLDh065BqfJ06cCBuzutVdsBJ0gYCqfTcLNI71GqEHR3XbDCvC7pH90tQK3tefcQ7Ow+YGiISjCHfMBcH/JBnX5I0whSoI6LTvDgQarjsvOOVR4Di7MGxEaIfxmgKj9WtNCP9nJOhWF+YB+brbM1B+ScB+EIAHnwuDKwTjsB0QDRQ2Lui8dujs2bNhtwi3ztOmTXOnSbTc7/q3wSTERgnngW7OA8d1o6UGAiogYKF9Ny/0isIILdpxSnt7eyyLW9mxY0dIgh6vIydrnoKYDgIiD0gUhTZQr4I2iJ8jQeIAtXTp0sjdHv5fv369S6L4Wg7Rw6Spddh5IHUieHpUChyGagENZ2nDvj1+/HhIAHr47Ntjn7NqcCuUBE8/I1RTHsgLHcL88gLOooEya9asMJvbb5tKdB7o0AS02k8bCYYvCEB4I4GhdKGOY1ugvPF7xqTKURJGhAT0k1C1VzQSehuwaoAElDVdNuttcKCaNDc3C1xKEnw2ffr0Lu27g5QcBYAmAZEAZ+E0hKXTJr8iWLJkSczhDKkEnitIybkA0PkAzrKc2fpfC/70V/cP3408MrepKXhO0BAwKI/L00mSoV/Xgzu+C0XE+u8gwXPDpZZFi3odJ6yDA4n1PYQM05/M9K1vlr6/mvJJJWELaEhAgmfmGNroqYhcbMon/zT9fFg6DTIcfz/UvUTkUnPc4Z/S6ztfsb6mQoLEWHp1KAGwOf33QUUhQTRUo3MMSVQl6ScxjYIERHTK0NoaSNhY8VZrb6mQIFHicfuKBA9dVyV49Nbrl0ZUEujwlFQl+KU4HF4oeX8QmYJ/AU3GY6EbGpeHAAAAAElFTkSuQmCC","favicon":"https://eu.mc-api.net/v3/server/favicon/mars.minecraft.rent:25572","source":"ping","took":235.177,"cache":{"status":"MISS","ttl":60,"insertion_time":"2024-05-05T16:42:12.259Z"},"version":{"protocol":-1,"name":"Velocity 1.7.2-1.20.4"},"players":{"online":-1,"max":100,"sample":[{"name":"EndurWood","id":"bc5c5c92-d2a0-47f3-b5d3-7d5de33e7128"},{"name":"MotyaRolla","id":"be5d6f0d-dbcc-4769-b2b0-c864fd0fd3e9"},{"name":"Eric_Pie","id":"500140a5-049b-4897-aaec-10ff38fd8033"},{"name":"MaxxShab","id":"00bdb19c-b6aa-4ae0-80f7-c2f9053cade2"}]},"description":{"extra":[{"color":"light_purple","text":"    Eternal "},{"color":"white","text":"- "},{"color":"gray","text":"1.20.x      Приятный "},{"color":"aqua","text":"ванильный"},{"text":"\n    "},{"color":"gray","text":"  Германия                  геймплей"}],"text":""},"fetch":"2024-05-05T16:42:12.259Z"}'
  //const data = await fetch(
  //  "https://eu.mc-api.net/v3/server/ping/mars.minecraft.rent:25572"
  //);
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
