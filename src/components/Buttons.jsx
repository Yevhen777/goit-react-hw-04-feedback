export const Buttons = ({ state, handleBtn }) => (
  <>
    {Object.keys(state).map(el => (
      <button key={el} onClick={() => handleBtn(el)}>
        {el}
      </button>
    ))}
  </>
);
