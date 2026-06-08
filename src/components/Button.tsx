type ButtonPropsType = {
  title: string;
  callBack?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button(props: ButtonPropsType) {
  const handler = () => {
    props.callBack?.();
  };

  return (
    <button
      onClick={handler}
      disabled={props.disabled}
      className={`btn ${props.className || ""}`}
    >
      {props.title}
    </button>
  );
}
