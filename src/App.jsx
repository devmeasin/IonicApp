/* Core CSS required for Ionic components to work properly */
import { IonApp } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import NavRouter from './components/NavRoutes';
/* Theme variables */
import './theme/variables.css';

// this line add only clear terminal and console
console.clear();

const App = () => {
    return (
      <IonApp>
          <NavRouter/>
      </IonApp>
    )
};

export default App;
