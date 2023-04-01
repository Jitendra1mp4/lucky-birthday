import PropTypes from 'prop-types' 

function Main(props) {
    return (
        <main>
            <div className="container">
                <h1 id="heading">
                    Welcome to {props.appName}
                </h1>
                <div className="textBox" id='textBox'>

                </div>
            </div>
        </main>
    ) ;
}


export default Main ;