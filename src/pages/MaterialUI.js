import React from 'react';
import '../assets/styles/MaterialUI.css';
import { Button, ButtonGroup, Checkbox, 
    FormControlLabel, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const teste = <div>ae</div>;

function MaterialUI() {
    return (
        <div className="MaterialUI">
            <CheckboxExample />
            <ButtonGroup variant='contained'
                color='primary'>
                <Button
                    startIcon={<SaveIcon />}
                    onClick={() => alert('hello')}>
                    Save
                </Button>
                <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => alert('discard')}>
                    Discard
                </Button>
            </ButtonGroup>
            <teste />
        </div>
    );
}

export default MaterialUI;

function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
    return (
        <div>
            <p>test</p>
            <FormControlLabel
            control={<Checkbox
                icon={<SaveIcon />}
                checkedIcon={<DeleteIcon />}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                color='primary'
                inputProps={{
                    'aria-label': 'secondary checkbox'
                }}
            />}
            label='Testing Checkbox'
            />
        </div>
    );
}