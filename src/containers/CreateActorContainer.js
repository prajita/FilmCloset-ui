import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class CreateActorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            sex: "",
            isProducer: false,
            dob: "",
            role: ""
        }
        this.disableSubmit = this.disableSubmit.bind(this);
        this.subnitCreateActor = this.subnitCreateActor.bind(this);
    }
    setGender(temp) {
        this.setState({ sex: temp });
    }
    updateName(temp) {
        this.setState({ name: temp })
    }
    updateDob(temp) {
        this.setState({ dob: temp })
    }
    updateRole(temp) {
        this.setState({ role: temp })
    }
    disableSubmit() {
        let toReturn = (this.state.name && this.state.sex && this.state.isProducer && this.state.role && this.state.dob) ? false : true;
        return toReturn;
    }
    subnitCreateActor() {
        let obj = {
            name: this.state.name,
            sex: this.state.sex,
            isProducer: this.state.isProducer,
            dob: this.state.dob,
            role: this.state.role
        }
        this.props.createActorRequest(obj);
    }

    render() {

        let p = [{ key: "Male", value: "Male", text: "Male" },
        { key: "Female", value: "Female", text: "Female" }]
        return (
            <div>
                <h2>Add new movie</h2>
                <Form onSubmit={this.submitForm} id="form1" style={{ width: "600px" }} >
                    <div className="row">
                        <div className="col-3">
                            <label >Name</label>
                        </div>
                        <div className="col-9">
                            <input type="text" id="title" placeholder="enter name.."
                                onChange={(e) => this.updateName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label >date of birth</label>
                        </div>
                        <div className="col-9">
                            <input type="text" id="title" placeholder="enter date of birth.."
                                onChange={(e) => this.updateDob(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label >Role</label>
                        </div>
                        <div className="col-9">
                            <input type="text" id="title" placeholder="enter role in movie.."
                                onChange={(e) => this.updateRole(e.target.value)} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <label >Gender</label>
                        </div>
                        <div className="col-9">
                            <select onClick={e => this.setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-4" >
                            <button className='btn buttonSearch borderBlack' disabled={this.disableSubmit()}
                                onClick={() => this.subnitCreateActor()}
                                type="submit"> Create Actor</button>
                        </div>
                        <div className="col-8">
                        </div>
                    </div>

                </Form>
            </div>
        )
    }
}