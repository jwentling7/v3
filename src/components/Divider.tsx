type DividerProps = { vertical?: boolean };

const Divider = ({ vertical = false }: DividerProps) => {
  const orientation = vertical ? "h-auto" : "w-auto";

  return <hr className={`${orientation} border`} />;
};

export default Divider;
