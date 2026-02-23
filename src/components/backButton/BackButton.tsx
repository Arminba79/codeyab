import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <Link to="/"><ArrowBackIosNewIcon /></Link>
    )
}

export default BackButton