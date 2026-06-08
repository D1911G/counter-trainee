type ButtonPropsType = {
  title: string;
  callBack?: () => void;
  disabled?: boolean;
};

export default function Button(props: ButtonPropsType) {
  const handler = () => {
    props.callBack?.();
  };

  return (
    <button onClick={handler} disabled={props.disabled}>
      {props.title}
    </button>
  );
}
