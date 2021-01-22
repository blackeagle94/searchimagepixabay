import axios from 'axios'
import { MenuItem, SelectField, TextField } from 'material-ui'
import React, { Component } from 'react'


class Search extends Component {

    state ={
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '19985939-99995666083f586fd5dd05378',
        images: []
    }

    onTextChange = e => {
        this.setState({...this.state, [e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({...this.state, images: res.data.hits}))
            .catch(err => console.log(err))
        })
    }

    onAmountChange = (e, index, value) => this.setState({...this.state, amount: value})

    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} floatingLabelText="Search For Images" fullWidth={true}/>
                <br />
                <SelectField 
                name="amount"
                floatingLabelText="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                <MenuItem value={5} primaryText="5"/>
                <MenuItem value={10} primaryText="10"/>
                <MenuItem value={15} primaryText="15"/>
                <MenuItem value={30} primaryText="30"/>
                <MenuItem value={50} primaryText="50"/>
                </SelectField>
            </div>
        )
    }
}

export default Search