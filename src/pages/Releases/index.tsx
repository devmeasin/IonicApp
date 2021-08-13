import { IonButton, IonContent, IonList, IonPage, IonSpinner, IonText } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ReleaseDesign from '../../components/ReleaseDesign';
import NavBar from '../../components/ToolBar';
import './style.css';

const baseUrl = 'https://api.github.com/repos/mozilla/'

const Releases : React.FC = () => {

    const { name }:any = useParams();
    let history = useHistory();

    let [item, setItem] = useState([]);
    let [loader, setLoader] = useState(true);


    useEffect(() => {
        
        fetch(`${baseUrl}${name}/releases`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setLoader(false);
            })

    } , []);

    return (
        <IonPage>
             <NavBar title="Releases Page"/>
             <IonContent className="ion-padding">

                    {/* Show Git Release Info */}
                    <IonContent>
                        {/*-- Crescent --*/}
                        {
                            loader ? 
                            (
                               <div className = "spinnerCenter">
                                   <IonSpinner name="crescent" />
                               </div>
                            ) : 
                            (
                                <>  
                                <IonButton 
                                  className = 'back-btn'
                                  size="small"
                                  onClick={() => history.goBack()}
                                 >
                                     Back
                                </IonButton>
                                <IonText>
                                           <h4><strong>Repository Name: {name}</strong></h4>
                                </IonText>

                                <IonList>
                                   {
                                       item.length !== 0 ?
                                       item.map((data, ind) => <ReleaseDesign data = {data} key={ind}/>)
                                       :
                                       <IonText>
                                           <h4><strong>Data Not Found! 😥!</strong></h4>
                                       </IonText>  
                                   }
                                </IonList>

                                </>
                            )
                        }
                        
                    </IonContent>
                    
             </IonContent>  
        </IonPage>
    )   
}


export default Releases;