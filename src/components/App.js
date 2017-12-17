import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import styles from './App.css';
import sassStyles from './App.scss';

class App extends React.Component {
    render(){

        return (
 	      <div className={styles.container}>
                <Header/>
		<div>
		   <div className={sassStyles.box}>BOX</div>
		   <div className={styles.hello}>
			Hello
		   </div>
		   <Content/>
		
		</div>
	      </div>
        );
    }
}

export default App;
