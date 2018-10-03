import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'
import { CLIENT_RENEG_LIMIT, DEFAULT_ECDH_CURVE } from 'tls';


const { API_KEY } = process.env
const API_URL = "https://itunes.apple.com/search?term="
const DEFAULT_QUERY="50 cent"




class searchBar extends Component {
    state = {
        results: [],
    }
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                
                <input
                    placeholder="Search for..."
                    ref={input => this.searchBar = input}
                    onChange={this.handleInputChange}
                    
                />
                <Suggestions results={this.state.results} />
            </form>
        )
    }

    componentDidMount() {
        this.getInfo()
        
    }

    getInfo = () => {
       const  apiString=API_URL + (this.state.query || DEFAULT_QUERY)
        axios.get(apiString)
            .then(({ data }) => {
                this.setState({
                    results: data.results // returns an object named data, 
                    // as does axios. So... data.data                             
                })
            })
    }

    handleSubmit= (event)=>{
        event.preventDefault()
        this.getInfo()
    }
     
    
    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            query:event.target.value
        })
        // this.setState({
        //     query: this.searchBar.value
        // }, () => {
        //     if (this.state.query && this.state.query.length > 1) {
        //         if (this.state.query.length % 2 === 0) {
        //             this.getInfo()
        //         }
        //     } else if (!this.state.query) {
        //     }
        // })
    }
}

export default searchBar


