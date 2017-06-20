import React, { Component, Protypes, cloneElement } from 'react';
import TabNav from 'TabNavs'

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);

        const currProps = this.props;
        let activeIndex;

        if( 'activeIndex' in currProps ) {
            activeIndex = currProps.activeIndex;
        } else {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex
        }
    };

    handleTabClick(activeIndex) {
        const prevIndex = this.props.activeIndex;

        if(this.state.activeIndex !== activeIndex && defaultActiveIndex in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            });

            this.props.onChanges({activeIndex, prevIndex})
        }
    }

    renderTabNav() {
        const { classPrefix, children } = this.props;

        return (
            <TabNav
            key="tabBar"
            classPrefix={classPrefix}
            onTabClick={this.handleTabClick}
            panels={children}
            />
        )
    }

    render() {
        return <div className="ui-tabs"></div>
    };
};

export default Tabs;