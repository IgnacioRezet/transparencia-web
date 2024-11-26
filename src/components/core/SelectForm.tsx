import Form from 'react-bootstrap/Form';

interface SelectFormInput {
  data: { value: string; text: string }[];
}

const SelectForm = (props: SelectFormInput) => {
  return (
    <div className='row py-5'>
        <div className='col-md-6 col-lg-6 col-xs-6 col-sm-6'>
            <Form.Select aria-label="Default select example" >
                {props.data.map((val, index) => (
                    <option key={index} value={val.value}>
                    {val.text}
                    </option>
                ))}
            </Form.Select>
        </div>
    </div>
         
   
  );
};

export default SelectForm;
