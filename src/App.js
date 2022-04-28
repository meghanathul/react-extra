import React from 'react'
import Detail from './Day3/Detail';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            name: '',
            age: '',
            salary: '',
            arr: []
        }
    }

    toggleClick = () => {
        this.setState({ click: !this.state.click })
    };

    eventTrigger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm(event) {
        // event.preventDefault();
        const det_obj = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
        };
        this.state.arr.push(det_obj);

        this.setState({
            click: true,
            name: "",
            age: "",
            salary: "",
        });
    }

    render() {
        return (
            <div>
                {!this.state.click &&
                    <>

                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id="name" value={this.state.name} onChange={this.eventTrigger} required /><br /><br />

                            <label htmlFor="age">Age</label>
                            <input type="text" name='age' id='age' value={this.state.age} onChange={this.eventTrigger} required /><br /><br />

                            <label htmlFor="salary">Salary:</label>
                            <input type="text" name="salary" id="salary" value={this.state.salary} onChange={this.eventTrigger} required /><br /><br />

                            <input className='sub_btn' type="submit" onClick={() => this.submitForm()} />
                        </form>
                    </>
                }
                {(this.state.click) && <Detail detail={this.state.arr} funcTogg={this.toggleClick} />}
            </div>
        )
    }
}

export default App
