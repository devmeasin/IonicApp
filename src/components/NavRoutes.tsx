import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Releases from '../pages/Releases';


const Router: React.FC = () => {

    return (
        <IonReactRouter>

            <IonRouterOutlet>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/releases/:name" component={Releases}/>
                 

            </IonRouterOutlet>

        </IonReactRouter>
    )

}

export default Router;