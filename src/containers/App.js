import React, { Component } from 'react';
import axios from "axios";
import ImageCardList from '../components/ImageCardList';
import './App.css';
import SingleImageCard from "../components/SingleImageCard";

class App extends Component {
    constructor() {
        super()
        this.state = {
            posts:[],
            id: 3,
            length:0,
            activeYes:[],
            activeNo:[],
            filteredArray:[]
        }
    }

    componentDidMount() {
        axios
            .get('./data.json')
            .then(res => {
                this.setState({ posts: res.data.rows });
                this.setState({length:res.data.rows.length})
            })
            .then(res =>{
                this.setState({activeYes: this.state.posts.filter(image => {
                    return image.active.includes('yes');})
                });
                this.setState({activeNo: this.state.posts.filter(image => {
                    return image.active.includes('no');})
                });
                this.setState({filteredArray: this.state.activeYes.concat(this.state.activeNo)
                })
            })
            .catch(err=>{
                alert("Error in Fetching Data");
            })
    }

    inc = () => {
        const {id, length} =this.state
        if(id===length-1)
        {
            this.setState({id:3})
        }
        else{
            this.setState({id: id + 1})
        }
    };

    dec = () => {
        this.setState((state) => ({
            id: state.id - 1
        }));
    };

    render() {
        const { id, filteredArray } = this.state;
        return(

            <div className='tc'>
                <h1 className='f2 pt4 pb0 '>The PS GALLERY</h1>

                { id <=3 && id>=0
                    ?
                    <div>
                        <ImageCardList posts={filteredArray} />
                        <div className='pa5'>
                            <button onClick={this.inc} className="w-15 grow f2 link ph3 pv2 dib black bg-light-gray">
                                Other Images
                            </button>
                        </div>
                    </div>

                    :(

                        <div>
                            <SingleImageCard posts={filteredArray} id={id}/>
                            <div className='pa3'>

                                <button onClick={this.dec} className="w-15  grow f3 link ph3 pv2 dib black bg-light-gray">
                                    Previous Image
                                </button>

                                <div className='pa3'>
                                    <button onClick={this.inc} className="w-15  grow f3 link ph3 pv2 dib black bg-light-gray">
                                        Next Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;