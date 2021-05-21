//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);

        console.log("DishDetailComponent component constructor is invoked");
    }

    renderDish(dish) {
        if(dish!= null) {
            return(
                <Card>
                    <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                </Card>
            );
        } else {
            return (
                <div> </div>
            );
        }
    }



    renderComment(dish) {
        renderCommen(dish){
            const comment = this.props.dishes.comments.map((comments) => {
                return(<h7>
                    {comments.comment}
                </h7>)
            });
            return comment;
        }
        if(dish!= null) {
            return(
                    <CardBody>
                            <CardTitle> {"Comments"} </CardTitle>
                            <CardText> 
                                <h7>
                                    {renderCommen(dish)}
                                    {/* Imagine all the eatables, living in conFusion! <br></br>
                                    <br></br>
                                    -- John Lemon , Oct 17, 2012 <br></br>
                                    Sends everyone to heaven, I wish my mother-in-law could eat it!<br></br>
                                    <br></br>
                                    -- Paul McVites, Sep 06, 2014<br></br>
                                    <br></br>
                                    Eat it, just eat it!<br></br>
                                    <br></br>
                                    -- Michael Jalkishan, Feb 14, 2015 <br></br>
                                    <br></br>
                                    Ultimate, Reaching for the stars!<br></br>
                                    <br></br>
                                    -- Ringo Starry, Dec 03, 2013<br></br>
                                    <br></br>
                                    It's your birthday, we're gonna party!<br></br>
                                    <br></br>
                                    -- 25 Cent, Dec 03, 2011 */}
                                    
                                </h7>
                            </CardText>
                    </CardBody>
            );
        } else {
            return (
                <div> </div>
            );
        }
    }

    render(){

        console.log("DishDetailComponent component render is invoked");

        return (
            <div className = "row">
            <div className = "col-12 col-md-5 ">
                {this.renderDish(this.props.selectedDish)}
                </div>
            
            <div className = "col-12 col-md-5 ">
                {this.renderComment(this.props.selectedDish)}
            </div>
            </div>
        );
    }

}

export default DishDetail;