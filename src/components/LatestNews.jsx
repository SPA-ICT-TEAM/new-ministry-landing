import Heading from "./Heading"

const LatestNewsDummy = [
    {
        id: 1,
        title: "title",
        description: "description"
    },
    {
        id: 2,
        title: "title",
        description: "description"
    }
]

const LatestNews = () => {
  return (
    <div className="container relative z-2 text-black bg-red-500">
       <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Recent News"
        />

        <section>
        {LatestNewsDummy.map((news, index) =>{
            <section key={index} className="">
                <p>{news.title}</p>
                <p>{news.description}</p>
            </section>
        })}
        </section>
    </div>
  )
}

export default LatestNews
