const Box = ({text, value}) => {
  return (
    <>
      <div className="box-main">
        <div className="box-body">
                  <div className="text">{text}</div>
                  <div className="number">{value}</div>
        </div>
      </div>
    </>
  );
};

export default Box;
