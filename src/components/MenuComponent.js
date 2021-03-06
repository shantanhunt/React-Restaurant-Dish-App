import React, { Component } from 'react';
import {Card, CardImg, CarText, CardImgOverlay, CardBody, CardText, CardTitle} from "reactstrap";
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }



    render(){

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className = "col-12 col-md-5 mt-5">
                    <Card onClick = {() => {this.onDishSelect(dish)}}>
                        
                        <CardImg width="100%" src = {dish.image} alt = {dish.name} />
                        <CardImgOverlay className = "ml-5">
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className = "container">
                <div className = "row">
                    {menu}
                </div>
                <br></br>
                    <DishDetail selectedDish = {this.state.selectedDish} />
                    {/* this.renderDish(this.props.selectedDish) */}
            </div>
        );
    }
}

export default Menu;