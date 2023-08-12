export const useCapitalizer = (msg: string) => {
  return msg.split(" ").map((e) => (
    <span key={e}>
      <mark className="first-letter">{e.charAt(0)}</mark>
      {e.slice(1)}&nbsp;
    </span>
  ));
};
