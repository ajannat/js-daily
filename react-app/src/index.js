import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
class Clock extends React.PureComponent {
    render() {
        const { locale } = this.props;
        return (
            <h1 className="heading">
                <span className="text">
                    Hello {new Date().toLocaleTimeString({ locale })} {locale}
                </span>
            </h1>
        );
    }
}

ReactDOM.render(<Clock locale="bn-bd" />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
