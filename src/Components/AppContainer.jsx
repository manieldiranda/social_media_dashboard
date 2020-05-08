import React, {Component} from 'react';
import HeaderAndDarkModeToggle from './HeaderAndDarkModeToggle'
import FollowerCountColumns from "./FollowerCountColumns";
import '../Css/AppContainer.css'
import OverviewComponents from "./OverviewComponents";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {theme: 'dark'};

    }


    toggleDarkMode = () => {
        {
            this.state.theme === 'light' ? (
                this.setState({
                    theme: 'dark'
                })

            ) : (
                this.setState({
                    theme: 'light'
                })

            )
        }
    }


    render() {
        return (
            <div className={' appContainer' + ` ${this.state.theme}`}>
                <HeaderAndDarkModeToggle
                    toggleDarkMode={this.toggleDarkMode}
                    theme={this.state.theme}
                />
                <FollowerCountColumns
                    theme={this.state.theme}

                />
                <OverviewComponents
                    theme={this.state.theme}


                />
            </div>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;
