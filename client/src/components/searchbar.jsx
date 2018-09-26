import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'
import { CLIENT_RENEG_LIMIT } from 'tls';


const { API_KEY } = process.env
const API_URL = "https://itunes.apple.com/search?term= + search"





class searchBar extends Component {
    state = {
        results: [],
    }
    render() {
        
        return (
            <form>
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
        this.handleInputChange()
    }

    getInfo = () => {
        axios.get(`${API_URL}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results // returns an object named data, 
                    // as does axios. So... data.data                             
                })
            })
    }

    
    
    handleInputChange = () => {
        this.setState({
            query: this.searchBar.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }
}

export default searchBar


