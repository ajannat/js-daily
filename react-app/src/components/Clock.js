import React from 'react';

class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.ticking(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    ticking() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { locale } = this.props;
        const { date } = this.state;
        return (
            <h1 className="heading">
                <span className="text">Hello {date.toLocaleTimeString({ locale })}</span>
            </h1>
        );
    }
}

export default Clock;
