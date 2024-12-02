export const Main = () => {
  return (
    <>
      <main>
        <h1>Main</h1>
        <Name name="John Doe" />
        <Name name="Mike Oxlong" />
        <Name name="Ben Dover" />
      </main>
    </>
  );
};

function Name({ name }) {
  return <p>Welcome {name}</p>;
}
