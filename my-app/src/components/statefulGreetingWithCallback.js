import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, PrevProps) => {
            console.log("Previous State: ", prevState);
            console.log("Previous Props: ", PrevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "GoodBye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    increment() {
        this.setState((prevState, PrevProps) => {
            console.log("previous State: ", prevState);
            console.log("Previous Props: ", PrevProps);
            return {
                count: prevState.count + 1,
            }
        });
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.increment()}>
                    Increment
                </button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

export default StatefulGreetingWithCallback;