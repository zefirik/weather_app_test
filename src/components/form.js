import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.dataForm}>
                <input type="text" name="city" placeholder="Choose city" />
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;