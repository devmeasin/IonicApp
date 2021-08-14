import { IonButton, IonItem, IonText } from '@ionic/react';
import './style.css';


const GirdDesign = ({data}) => {


    return (

        <IonItem>
            <IonText>
               <p><strong>ID: </strong>{data.repository.id || ''}</p>
               <p><strong>Name: </strong>{data.repository.name || ''}</p>
               <p><strong>FullName: </strong>{data.repository.full_name || ''}</p>
               <p><strong>Description: </strong>{data.repository.description || ''}</p>
               
                <IonButton color="dark" routerLink = {`/releases/${data.repository.name}`}>
                      <strong>Releases</strong>
                </IonButton>
            </IonText>
        </IonItem>
    )
}

export default GirdDesign;