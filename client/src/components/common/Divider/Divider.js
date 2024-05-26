import "./Divider.css";

const Divider = ({ className, ...props }) => {
  return <div className={` ${className} custom-div`} {...props}></div>;
};

export default Divider;
