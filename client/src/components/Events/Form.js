import React from 'react'
import Select from 'react-select'
import {connect } from 'react-redux'
import _ from 'lodash'
import { Badge,Button,Col, Form, FormGroup,Card, Label, Input, FormText } from 'reactstrap';
import { startSetCategory } from '../../redux/actions/category';



class EventForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:'',
            description:'',
            categories:this.props.categories,
            selectedcategories:[],
            maxTicket:'',
            image:'',
            startdate:'',
            enddate:'',
            seatCount:'',
            tktPrice:'',
            city:'',
            address:'',
            isloading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCategoriesChange = this.handleCategoriesChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    componentDidMount(){
        if(_.isEmpty(this.props.categories)){
            this.props.dispatch(startSetCategory())
            this.setState({isloading:true})
        }
        
    }
    handleCategoriesChange(selection) {
        const selectedcategories = selection

        this.setState(() => ({ selectedcategories }))
    }
    handleChange(e) {
        e.persist()
        this.setState ({ [e.target.name]: e.target.value })
    }
    handleReset(e){
        this.setState(()=>({
            name:'',
            description:'',
            selectedcategories:[],
            maxTicket:'',
            image:'',
            startdate:'',
            enddate:'',
            seatCount:'',
            tktPrice:'',
            city:'',
            address:'',
            isloading: false
        }))
    }
    handleSubmit(e) {
        e.preventDefault()
        var multipleSection = []
        for (let i = 0; i < this.state.selectedcategories.length; i++) {
            multipleSection.push(this.state.selectedcategories[i].value)
            console.log(multipleSection)
        }
        const formData = {
            name:this.state.name,
            description:this.state.description,
            selectedcategories:multipleSection,
            maxTicket:this.state.maxTicket,
            startdate:this.state.startdate,
            enddate:this.state.enddate,
            seatCount:this.state.seatCount,
            tktPrice:this.state.tktPrice
        }
        console.log(formData)

        // this.props.handleSubmit(formData)
    }


    render(){
        return(
            
            <div  >
            <Col sm="12" md={{ size: 6, offset: 3 }} >
            {!this.state.isloading?(<p>Loading</p>)
                :
                (
                <div>
            <Card style={{paddingBottom:"15px", border:'none', backgroundColor:'#f5f5f5'}}>
            <p><Badge color="secondary">Add New Event</Badge>  </p>
                <Form>
                <FormGroup>
                    <Label for="namefield">Name</Label>
                        <Input type="text"
                         placeholder="Name"
                         value = {this.state.name}
                         onChange={this.handleChange}
                         name="name"
                         id="namefield"
                         />
                  </FormGroup>
                    
                    <FormGroup>
                    <Label for="desfield">Description</Label>
                        <Input type="text"
                         placeholder="Description"
                         value = {this.state.description}
                         onChange={this.handleChange}
                         name="description"
                         id="desfield"
                         />
                    </FormGroup>
                    
                    <FormGroup>
                    <Label for="maxtktfield">Maximum tickets allowed</Label>
                        <Input type="text"
                         placeholder="Maximum tickets allowed"
                         value = {this.state.maxTicket}
                         onChange={this.handleChange}
                         name="maxTicket"
                         id="maxtktfield"
                         />
                    </FormGroup>
                    
                    <FormGroup>

                    <Label for="startdateField">startdate</Label>
                        <Input type="date"
                         placeholder="Start Date"
                         value = {this.state.startdate}
                         onChange={this.handleChange}
                         name="startdate"
                         id="startdateField"
                         />
                    </FormGroup>
                    <FormGroup>
                    <Label for="enddateField">Enddate</Label>
                        <Input type="date"
                         placeholder="End Date"
                         value = {this.state.enddate}
                         onChange={this.handleChange}
                         name="enddate"
                         id="enddateField"
                         />
                    </FormGroup>

                    <FormGroup>
                    <Label for="totseatField">Total seats</Label>
                        <Input type="text"
                         placeholder="Total Seats"
                         value = {this.state.seatCount}
                         onChange={this.handleChange}
                         name="seatCount"
                         id="totseatField"
                         />
                     </FormGroup>
                     
                     <FormGroup>
                     <Label for="categoriesField">categories</Label>
                        <Select value={this.state.selectedcategories} onChange={this.handleCategoriesChange}
                        closeMenuOnSelect={false}
                        isMulti
                        options={this.state.categories.map(category => {
                            return { value: category._id, label: category.name }
                        })}
                        id="categoriesField"
                    />
                    </FormGroup>
                     
                    <FormGroup>
                    <Label for="priceField">tickets price</Label>
                        <Input type="text"
                         placeholder="Ticket Price"
                         value = {this.state.tktPrice}
                         onChange={this.handleChange}
                         name="tktPrice"
                         id="priceField"
                         />
                    </FormGroup>
                    <FormGroup>
                    <Button onSubmit={this.handleSubmit} >Confirm</Button>
                    
                    <Button onClick={this.handleReset}>Reset</Button>
                    </FormGroup>
                    </Form>
            </Card>
            </div>    
            )}
          </Col>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}

export default connect(mapStateToProps)(EventForm)