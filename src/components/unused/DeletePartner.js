import React, {useState} from "react";
import PartnersSection from "./PartnersSection";


 export class DeletePartner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: false,
        };
    }

    toggleButton = () => {
        this.setState({ showButton: !this.state.showButton });
    };

    render() {
        const { showButton } = this.state;
        return (
            <div>
                <button onClick={() => this.toggleButton()}>Click me</button>
                {showButton ? <PartnersSection /> : null}
            </div>
        );
    }
}