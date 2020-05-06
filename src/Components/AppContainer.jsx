import React, {Component} from 'react';
import HeaderAndDarkModeToggle from './HeaderAndDarkModeToggle'
import FollowerCountColumns from "./FollowerCountColumns";
import '../Css/DarkMode.css'
import '../Css/AppContainer.css'
import OverviewComponents from "./OverviewComponents";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {darkMode: true};

    }


    toggleDarkMode = () => {
        {
            this.state.darkMode === true ? (
                this.setState({
                    darkMode: false
                })

            ) : (
                this.setState({
                    darkMode: true
                })

            )
        }
    }


    render() {
        return (
            <div className={'appContainer'}>
                <HeaderAndDarkModeToggle
                    toggleDarkMode={this.toggleDarkMode}
                    darkMode={this.state.darkMode}
                />
                <FollowerCountColumns
                    darkMode={this.state.darkMode}

                />
                <OverviewComponents
                    darkMode={this.state.darkMode}


                />
            </div>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;
