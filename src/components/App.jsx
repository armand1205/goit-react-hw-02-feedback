import Counter from "./Counter";

export const App = () => {
  return (
    <div
      style={{
        height: '50vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <p>Please leave feedback</p>
      <Counter></Counter>
    </div>
  );
};
