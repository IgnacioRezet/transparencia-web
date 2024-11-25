import ProgressBar from 'react-bootstrap/ProgressBar';

interface ProgressBarInput{
    now: number;
}
const ProgressBarComponent = (props: ProgressBarInput) => {
 
  return <ProgressBar now={props.now} label={`${props.now}%`} />;
}

export default ProgressBarComponent;