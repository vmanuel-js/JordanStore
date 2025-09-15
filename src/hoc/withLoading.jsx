import GridLoader from "react-spinners/GridLoader";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (props.products.length < 1) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <GridLoader color="#0d6efd" size={15}></GridLoader>
        </div>
      );
    }
    return <Component {...props}></Component>;
  }
  return ComponentWithLoading;
};
