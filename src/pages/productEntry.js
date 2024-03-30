import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Grid, MenuItem, Typography, FormControlLabel, Checkbox, Autocomplete, FormControl, InputLabel, Select } from '@mui/material';
import useRouteStore from '../store/routerStore'; // Import Zustand store for routing

function ProductEntryForm() {


    // useEffect(()=>{
        const setCurrentPage = useRouteStore((state) => state.setCurrentPage);
    // },[])
    
    const initialState = {
        productName: '',
        marketedBy: '',
        manufacturer: '',
        packSize: '',
        purchaseSize: '',
        mainCategory: '',
        subCategory: '',
        productType: '',
    }

    const initialStatee = {
        productGroup: '',
        saleTax: '',
        hsnCode: '',
        purchaseRate: '',
        mrp: '',
        rackShelf: '',
        reorderLevel: '',
        orderQuantity: '',
        drugContent: '',
    };

    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (event, value) => {
        const { name } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send formValues to a backend service
        console.log(formValues);
        alert('Form submitted. Check the console for form values.');
    };

    // Sample categories for autocomplete fields, these would be dynamic in a real-world app
    const mainCategories = ['SCHEDULE', 'NON-SCHEDULE'];
    const subCategories = ['SCHEDULE-H', 'SCHEDULE-C'];
    const productTypes = ['TYPE-A', 'TYPE-B'];

    function onClickExit() {
        console.log("abs")
        setCurrentPage("/main_window/DashBoard");

    }


    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                Product Entry Mode
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* First Column */}
                    <Grid item xs={12} md={6}>
                        {Object.keys(initialState).map((field) => (
                            <Grid item xs={12} key={field}>
                                {field === 'mainCategory' || field === 'subCategory' || field === 'productType' ? (
                                    <FormControl fullWidth>
                                        <InputLabel>{field.split(/(?=[A-Z])/).join(' ')}</InputLabel>
                                        <Select
                                            name={field}
                                            value={formValues[field]}
                                            onChange={(event) => handleChange(event, event.target.value)}
                                            label={field.split(/(?=[A-Z])/).join(' ')}
                                            required
                                        >
                                            {field === 'mainCategory' && mainCategories.map((category) => (
                                                <MenuItem key={category} value={category}>
                                                    {category}
                                                </MenuItem>
                                            ))}
                                            {field === 'subCategory' && subCategories.map((subcategory) => (
                                                <MenuItem key={subcategory} value={subcategory}>
                                                    {subcategory}
                                                </MenuItem>
                                            ))}
                                            {field === 'productType' && productTypes.map((type) => (
                                                <MenuItem key={type} value={type}>
                                                    {type}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                ) : (
                                    <Autocomplete
                                        fullWidth
                                        options={[]}
                                        getOptionLabel={(option) => option} // Replace [] with your actual options array
                                        renderInput={(params) => <TextField {...params} label={field.split(/(?=[A-Z])/).join(' ')} variant="outlined" />}
                                        name={field}
                                        value={formValues[field]}
                                        onChange={(event, value) => handleChange(event, value)}
                                        required
                                    />
                                )}
                            </Grid>
                        ))}
                    </Grid>

                    {/* Second Column */}
                    <Grid item xs={12} md={6}>
                        {Object.keys(initialStatee).map((field) => (
                            <Grid item xs={12} key={field}>
                                {field === 'mainCategory' || field === 'subCategory' || field === 'productType' ? (
                                    <FormControl fullWidth>
                                        <InputLabel>{field.split(/(?=[A-Z])/).join(' ')}</InputLabel>
                                        <Select
                                            name={field}
                                            value={formValues[field]}
                                            onChange={(event) => handleChange(event, event.target.value)}
                                            label={field.split(/(?=[A-Z])/).join(' ')}
                                            required
                                        >
                                            {field === 'mainCategory' && mainCategories.map((category) => (
                                                <MenuItem key={category} value={category}>
                                                    {category}
                                                </MenuItem>
                                            ))}
                                            {field === 'subCategory' && subCategories.map((subcategory) => (
                                                <MenuItem key={subcategory} value={subcategory}>
                                                    {subcategory}
                                                </MenuItem>
                                            ))}
                                            {field === 'productType' && productTypes.map((type) => (
                                                <MenuItem key={type} value={type}>
                                                    {type}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                ) : (
                                    <Autocomplete
                                        fullWidth
                                        options={[]}
                                        getOptionLabel={(option) => option} // Replace [] with your actual options array
                                        renderInput={(params) => <TextField {...params} label={field.split(/(?=[A-Z])/).join(' ')} variant="outlined" />}
                                        name={field}
                                        value={formValues[field]}
                                        onChange={(event, value) => handleChange(event, value)}
                                        required
                                    />
                                )}
                            </Grid>
                        ))}
                    </Grid>
                    {/* ...rest of your form fields organized in the two-column layout */}

                    {/* Function Keys */}
                    <Grid item xs={12}>
                        {/* Place your function keys here */}
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                        <Button variant="contained" color="secondary" style={{ marginLeft: 8 }} onClick={() => setFormValues(initialState)}>
                            Clear
                        </Button>
                        <Button variant="outlined" color="primary" style={{ marginLeft: 8 }} onClick={onClickExit}>
                            Exit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default ProductEntryForm;
