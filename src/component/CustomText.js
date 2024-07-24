// component/CustomText.js
/*
 
Props is immutable
when some component receives some data, we take that data in a form of props.
 
Props is always an object
 
*/
const CustomText = (props) => {
    const {counterValue} = props;
    return (
      <p style={{
        backgroundColor: "green"
    }}>This is an {counterValue % 2 === 0 ? "even" : "odd"} number</p>
    )
  };
   
  export default CustomText;