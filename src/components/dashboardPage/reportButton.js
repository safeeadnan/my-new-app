import * as React from 'react';
import Button from '@mui/material/Button';
import AssessmentIcon from '@mui/icons-material/Assessment'; // Importing the Assessment icon
import useRouteStore from '../../store/routerStore';

export default function ReportMenu() {
    const setCurrentPage = useRouteStore((state) => state.setCurrentPage);
    const handleClick = () => {
        setCurrentPage('/main_window/Reports');
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={'demo-customized-menu'}
                aria-haspopup="true"
                aria-expanded={'true' }
                variant="contained"
                disableElevation
                onClick={handleClick}
                startIcon={<AssessmentIcon />} // Adding the Assessment icon
            >
                Report
            </Button>
        </div>
    );
}
