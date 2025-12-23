import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  console.log(query);

  const posts = [
    {
      createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.map((post: StartupCardType) => (
            <StartupCard key={posts?.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
