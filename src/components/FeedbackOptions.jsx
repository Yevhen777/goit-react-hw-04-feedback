import style from './Options.module.css';

export const FeedbackOptions = ({ state, handleBtn }) => (
  <div>
    {Object.keys(state).map(el => (
      <button className={style.btn} key={el} onClick={() => handleBtn(el)}>
        {el}
      </button>
    ))}
  </div>
);
